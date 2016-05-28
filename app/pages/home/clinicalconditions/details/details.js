var FrameModule = require("ui/frame");
var observable = require("data/observable");
var ObservableArray = require('data/observable-array');
var page,id,pageno=0;
var Anaphylaxisarray = ["DEFINITION","CRITERION 1","CRITERION 2 AND 3","TREATMENT"];
var Animalbitearray = ["FIRST AID AND VACCINE","RIG (RABIES IMMUNOGLOBULIN)"];
var Cardiogenicshockarray = ["SHOCK–CARDIOGENIC"];
var Epistaxisarray = ["EPISTAXIS"];
var Excessivecryingarray = ["EXCESSIVE CRYING"];
var Foreignbodyarray = ["FOREIGN BODY"];
var Ingestionsarray= ["PREVENTION","COMMON TOXINS AND TREATMENT"];
var Noncardiogenicshockarray =["SHOCK–NON CARDIOGENIC"];
var Scorpionbitearray = ["FIRST AID","AUTONOMIC STORM","TREATMENT"];
var Seizuresarray = ["TREATMENT","SEND HOME","INFORM WARNING SIGNS","DANGER SIGNS"];
var Snakebitearray = ["FIRST AID-RIGHT","ASV INDICATION","ASV DOSAGE"];
var AsthmaMILDarray = ["CLINICAL FEATURES","TREATMENT","PARENT EDUCATION"];
var AsthmaMODERATEarray = ["CLINICAL FEATURES","TREATMENT","PARENT EDUCATION","TRANSPORT"];
var AsthmaSEVEREarray = ["CLINICAL FEATURES","TREATMENT","TRANSPORT"];
var CroupMILDarray = ["CLINICAL FEATURES","TREATMENT","PARENT EDUCATION"];
var CroupMODERATEarray = ["CLINICAL FEATURES","TREATMENT","PARENT EDUCATION","TRANSPORT"];
var CroupSEVEREarray = ["CLINICAL FEATURES","TREATMENT","TRANSPORT"];
var DiarrheaNODEHYDRATIONarray = ["CLINICAL FEATURES","TREATMENT"];
var DiarrheaSOMEDEHYDRATIONarray = ["CLINICAL FEATURES","TREATMENT"];
var DiarrheaSEVEREDEHYDRATIONarray =["CLINICAL FEATURES","TREATMENT","TRANSPORT"];
var FeverGREENarray = ["CLINICAL FEATURES","TREATMENT","PARENT EDUCATION"];
var FeverYELLOWarray = ["CLINICAL FEATURES","TREATMENT"];
var FeverREDarray =["CLINICAL FEATURES","TREATMENT"];
var PneumoniaPNEUMONIAarray = ["CLINICAL FEATURES","TREATMENT","PARENT EDUCATION"];
var PneumoniaSEVEREPNEUMONIAarray = ["CLINICAL FEATURES","TREATMENT","TRANSPORT"];
var PneumoniaVERYSEVEREPNEUMONIA =["CLINICAL FEATURES","TREATMENT"];
var HeadinjuryMILDarray = ["CLINICAL FEATURES","TREATMENT","PARENT EDUCATION"];
var HeadinjurySEVEREarray = ["CLINICAL FEATURES","TREATMENT","PARENT EDUCATION"];
function detailsLoaded(args) {
  page = args.object;
  var detailsModel = (function (_super) {
    __extends( detailsModel, _super);
    function detailsModel() {
      _super.call(this);
      self=this;
      console.log("details");
      id = page.navigationContext.info;
      self.set_tap_listener();
      self.set("detailsdisplay",id);
      self.set("detailspage",pageno);
      console.log(id);
      if (id == "Anaphylaxis") {
        self.set("Anaphylaxis1","• Anaphylaxis is highly likely when any ONE of the following three criteria is fulfilled: ");
        self.set("Anaphylaxis2","• Acute onset of an illness (minutes to several hours) involving the skin, mucosal tissue, or both (eg, generalized hives, pruritus or flushing, swollen lips-tongue-uvula) and at least one of the following:");
        self.set("Anaphylaxis3","(eg, dyspnea, wheeze-bronchospasm, stridor, reduced peak expiratory flow, hypoxemia).");
        self.set("Anaphylaxis4"," Skin symptoms and signs are present in up to 90 percent of anaphylactic episodes. This criterion will therefore frequently be helpful in making the diagnosis.");
        self.set("Anaphylaxis5","• Two or more of the following that occur rapidly after exposure to a LIKELY allergen for that patient (minutes to several hours):\n• Involvement of the skin-mucosal tissue (eg, generalized hives, itch-flush, swollen lips-tongue-uvula).\n• Respiratory compromise (eg, dyspnea, wheeze-bronchospasm, stridor, reduced peak expiratory flow, hypoxemia).\n• Reduced BP or associated symptoms and signs (eg, hypotonia [collapse], syncope, incontinence).\n• Persistent gastrointestinal symptoms and signs (eg, crampy abdominal pain, vomiting).\n");
        self.set("Anaphylaxis6","\n• Reduced BP after exposure to a KNOWN allergen forthat patient (minutes to several hour\n•In infants and children, reduced BP is defined as low systolic BP (age specific)* or greater than 30 percent decrease in systolic BP");
        self.set("Anaphylaxis7","• Always inject epinephrine Intra Muscular – Antero Lateral \n• Thigh ; (repeat one more dose at 5-15 min if required) \n• Dose of IM adrenaline (1 mg / ml) dose:0.01 ml/kg of undiluted adrenaline\n• Maximum total dose of 0.5 ml\n• The use of subcutaneous or inhaled adrenaline in the treatment of anaphylaxis is not recommended - Except Laryngeal stridor (2-5ml nebulised)");
        self.set("Anaphylaxis8","1)Removal of the trigger and call for help\n2)Posture:\n• respiratory distress- sitting up with circulatory instability - lying on back with the lower extremities elevated\n• where unconscious - recovery position\n•Patients should avoid sudden abrupt change to a \n3) Oxygen: administered by face mask.\n4) Fluid support : NS boluses of 20 ml/kg if shock.\n5) Inhaled short-acting beta2-agonists: to relieve \nsymptoms of bronchoconstriction\n");
        self.set("Anaphylaxis9","•Only been documented to relieve cutaneous symptoms");
        self.set("Anaphylaxis10","\n•Oral or parenteral steroids may be given once first- and \n•second-line therapies have been administered.\n•To  prevent protracted anaphylaxis symptoms, \n•particularly in patients with concomitant asthma, and also biphasic reactions)\n•Monitoring and discharge\n•Patients who presented with hypotension require \n•close monitoring for at least 12-24 hours. \n•About 17% of children can have late phase response in anaphylaxis\n•Before discharge, the risk of future reactions should be assessed and an adrenaline injection prescribed to those at risk of recurrence, also to provide discharge advice and refer to Allergist for allergy ");
        self.set("Anaphylaxis11","Skin symptoms or signs are absent or unrecognized in up to 20 percent of anaphylactic episodes. Criterion 2 incorporates gastrointestinal symptoms in addition to skin symptoms, respiratory symptoms, and reduced BP. It is applied to patients with exposure to a substance that is a likely allergen for them.\n");
        self.set("detailstitle",Anaphylaxisarray[pageno]);
      }else if(id == "Animal bite"){
        self.set("Animalbite1","•Wash under running water with soap for 15-20min\n•Wound closure is controversial. Closure can be done only if low risk of infection (especially in sites where cosmetics is an issue)\n•Don’t close incase of high risk of infection (extensive wounds, wounds over MCP joints, head and neck wounds) and cat bite wounds\n•Tetanus toxoid to be given after understanding previous vaccination status\n\n");
        self.set("Animalbite2","\n•Vaccine should be administered by deep intramuscular \n•Injection in the Deltoid or Anterolateral thigh never in the buttocks\n");
        self.set("Animalbite3","• RIG to be administered on day 0 of vaccination\n• 20 IU / KG Human RIG \n•40 IU / KG for Horse Immunoglobulin\n• Infiltrate as much as possible in and around the wound.\n• The rest of it should be injected intramuscularly (thigh/deltoid)");
        self.set("detailstitle",Animalbitearray[pageno]);
      }else if (id == "Cardiogenic shock") {
        self.set("Cardiogenicshock1","\n•Compensated (perfusion is poor but BP is maintained)\n•Decompensated (perfusion is poor but BP is low)\n\n•ABC \n•Oxygen\n•Vascular access – IV or IO \n•Normal saline bolus 10 ml / kg over 30 min\n•Reassess circulation after each bolus\n•Check Glucose\n•Transport consider inotropes (Dopamine) if hypotensive  or time to shift > 4 hrs\n•Monitoring through transport");
        self.set("detailstitle",Cardiogenicshockarray[pageno]);
      }else if (id == "Epistaxis") {
        self.set("Epistaxis1","•First Aid\n•Algorithm");
        self.set("detailstitle",Epistaxisarray[pageno]);
      }else if (id == "Excessive crying") {
        self.set("Excessivecrying1","\nRule 1-Birth details – children with cerebral palsy / hearing loss have excessive crying\nRule 2—Have you assessed feeding issues , aspiration issues , food allergy issues\nRule 3 - Infantile coliky ?\n•Wessel criteria or the rule of three: crying lasts for more than three hours per day, occurs on more than three days per week, and persists for more than three weeks\n•Cry is paroxysmal , \n•Crying is more vigorous and intense\n•Crying with hypertonia\n•Crying is inconsolable\nRule 4 \n•Is the infant consolable? – cry which is consolable is usually non dangerous\nRule 5 \n•Have you checked the eardrum? Otitis media\nRule 6 \n•How is the urine stream? – UTI / Obstruction\nRule 7\n•Does the baby have GI symptoms ? Intussception / cramps\nRule 8 \n•Have you undressed the baby completely? – look for Genitals\nRule 9 \n•Have you checked the fundus and skin – Shaken baby syndrome\nRule 10\n•Is The Baby Hypoxic? Respiratory infections or cardiac failure\nRule 11\n•How is the family interaction? Over stimulation / under stimulation");
        self.set("detailstitle",Excessivecryingarray[pageno]);
      }else if (id == "Foreign body") {
        self.set("Foreignbody1","•Abdominal thrusts for Infants\n•Chest thrusts for Infants");
        self.set("detailstitle",Foreignbodyarray[pageno]);
      }else if (id == "Ingestions") {
        self.set("Ingestions1","As pediatricians prevention is the key .\n• Child proof containers for medicines\n• Child proof home from access to naphthalene balls,camphor \n• Child should not eat things smaller than their thumb up to 2 years\n• Make sure the strength of common medicines are explained\n• Child proof electrical sockets\n• Explain about the importance of not storing dangerous material in innocuous containers\n• Advise against blind finger sweeps & inducing emesis\n");
        self.set("Ingestions2","\n•Q)Child has swallowed dettol\nA)Concentrated Dettol can cause serious laryngeal necrosis –refer for bronchoscopy\n•Q)Child has drunk Listerine\nA)Listerine- has alcohol. Patient may become inebriated. Management depends on amount ingested from nothing to observation in hospital.\n•Q)Swallowed a lizard\nA)Lizard nothing  \n•Q)Swallowed a piece  of mercury thermometer\nA)Mercury thermometer nothing. Treatment too toxic for the doseingested\n•Q)Ate some soap\nA)Soap no treatment\n•Q)Bit half of the mosquito repellent mat mosquito repellent generally no need of any treatment\n");
        self.set("detailstitle",Ingestionsarray[pageno]);
      }else if (id == "Non cardiogenic shock") {
        self.set("Noncardiogenicshock1","\n•Compensated (perfusion is poor but BP is maintained)\n•Decompensated (perfusion is poor but BP is low)\n\n•ABC\n•Oxygen\n•Intravascular/Intraosseous access\n•Normal Saline bolus of 20ml/kg over 10-15 minutes\n•Reassess circulation after each bolus\n•Check glucose \n•First dose of ceftriaxone- 100mg/Kg\n•Transport consider inotropes (Dopamine) if hypotensive  or time to shift > 4 hrs\n•Monitoring through transport");
        self.set("detailstitle",Noncardiogenicshockarray[pageno]);
      }else if (id == "Scorpion bite") {
        self.set("Scorpionbite1","•Clean the wound with antiseptic solution\n•Local installation of lignocaine – if pain is severe\n•immobilize the limb\n•cold compresses\n•avoid narcotics*\n* NARCOTICS HAVE A SYNERGISTIC NEUROTOXIC EFFECT WITH VENOM ");
        self.set("Scorpionbite2","•Sweating\n•Salivation \n•Vomiting\n•Priapism\n•Fever\n•Shivering\n•Hypotension\n•Bradycardia");
        self.set("Scorpionbite3","• Prazosin - Use only when \n• Evidence of autonomic storm\n• Not  as prophylaxis in children when pain is the only symptom\n• Oral Prazosin stat, 30 microgram/kg/dose \n• Repeat the dose if vomiting\n• Repeated in the same dose at the end of 3 hours according to clinical response and later every 6 hours till extremities are warm, dry and peripheral veins are visible easily\n• Do not lift the child after FIRST DOSE");
        self.set("detailstitle",Scorpionbitearray[pageno]);
      }else if (id == "Seizures") {
        self.set("Seizures1","• Assess ABC’s – Airway, Breathing, Circulation.<br / >• Apply 100 % Oxygen through mask to all patients.\n• Midazolam nasal spray - 0.2mg/kg/dose (4puffs/10kg) when Intra venous access is not available\n");
        self.set("Seizures2","\n• Midazolam 0.25-0.5 mg/kg/dose - trickling the appropriate dose between the lower cheek and gum with the patient in the recovery position\n    <b>Or</b>\n• Inj Lorazapam 0.05 to 0.1 mg/kg intravenous when venous access is available\n• Efforts should be made to lower fever with antipyretics\n• Check for Hypoglcemia\n\n• If seizure persists 2nd line drug\n•fosphenytoin (20 mg phenytoin equivalents [PE]/kg intravenously). ");
        self.set("Seizures3","• Child is fully conscious\n• Simple febrile seizure\n• Age above 6 months\n• No serious infection\n• Family confident to managing the child");
        self.set("Seizures4","• If any further seizure\n• Child drowsy / excessively irritable\n• Poor feeding \n• Inability to move any part of the body\n• Persistent vomiting\n");
        self.set("Seizures5","• Focal seizure\n• Decrease in level of conciousness\n• Focal neurological signs\n• Prolonged seizure\n• Multiple seizure\n• Developmental delay\n• Meningeal signs present\n• Hypoglycemia\n•< 3months");
        self.set("detailstitle",Seizuresarray[pageno]);
      }else if (id == "Snake bite") {
        self.set("Snakebite1","• R  - Reassure the patient (70% non venomous; among venomous only \n• 50% are actually envenomed)\n• I  - Immobilise without compression: same way as for fracture\n• G  - Get to H  - Hospital immediately\n• T  - Telltale signs for the doctor");
        self.set("Snakebite2","\n• 20 WHOLE BLOOD CLOTTING TIME (20WBCT) ≥ 20 minutes (where 1–2 mL of blood allowed to stand in a clean, dry glass tube at room temperature for 20 minutes remains unclotted) \n• Current Systemic Bleeding\n• Neurotoxic signs\n");
        self.set("Snakebite3","• Half of the bitten limb (in the absence of a tourniquet) \n• Rapidly Crossing Joint");
        self.set("Snakebite4","•10 Vials in 1 Hour No need for ASV test dose");
        self.set("detailstitle",Snakebitearray[pageno]);
      }else if (id == "Asthma MILD") {
        self.set("AsthmaMILD1","Mild Attack\n• RR - < 40\n•Wheeze – Terminal Expiration with stethoscope\n• Mild Increase in accessory muscle use");
        self.set("AsthmaMILD2","• Salbutamol 100mcg MDI 4 - 8 puffs every 20 minutes in the first hour\n• After 1st hr, 4- 8 puffs of salbutamol 100mcg every 1-4 hrs as needed.\n• Salbutamol Nebulization Dose is 0.15 mg/kg (minimum 2.5 mg and maximum 5 mg per dose )every 20 min for three doses Or 0.3mg/kg/hour\n•Continue preventer MDI medications");
        self.set("AsthmaMILD3","• Fast Breathing\n• Chest Indrawing ( chest moving In and Out )\n• Unable to speak in sentences\n• Severe cough \n• Restlessness");
        self.set("detailstitle",AsthmaMILDarray[pageno]);
      }else if (id == "Asthma MODERATE") {
        self.set("AsthmaMODERATE1","Moderate Attack\n• RR - < 50\n• Wheeze – Complete Expiration with stethoscope\n• Clear Increase in accessory muscle use \n• Note - Child with Spo2 < 92% has higher chances of requiring admission");
        self.set("AsthmaMODERATE2","• Oxygen to maintain Spo2 > 92%\n• Salbutamol 100mcg MDI 4 - 8 puffs every 20 minutes in the first hour After 1st hr. 4- 8 puffs of salbutamol 100mcg every 1-4 hrs as needed.\n• Salbutamol Nebulization Dose is 0.15 mg/kg (minimum 2.5 mg and maximum 5 mg per dose )every 20 min for three doses Or 0.3 mg/kg/hour through oxygen\n• Ipratropium MDI dose is 20 mcg/puff 4-8 puffs repeated every 20 minutes then as needed\n• Ipratropium Nebulization Dose is 250 mcg < 20 kg and 500 mcg > 20 kg for 3 doses every 20 min then \n•as needed\n•Prednisolone 1 mg/kg (3 – 10 days) or Dexamethasone (Oral or parenteral) 0.6 mg/kg\n•Send home  / send Hospital");
        self.set("AsthmaMODERATE3","• Fast Breathing\n• Chest Indrawing ( chest moving In and Out )\n• Unable to speak in sentences\n• Severe cough\n• Restlessness");
        self.set("AsthmaMODERATE4","• Send the child in an Ambulance with medical team\n• Continue on going treatment","• Send the child in an Ambulance with medical team\n•Continue on going treatment");
        self.set("detailstitle",AsthmaMODERATEarray[pageno]);
      }else if (id == "Asthma SEVERE") {
        self.set("AsthmaSEVERE1","Severe Attack\n•RR - > 50\n• Wheeze – During Inspiration and Expiration without stethoscope\n• Maximum Increase in accessory muscle use \n• Note - Child with Spo2 < 92% has higher chances of requiring admission");
        self.set("AsthmaSEVERE2","•Oxygen to maintain Spo2 > 92%\n• Salbutamol Nebulization Dose is 0.15 mg/kg minimum 2.5 mg every 20 min for three doses Or 0.3 mg/kg/hour with oxygen \n•Ipratropium Nebulization Dose is 250 mcg < 20 kg and 500 mcg > 20 kg for 3 doses every 20 min then as needed \n• Prednisolone 1 mg/kg (3-5 days)or Dexamethasone (Oral or parenteral) 0.6mg/kg\n• Send Hospital in an Ambulance with oxygen driven nebulization");
        self.set("AsthmaSEVERE3","• Send the child in an Ambulance with medical team\n•Continue on going treatment","• Send the child in an Ambulance with medical team\n• Continue on going treatment");
        self.set("detailstitle",AsthmaSEVEREarray[pageno]);
      }else if (id == "Croup MILD") {
        self.set("CroupMILD1","• Looks Fine\n• Barking cough\n• Stridor on crying\n• No accessory muscle use\n• No tachypnea\n• Saturations Normal");
        self.set("CroupMILD2","• Symptomatic treatment\nParacetamol -15mg / kg every 6 hours\n•Adequate hydration\n• Single dose of oral steroids may be used ");
        self.set("CroupMILD3","• Irritable\n• Increased crying\n• Barking cough\n• Stridor (Loud sounds while breathing) at rest\n• Chest indrawing\n• Fast breathing\n• Neck muscles working");
        self.set("detailstitle",CroupMILDarray[pageno]);
      }else if (id == "Croup MODERATE") {
        self.set("CroupMODERATE1","• Irritable\n•Increased crying\n• Barking cough\n•Stridor at rest\n• 1-2 accessory muscle use\n• Tachypnea\n• Saturations Normal");
        self.set("CroupMODERATE2","• Steroids (Dexamethasone 0.6 mg/kg oral, IV, IM) \n•Nebulized adrenaline -0.4 ml/kg upto a maximum of 5 ml of a 1:1000 dilution, Can be repeated every 20-30 minutes for a maximum of 3 nebulizations\n• Symptomatic treatment\n• Close monitoring");
        self.set("CroupMODERATE3","Child improves Send Home ( Parent Education)\n• Irritable\n•Increased crying\n• Barking cough\n• Stridor (Loud sounds while breathing) at rest\n• Chest indrawing\n•Fast breathing\n•Neck muscles working");
        self.set("CroupMODERATE4","• Send the child in an Ambulance with medical team\n• Continue on going treatment","• Send the child in an Ambulance with medical team\n•Continue on going treatment");
        self.set("detailstitle",CroupMODERATEarray[pageno]);
      }else if (id == "Croup SEVERE") {
        self.set("CroupSEVERE1","• Irritable/Occ Drowsy\n•Increased crying\n• Barking cough\n•Loud Stridor at rest\n• >2accessory muscle use\n• Tachypnea\n• Saturations may be low");
        self.set("CroupSEVERE2","• Oxygen to maintain Spo2 > 92%\n•Steroids (Dexamethasone 0.6 mg/kg oral, iv, IM) \n• Nebulized adrenaline 0.4 ml/kg upto a maximum of 5 ml of a 1:1000 dilution, \n• Can be repeated every 20-30 minutes for a maximum of 3 nebulizations)\n• Rapid transfer ( Ambulance )");
        self.set("CroupSEVERE3","• Send the child in an Ambulance with medical team\n•Continue on going treatment","• Send the child in an Ambulance with medical team\n• Continue on going treatment");
        self.set("detailstitle",CroupSEVEREarray[pageno]);
      }else if (id == "Diarrhea NO DEHYDRATION") {
        self.set("DiarrheaNODEHYDRATION1","• If two or more of the signs are NOT present, classify the child as having \nNO DEHYDRATION\n•Restless, irritable\n•Sunken eyes\n• Drinks eagerly, thirsty\n• Skin pinch goes back slowly (less than 2 seconds but longer than normal)");
        self.set("DiarrheaNODEHYDRATION2","• Treatment at home - Plan A\n• Counsel the mother on the 4 rules of home treatment.\n• Give extra fluid  and ORS\n•Give zinc supplements\n• 10 mg in < 6months – 14 days \n• 20 mg in > 6 months – 14 days feeding \n• Continue feeding\n• When to return\nGive extra fluid\n•if child is breast feed give ORS frequently\n• If not exclusively breast feed - give food based fluids, rice water , yoghurt drinks) or ORS\n•Continue feeding regularly do not decrease oral intake\n• When to return\n• excessive stools or vomiting\n• inability to eat or drink\n• lethargy, unconsciousness, convulsions,\n Follow up in 2 days if there is no improvement");
        self.set("detailstitle",DiarrheaNODEHYDRATIONarray[pageno]);
      }else if (id == "Diarrhea SOME DEHYDRATION") {
        self.set("DiarrheaSOMEDEHYDRATION1","• If two or more of these signs ARE PRESENT, classify the child as having \n• SOME DEHYDRATION.\n• Restless, irritable\n• Sunken eyes\n• Drinks eagerly, thirsty\n• Skin pinch goes back slowly (less than 2 seconds but longer than normal)");
        self.set("DiarrheaSOMEDEHYDRATION2","• Give 75ml / kg of ORS over a 4 hour period\n• For infants below 6 months who are not breastfed, also give 100–200ml clean water during this period\n• Reassess the child and classify the child for dehydration correction\n• Counsel the mother on the 4 rules of home treatment.\n• Give extra fluid\n• if child is breast feed give ORS frequently\n• If not exclusively breast feed - give food based fluids, rice water , yoghurt drinks) or ORS\n• Give zinc supplements\n• 10 mg in < 6months – 14 days \n• 20 mg in > 6 months – 14days\n• Feeding\n• Continue feeding regularly do not decrease oral intake\nWhen to return\n• excessive stools or vomiting\n• inability to eat or drink\n• lethargy, unconsciousness, convulsions,\n Follow up in 2 days if there is no improvement");
        self.set("detailstitle",DiarrheaSOMEDEHYDRATIONarray[pageno]);
      }else if (id == "Diarrhea SEVERE DEHYDRATION") {
        self.set("DiarrheaSEVEREDEHYDRATION1","• If two or more of the following signs ARE PRESENT, classify the child as having SEVERE DEHYDRATION.\n• Lethargic or unconscious\n• Sunken eyes\n•Not able to drink or drinking poorly\n• Skin pinch goes back very slowly (longer than 2 seconds)");
        self.set("DiarrheaSEVEREDEHYDRATION2","• If child can drink – continue to give ORS by mouth \n•Start Intravenous / Intra osseous access\n•Give 100ml / kg of Ringer Lactate or Normal Saline divided as follows\n•BY AGE\n• Infants  < 12 months  First give 30ml/kg In 1 hour   Then give 70ml/kg In 5 hour\n• Child > 12 month – 5 year First give 30ml/kg In 30 min   Then give 70ml/kg In 2 ½ hour\n• Reassess the child and classify dehydration and plan the treatment\n• If Intravenous / Intra osseous access not possible\n• Put NG tube and confirm placement\n• Give 20 ml / kg / hour of ORS for 6 hours , total 120ml / kg\n• If there is repeated vomiting or abdominal distension – Give ORS more slowly\n• Reassess the child every 1 -2 hours while awaiting transfer");
        self.set("DiarrheaSEVEREDEHYDRATION3","• Continue IV / IO or NG Fluid Treatment\n• If Child can take Orally – Continue ORS\n•Send the child in an Ambulance with medical Team");
        self.set("detailstitle",DiarrheaSEVEREDEHYDRATIONarray[pageno]);
      }else if (id == "Fever GREEN") {
        self.set("FeverGREEN1","• Colour-Normal colour of skin, lips and tongue\n•Activity\n-Strong/normal cry/not crying.\n-Stays awake or awakens quickly.\n-Content/smiles.\n-Responds normally to social cues\n•Hydration  Normal skin and eyes.Moist mucous membranes\n•Other  None of the amber or red symptoms or signs");
        self.set("FeverGREEN2","• Paracetamol 15mg/kg every 6 hours as per the need\n• Hydration management");
        self.set("FeverGREEN3","• Child is less active\n• Skin color – pale\n• Breathing difficulty\n• Poor feeding \n• Dry mucus membrane \n• Decreased urine output");
        self.set("detailstitle",FeverGREENarray[pageno]);
      }else if (id == "Fever YELLOW") {
        self.set("FeverYELLOW1","After Colour Pallor reported by parent/carer \nActivity \n-Not responding normally to social cues.\n-Wakes only with prolonged stimulation.\n-Decreased activity.\n-No smile\n•After Respiratory Nasal flaring.Tachypnoea:   RR > 50/min age 6-12 months,RR > 40/min age > 12 months.Oxygen saturation ≤ 95% in air.Crackles\n•After Hydration Dry mucous membranes.Poor feeding in infants.CRT ≥3 seconds.Reduced urine output\n•Other  A Fever for ≥5 days.Swelling of a limb or joint.Non-weight bearing/not using an extremity.new lump >2cm");
        self.set("FeverYELLOW2","• Paracetamol 15mg/kg every 6 hours as per the need\n• Hydration management \n• Refer child for inpatient care");
        self.set("detailstitle",FeverYELLOWarray[pageno]);
      }else if (id == "Fever RED") {
        self.set("FeverRED1","• Colour  Pale/mottled/ashen/blue\n•Activity \n-No response to social cues.\n-Appears ill to a healthcare professional.\n-Unable to rouse or if roused does not stay awake.\n-Weak/high pitched/continuous cry\n• After Respiratory Grunting.Tachypnoea: RR > 60/min .Moderate or severe chest indrawing\n•After Hydration Reduced skin turgor\n• Other Age 0-3 months, temperature ≥ 38°C.Age 3-6 months, temperature ≥ 39°C.Non blanching rash.Neck stiffness.Focal neurological signs.Bile-stained vomiting.Bulging fontanelle.Status epilepticus.Focal Seizures");
        self.set("FeverRED2","• Stabilize Airway , Breathing and Circulation\n•Oxygen to maintain spo2 > 92 %\n• Inj Ceftriaxone 100mg / kg once a day \n• Refer immediately in an ambulance to hospital for Inpatient care");
        self.set("detailstitle",FeverREDarray[pageno]);
      }else if (id == "Pneumonia PNEUMONIA") {
        self.set("PneumoniaPNEUMONIA1","• Only Tachypnea\n• No retractions\n• Age - > 3months\n• Sensorium normal");
        self.set("PneumoniaPNEUMONIA2","• Oral Amoxiciilin 40 -90mg/kg for 5 days\n•Supportive treatment\n• Fever management\n• Hydration management\n• Nutrition management\n• Follow up closely");
        self.set("PneumoniaPNEUMONIA3","• Fast Breathing\n• Chest indrawing ( chest going in and out )\n• Decreased activity\n• Poor feeding \n• Looks dehydrated");
        self.set("detailstitle",PneumoniaPNEUMONIAarray[pageno]);
      }else if (id == "Pneumonia SEVERE PNEUMONIA") {
        self.set("PneumoniaSEVEREPNEUMONIA1","• Tachypnea + Retractions\n•Any Pneumonia  < 3 months is severe\n• Sensorium normal");
        self.set("PneumoniaSEVEREPNEUMONIA2","• Inj Ceftriaxone 100mg / kg slow IV\n• Supportive treatment\n•Fever management\n• Hydration management \n• Nutrition management\n• Refer for Inpatient care and IV medications");
        self.set("PneumoniaSEVEREPNEUMONIA3","• No Observation period \n•Send for Inpatient Care\n• Oxygenation\n• Perfusion \n• Communication with referral Hospital\n• Rarely may need airway\n• Warm care for infants and under nourished children");
        self.set("detailstitle",PneumoniaSEVEREPNEUMONIAarray[pageno]);
      }else if (id == "Pneumonia VERY SEVERE PNEUMONIA") {
        self.set("PneumoniaVERYSEVEREPNEUMONIA1","• Tachypnea + Retractions\n•Not able to drink ,\n• Convulsions, \n• Abnormally  sleepy or difficult to wake up, \n• Grunting,\n• Severe malnutrition");
        self.set("PneumoniaVERYSEVEREPNEUMONIA2","• Stabilize Airway , Breathing and Circulation \n• Oxygen to maintain SPO2 >92%\n•Treat Hypoglycemia\n• Inj Ceftriaxone 100mg / kg slow IV \n• Intra Venous Fluids \n• Other Supportive treatment \n• Refer for Inpatient care");
        self.set("PneumoniaVERYSEVEREPNEUMONIA3","• Oxygenation\n• Perfusion \n• Communication\n• Rarely may need airway\n• Warm care for infants and under nourished children");
        self.set("detailstitle",PneumoniaVERYSEVEREPNEUMONIAarray[pageno]);
      }else if (id == "Head injury MILD") {
        self.set("HeadinjuryMILD1","Indication for CT Scan\n• Child not alert\n• Progressive headache\n• Worsening level of consciousness,\n• Definite Loss of Consciousness for more than few seconds,\n• Focal or abnormal neurological findings, \n• Seizure, \n• Persistent Vomiting\n• Penetrating skull injuries, \n• Signs of a basal or depressed skull fracture");
        self.set("HeadinjuryMILD2","• Refer home with parent education \n•If unsure observe for 24 hours");
        self.set("HeadinjuryMILD3","Progressive headache\n• Worsening level of consciousness,\n• Focal or abnormal neurological findings, \n• Seizure, \n• Persistent Vomiting\n• Poor feeding\n• In infants, bulging anterior fontanel\n• Observe the child for above symptoms for 24 hours\n• Visit nearest hospital if any of the above symptoms are present");
        self.set("detailstitle",HeadinjuryMILDarray[pageno]);
      }else if (id == "Head injury SEVERE") {
        self.set("HeadinjurySEVERE1","• Child younger than two years of age is not acting normally\n• Seizure, confusion, or loss of consciousness  ( > 5 seconds )\n• Severe or worsening headache\n• Vomiting > 2 times after fall\n• High-risk mechanism, such as a fall from greater than 3 to 5 feet , significant motor vehicle collision, penetrating injury, inflicted injury, or unwitnessed fall\n• Pre-existing conditions that place the child at risk for intracranial hemorrhage, such as arterio-venous malformation or a bleeding disorder\n• Concerns about non accidental traumaScalp abnormalities, such as hematoma> 3cm in non frontal area ,tenderness, or depression\n• In infants, bulging anterior fontanel\n• Abnormal mental status\n• Focal neurologic abnormality\n• Signs of basilar skull fracture");
        self.set("HeadinjurySEVERE2","• Manage Airway, Breathing and circulation,\n• IF GCS is less than 9 secure airway before transfer\n• Control Bleeding\n• Apply splints where ever necessary\n• Start on IV fluids if expecting delay in reaching hospital \n•Transport the child in an Ambulance with medical care facilities \n•during transport");
        self.set("detailstitle",HeadinjurySEVEREarray[pageno]);
      }
    }

    detailsModel.prototype.set_tap_listener = function(){
      console.log("set_tap_listener is activated");
      if (id == "Anaphylaxis") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=3;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Anaphylaxisarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==4) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Anaphylaxisarray[pageno]);
        });
      }else if(id == "Animal bite"){
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=1;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Animalbitearray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==2) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Animalbitearray[pageno]);
        });
      }else if (id == "Cardiogenic shock") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Cardiogenicshockarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==1) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Cardiogenicshockarray[pageno]);
        });
      }else if (id == "Epistaxis") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Epistaxisarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==1) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Epistaxisarray[pageno]);
        });
      }else if (id == "Excessive crying") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Excessivecryingarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==1) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Excessivecryingarray[pageno]);
        });
      }else if (id == "Foreign body") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Foreignbodyarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==1) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Foreignbodyarray[pageno]);
        });
      }else if (id == "Ingestions") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=1;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Ingestionsarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==2) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Ingestionsarray[pageno]);
        });
      }else if (id == "Non cardiogenic shock") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Noncardiogenicshockarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==1) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Noncardiogenicshockarray[pageno]);
        });
      }else if (id == "Scorpion bite") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=2;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Scorpionbitearray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==3) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Scorpionbitearray[pageno]);
        });
      }else if (id == "Seizures") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=3;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Seizuresarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==4) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Seizuresarray[pageno]);
        });
      }else if (id == "Snake bite") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=2;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Snakebitearray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==3) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",Snakebitearray[pageno]);
        });
      }else if (id == "Asthma MILD") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=2;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",AsthmaMILDarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==3) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",AsthmaMILDarray[pageno]);
        });
      }else if (id == "Asthma MODERATE") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=3;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",AsthmaMODERATEarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==4) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",AsthmaMODERATEarray[pageno]);
        });
      }else if (id == "Asthma SEVERE") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=2;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",AsthmaSEVEREarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==3) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",AsthmaSEVEREarray[pageno]);
        });
      }else if (id == "Croup MILD") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=2;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",CroupMILDarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==3) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",CroupMILDarray[pageno]);
        });
      }else if (id == "Croup MODERATE") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=3;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",CroupMODERATEarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==4) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",CroupMODERATEarray[pageno]);
        });
      }else if (id == "Croup SEVERE") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=2;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",CroupSEVEREarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==3) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",CroupSEVEREarray[pageno]);
        });
      }else if (id == "Diarrhea NO DEHYDRATION") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=1;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",DiarrheaNODEHYDRATIONarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==2) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",DiarrheaNODEHYDRATIONarray[pageno]);
        });
      }else if (id == "Diarrhea SOME DEHYDRATION") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=1;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",DiarrheaSOMEDEHYDRATIONarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==2) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",DiarrheaSOMEDEHYDRATIONarray[pageno]);
        });
      }else if (id == "Diarrhea SEVERE DEHYDRATION") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=2;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",DiarrheaSEVEREDEHYDRATIONarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==3) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",DiarrheaSEVEREDEHYDRATIONarray[pageno]);
        });
      }else if (id == "Fever GREEN") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=2;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",FeverGREENarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==3) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",FeverGREENarray[pageno]);
        });
      }else if (id == "Fever YELLOW") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=1;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",FeverYELLOWarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==2) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",FeverYELLOWarray[pageno]);
        });
      }else if (id == "Fever RED") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=1;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",FeverREDarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==2) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",FeverREDarray[pageno]);
        });
      }else if (id == "Pneumonia PNEUMONIA") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=2;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",PneumoniaPNEUMONIAarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==3) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",PneumoniaPNEUMONIAarray[pageno]);
        });
      }else if (id == "Pneumonia SEVERE PNEUMONIA") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=2;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",PneumoniaSEVEREPNEUMONIAarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==3) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",PneumoniaSEVEREPNEUMONIAarray[pageno]);
        });
      }else if (id == "Pneumonia VERY SEVERE PNEUMONIA") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=2;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",PneumoniaVERYSEVEREPNEUMONIAarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==3) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",PneumoniaVERYSEVEREPNEUMONIAarray[pageno]);
        });
      }else if (id == "Head injury MILD") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=2;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",HeadinjuryMILDarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==3) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",HeadinjuryMILDarray[pageno]);
        });
      }else if (id == "Head injury SEVERE") {
        page.getViewById("left_id").on("tap", function (args) {
          pageno--;
          if (pageno==-1) {
            pageno=2;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",HeadinjurySEVEREarray[pageno]);
        });
        page.getViewById("right_id").on("tap", function (args) {
          pageno++;
          if (pageno==3) {
            pageno=0;
          }
          self.set("detailspage",pageno);
          self.set("detailstitle",HeadinjurySEVEREarray[pageno]);
        });
      }
    };

    detailsModel.prototype.unset_tap_listener = function(){
      console.log("unset_tap_listener is activated");
      page.getViewById("left_id").off("tap", function (args) {

      });
      page.getViewById("right_id").off("tap", function (args) {

      });
    };

    return detailsModel;
  })(observable.Observable);
  page.bindingContext = new detailsModel();
}

exports.detailsLoaded = detailsLoaded;

unset_tap_listener = function(){
  console.log("unset_tap_listener is activated");
  page.getViewById("left_id").off("tap", function (args) {

  });
  page.getViewById("right_id").off("tap", function (args) {

  });
};

exports.detailsUnloaded = function() {
  pageno=0;
  unset_tap_listener();
};
