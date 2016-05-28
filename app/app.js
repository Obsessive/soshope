var application = require("application");
var appSettings = require("application-settings");
application.cssFile = "pages/global.css";
application.mainModule = "pages/home/splashscreen";
try{
  application.start();
}catch(e){
  console.log(e);
}
