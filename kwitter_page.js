var firebaseConfig = {
    apiKey: "AIzaSyDDgVqm6y55pBYg_S0nI1GQUNC6ixHjcKM",
    authDomain: "kwitter-fbb0a.firebaseapp.com",
    databaseURL: "https://kwitter-fbb0a-default-rtdb.firebaseio.com",
    projectId: "kwitter-fbb0a",
    storageBucket: "kwitter-fbb0a.appspot.com",
    messagingSenderId: "189375277426",
    appId: "1:189375277426:web:1eb7a4edf3c8abd756d5eb"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("User Name");
  room_name = localStorage.getItem("room_name");

  function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          user_name: user_name,
          message: msg,
          like: 0
      });
      document.getElementById("msg").innerHTML = "";
  }