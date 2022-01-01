const firebaseConfig = {
    apiKey: "AIzaSyBIUOKX7Kt9IS2rifXlIR4YLX6HLfTZ1vY",
    authDomain: "web-chat-app-project-beb70.firebaseapp.com",
    projectId: "web-chat-app-project-beb70",
    storageBucket: "web-chat-app-project-beb70.appspot.com",
    messagingSenderId: "483145277507",
    appId: "1:483145277507:web:61039ef0c2407a617bb4f6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user1=localStorage.getItem("user");
user_greeting="Welcome"+user1;
document.getElementById("greeting").innerHTML=user_greeting;