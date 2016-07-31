var FrameModule = require("ui/frame");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var page,self;
var weightarray=["Select your weight","< 3Kg","3 to 5 Kg","Infant 6 to 7 Kg","Small Infant 8 to 9 Kg","Toddler 10 to 11 Kg","Small child 12 to 14 Kg","Child 15 to 18 Kg","Child 19 to 23 Kg","Large Child 24 to 29 Kg","Adult 30 to 36 Kg"];
function equipmentsizingchartLoaded(args) {
page = args.object;
var equipmentsizingchartModel = (function (_super) {
    __extends( equipmentsizingchartModel, _super);
    function equipmentsizingchartModel() {
        _super.call(this);
	      self=this;
        self.weight();
        this.addEventListener(observable.Observable.propertyChangeEvent, this.ddChangeHandler, this);
    }

    equipmentsizingchartModel.prototype.ddChangeHandler = function () {
      console.log("ddChangeHandler is activated");
      self.set("equipmentsizingchartpage",page.getViewById("weight_id").selectedIndex-1);
    };

    equipmentsizingchartModel.prototype.weight = function () {
       console.log("weight function is activated");
       var weightitems = new observableArray.ObservableArray();
       for (var i = 0; i < weightarray.length; i++) {
         weightitems.push(weightarray[i].toString());
       }
       self.set("weightitems", weightitems);
    };

    return equipmentsizingchartModel;
})(observable.Observable);
page.bindingContext = new equipmentsizingchartModel();
}
exports.equipmentsizingchartLoaded = equipmentsizingchartLoaded;
