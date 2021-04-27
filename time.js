//Project :Time
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAZdvwfJbS_Y3_xBgugof0ieFheuPIMBI8",
    authDomain: "timetable-214d3.firebaseapp.com",
    projectId: "timetable-214d3",
    storageBucket: "timetable-214d3.appspot.com",
    messagingSenderId: "921182669948",
    appId: "1:921182669948:web:587d670f732887e6858df9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//..................Read Data ..................//
var nameV, rollV,secV , genV;

function Ready(){
    nameV=document.getElementById("namebox").value;
    rollV=document.getElementById("rollbox").value;
    secV=document.getElementById("secbox").value;
    genV=document.getElementById("genbox").value;
}

//...................Insert......................//

document.getElementById("insert").onclick=function(){
    Ready();
    firebase.database().ref('student/'+rollV).set({
        NameofStudent:nameV,
        RollNo:rollV,
        Section:secV,
        Gender:genV
    });
}
//...................Selection Process......................//
    document.getElementById("select").onclick=function(){
        Ready();
        firebase.database().ref('student/'+rollV).on("value",function(snapshot){
            document.getElementById("namebox").value=snapshot.val().NameofStudent;
            document.getElementById("secbox").value=snapshot.val().Section;
            document.getElementById("genbox").value=snapshot.val().Gender;
        });
}

//...................update Process......................//
document.getElementById("update").onclick=function(){
    Ready();
    firebase.database().ref('student/'+rollV).update({
        NameofStudent:nameV,
        Section:secV,
        Gender:genV
    });
}
//...................Deletion Process......................//
document.getElementById("delete").onclick=function(){
    Ready();
    firebase.database().ref('student/'+rollV).remove();
}