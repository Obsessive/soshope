var FrameModule = require("ui/frame");
var observable = require("data/observable");
var appSettings = require("application-settings");
var page,timer,self;
function splashscreenLoaded(args) {
page = args.object;
var splashscreenModel = (function (_super) {
    __extends( splashscreenModel, _super);
    function splashscreenModel() {
        _super.call(this);
	      self=this;
        timer = setTimeout(function() {
          var navigationEntry = {
            moduleName: "pages/home/home",
            clearHistory: true
          };
          if (appSettings.getBoolean("firsttime", false)) {
          	navigationEntry.moduleName = "pages/home/home";
          }else{
          	navigationEntry.moduleName = "pages/disclaimer/disclaimer";
          }
          FrameModule.topmost().navigate(navigationEntry);
        },3000);
    }

    return splashscreenModel;
})(observable.Observable);
page.bindingContext = new splashscreenModel();
}
exports.splashscreenLoaded = splashscreenLoaded;

exports.splashscreenUnloaded = function() {
  clearTimeout(timer);
};
