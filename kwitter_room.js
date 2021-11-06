
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAafy76Fhphphe-3VdMb6y83TtpYoPXD4A",
  authDomain: "kwitter-16a26.firebaseapp.com",
  databaseURL: "https://kwitter-16a26-default-rtdb.firebaseio.com",
  projectId: "kwitter-16a26",
  storageBucket: "kwitter-16a26.appspot.com",
  messagingSenderId: "1089796239794",
  appId: "1:1089796239794:web:1eca3953b36a446d8df4ab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  user_name = localStorage.getItem("user_name");



document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
