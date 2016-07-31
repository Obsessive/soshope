var FrameModule = require("ui/frame");
var observable = require("data/observable");
var fetchModule = require("fetch");
var connectivity = require("connectivity");
var application =require("application");
if (application.android) {
  var Toast = require("nativescript-toast");
}
var appSettings = require("application-settings");
var page,self;
function loginLoaded(args) {
  page = args.object;
  var loginModel = (function (_super) {
    __extends( loginModel, _super);
    function loginModel() {
      _super.call(this);
      self=this;
    }

    loginModel.prototype.connect = function () {
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

    loginModel.prototype.login_action = function(){
      console.log("login_action is activated");
      var name = page.getViewById("id_name").text;
      var phone = page.getViewById("id_phone").text;
      var email = page.getViewById("id_email").text;
      if (self.connect()==1) {
        if (name !== "") {
        if (phone !== "") {
          if (email !== "") {
            fetchModule.fetch("http://soshope.obsessive.tech/user/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name: name, phone: phone, email: email })
            }).then(function (response)
            {
             appSettings.setBoolean("firsttime", true);
             appSettings.setString("name", name);
             var navigationEntry = {
              moduleName: "pages/home/home",
              animated: true,
              transition: {name:"slideLeft"},
              clearHistory: true
            };
            FrameModule.topmost().navigate(navigationEntry);
          }, function (e) {
            console.log("Error occurred " + e);
          });
          }else{
            if (application.android) {
              Toast.makeText("Enter the email","long").show();
            }else {
              alert("Enter the email");
            }
          }
        }else{
          if (application.android) {
            Toast.makeText("Enter the phone","long").show();
          }else {
            alert("Enter the phone");
          }
        }
      }else{
        if (application.android) {
          Toast.makeText("Enter the name","long").show();
        }else {
          alert("Enter the name");
        }
      }
      }else{
        if (application.android) {
          Toast.makeText("Please check your internet connection","long").show();
        }else {
          alert("Please check your internet connection");
        }
      }
    };

    return loginModel;
  })(observable.Observable);
  page.bindingContext = new loginModel();
}
exports.loginLoaded = loginLoaded;
