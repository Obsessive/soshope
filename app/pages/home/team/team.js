var FrameModule = require("ui/frame");
var observable = require("data/observable");
var page;
function teamLoaded(args) {
page = args.object;
var teamModel = (function (_super) {
    __extends( teamModel, _super);
    function teamModel() {
        _super.call(this);
	      self=this;
    }
    return teamModel;
})(observable.Observable);
page.bindingContext = new teamModel();
}
exports.teamLoaded = teamLoaded;
