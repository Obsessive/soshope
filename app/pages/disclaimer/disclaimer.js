var FrameModule = require("ui/frame");
var observable = require("data/observable");
var page;
function disclaimerLoaded(args) {
page = args.object;
var disclaimerModel = (function (_super) {
    __extends( disclaimerModel, _super);
    function disclaimerModel() {
        _super.call(this);
	      self=this;
    }

    disclaimerModel.prototype.disclaimer_action = function(){
      console.log("disclaimer_action is activated");
      FrameModule.topmost().navigate("pages/disclaimer/login/login");
    }

    return disclaimerModel;
})(observable.Observable);
page.bindingContext = new disclaimerModel();
}
exports.disclaimerLoaded = disclaimerLoaded;
