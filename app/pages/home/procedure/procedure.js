var FrameModule = require("ui/frame");
var utilityModule = require("utils/utils");
var observable = require("data/observable");
var application =require("application");
if (application.android) {
  var Toast = require("nativescript-toast");
}
var connectivity = require("connectivity");
var page,self;
function procedureLoaded(args) {
page = args.object;
var procedureModel = (function (_super) {
    __extends( procedureModel, _super);
    function procedureModel() {
        _super.call(this);
	      self=this;
    }

    procedureModel.prototype.connect = function () {
      //check internet connection
      console.log("connect activated");
      var connectionType = connectivity.getConnectionType();
      switch (connectionType) {
        case connectivity.connectionType.none:
        console.log("No connection");
        return 0;
        break;
        case connectivity.connectionType.wifi:
        console.log("WiFi connection");
        return 1;
        break;
        case connectivity.connectionType.mobile:
        console.log("Mobile connection");
        return 1;
        break;
      }
    };

    procedureModel.prototype.iap_presidential_address_action = function () {
      console.log("iap_presidential_address_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=W4xd18AymCw");
      }
    };

    procedureModel.prototype.introduction_action = function () {
      console.log("introduction_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=QHO3xUP_A-g");
      }
    };

    procedureModel.prototype.recognition_of_a_sick_child_action = function () {
      console.log("recognition_of_a_sick_child_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=TBzWZmWrWbw");
      }
    };

    procedureModel.prototype.stabilization_of_a_sick_child_action = function () {
      console.log("stabilization_of_a_sick_child_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
         Toast.makeText("Please check your internet connection","long").show();
       }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=77-__XHNEFs");
      }
    };

    procedureModel.prototype.respiratory_emergencies_action = function () {
      console.log("steri_strips_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=zNKtRHLviKM");
      }
    };

    procedureModel.prototype.circulation_emergencies_action = function () {
      console.log("circulation_emergencies_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
=======
         Toast.makeText("Please check your internet connection","long").show();
       }
>>>>>>> 2e2d155ee9511b7702bcbba742bf47194f36bc78
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=s6lf1jm3qRQ");
      }
    };

    procedureModel.prototype.seizures_and_unconscious_child_action = function () {
      console.log("seizures_and_unconscious_child_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=07OggIDlQwI");
      }
    };

    procedureModel.prototype.anaphylaxis_action = function () {
      console.log("anaphylaxis_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=_o0WZ5rhh5Y");
      }
    };

    procedureModel.prototype.fever_action = function () {
      console.log("fever_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=uHp-wWHhqxg");
      }
    };

    procedureModel.prototype.minor_head_injury_action = function () {
      console.log("minor_head_injury_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=xCVE0ci07s0");
      }
    };

    procedureModel.prototype.pattern_of_crying_and_recognition_of_illness_action = function () {
      console.log("pattern_of_crying_and_recognition_of_illness_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=ZH701H7ynWc");
      }
    };

    procedureModel.prototype.bites_and_stings_action = function () {
      console.log("bites_and_stings_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=rBfs7Iv7Nds");
      }
    };

    procedureModel.prototype.pulled_elbow_action = function () {
      console.log("pulled_elbow_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=4r6xMrjlGNg");
      }
    };

    procedureModel.prototype.skin_clues_to_emergencies_action = function () {
      console.log("skin_clues_to_emergencies_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=uqk_BuaJPV0");
      }
    };

    procedureModel.prototype.epistaxis_action = function () {
      console.log("epistaxis_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=oNJALypFKIM");
      }
    };

    procedureModel.prototype.ingestion_of_toxins_action = function () {
      console.log("ingestion_of_toxins_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=wdIAPhyF9cE");
      }
    };

    procedureModel.prototype.cpr_procedure_action = function () {
      console.log("cpr_procedure_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=X1mFmCvJdGA");
      }
    };

    procedureModel.prototype.lma_action = function () {
      console.log("lma_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=hapjLpCZyLw");
      }
    };

    procedureModel.prototype.intraosseous_cannulation_procedure_action = function () {
      console.log("intraosseous_cannulation_procedure_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=MWhinuGMxT0");
      }
    };

    procedureModel.prototype.demonstration_of_inhaler_for_child_less_than_4_years_action = function () {
      console.log("demonstration_of_inhaler_for_child_less_than_4_years_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=IWpBmg4DCQw");
      }
    };

    procedureModel.prototype.demonstration_of_inhaler_for_child_more_than_4_years_action = function () {
      console.log("demonstration_of_inhaler_for_child_more_than_4_years_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=e6Dia7GZKf0");
      }
    };

    procedureModel.prototype.foreign_body_removal_procedure_action = function () {
      console.log("foreign_body_removal_procedure_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=Dk8UDzwUOXk");
      }
    };

    procedureModel.prototype.suturing_procedure_action = function () {
      console.log("suturing_procedure_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=G1wKpLLdUNE");
      }
    };

    procedureModel.prototype.steristrips_procedure_action = function () {
      console.log("steristrips_procedure_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=Lw8YuMXwQXU");
      }
    };

    procedureModel.prototype.dermabond_procedure_action = function () {
      console.log("dermabond_procedure_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=L_TGx3sP0YA");
      }
    };

    procedureModel.prototype.skin_stapling_procedure_action = function () {
      console.log("skin_stapling_procedure_action is activated");
      if (!(self.connect())) {
        console.log("no");
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }else {
        console.log("yes");
        utilityModule.openUrl("https://www.youtube.com/watch?v=cSUzhtehA-Y");
      }
    };

    return procedureModel;
})(observable.Observable);
page.bindingContext = new procedureModel();
}
exports.procedureLoaded = procedureLoaded;
