var FrameModule = require("ui/frame");
var observable = require("data/observable");
var page,self;
var pageno=0;
var titlearray=["AIRWAY AND BREATHING","VASCULAR ACCESS AND FLUIDS","PERSONAL PROTECTIVE EQUIPMENT","MISCELLANEOUS"];
function equipmentsLoaded(args) {
page = args.object;
var equipmentsModel = (function (_super) {
    __extends( equipmentsModel, _super);
    function equipmentsModel() {
        _super.call(this);
	      self=this;
        self.set_tap_listener();
        self.set("equipmentpage",pageno);
        self.set("equipmenttitle",titlearray[pageno]);
        self.set("equipmentcontent1"," •ET tubes 2.5 - 6mm \n •Laryngoscope 0,1,2,3 blades \n •Bag Mask Resuscitator Self Inflating 450ml \n •Laryngeal mask airway 1, 1.5, 2, 2.5, 3 \n •Suction bulb \n •Oropharyngeal airway 00 – 5 \n •Pulse-oximeter \n •Nebulizer   \n •MDI with spacer and face mask \n •Portable Oxygen Cylinder \n •Oxygen masks");
        self.set("equipmentcontent2"," •Sphygmomanomater with infant child and adult cuffs \n •Tourniquet \n •IV canula 14 guage to 24 guage \n •Introosseous needle or bone marrow needle \n •IV drip set \n •Normal saline \n •10% dextrose \n •Sterile dressing \n •splints");
        self.set("equipmentcontent3"," •Gloves \n •Face mask");
        self.set("equipmentcontent4"," •NG tubes \n •Thermometer \n •Glucometer \n •Torch \n •Tongue depressor \n •Foreign body removal forceps \n •Otoscope \n •Suture set \n •Splints to stabilize fracture or  \n •snake bite \n •Cervical neck collar");
    }

    equipmentsModel.prototype.set_tap_listener = function(){
      console.log("set_tap_listener is activated");
      page.getViewById("left_id").on("tap", function (args) {
        pageno--;
        if (pageno==-1) {
          pageno=3;
        }
        self.set("equipmentpage",pageno);
        self.set("equipmenttitle",titlearray[pageno]);
      });
      page.getViewById("right_id").on("tap", function (args) {
        pageno++;
        if (pageno==4) {
          pageno=0;
        }
        self.set("equipmentpage",pageno);
        self.set("equipmenttitle",titlearray[pageno]);
      });
    }

    equipmentsModel.prototype.unset_tap_listener = function(){
      console.log("unset_tap_listener is activated");
      page.getViewById("left_id").off("tap", function (args) {

      });
      page.getViewById("right_id").off("tap", function (args) {

      });
    }

    equipmentsModel.prototype.equipment_sizing_chart_action = function(){
      console.log("equipment_sizing_chart_action is activated");
      FrameModule.topmost().navigate("pages/home/equipments/equipmentsizingchart/equipmentsizingchart");
    }

    return equipmentsModel;
})(observable.Observable);
page.bindingContext = new equipmentsModel();
}
exports.equipmentsLoaded = equipmentsLoaded;

exports.equipmentsUnloaded = function() {
    self.unset_tap_listener();
};
