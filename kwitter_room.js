var FirebaseConfig + {
    apiKey: "AIzaSyC_VA7nA3-6YLiP6gYROvbdeDvdB69Haf4", 
    authDomain: "kwitter--arjun.firebaseapp.com", 
    databaseURL: "https://kwitter--arjun-default-rtdb.firebaseio.com", 
    projectId: "kwitter--arjun", 
    storageBucket: "kwitter--arjun.appspot.com", 
    messagingSenderId: "864215491301", 
    appId: "1:864215491301:web:6da37faa7190b57ee5aa0c", 
    measurementId: "G-NCG3QMQJ6J" };

    firebase initalizeApp(FirebaseConfig);
     function getData(){firebase.database().ref("/").on('value' function(snapshot){ document.getElementById("output").innerHTML= ;snapshot}}
