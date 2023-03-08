const firebaseConfig = {
      apiKey: "AIzaSyAqmvdOi3z1LarJoJC_fCMkSHd1sRDfpsw",
      authDomain: "kwitter-redsocial.firebaseapp.com",
      databaseURL: "https://kwitter-redsocial-default-rtdb.firebaseio.com",
      projectId: "kwitter-redsocial",
      storageBucket: "kwitter-redsocial.appspot.com",
      messagingSenderId: "581931772480",
      appId: "1:581931772480:web:bf295f1e8e363410498da5"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//AÑADE TUS ENLACES DE FIREBASE
user_name=loccalStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Bienvenido"+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "se creo sala "
                });
                localStorage.setItem("room_name", room_name);
                window.location="kwitter_page.html";
            }
function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
                  window.location="kwitter_page.html";

            }
            
            function logout(){
                  localStorage.removeItem("user_name");
                  localStorage.removeItem("room_name");
                  window.location ="index.html";
            }