var FrameModule = require("ui/frame");
var observable = require("data/observable");
var page;
function transportLoaded(args) {
page = args.object;
var transportModel = (function (_super) {
    __extends( transportModel, _super);
    function transportModel() {
        _super.call(this);
	      self=this;
        self.set("transportcontent"," \n •Consider pre-transport condition, transport requirements, and post transport follow up \n •Communication with parents is vital \n •Communication with the receiving unit will optimize outcome \n •Document all treatment given \n •If transfer is going to be delayed continue resuscitative/stabilization efforts at your facility");
    }

    transportModel.prototype.transportpic_action = function(){
      console.log("transportpic_action is activated");
      FrameModule.topmost().navigate("pages/home/transport/minimaldoc/minimaldoc");
    }

    return transportModel;
})(observable.Observable);
page.bindingContext = new transportModel();
}
exports.transportLoaded = transportLoaded;
