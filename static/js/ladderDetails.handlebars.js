(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ladderDetails.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tr>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"symbol") || (depth0 != null ? lookupProperty(depth0,"symbol") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"symbol","hash":{},"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":13,"column":26}}}) : helper)))
    + "</td><td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"maturity") || (depth0 != null ? lookupProperty(depth0,"maturity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maturity","hash":{},"data":data,"loc":{"start":{"line":13,"column":35},"end":{"line":13,"column":47}}}) : helper)))
    + "</td><td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"coupon") || (depth0 != null ? lookupProperty(depth0,"coupon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"coupon","hash":{},"data":data,"loc":{"start":{"line":13,"column":56},"end":{"line":13,"column":66}}}) : helper)))
    + "</td><td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"face") || (depth0 != null ? lookupProperty(depth0,"face") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"face","hash":{},"data":data,"loc":{"start":{"line":13,"column":75},"end":{"line":13,"column":83}}}) : helper)))
    + "</td><td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":13,"column":92},"end":{"line":13,"column":101}}}) : helper)))
    + "</td><td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"qty") || (depth0 != null ? lookupProperty(depth0,"qty") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qty","hash":{},"data":data,"loc":{"start":{"line":13,"column":110},"end":{"line":13,"column":117}}}) : helper)))
    + "</td><td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"total") || (depth0 != null ? lookupProperty(depth0,"total") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total","hash":{},"data":data,"loc":{"start":{"line":13,"column":126},"end":{"line":13,"column":135}}}) : helper)))
    + "</td>\n          </tr>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tbody>\n        <tr>\n          <td>\n            <button class=\"btn\" type=\"button\" data-toggle=\"collapse\" data-target=\"#"
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":33,"column":83},"end":{"line":33,"column":91}}}) : helper)))
    + "payments\" aria-expanded=\"false\" aria-controls=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":33,"column":138},"end":{"line":33,"column":146}}}) : helper)))
    + "payments\">+</button> "
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":33,"column":167},"end":{"line":33,"column":175}}}) : helper)))
    + "</td><td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"income") || (depth0 != null ? lookupProperty(depth0,"income") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"income","hash":{},"data":data,"loc":{"start":{"line":33,"column":184},"end":{"line":33,"column":194}}}) : helper)))
    + "</td><td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"notes") || (depth0 != null ? lookupProperty(depth0,"notes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"notes","hash":{},"data":data,"loc":{"start":{"line":33,"column":203},"end":{"line":33,"column":212}}}) : helper)))
    + "</td>\n        </tr>\n      </tbody>\n      <tbody id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":36,"column":17},"end":{"line":36,"column":25}}}) : helper)))
    + "payments\" class=\"collapse\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"itemized") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":8},"end":{"line":41,"column":18}}})) != null ? stack1 : "")
    + "      </tbody>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tr class=\"warning small\">\n          <td>&nbsp;</td><td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"income") || (depth0 != null ? lookupProperty(depth0,"income") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"income","hash":{},"data":data,"loc":{"start":{"line":39,"column":29},"end":{"line":39,"column":39}}}) : helper)))
    + "</td><td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"notes") || (depth0 != null ? lookupProperty(depth0,"notes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"notes","hash":{},"data":data,"loc":{"start":{"line":39,"column":48},"end":{"line":39,"column":57}}}) : helper)))
    + "</td>\n        </tr>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h4>Securities to Purchase</h4>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>ASX Symbol</th><th>Maturity Date</th><th>Coupon</th><th>Adjusted Face Value</th><th>Unit Price</th><th>Quantity</th><th>Total</th>\n        </tr>\n      </thead>\n      <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"purchases") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":15,"column":18}}})) != null ? stack1 : "")
    + "        <tr>\n          <td colspan=\"6\">&nbsp;</td><td><strong>"
    + alias4(((helper = (helper = lookupProperty(helpers,"totalCost") || (depth0 != null ? lookupProperty(depth0,"totalCost") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalCost","hash":{},"data":data,"loc":{"start":{"line":17,"column":49},"end":{"line":17,"column":62}}}) : helper)))
    + "</strong></td>\n        </tr>\n      </tbody>\n    </table>\n    <h4>Cash Flows</h4>\n    <p>Note that all payments will be adjusted for inflation, the amounts shown are the amounts in "
    + alias4(((helper = (helper = lookupProperty(helpers,"thisYear") || (depth0 != null ? lookupProperty(depth0,"thisYear") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thisYear","hash":{},"data":data,"loc":{"start":{"line":22,"column":99},"end":{"line":22,"column":111}}}) : helper)))
    + " dollars. With 2% annual inflation, $1 of income shown here will pay out $1.49 in 20 years.</p>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Year</th><th>Income</th><th>Notes</th>\n        </tr>\n      </thead>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"cashflows") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":6},"end":{"line":43,"column":16}}})) != null ? stack1 : "")
    + "      <tbody>\n        <tr>\n          <td><strong>Total</strong></td><td><strong>"
    + alias4(((helper = (helper = lookupProperty(helpers,"totalIncome") || (depth0 != null ? lookupProperty(depth0,"totalIncome") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalIncome","hash":{},"data":data,"loc":{"start":{"line":46,"column":53},"end":{"line":46,"column":68}}}) : helper)))
    + "</strong></td><td>&nbsp;</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n";
},"useData":true});
})();