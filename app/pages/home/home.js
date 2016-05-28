var FrameModule = require("ui/frame");
var observable = require("data/observable");
var appSettings = require("application-settings");
var dialogs = require("ui/dialogs");
var page;
function homeLoaded(args) {
page = args.object;
var homeModel = (function (_super) {
    __extends( homeModel, _super);
    function homeModel() {
        _super.call(this);
	      self=this;
        self.set_tap_listener();
        self.set("welcome_name","HI "+ appSettings.getString("name"));
    }

    homeModel.prototype.set_tap_listener = function(){
      console.log("set_tap_listener is activated");

      //Set tap listeners
      var topmost=FrameModule.topmost();
      page.getViewById("procedure_id").on("tap", function (args) {
        topmost.navigate("pages/home/procedure/procedure");
      });
      page.getViewById("medications_id").on("tap", function (args) {
        topmost.navigate("pages/home/emergencymedications/emergencymedications");
      });
      page.getViewById("equipments_id").on("tap", function (args) {
        topmost.navigate("pages/home/equipments/equipments");
      });
      page.getViewById("clinicalconditions_id").on("tap", function (args) {
        topmost.navigate("pages/home/clinicalconditions/clinicalconditions");
      });
      page.getViewById("triage_id").on("tap", function (args) {
        topmost.navigate("pages/home/triage/triage");
      });
      page.getViewById("vitals_id").on("tap", function (args) {
        topmost.navigate("pages/home/vitals/vitals");
      });
      page.getViewById("transport_id").on("tap", function (args) {
        topmost.navigate("pages/home/transport/transport");
      });
      page.getViewById("abcofcpr_id").on("tap", function (args) {
        topmost.navigate("pages/home/abcofcpr/abcofcpr");
      });
      page.getViewById("team_id").on("tap", function (args) {
        topmost.navigate("pages/home/team/team");
      });
    };

    homeModel.prototype.unset_tap_listener = function(){
      console.log("unset_tap_listener is activated");

      //Unset tap listeners
      var topmost=FrameModule.topmost();
      page.getViewById("procedure_id").off("tap", function (args) {

      });
      page.getViewById("medications_id").off("tap", function (args) {

      });
      page.getViewById("equipments_id").off("tap", function (args) {

      });
      page.getViewById("clinicalconditions_id").off("tap", function (args) {

      });
      page.getViewById("triage_id").off("tap", function (args) {

      });
      page.getViewById("vitals_id").off("tap", function (args) {

      });
      page.getViewById("transport_id").off("tap", function (args) {

      });
      page.getViewById("abcofcpr_id").off("tap", function (args) {

      });
      page.getViewById("team_id").off("tap", function (args) {

      });
    };

    return homeModel;
})(observable.Observable);
page.bindingContext = new homeModel();
}
exports.homeLoaded = homeLoaded;

exports.homeUnloaded = function() {
    self.unset_tap_listener();
};

exports.developedby = function () {
  dialogs.alert({
  title: "Developed by",
  message: "Concept,Design,Content developed by \n•SMAK \n•Dr Balachandra \n•Dr Jagadish Chinnapa \nin association with MicroLabs makers of",
  okButtonText: "OK"
}).then(function () {
  console.log("Dialog closed!");
});
};
