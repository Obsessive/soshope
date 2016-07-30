var FrameModule = require("ui/frame");
var observable = require("data/observable");
var page,self;
var pageno=0;
var titlearray=["AIRWAY","BREATHING","CIRCULATION","STEPS OF CPR"];
function abcofcprLoaded(args) {
page = args.object;
var abcofcprModel = (function (_super) {
    __extends( abcofcprModel, _super);
    function abcofcprModel() {
        _super.call(this);
	      self=this;
        self.set_tap_listener();
        self.set("abcofcprpage",pageno);
        self.set("abcofcprtitle",titlearray[pageno]);
        self.setcontent();
    }

    abcofcprModel.prototype.set_tap_listener = function(){
      console.log("set_tap_listener is activated");
      page.getViewById("left_id").on("tap", function (args) {
        pageno--;
        if (pageno==-1) {
          pageno=3;
        }
        self.set("abcofcprpage",pageno);
        self.set("abcofcprtitle",titlearray[pageno]);
      });
      page.getViewById("right_id").on("tap", function (args) {
        pageno++;
        if (pageno==4) {
          pageno=0;
        }
        self.set("abcofcprpage",pageno);
        self.set("abcofcprtitle",titlearray[pageno]);
      });
    }

    abcofcprModel.prototype.unset_tap_listener = function(){
      console.log("unset_tap_listener is activated");
      page.getViewById("left_id").off("tap", function (args) {

      });
      page.getViewById("right_id").off("tap", function (args) {

      });
    }

    abcofcprModel.prototype.setcontent = function(){
      console.log("setcontent is activated");
      self.set("abcofcprcontenta1","\n •Stable\n •Unstable but maintainable\n •Unstable not maintainable\n \n  ");
      self.set("abcofcprcontenta2","\n •Place the child in a recovery position as shown in below\n \n");
      self.set("abcofcprcontenta3","\n •Positioning  + minimal airway adjuncts + Oxygen  administration - free flow\n  \n •Head tilt and chin lift\n •Jaw thrust maneuvuer \n •Oral airway\n ");
      self.set("abcofcprcontenta4","\n •LMA\n •ET Tube \n  (For images, look below) \n");
      self.set("abcofcprcontentb1","\n•Assess noisy breathing\n•Hypoxemia\n•Poor respiratory effort\n\n\n");
      self.set("abcofcprcontentb2","\n•Adrenaline Nebulization   - 0.4 ml/kg upto a maximum of 5 ml of a 1:1000 dilution, Can be repeated every 20-30 minutes for a maximum of 3 nebulisations\n•Note if child is hypoxic – Give nebulization with oxygen\n");
      self.set("abcofcprcontentb3","\n•Salbutamol MDI 4 - 8 puffs every 20 minutes in the first hour After 1st hr. 4- 8 puffs every 1-4 hrs as needed.\n•Nebulizer Dose is 0.15 mg/kg (minimum 2.5 mg and maximum 5 mg per dose )every 20 min for three doses Or 0.3 mg/kg/hour\n•Note if child is hypoxic – Give nebulization with oxygen\n");
      self.set("abcofcprcontentb4","\n•Oxygen in a non threatening manner\n");
      self.set("abcofcprcontentb5","\n•Poor respiratory effort\n•Bag or mask LMA ventilation\n•Pic \n•Once the airway has been secured, if the child is not breathing spontaneously, the rescuer should administer two breaths. Each breath should be given over one second with bag-mask ventilation. \n");
      self.set("abcofcprcontentc1","Chest compressions should be initiated when there is no pulse or the heart rate is <60 beats per minute. One cycle of compressions should precede the first breaths \n •The providers should start CPR (compressions-airway-breathing, C-A-B), starting with a ratio of 30 compressions to 2 breaths for a single rescuer and 15 compression to 2 breaths for two or more rescuers \n");
      self.set("abcofcprcontentc2"," (< 1year ) — Chest compressions for infants may be performed with either two fingers ( one Rescuer) or with the two thumb-encircling hands technique ( Two Rescuer ) \n");
      self.set("abcofcprcontentc3"," For children (from one year until the start of puberty),compressions should be performed over the lower half of the sternum with either the heel of one hand or with two hands \n");
      self.set("abcofcprcontentabc1","1 - Assess Responsiveness ( if responsive – recovery position) \n •2- If Unresponsive –   Look for no breathing or only gasping and check pulse ( simultaneously) pulse definitely felt within 10 sec ? \n");
      self.set("abcofcprcontentabc2","normal breathing has pulse >60 Place the child in recovery position  - monitor the child \n");
      self.set("abcofcprcontentabc3","no normal breathing has pulse \n 1 breath every 3-5 sec if pulse is >60 Add compressions if pulse < 60 \n");
      self.set("abcofcprcontentabc4","if no breathing or only gasping no pulse \n One rescuer  - 30 :2 ratio ( compression to breath ratio) \n Two rescuer – 15 : 2ratio (  compression to breath ratio) \n Check pulse every 2 min and interchange the rescuer for compression and breathing");
    }

    return abcofcprModel;
})(observable.Observable);
page.bindingContext = new abcofcprModel();
}
exports.abcofcprLoaded = abcofcprLoaded;

exports.abcofcprUnloaded = function() {
    self.unset_tap_listener();
};
