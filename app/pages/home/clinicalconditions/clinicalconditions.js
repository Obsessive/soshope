var FrameModule = require("ui/frame");
var observable = require("data/observable");
var ObservableArray = require('data/observable-array');
var dialogs = require("ui/dialogs");
var page,uilistarray=[];
var self;
var itemarray = ["Asthma","Anaphylaxis","Animal bite","Cardiogenic shock","Croup","Diarrhea","Epistaxis","Excessive crying","Fever","Foreign body","Ingestions","Non cardiogenic shock","Pneumonia","Scorpion bite","Seizures","Snake bite","Head injury"];
function clinicalconditionsLoaded(args) {
  page = args.object;
  var clinicalconditionsModel = (function (_super) {
    __extends( clinicalconditionsModel, _super);
    function clinicalconditionsModel() {
      _super.call(this);
      self=this;
      uilistarray.length = 0;
      for (var i = 0; i < itemarray.length; i++) {
        uilistarray.push({
          "clinicalconditions_name" : itemarray[i]
        });
      }
      self.set("clinicalconditions_items",uilistarray);
    }
    return clinicalconditionsModel;
  })(observable.Observable);
  page.bindingContext = new clinicalconditionsModel();
}
exports.clinicalconditionsLoaded = clinicalconditionsLoaded;

exports.clinicalconditions_tap = function(args){
  console.log('Clicked item with name ' + args.index);
  var selected_item = itemarray[args.index];
  var topmost=FrameModule.topmost();
  if(selected_item == "Anaphylaxis" || selected_item == "Animal bite" || selected_item == "Cardiogenic shock" || selected_item == "Epistaxis" || selected_item == "Excessive crying" || selected_item == "Foreign body" || selected_item == "Ingestions" || selected_item == "Non cardiogenic shock" || selected_item == "Scorpion bite" || selected_item == "Seizures" || selected_item == "Snake bite"){
    console.log(selected_item);
    var navigationEntry = {
      moduleName: "pages/home/clinicalconditions/details/details",
      context: {info: selected_item},
      animated: true,
      transition: {name:"slideLeft"}
    };
    topmost.navigate(navigationEntry);
  }
  if (selected_item == "Asthma") {
    dialogs.action({
      message: "State your condition",
      cancelButtonText: "Cancel",
      actions: ["MILD", "MODERATE","SEVERE"]
    }).then(function (result) {
      console.log("Dialog result: " + result);
      if(result == "Cancel"){
        return 0;
      }
      var navigationEntry = {
        moduleName: "pages/home/clinicalconditions/details/details",
        context: {info: selected_item+" "+result},
        animated: true,
        transition: {name:"slideLeft"}
      };
      topmost.navigate(navigationEntry);
    });
  }
  if (selected_item == "Croup") {
    dialogs.action({
      message: "State your condition",
      cancelButtonText: "Cancel",
      actions: ["MILD", "MODERATE","SEVERE"]
    }).then(function (result) {
      console.log("Dialog result: " + result);
      if(result == "Cancel"){
        return 0;
      }
      var navigationEntry = {
        moduleName: "pages/home/clinicalconditions/details/details",
        context: {info: selected_item+" "+result},
        animated: true,
        transition: {name:"slideLeft"}
      };
      topmost.navigate(navigationEntry);
    });
  }
  if (selected_item == "Diarrhea") {
    dialogs.action({
      message: "State your condition",
      cancelButtonText: "Cancel",
      actions: ["NO DEHYDRATION", "SOME DEHYDRATION","SEVERE DEHYDRATION"]
    }).then(function (result) {
      console.log("Dialog result: " + result);
      if(result == "Cancel"){
        return 0;
      }
      var navigationEntry = {
        moduleName: "pages/home/clinicalconditions/details/details",
        context: {info: selected_item+" "+result},
        animated: true,
        transition: {name:"slideLeft"}
      };
      topmost.navigate(navigationEntry);
    });
  }
  if (selected_item == "Fever") {
    dialogs.action({
      message: "State your condition",
      cancelButtonText: "Cancel",
      actions: ["GREEN", "YELLOW","RED"]
    }).then(function (result) {
      console.log("Dialog result: " + result);
      if(result == "Cancel"){
        return 0;
      }
      var navigationEntry = {
        moduleName: "pages/home/clinicalconditions/details/details",
        context: {info: selected_item+" "+result},
        animated: true,
        transition: {name:"slideLeft"}
      };
      topmost.navigate(navigationEntry);
    });
  }
  if (selected_item == "Pneumonia") {
    dialogs.action({
      message: "State your condition",
      cancelButtonText: "Cancel",
      actions: ["PNEUMONIA", "SEVERE PNEUMONIA","VERY SEVERE PNEUMONIA"]
    }).then(function (result) {
      console.log("Dialog result: " + result);
      if(result == "Cancel"){
        return 0;
      }
      var navigationEntry = {
        moduleName: "pages/home/clinicalconditions/details/details",
        context: {info: selected_item+" "+result},
        animated: true,
        transition: {name:"slideLeft"}
      };
      topmost.navigate(navigationEntry);
    });
  }
  if (selected_item == "Head injury") {
    dialogs.action({
      message: "State your condition",
      cancelButtonText: "Cancel",
      actions: ["MILD","SEVERE"]
    }).then(function (result) {
      console.log("Dialog result: " + result);
      if(result == "Cancel"){
        return 0;
      }
      var navigationEntry = {
        moduleName: "pages/home/clinicalconditions/details/details",
        context: {info: selected_item+" "+result},
        animated: true,
        transition: {name:"slideLeft"}
      };
      console.log("c");
      topmost.navigate(navigationEntry);
    });
  }
};
