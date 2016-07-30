var FrameModule = require("ui/frame");
var observable = require("data/observable");
var page,self;
var pageno=0;
var titlearray=["TRIAGE LEVEL 1 RESUSCITATION","TRIAGE LEVEL 2 URGENT","TRIAGE LEVEL 3 NON URGENT","EXCEPTIONS"];
function triageLoaded(args) {
page = args.object;
var triageModel = (function (_super) {
    __extends( triageModel, _super);
    function triageModel() {
        _super.call(this);
	      self=this;
        self.set_tap_listener();
        self.set("triagepage",pageno);
        self.set("triagetitle",titlearray[pageno]);
        self.setcontent();
    }

    triageModel.prototype.set_tap_listener = function(){
      console.log("set_tap_listener is activated");
      page.getViewById("left_id").on("tap", function (args) {
        pageno--;
        if (pageno==-1) {
          pageno=3;
        }
        self.set("triagepage",pageno);
        self.set("triagetitle",titlearray[pageno]);
      });
      page.getViewById("right_id").on("tap", function (args) {
        pageno++;
        if (pageno==4) {
          pageno=0;
        }
        self.set("triagepage",pageno);
        self.set("triagetitle",titlearray[pageno]);
      });
    }

    triageModel.prototype.unset_tap_listener = function(){
      console.log("unset_tap_listener is activated");
      page.getViewById("left_id").off("tap", function (args) {

      });
      page.getViewById("right_id").off("tap", function (args) {

      });
    }

    triageModel.prototype.setcontent = function(){
      console.log("setcontent is activated");
      self.set("triagecontent1","\n•Unresponsive or altered consciousness or lethargic\n•HR < / >  NR +/- 2 SD , RR < / >  NR +/- 2 SD(Grossly abnormal)\n\n•Inadequate breathing\n•Moderate to severe respiratory distress/ marked stridor\n•Shock: CFT > 4 secs, BP lower than normal for age\n•Cyanosis\n\nTHIS IS AN EMERGENCY: ACT FAST STABILIZE");
      self.set("triagecontent2","\n•Infant - unconsolable cry,  not feeding, atypical behaviour\n•HR , RR outside normal range for age\n•Mild-Moderate stridor\n•Mild distress\n•Capillary refill  > 2 sec but  < 4 sec\n\nOBSERVE CLOSELY, TREAT, MAY DETERIORATE FAST");
      self.set("triagecontent3","\n•No history of recent behavior/appearance change\n\n\n•HR and RR / normal for age/mildly deranged\n•CFT  < 2 sec\n•BP in normal range for age\n\nTHIS IS NON URGENT");
      self.set("triagecontent4","When would you triage a child more serious than he actually is?");
      self.set("triagecontent5","Triage 1 level higher than what it appears\n\n•Sick infant,  < 3 months of age\n•Temp  > 40 deg C or hypothermia\n•Suspected ingestion of unknown substance or unknown quantity of known substance\n•Severe pain\n•Any illness in a child with severe malnutrition\n•Burns: major  -  > 10% BSA and/or involving airway\n•Purpuric rashes, target lesions\n•Discordant Physical findings\n•MOTHER feels her child is sick");
    }

    return triageModel;
})(observable.Observable);
page.bindingContext = new triageModel();
}
exports.triageLoaded = triageLoaded;

exports.triageUnloaded = function() {
  pageno=0;
  self.unset_tap_listener();
};
