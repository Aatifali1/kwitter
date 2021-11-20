
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDH61M3z16IRLqXeFYenGnG3seNJiofP0c",
      authDomain: "kwitter-40dd8.firebaseapp.com",
      databaseURL: "https://kwitter-40dd8.firebaseio.com",
      projectId: "kwitter-40dd8",
      storageBucket: "kwitter-40dd8.appspot.com",
      messagingSenderId: "950979369469",
      appId: "1:950979369469:web:6b41dd52f70a1ed3c6a194",
      measurementId: "G-DRNLLF9LX8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - " + Room_name);
row ="<div class='room_name' id="+Room_name+"  onclick= 'redirectToroomName(this.id)'>#"+ Room_name  +"</div><hr>";
document.getElementById("ouput").innerHTML += row;
      //End code
      });});}
getData();


function addroom()
{
    Room_name = document.getElementById("Room_name").vaule;

    firebase.database().ref("/").child(Room_name).update({
    purpose : "adding room name"
    });

      localStorage.setItem("room_name",Room_name);

window.location ="kitter_page.html"
}           

function redirectoroomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
   window.location = "kitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
     window.location.replace("kitter.html");
}