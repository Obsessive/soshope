var FrameModule = require("ui/frame");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var Toast = require("nativescript-toast");
var textViewModule=require("ui/text-view");
var page,meditems,self;
var med_array = ["Select the medication",
"ADRENALINE/EPINEPHRINE",
"ANTI SNAKE VENOM",
"ATROPINE SULFATE",
"DEXAMETHASONE",
"FOSPHENYTOIN",
"HYDROCORTISONE",
"IPRATROPIUM MDI",
"LORAZEPAM",
"MIDAZOLAM",
"ORS IN SEVERE DEHYDRATION",
"PHENIRAMINE MALEATE",
"PROZOSIN",
"SALBUTAMOL MDI",
"SALBUTAMOL NEBULIZATION"];
function emergencymedicationsLoaded(args) {
page = args.object;
var emergencymedicationsModel = (function (_super) {
    __extends( emergencymedicationsModel, _super);
    function emergencymedicationsModel() {
        _super.call(this);
	      self=this;
	      self.setui();
	      self.setcontent();
    }

    emergencymedicationsModel.prototype.setui = function(){
      console.log("setui is activated");
      meditems = new observableArray.ObservableArray();
       for (var i = 0; i <med_array.length ; i++) {
         meditems.push(med_array[i]);
       }
       self.set("med_items", meditems);
       page.getViewById("med").on(textViewModule.TextView.propertyChangeEvent,function(eventData){
         console.log("med drop down");
         if((page.getViewById("med").selectedIndex-1) == -1){
           self.set("medpage",14);
         }else {
           self.set("medpage",page.getViewById("med").selectedIndex-1);
         }
        });
        self.set("med_selectedIndex", 0);
  };
  emergencymedicationsModel.prototype.calculate_action = function(){
      console.log("calculate_action is activated");
      if (page.getViewById("med").selectedIndex != 0) {
      	if (page.getViewById("id_weight").text !== "") {
      	self.set("medpage",page.getViewById("med").selectedIndex-1);
      }else{
      	Toast.makeText("Enter the weight","long").show();
      }
      }else{
      	Toast.makeText("Select the medication","long").show();
      }

  };

    emergencymedicationsModel.prototype.setcontent = function(){
      console.log("setcontent is activated");
      self.set("adrenalin1","How to make 1: 10000 solution? \n Take 1ml of 1:1000 and mix with 9 ml of normal saline this will give 1: 10000 \n 1ml – 0.1mg \n ");
      self.set("adrenalin2","EpiPen: Delivers a single 0.3 mg (0.3ml) dose \n EpiPen Jr: Delivers a single 0.15 mg (0.3ml) dose");
      self.set("adrenalin3","Epimephrine :  0.01 ml / kg /dose of 1:1000 - IM ( Antero Lateral Thigh only ) up to a max.dose  of  0.5 ml / dose  every  5 - 15 min, if needed, ");
      self.set("adrenalin4","\nIntra Venous / Intraosseous -  0.1-0.3 ml/kg of 1:10,000 solution – may be repeat every 3-5 min as needed \n\n Intra Tracheal – 0.1ml / kg of 1:1000 solution may repeat every 3 – 5 min if needed \n");
      self.set("adrenalin5","\nBronchodilator: 1:1000 (aqueous):\n\nInfant and child: 0.01ml/kg/dose SC (max. single dose 0.5mL); repeat Q15min x 3-4 doses or Q4 hr if required\n\nCROUP = Nebulization - L-epinephrine (using parenteral 1 mg/mL solution): Nebulization: 0.3 - 0.5 mL/kg of 1:1,000 solution (maximum dose: 5 mL) diluted in NS, may repeat dose every 20 minutes; \n");
      self.set("adrenalin6","Continous Inotropic Support   : 0.1 – 1 mcg / kg / min continuous infusion – titrate dosage as per desired effect  \n Calculation – 0.6 X Body Weight ( KG) is the mg added to make 100ml  \n This will give 0.1mcg/kg/hour = 0.1mg/kg/min \n");
      self.set("snakebite1","Available as lyophilized powder form and liquid form \n 8 – 10 vials of ASV diluted in 5–10 ml per kg body weight of normal saline or D5 W and infused over 1 h \n No need for test dose \n 1.	A repeat dose of ASV should be given when there is persistence of blood incoagulability even after 6 h or continued bleeding after 1–2 h of the initial dose.  \n 2.	When there are worsening neurotoxic or cardiovascular signs even after 1–2 h \n ");
      self.set("dexamethasone1","Available as 1ml – 4mg");
      self.set("dexamethasone2","Oral, IM, IV: 0.6 mg/kg once daily as a single dose or once daily for 2 days; maximum dose: 16 mg/dose\nNote: Duration greater than 2 days is not recommended due to increased risk of metabolic effects (GINA, 2014).\n");
      self.set("dexamethasone3","Oral, IM, IV: 0.6 mg/kg once; usual maximum dose: 16 mg ");
      self.set("fosphenytoin1","Available as 2ml / 50mg of phenytoin equivalent");
      self.set("fosphenytoin2","Loading dose: IM, IV: 15 to 20 mg PE/kg; maximum dose: 1,500 mg PE( PE – Phenytoin Equivalent ).\nAn additional load of 5 mg PE/kg may be given 10 minutes after initial loading infusion\nMaintenance therapy: IM, IV: Initial 5 mg PE/kg/day divided twice daily;\nAdminister at 1 to 3 mg PE/kg/minute\n");
      self.set("hydrocortisone1","Available as 1 vial – 50mg");
      self.set("hydrocortisone2","8 mg/kg/day in 3 or 4 divided doses");
      self.set("hydrocortisone3","To prevent biphasic response 8 mg/kg/day in 3 or 4 divided doses");
      self.set("ipratropiummdi1","Available as 20 mcg / puff  ( change from the previous mail)");
      self.set("ipratropiummdi2","4-8 puffs every 20min for 3 doses later as needed");
      self.set("lorazepam1","Available as 1ml / 2mg");
      self.set("lorazepam2","IV / IM : 0.05 to 0.1 mg/kg (maximum: 4 mg/dose) slow IV over 2 to 5 minutes; may repeat in 5 to 15 minute");
      self.set("midazolam1","Nasal Spray - Available as each meter dose – 0.5mg \nIV / IM = 1ml / 1mg \nIV / IM = 1ml / 5mg \n ");
      self.set("midazolam2","Intra nasal = 0.2 mg/kg; maximum dose: 10 mg; may repeat once to a total maximum of 0.4 mg/kg \n Buccal: 0.2 to 0.5 mg/kg once; maximum dose: 10 mg \n IM - 0.15 to 0.2 mg/kg maximum dose upto 6 mg \n IV – 0.1 - 0.15 mg / kg  \n ");
      self.set("or1","Available as \n 1 sachet: 200ml of water\n 1 sachet: 1000ml of water");
      self.set("or2","Give Orally as much as child can drinks till child reaches  hospital \n If Child is Unable to drink – put Naso gastric Tube , confirm placement and give 20ml / kg / hr of ORS for 6 hours to a total of 120 ml / kg");
      self.set("pheniraminemaleate1","Available as 1ml – 22.7 mg");
      self.set("pheniraminemaleate2","0.5 to 1 mg / kg given as IM or slow IV every 12 hours");
      self.set("prozosin1","Available as each tablet = 1mg, 2mg, 2.5mg, 5 mg");
      self.set("prozosin2","Oral: 0.03 mg/kg/dose; second dose has to be been administered at 3 or 6 hours after initial dose; subsequent doses every 6 hours; therapy has to be been continued for 48 hours or until extremities are warm and dry ");
      self.set("salbutamolmdi1","Available as 100mcg \n 4-8 puffs with spacer every 20 min in the first hour later 4-8 puff every 1-4 hours as needed ");
      self.set("salbutamolnebulization1","Available as 1 respoule – 2.5mg");
      self.set("salbutamolnebulization2","0.15mg/kg ( minimum 2.5mg and maximum 5mg per dose ) every 20 min for 3 doses or 0.3mg / kg/ hour \n Subsequent doses based on clinical improvement");
      self.set("atropinesulfate1","Anticholinergic agent\n Available as \n 1ml : 0.6mg \n 1ml : 1mg");
      self.set("atropinesulfate2","IV /  I.O =  0.02 mg/kg/dose; may repeat once in 3 to 5 minutes; reserve use for those patients unresponsive to improve oxygenation and to epinephrine");
      self.set("atropinesulfate3","0.04 to 0.06 mg/kg/dose; may repeat once if needed");
      self.set("atropinesulfate4","IV/ IO/  IM: Initial: 0.05 to 0.1 mg/kg; repeat every 5 to 10 minutes as needed, doubling the dose if previous dose did not induce atropinization. Maintain atropinization by administering repeat doses as needed for ≥2 to 12 hours based on recurrence of symptoms ");
    };

    return emergencymedicationsModel;
})(observable.Observable);
page.bindingContext = new emergencymedicationsModel();
}
exports.emergencymedicationsLoaded = emergencymedicationsLoaded;
