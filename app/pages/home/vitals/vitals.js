var FrameModule = require("ui/frame");
var observable = require("data/observable");
var page,self;
var pageno=0;
var titlearray=["NORMAL VALUES","ACUTE VALUES","KEY VALUES"];
function vitalsLoaded(args) {
page = args.object;
var vitalsModel = (function (_super) {
    __extends( vitalsModel, _super);
    function vitalsModel() {
        _super.call(this);
	      self=this;
        self.set_tap_listener();
        self.set("vitalspage",pageno);
        self.set("vitalstitle",titlearray[pageno]);
        self.setcontent();
    }

    vitalsModel.prototype.set_tap_listener = function(){
      console.log("set_tap_listener is activated");
      page.getViewById("left_id").on("tap", function (args) {
        pageno--;
        if (pageno==-1) {
          pageno=2;
        }
        self.set("vitalspage",pageno);
        self.set("vitalstitle",titlearray[pageno]);
      });
      page.getViewById("right_id").on("tap", function (args) {
        pageno++;
        if (pageno==3) {
          pageno=0;
        }
        self.set("vitalspage",pageno);
        self.set("vitalstitle",titlearray[pageno]);
      });
    }

    vitalsModel.prototype.unset_tap_listener = function(){
      console.log("unset_tap_listener is activated");
      page.getViewById("left_id").off("tap", function (args) {

      });
      page.getViewById("right_id").off("tap", function (args) {

      });
    }

    vitalsModel.prototype.setcontent = function(){
      console.log("setcontent is activated");
      self.set("vitalscontentk1","\n• Pulse > 220/min consider SVT\n• Cap refill > 2 seconds is not normal \n• BP in kids > 1 year = 70 + (2 x age)\n• RR > 60/min Newborn,\n• RR > 50/min till 1 yr,\n• RR >  40 /min till 5  yrs\n• PULSE OXIMETRY < 92 In room  air\nBlood Glucose – \n• < 45mg/dl on day 1 of life newborn \n• < 50mg/dl after day 1 of life in newborn\n• Hypoglycemia in children - < 50mg/dl of whole blood glucose\n• Hypothermia is diagnosed by identification of a core body temperature that is < 35°C (95°F) \n • Heat stroke is defined as a core temperature ≥40°C (104°F) accompanied by central nervous system dysfunction in patients with environmental heat exposure\n\n");
    }
    return vitalsModel;
})(observable.Observable);
page.bindingContext = new vitalsModel();
}
exports.vitalsLoaded = vitalsLoaded;

exports.vitalsUnloaded = function() {
    self.unset_tap_listener();
};
