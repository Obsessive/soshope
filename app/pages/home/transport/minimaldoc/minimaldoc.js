var FrameModule = require("ui/frame");
var observable = require("data/observable");
var page;
function minimaldocLoaded(args) {
page = args.object;
var minimaldocModel = (function (_super) {
    __extends( minimaldocModel, _super);
    function minimaldocModel() {
        _super.call(this);
	      self=this;
    }

    return minimaldocModel;
})(observable.Observable);
page.bindingContext = new minimaldocModel();
}
exports.minimaldocLoaded = minimaldocLoaded;
