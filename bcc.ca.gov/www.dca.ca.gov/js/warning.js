// Create alert and add it to sites
function loadDcaAlert() {
// Not needed anymore uncomment line 4, return;
//  return;	
  let parentObj = document.getElementsByTagName('header')[0]
  let alertMsg = document.createElement('div');
  let currentSite = document.location.href;
  let currentHostname = document.location.hostname;
  
  // If dev, return
  if(currentHostname.indexOf('dv-') > -1) return;
  
  // Styles
 // alertMsg.innerHTML = '\
//    <style>\
//      #dca_alert a {\
//        background-image: linear-gradient(to right,#046b9900 0%,transparent 100%) !important;\
//        background-repeat: repeat-x !important;\
//        background-size: 2px 1px !important;\
//        background-position: center bottom 4% !important;\
//        background-origin: padding-box !important;\
//      }\
//      #dca_alert {\
//        background-image: linear-gradient(rgb(248, 215, 218), rgb(248, 215, 218)) !important;\
//        top: 0 !important;\
//        font-size: 1.1em !important;\
//        text-align: center !important;\
//        width: 100% !important;\
//      }\
//      #dca_alert .alert-text {\
//        color: #000 !important;\
//      }\
//    </style>'; 
    
    // Styles
  alertMsg.innerHTML = '\
    <style>\
      #dca_alert a {\
        background-image: linear-gradient(to right,#dff0d8 0%,transparent 100%) !important;\
        background-repeat: repeat-x !important;\
        background-size: 2px 1px !important;\
        background-position: center bottom 4% !important;\
        background-origin: padding-box !important;\
      }\
      #dca_alert {\
        background-color: #dff0d8 !important;\
        top: 0 !important;\
        font-size: 1.1em !important;\
        text-align: center !important;\
        width: 100% !important;\
      }\
      #dca_alert .alert-text {\
        color: #000 !important;\
      }\
    </style>';

// disable
   if(currentSite.indexOf('cppa.ca.gov') > -1 ||
     currentSite.indexOf('bcc.ca.gov') > -1 ||
     currentSite.indexOf('ccap.ca.gov') > -1 ||	
     currentSite.indexOf('acupuncture.ca.gov') > -1 
      ) {
     return;
      }    
    
  // Custom
  if(currentSite.indexOf('dca.ca.gov/cba') > -1 ||
     currentSite.indexOf('dca.ca.gov/acp') > -1 ||
     currentSite.indexOf('dca.ca.gov/csac') > -1 ||
//     currentSite.indexOf('cfb.ca.gov') > -1 ||
     currentSite.indexOf('chiro.ca.gov') > -1 ||
     currentSite.indexOf('bhgs.dca.ca.gov') > -1 ||
     currentSite.indexOf('optometry.ca.gov') > -1 ||
     currentSite.indexOf('ombc.ca.gov') > -1 ||
     currentSite.indexOf('pharmacy.ca.gov') > -1 ||
     currentSite.indexOf('ptbc.ca.gov') > -1 ||
     currentSite.indexOf('psychology.ca.gov') > -1 ||
     currentSite.indexOf('rcb.ca.gov') > -1 ||
     currentSite.indexOf('rn.ca.gov') > -1 ||
     currentSite.indexOf('speechandhearing.ca.gov') > -1 ||
     currentSite.indexOf('bvnpt.ca.gov') > -1
    ) {
    parentObj = document.getElementsByTagName('body')[0]; 
    alertMsg.innerHTML += "\
      <div id='dca_alert' class='alert alert-dismissible alert-banner' style='padding: 15px;margin-bottom: 0px;' role='alert'>\
        <div class='container'>\
          <span class='alert-text'>\
            <strong>Announcement:</strong>\
            New look coming to the California Department of Consumer Affairs (DCA) in 2023. <a href='https://www.dca.ca.gov/logo/index.shtml'>Read the important announcement here.</a>\
          </span>\
        </div>\
      </div>";
  } else if(currentSite.indexOf('cfb.ca.gov') > -1) { // Custom cfb
    parentObj = document.getElementsByTagName('body')[0];
    alertMsg.innerHTML += "\
      <div id='dca_alert' class='alert alert-dismissible alert-banner' style='padding: 15px;margin-bottom: 0px;background-color:#f0ff1c !important;' role='alert'>\
        <div class='container'>\
          <span class='alert-text'>\
            <strong>Announcement:</strong>\
            New look coming to the California Department of Consumer Affairs (DCA) in 2023. <a href='https://www.dca.ca.gov/logo/index.shtml'>Read the important announcement here.</a>\
          </span>\
        </div>\
      </div>";
  } else if(currentSite.indexOf('pmbc.ca.gov') > -1) { // Custom pmbc
    parentObj = document.getElementsByTagName('body')[0];
    alertMsg.innerHTML += "\
      <div id='dca_alert' class='alert alert-dismissible alert-banner' style='padding: 15px;margin-bottom: 0px;' role='alert'>\
        <div class='container'>\
          <span class='alert-text'>\
            <strong>Announcement:</strong>\
            New look coming to the California Department of Consumer Affairs (DCA) in 2023. <a href='https://www.dca.ca.gov/logo/index.shtml'>Read the important announcement here.</a>\
          </span>\
        </div>\
      </div>";
  } else if(currentSite.indexOf('dhbc.ca.gov') > -1) { // Custom dhbc
    alertMsg.innerHTML += "\
      <div id='dca_alert' class='alert alert-dismissible alert-banner' style='padding: 15px;margin-bottom: 0px;' role='alert'>\
        <div class='container'>\
          <span class='alert-text'>\
            <strong>Announcement:</strong>\
            New look coming to the California Department of Consumer Affairs (DCA) in 2023. <a href='https://www.dca.ca.gov/logo/index.shtml'>Read the important announcement here.</a>\
          </span>\
        </div>\
      </div>";
  } else if(currentSite.indexOf('dca.ca.gov') > -1) { // Custom dca
    alertMsg.innerHTML += "\
      <div id='dca_alert' class='alert alert-dismissible alert-banner' style='margin-bottom: 0px;font-size:1em !important;text-align: left !important;' role='alert'>\
        <div class='container'>\
			<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>\
          <span class='alert-text text-center'>\
            <strong>Announcement:</strong>\
            New look coming to the California Department of Consumer Affairs (DCA) in 2023. <a href='https://www.dca.ca.gov/logo/index.shtml'>Read the important announcement here.</a>\
          </span>\
        </div>\
      </div>";
  } else if(currentSite.indexOf('bcc.ca.gov') > -1) { // Custom bcc
    alertMsg.innerHTML += "\
      <div id='dca_alert' class='alert alert-dismissible alert-banner' style='padding: 15px;margin-bottom: 0px;' role='alert'>\
        <div class='container'>\
          <span class='alert-text'>\
            <strong>Announcement:</strong>\
           New look coming to the California Department of Consumer Affairs (DCA) in 2023. <a href='https://www.dca.ca.gov/logo/index.shtml'>Read the important announcement here.</a>\
          </span>\
        </div>\
      </div>";  
  } else { // All others
    alertMsg.innerHTML += "\
      <div id='dca_alert' class='alert alert-dismissible alert-banner' role='alert'>\
        <div class='container'>\
          <span class='alert-text'>\
            <strong>Announcement:</strong>\
            New look coming to the California Department of Consumer Affairs (DCA) in 2023. <a href='https://www.dca.ca.gov/logo/index.shtml'>Read the important announcement here.</a>\
          </span>\
        </div>\
    </div>";
  }

  // Insert alert as first child of parent
  parentObj.insertBefore(alertMsg, parentObj.firstChild);
}

// When DOM is ready add the alert
document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    loadDcaAlert();
  }
}


