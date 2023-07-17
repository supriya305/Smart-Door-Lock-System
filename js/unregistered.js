// var firebaseConfig = {
//     apiKey: "AIzaSyBplgfDMaVZSDahuI2RwF24a7e2K4vVXcs",
//     authDomain: "videobase-dynamic-auth-system.firebaseapp.com",
//     databaseURL: "https://videobase-dynamic-auth-system.firebaseio.com",
//     projectId: "videobase-dynamic-auth-system",
//     storageBucket: "videobase-dynamic-auth-system.appspot.com",
//     messagingSenderId: "542414051699",
//     appId: "1:542414051699:web:4625898e615fba4dc88d06"
//   };
  var firebaseConfig = {
    'apiKey': "AIzaSyBqH-1SFbLkCjaW_Qilj7TQq-2E3cy43FQ",
    'authDomain': "iot-project-e0803.firebaseapp.com",
    'projectId': "iot-project-e0803",
    'databaseURL':'https://iot-project-e0803-default-rtdb.firebaseio.com/',
    'storageBucket': "iot-project-e0803.appspot.com",
    'messagingSenderId': "292898203599",
    'appId': "1:292898203599:web:382bc1a3eb5c9e28c4d4ba",
    'measurementId': "G-FY4R61HR0P"
  };  
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    
    console.log("unregistered")
    var rootRef = firebase.database().ref();
    rootRef.on("value", async function(snapshot) {
        $('#result').html("")
    $('#p').html('Unregistered for ')
        let snap = JSON.stringify(snapshot);
        root = JSON.parse(snap);
        unRegistered=root['NotRegistered']
        var d = new Date();
      var year = d.getFullYear();
      var mon = String(parseInt(d.getMonth()) + 1);
      var date = d.getDate();
      if (parseInt(d.getMonth()) < 10) {
        mon = "0" + mon;
      }

      if (parseInt(date) < 10) {
        date = "0" + date;
      }
      fullDate = year + "-" + date + "-" + mon;
      $('#p').append(fullDate)
      for(dates in unRegistered){
          if(dates==fullDate){
            for(entries in unRegistered[dates]){
                $("#result").append(
                    '<div style="list-style-type:none;padding:5px;border-bottom: 1px solid black;border-top: 1px solid black">' +
                      "<div>" +
                      "<img  id=\"dynamicImage\" style=\"height:200px;width:200px;padding:1px\" src=\""+unRegistered[dates][entries]['InURL']+"\"/>"
                 +" "+unRegistered[dates][entries]['Intime']+
                      "</div>" +
                      
                      "</div>"
                  );
            }
          }
          
      }
    });
})