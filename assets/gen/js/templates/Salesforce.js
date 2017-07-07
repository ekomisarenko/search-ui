Coveo.TemplateCache.registerTemplate("CardSalesforce", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame coveo-email-result\">\n  <div class=\"coveo-result-row\" style=\"margin-bottom: 20px\">\n    <div class=\"coveo-result-cell\" style=\"width:32px; vertical-align:middle; flex-grow:0\">\n      <span class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\"></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"padding-left: 10px; vertical-align: middle;\">\n      <a class=\"CoveoResultLink\"></a>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n      <div class=\"CoveoText\" data-value=\"Description\" data-weight=\"bold\"></div>\n      <span class=\"CoveoExcerpt\">\n      </span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\">\n      <div class=\"CoveoText\" data-value=\"Modified\" data-weight=\"bold\"></div>\n      <div class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"emailDateTime\" data-helper-options-always-include-time=\"true\"></div>\n    </div>\n  </div>\n  <div class=\"CoveoCardActionBar\">\n    <div class=\"CoveoQuickview\"></div>\n    <div class=\"CoveoCardOverlay\" data-title=\"Details\" data-icon=\"coveo-sprites-main-search-active\">\n      <table class=\"CoveoFieldTable\" data-allow-minimization=\"false\">\n        <tbody>\n          <tr data-field=\"@sfaccountname\" data-caption=\"Account\">\n          </tr>\n          <tr data-field=\"@sfownername\" data-caption=\"Owner\">\n          </tr>\n          <tr data-field=\"@sfopportunityamountconverted\" data-caption=\"Total\" data-helper=\"currency\">\n          </tr>\n          <tr data-field=\"@sfopportunitylicensingstotalcconverted\" data-caption=\"License\" data-helper=\"currency\">\n          </tr>\n          <tr data-field=\"@sfopportunityamountsupportcconverted\" data-caption=\"Support\" data-helper=\"currency\">\n          </tr>\n          <tr data-field=\"@sfopportunityconsultingstotalcconverted\" data-caption=\"PS\" data-helper=\"currency\">\n          </tr>\n          <tr data-field=\"@sfopportunitystagename\" data-caption=\"Stage\">\n          </tr>\n          <tr data-field=\"@sfopportunitydealtypec\" data-caption=\"Deal Type\">\n          </tr>\n          <tr data-field=\"@sfopportunitycompetitionc\" data-caption=\"Competition\" data-split-values=\"true\">\n          </tr>\n          <tr data-field=\"@sfibdusername\" data-caption=\"ISR\">\n          </tr>\n          <tr data-field=\"@sfopportunityregionc\" data-caption=\"Region\">\n          </tr>\n          <tr data-field=\"@sfleadsource\" data-caption=\"Lead Source\">\n          </tr>\n          <tr data-field=\"@sfleadstatus\" data-caption=\"Lead status\">\n          </tr>\n          <tr data-field=\"@worktitle\" data-caption=\"Work title\">\n          </tr>\n          <tr data-field=\"@sfemail\" data-caption=\"Email\" data-helper=\"email\" data-html-value=\"true\">\n          </tr>\n          <tr data-field=\"@sfcontactphone\" data-caption=\"Phone\">\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"CoveoFollowItem\"></div>\n  </div>\n</div>\n",{"condition":null,"layout":"card","fieldsToMatch":[{"field":"sfid"}],"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("Salesforce", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:85px; text-align:center; padding-top:7px\">\n      <span class=\"CoveoIcon\">\n      </span>\n      <span class=\"CoveoQuickview\">\n      </span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"padding-left:15px\">\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"font-size:18px\">\n          <a class=\"CoveoResultLink\">\n          </a>\n        </div>\n        <div class=\"coveo-result-cell\" style=\"width:120px; text-align:right;font-size:12px\">\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n          <div class=\"CoveoExcerpt\">\n          </div>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px; font-size:13px;\">\n          <table class=\"CoveoFieldTable\">\n            <tbody>\n              <tr data-field=\"@sfaccountname\" data-caption=\"Account\">\n              </tr>\n              <tr data-field=\"@sfownername\" data-caption=\"Owner\">\n              </tr>\n              <tr data-field=\"@sfopportunityamountconverted\" data-caption=\"Total\" data-helper=\"currency\">\n              </tr>\n              <tr data-field=\"@sfopportunitylicensingstotalcconverted\" data-caption=\"License\" data-helper=\"currency\">\n              </tr>\n              <tr data-field=\"@sfopportunityamountsupportcconverted\" data-caption=\"Support\" data-helper=\"currency\">\n              </tr>\n              <tr data-field=\"@sfopportunityconsultingstotalcconverted\" data-caption=\"PS\" data-helper=\"currency\">\n              </tr>\n              <tr data-field=\"@sfopportunitystagename\" data-caption=\"Stage\">\n              </tr>\n              <tr data-field=\"@sfopportunitydealtypec\" data-caption=\"Deal Type\">\n              </tr>\n              <tr data-field=\"@sfopportunitycompetitionc\" data-caption=\"Competition\" data-split-values=\"true\">\n              </tr>\n              <tr data-field=\"@sfibdusername\" data-caption=\"ISR\">\n              </tr>\n              <tr data-field=\"@sfopportunityregionc\" data-caption=\"Region\">\n              </tr>\n              <tr data-field=\"@sfleadsource\" data-caption=\"Lead Source\">\n              </tr>\n              <tr data-field=\"@sfleadstatus\" data-caption=\"Lead status\">\n              </tr>\n              <tr data-field=\"@worktitle\" data-caption=\"Work title\">\n              </tr>\n              <tr data-field=\"@sfemail\" data-caption=\"Email\" data-helper=\"email\" data-html-value=\"true\">\n              </tr>\n              <tr data-field=\"@sfcontactphone\" data-caption=\"Phone\">\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",{"condition":null,"layout":"list","fieldsToMatch":[{"field":"sfid"}],"mobile":null}),true, true)