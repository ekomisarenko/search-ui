import {ComponentOptions} from '../../src/ui/Base/ComponentOptions';
import {ComponentOptionsType} from '../../src/ui/Base/ComponentOptions';
import {Dom} from '../../src/utils/Dom';
import {TemplateCache} from '../../src/ui/Templates/TemplateCache';

export function ComponentOptionsTest() {
  describe('ComponentOptions', () => {

    describe('can build', () => {
      it('a boolean option', () => {
        let option = ComponentOptions.buildBooleanOption();
        expect((<any>option).type).toBe(ComponentOptionsType.BOOLEAN);
      });

      it('a number option', () => {
        let option = ComponentOptions.buildNumberOption();
        expect((<any>option).type).toBe(ComponentOptionsType.NUMBER);
      });

      it('a string option', () => {
        let option = ComponentOptions.buildStringOption();
        expect((<any>option).type).toBe(ComponentOptionsType.STRING);
      });

      it('an icon option', () => {
        let option = ComponentOptions.buildIconOption();
        expect((<any>option).type).toBe(ComponentOptionsType.ICON);
      });

      it('a helper option', () => {
        let option = ComponentOptions.buildHelperOption();
        expect((<any>option).type).toBe(ComponentOptionsType.HELPER);
      });

      it('a json option', () => {
        let option = ComponentOptions.buildJsonOption();
        expect((<any>option).type).toBe(ComponentOptionsType.JSON);
      });

      it('a localized string option', () => {
        let option = ComponentOptions.buildLocalizedStringOption();
        expect((<any>option).type).toBe(ComponentOptionsType.LOCALIZED_STRING);
      });

      it('a field option', () => {
        let option = ComponentOptions.buildFieldOption();
        expect((<any>option).type).toBe(ComponentOptionsType.FIELD);
      });

      it('a fields option', () => {
        let option = ComponentOptions.buildFieldsOption();
        expect((<any>option).type).toBe(ComponentOptionsType.FIELDS);
      });

      it('a list option', () => {
        let option = ComponentOptions.buildListOption();
        expect((<any>option).type).toBe(ComponentOptionsType.LIST);
      });

      it('a selector option', () => {
        let option = ComponentOptions.buildSelectorOption();
        expect((<any>option).type).toBe(ComponentOptionsType.SELECTOR);
      });

      it('a child html element option', () => {
        let option = ComponentOptions.buildChildHtmlElementOption();
        expect((<any>option).type).toBe(ComponentOptionsType.CHILD_HTML_ELEMENT);
      });

      it('a template option', () => {
        let option = ComponentOptions.buildTemplateOption();
        expect((<any>option).type).toBe(ComponentOptionsType.TEMPLATE);
      });

      it('a custom string option', () => {
        let option = ComponentOptions.buildCustomOption((value: string) => { return value; });
        expect((<any>option).type).toBe(ComponentOptionsType.STRING);
      });

      it('a custom string list option', () => {
        let option = ComponentOptions.buildCustomListOption((value: string[]) => { return value.join(', '); });
        expect((<any>option).type).toBe(ComponentOptionsType.LIST);
      });

      it('an object option', () => {
        let option = ComponentOptions.buildObjectOption();
        expect((<any>option).type).toBe(ComponentOptionsType.OBJECT);
      });

      it('an option', () => {
        let option = ComponentOptions.buildOption<boolean>(ComponentOptionsType.BOOLEAN, ComponentOptions.loadBooleanOption);
        expect((<any>option).type).toBe(ComponentOptionsType.BOOLEAN);
      });
    });

    describe('exposes method', () => {

      describe('attrNameFromName', () => {
        it('which returns the attribute name from the given name', () => {
          let name = ComponentOptions.attrNameFromName('fooBar');
          expect(name).toBe('data-foo-bar');
        });

        it('which returns the attribute name from the options', () => {
          let name = ComponentOptions.attrNameFromName('fooBar', { attrName: 'data-foo-brak' });
          expect(name).toBe('data-foo-brak');
        });
      });

      describe('camelCaseToHyphen', () => {
        it('which transforms an hyphen string corresponding to the given camel case string', () => {
          let name = ComponentOptions.camelCaseToHyphen('fooBar');
          expect(name).toBe('foo-bar');
        });
      });

      describe('mergeCamelCase', () => {
        it('which merges 2 camel case strings into one', () => {
          let name = ComponentOptions.mergeCamelCase('fooBar', 'johnDoe');
          expect(name).toBe('fooBarJohnDoe');
        });
      });
    });

    describe('exposes method', () => {
      let scrollElem: HTMLElement;
      let elem: HTMLElement;
      let childElem: HTMLElement;
      let childElem2: HTMLElement;
      let doc: Document;
      let testDiv: HTMLElement;
      let testTemplate: HTMLElement;
      beforeEach(() => {
        scrollElem = Dom.createElement('div', { id: 'scrollable', class: 'coveoScrollable' });
        scrollElem.style.overflowY = 'scroll';
        elem = Dom.createElement('div', {
          id: 'heidi',
          className: 'kloss',
          'data-my-attr': 'baz',
          'data-my-bool': 'true',
          'data-my-field': '@foobar',
          'data-my-fields': '@foobar,@foobrak',
          'data-my-localized': 'en: FiltersInYourPreferences',
          'data-my-number': '44',
          'data-my-float-number': '4.4',
          'data-my-list': 'foo&bar&brak',
          'data-my-test-enum': 'bar',
          'data-my-selector': '#CoveoSearchbox',
          'data-my-child-selector': '#CoveoSearchboxChild',
          'data-my-template-selector': '#CoveoTemplate',
          'data-my-template-id': 'CoveoTemplateId'
        });
        scrollElem.appendChild(elem);
        childElem = Dom.createElement('div', {
          id: 'CoveoSearchboxChild',
          className: 'childKloss coveo-child',
          type: 'text/html'
        });
        elem.appendChild(childElem);
        childElem2 = Dom.createElement('div', {
          id: 'CoveoSearchboxChild2',
          className: 'childKloss coveo-child',
          type: 'text/html'
        });
        elem.appendChild(childElem2);

        doc = document.implementation.createHTMLDocument('');
        testDiv = doc.createElement('div');
        testDiv.id = 'CoveoSearchbox';
        doc.body.insertAdjacentElement('beforeend', testDiv);
        testTemplate = doc.createElement('div');
        testTemplate.id = 'CoveoTemplate';
        testTemplate.setAttribute('type', 'text/html');
        testTemplate.setAttribute('data-condition', 'testcondition');
        doc.body.insertAdjacentElement('beforeend', testTemplate);
      });
      afterEach(() => {
        scrollElem = null;
        elem = null;
        childElem = null;
        childElem2 = null;
        doc = null;
        testDiv = null;
        testTemplate = null;
      });
      describe('initComponentOptions', () => {
        it('which initializes the options of a component', () => {
          let options = {
            myAttr: ComponentOptions.buildStringOption(),
            myBool: ComponentOptions.buildBooleanOption(),
            myLocalized: ComponentOptions.buildLocalizedStringOption()
          };
          let initOptions = ComponentOptions.initComponentOptions(elem, { options, ID: 'fooID' });
          expect(initOptions).toEqual({ myAttr: 'baz', myBool: true, myLocalized: 'Filters in your preferences' });
        });

        it('which initializes the options of a component with default values', () => {
          let options = {
            testString: ComponentOptions.buildStringOption({ defaultValue: 'fooBrak' }),
            testList: ComponentOptions.buildListOption({ defaultValue: ['fooBrak', 'fooBar'] }),
            testObject: ComponentOptions.buildObjectOption({ subOptions: {}, defaultValue: { john: 'doe' } })
          };
          let initOptions = ComponentOptions.initComponentOptions(elem, { options, ID: 'fooID' });
          expect(initOptions).toEqual({ testString: 'fooBrak', testList: ['fooBrak', 'fooBar'], testObject: { john: 'doe' } });
        });

        it('which initializes the options of a component with default function', () => {
          let options = {
            testString: ComponentOptions.buildStringOption({
              defaultFunction: (elem: HTMLElement) => {
                return 'fooBrak';
              }
            }),
            testList: ComponentOptions.buildListOption({
              defaultFunction: (elem: HTMLElement) => {
                return ['fooBrak', 'fooBar'];
              }
            }),
            testObject: ComponentOptions.buildObjectOption({
              subOptions: {}, defaultFunction: (elem: HTMLElement) => {
                return { john: 'doe' };
              }
            })
          };
          let initOptions = ComponentOptions.initComponentOptions(elem, { options, ID: 'fooID' });
          expect(initOptions).toEqual({ testString: 'fooBrak', testList: ['fooBrak', 'fooBar'], testObject: { john: 'doe' } });
        });

        it('which initializes a component\'s undefined required option', () => {
          let options = {
            testRequired: ComponentOptions.buildStringOption({
              required: true
            })
          };
          expect(() => { ComponentOptions.initComponentOptions(elem, { options, ID: 'fooID' }); }).not.toThrow();
        });

        it('which initializes the options of a component with postProcessing', () => {
          let options = {
            myAttr: ComponentOptions.buildStringOption({
              postProcessing: (value: string, options: any): string => {
                return value + ' foo';
              }
            })
          };
          let initOptions = ComponentOptions.initComponentOptions(elem, { options, ID: 'fooID' });
          expect(initOptions).toEqual({ myAttr: 'baz foo' });
        });

        it('which initializes the options of a component with attrName', () => {
          let options = {
            myAttr: ComponentOptions.buildStringOption({
              postProcessing: (value: string, options: any): string => {
                return value + ' foo';
              }
            })
          };
          let initOptions = ComponentOptions.initComponentOptions(elem, { options, ID: 'fooID' });
          expect(initOptions).toEqual({ myAttr: 'baz foo' });
        });

        it('which validates a component option with the specified validator', () => {
          let options = {
            testString: ComponentOptions.buildStringOption({
              defaultFunction: (elem: HTMLElement) => {
                return 'fooBrak';
              },
              validator: (value): boolean => {
                return value === 'fooBrak';
              }
            }),
            myAttr: ComponentOptions.buildStringOption({
              validator: (value): boolean => {
                return value === '';
              }
            }),
            testList: ComponentOptions.buildListOption({
              defaultValue: ['fooBrak', 'fooBar'],
              validator: (value): boolean => {
                return value[0] === 'fooBrak';
              }
            }),
            testParam: ComponentOptions.buildListOption({
              validator: (value): boolean => {
                return value[0] === 'fooBrak';
              }
            })
          };
          let initOptions = ComponentOptions.initComponentOptions(elem, { options, ID: 'fooID' }, { testParam: [] });
          expect(initOptions).toEqual({ testString: 'fooBrak', testList: ['fooBrak', 'fooBar'] });
        });

        it('which validates a required component option with the specified validator', () => {
          let options = {
            myAttr: ComponentOptions.buildStringOption({
              validator: (value): boolean => {
                return value === '';
              },
              required: true
            })
          };
          let initOptions = ComponentOptions.initComponentOptions(elem, { options, ID: 'fooID' });
          expect(initOptions.myAttr).toBeUndefined();
        });
      });

      describe('initOptions', () => {
        it('which initializes the options of a component', () => {
          let initOptions = ComponentOptions.initOptions(elem, {
            myAttr: ComponentOptions.buildStringOption(),
            myBool: ComponentOptions.buildBooleanOption()
          }, {}, 'fooID');
          expect(initOptions).toEqual({ myAttr: 'baz', myBool: true });
        });
      });

      describe('loadStringOption', () => {
        it('which loads a string option', () => {
          let option = ComponentOptions.loadStringOption(elem, 'myAttr', {});
          expect(option).toBe('baz');
        });
        it('which loads a string option from the IComponentOptions\'s option attrName', () => {
          let option = ComponentOptions.loadStringOption(elem, 'myAttr', { attrName: 'data-my-bool' });
          expect(option).toBe('true');
        });
        it('which loads a string option from the IComponentOptions\'s option alias', () => {
          let option = ComponentOptions.loadStringOption(elem, null, { alias: 'myAttr' });
          expect(option).toBe('baz');
        });
      });

      describe('loadFieldOption', () => {
        it('which loads a field option', () => {
          let option = ComponentOptions.loadFieldOption(elem, 'myField', {});
          expect(option).toBe('@foobar');
        });
      });

      describe('loadFieldsOption', () => {
        it('which loads a field options', () => {
          let option = ComponentOptions.loadFieldsOption(elem, 'myFields', {});
          expect(option).toEqual(['@foobar', '@foobrak']);
        });
      });

      describe('loadLocalizedStringOption', () => {
        it('which loads a localized string option', () => {
          let option = ComponentOptions.loadLocalizedStringOption(elem, 'myLocalized', {});
          expect(option).toBe('FiltersInYourPreferences');
        });
      });

      describe('loadNumberOption', () => {
        it('which loads a number option', () => {
          let option = ComponentOptions.loadNumberOption(elem, 'myNumber', {});
          expect(option).toBe(44);
        });
        it('which loads a number option greater than the set maximum', () => {
          let option = ComponentOptions.loadNumberOption(elem, 'myNumber', { max: 25 });
          expect(option).toBe(25);
        });
        it('which loads a number option lesser than the set minimum', () => {
          let option = ComponentOptions.loadNumberOption(elem, 'myNumber', { min: 55 });
          expect(option).toBe(55);
        });
        it('which loads a floating point number option', () => {
          let option = ComponentOptions.loadNumberOption(elem, 'myFloatNumber', { float: true });
          expect(option).toBe(4.4);
        });
      });

      describe('loadBooleanOption', () => {
        it('which loads a boolean option', () => {
          let option = ComponentOptions.loadBooleanOption(elem, 'myBool', {});
          expect(option).toBe(true);
        });
      });

      describe('loadListOption', () => {
        it('which loads a list option', () => {
          let option = ComponentOptions.loadListOption(elem, 'myFields', {});
          expect(option).toEqual(['@foobar', '@foobrak']);
        });
        it('which loads a list option using a custom separator', () => {
          let separator: RegExp = new RegExp('\s*&\s*');
          let option = ComponentOptions.loadListOption(elem, 'myList', { separator });
          expect(option).toEqual(['foo', 'bar', 'brak']);
        });
      });

      describe('loadEnumOption', () => {
        it('which loads an enum option', () => {
          enum testEnum {
            foo = 1,
            bar,
            brak
          }
          let option = ComponentOptions.loadEnumOption(elem, 'myTestEnum', {}, testEnum);
          expect(option).toBe(2);
        });
      });

      describe('loadSelectorOption', () => {
        it('which loads a selector option', () => {
          let option = ComponentOptions.loadSelectorOption(elem, 'mySelector', {}, doc);
          expect(option).toBe(testDiv);
        });
      });

      describe('loadChildHtmlElementOption', () => {
        it('which loads an html element option', () => {
          let option = ComponentOptions.loadChildHtmlElementOption(elem, 'my', {}, doc);
          expect(option).toBe(testDiv);
        });
        it('which loads an html element option from the IComponentOptionsChildHtmlElementOption\'s option selectorAttr', () => {
          let option = ComponentOptions.loadChildHtmlElementOption(elem, '', { selectorAttr: 'data-my-selector' }, doc);
          expect(option).toBe(testDiv);
        });
        it('which loads a child html element option from the IComponentOptionsChildHtmlElementOption\'s option childSelector', () => {
          let option = ComponentOptions.loadChildHtmlElementOption(elem, '', { childSelector: '#CoveoSearchboxChild' }, doc);
          expect(option).toBe(childElem);
        });
        it('which loads a child html element option from the provided name as a class selector', () => {
          let option = ComponentOptions.loadChildHtmlElementOption(elem, 'childKloss', {}, doc);
          expect(option).toBe(childElem);
        });
      });

      describe('loadChildHtmlElementFromSelector', () => {
        it('which loads a child html element corresponding to the selector', () => {
          let option = ComponentOptions.loadChildHtmlElementFromSelector(elem, '.childKloss');
          expect(option).toBe(childElem);
        });
        it('which directly loads the parent html element if it corresponds to the selector', () => {
          let option = ComponentOptions.loadChildHtmlElementFromSelector(elem, '#heidi');
          expect(option).toBe(elem);
        });
      });

      describe('loadChildrenHtmlElementFromSelector', () => {
        it('which loads all children html elements corresponding to the selector', () => {
          let option = ComponentOptions.loadChildrenHtmlElementFromSelector(elem, '.childKloss');
          expect(option).toEqual([childElem, childElem2]);
        });
      });

      describe('loadTemplateOption', () => {
        it('which loads an html template from the document matching the selector in the html element option', () => {
          let option = ComponentOptions.loadTemplateOption(elem, '', { selectorAttr: 'data-my-template-selector' }, doc);
          let template = ComponentOptions.createResultTemplateFromElement(testTemplate);
          expect(option.toHtmlElement()).toEqual(template.toHtmlElement());
        });
        it('which loads an html template from the cache matching the id in the html element option', () => {
          let template = ComponentOptions.createResultTemplateFromElement(testTemplate);
          TemplateCache.registerTemplate('CoveoTemplateId', template);
          let option = ComponentOptions.loadTemplateOption(elem, '', { idAttr: 'data-my-template-id' }, doc);
          expect(option.toHtmlElement()).toEqual(template.toHtmlElement());
        });
        it('which loads html templates from the html elements matching the child selector in the html element option', () => {
          let option = ComponentOptions.loadTemplateOption(elem, '', { childSelector: '.coveo-child' }, doc);
          expect(option.getType()).toBe('TemplateList');
        });
        it('which loads an html template from the html element matching the name in the html element option', () => {
          let option = ComponentOptions.loadTemplateOption(elem, 'coveoChild', {}, doc);
          expect(option.getType()).toBe('TemplateList');
        });
      });

      describe('loadResultTemplateFromId', () => {
        it('which loads an html template from the cache matching the id', () => {
          let template = ComponentOptions.createResultTemplateFromElement(testTemplate);
          TemplateCache.registerTemplate('CoveoTemplateId', template);
          let option = ComponentOptions.loadResultTemplateFromId('CoveoTemplateId');
          expect(option.toHtmlElement()).toEqual(template.toHtmlElement());
        });
      });

      describe('loadChildrenResultTemplateFromSelector', () => {
        it('which loads html templates from the html elements matching the selector', () => {
          let option = ComponentOptions.loadChildrenResultTemplateFromSelector(elem, '.coveo-child');
          expect(option.getType()).toBe('TemplateList');
        });
      });

      describe('findParentScrolling', () => {
        it('which finds a scrollable parent', () => {
          let option = ComponentOptions.findParentScrolling(elem, doc);
          expect(option).toBe(scrollElem);
        });
      });

      describe('getAttributeFromAlias', () => {
        it('which gets an attribute of the html element matching the alias', () => {
          let option = ComponentOptions.getAttributeFromAlias(elem, { alias: 'myAttr' });
          expect(option).toBe('baz');
        });
      });

      describe('createResultTemplateFromElement', () => {
        it('which creates a result template from the given html element', () => {
          let option = ComponentOptions.createResultTemplateFromElement(testTemplate);
          expect(option.getType()).toBe('HtmlTemplate');
        });
      });
    });
  });
}