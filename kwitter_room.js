const firebaseConfig = {
      apiKey: "AIzaSyDSag0fGFm1QPhhUXZX9kpDFG8sXYlyG-g",
      authDomain: "class-test-234ab.firebaseapp.com",
      projectId: "class-test-234ab",
      storageBucket: "class-test-234ab.appspot.com",
      messagingSenderId: "824046905779",
      appId: "1:824046905779:web:2a520f486b26f95c0ac3c6"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
