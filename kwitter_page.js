//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data ['message'];
like = message_data ['like'];
name_with_tag = "<h4> "+ name +"<img class='user_trick' src='trick.png'></h4>";
message_with_data = "<h4 class='message_h4'>" + message_data + "</h4>";
like_button ="<button class='btn btn-warning' id="=firebase_message_id+"  value="+like+" onclike='updatelike(this.id)'>";
snap_with_tag = "<span class='glyhicon glyhicon-thums-up'>like: "+ like +"</span></button><hr>";


room = name_with_tag + message_with_data +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });

  document.getElementById("msg").value ="";
}

function updatelike(message_id)
{
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  update_like = Number(likes) + 1;
  console.log (update_like);


  firebase.database().ref(room_name).child(message_id).update({
    like : update_like
   });
}