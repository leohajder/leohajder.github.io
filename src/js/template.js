(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " "
    + container.escapeExpression(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"age","hash":{},"data":data}) : helper)))
    + " year old";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                    I am a "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.job : depth0)) != null ? stack1.title : stack1), depth0))
    + " at <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.job : depth0)) != null ? stack1.site : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.job : depth0)) != null ? stack1.company : stack1), depth0))
    + "</a> in "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.job : depth0)) != null ? stack1.location : stack1), depth0))
    + ".\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                    <strong>"
    + container.escapeExpression(((helper = (helper = helpers.skill || (depth0 != null ? depth0.skill : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"skill","hash":{},"data":data}) : helper)))
    + "</strong>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subsets : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(data && data.last),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "                        <small>\n                            + \n";
  stack1 = ((helper = (helper = helpers.subsets || (depth0 != null ? depth0.subsets : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"subsets","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.subsets) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</small>";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.last),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return ",";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "                    <div class=\"row\">\n";
  stack1 = ((helper = (helper = helpers.repos || (depth0 != null ? depth0.repos : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"repos","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.repos) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                            <div class=\"col-xs-12\">\n                                <a href=\""
    + alias4(((helper = (helper = helpers.html_url || (depth0 != null ? depth0.html_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"html_url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.language : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.fork : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.homepage : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                                <div class=\"col-xs-12 repo-description\">\n                                    "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\n                                </div>\n                            </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                                    <small>"
    + container.escapeExpression(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"language","hash":{},"data":data}) : helper)))
    + "</small>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "                                    <i class=\"fa fa-code-fork\"></i>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                                    <a href=\""
    + container.escapeExpression(((helper = (helper = helpers.homepage || (depth0 != null ? depth0.homepage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"homepage","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">\n                                        <i class=\"fa fa-globe\"></i>\n                                    </a>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"text-danger\">Cannot connect to GitHub API.</div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <iframe src=\""
    + alias2(alias1(depth0, depth0))
    + "\" frameborder=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.music : depth0)) != null ? stack1.frameBorder : stack1), depth0))
    + "\"></iframe>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">\n                        <span>\n                            <i class=\"fa "
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\" aria-hidden=\"true\"></i>\n                            <span class=\"hidden-xs\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n                        </span>\n                    </a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container inverse\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">leohajder.github.io</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li>\n                    <a href=\"#about\">About Me</a>\n                </li>\n                <li>\n                    <a href=\"#github\">GitHub</a>\n                </li>\n                <li>\n                    <a href=\"#music\">Music</a>\n                </li>\n                <li>\n                    <a href=\"#contact\">Contact</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container\">\n\n    <div id=\"about\" class=\"section\">\n        <h1 class=\"page-header\">About Me</h1>\n        <div class=\"container\">\n            <a href=\"img/leo.jpg\" target=\"_blank\"><img id=\"me\" class=\"img img-circle pull-left\" src=\"img/leo.jpg\" height=\"150\"></a>\n            <p>\n                My name is Leo Hajder. I am a"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.age : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " programmer, musician and audio producer from Split, Croatia.\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.job : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </p>\n            <p>\n                I have learned and have some experience in\n";
  stack1 = ((helper = (helper = helpers.skills || (depth0 != null ? depth0.skills : depth0)) != null ? helper : alias2),(options={"name":"skills","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.skills) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "etc.\n            </p>\n            <p>\n                I am a volunteer at\n                <a href=\"http://www.facebook.com/udruga.srce\" target=\"_blank\">Srce</a>, a local cerebral palsy association in Split, Croatia. Our goal is the social integration of our members, improving their quality of life, organizing their free time, and\n                participating in various art projects. Some of my tasks are guitar playing, video and audio content editing, assisting in project organization, social media promotion, etc.\n            </p>\n            <p>\n                In my spare time I do music production and composing. I record, mix, produce and play guitar in local bands. I have also done a soundtrack for a documentary. I have participated in the\n                <a href=\"http://deanrodneysingers.com/\" target=\"_blank\">Dean Rodney Singers</a>\n                project, hosted by a London based company\n                <a href=\"http://www.heartnsoul.co.uk/\" target=\"_blank\">Heart n Soul</a>, which brings musicians and artists with and without disabilities together to collaborate on artistic content. Our work was on display at the 2012 Summer Paralympics in London, UK.\n            </p>\n        </div>\n    </div>\n\n    <div id=\"certificates\">\n        <div class=\"container\">\n            <a href=\"docs/Leo_Hajder_CAE_Statement_Of_Result.pdf\" target=\"_blank\"><img src=\"img/cae.png\" height=\"40\" title=\"Cambridge Advanced English (CAE)\">\n                <a href=\"https://www.youracclaim.com/badges/4fbde96e-cd6b-48d1-8af1-38cf88980272/public_url\" target=\"_blank\"><img src=\"https://acclaim-production-app.s3.amazonaws.com/images/3ca8dd3f-ff4e-4961-b423-46ab9bcb053c/MTA%2BSoftware%2BDevelopment%2BFundamentals-01.png\" height=\"40\" title=\"MTA Software Development Fundamentals\"></a>\n                <a href=\"https://www.youracclaim.com/badges/818714e2-b7e3-4e54-a222-38af196d340f/public_url\" target=\"_blank\"><img src=\"https://acclaim-production-app.s3.amazonaws.com/images/7b186204-144b-4d7c-99d2-fef259500220/e3b2ef746594ace57b855a3aed8adc9f831dc09d.png\" height=\"40\" title=\"ClearFit Innovator\"></a>\n                <a href=\"docs/Leo_Hajder_Europass_CV.pdf\" target=\"_blank\" class=\"btn btn-primary\">Download CV</a>\n            </div>\n        </div>\n\n        <div id=\"github\" class=\"section\">\n            <h1 class=\"page-header\">GitHub</h1>\n            <div class=\"container\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.repos : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n\n        <div id=\"music\" class=\"section\">\n            <h1 class=\"page-header\">Music</h1>\n            <div class=\"container\">\n"
    + ((stack1 = alias4.call(depth0,container.lambda(((stack1 = (depth0 != null ? depth0.music : depth0)) != null ? stack1.urls : stack1), depth0),{"name":"music.urls","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n\n        <div id=\"contact\" class=\"section\">\n            <h1 class=\"page-header\">Contact</h1>\n            <div class=\"container\">\n";
  stack1 = ((helper = (helper = helpers.contact || (depth0 != null ? depth0.contact : depth0)) != null ? helper : alias2),(options={"name":"contact","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.contact) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n        </div>\n\n    </div>\n";
},"useData":true});
})();