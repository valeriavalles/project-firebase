
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBI6G9OAby188OLIDIwNn8u0UuZQZ81q7Q",
    authDomain: "mi-proyecto-46990.firebaseapp.com",
    databaseURL: "https://mi-proyecto-46990.firebaseio.com",
    projectId: "mi-proyecto-46990",
    storageBucket: "mi-proyecto-46990.appspot.com",
    messagingSenderId: "33080074336"
  };
  firebase.initializeApp(config);

$('#buttonGoogle').click( function(){
	auchGoogle(); 
});

function auchGoogle(){
	var provider = new firebase.auth.GoogleAuthProvider();
	authentication(provider);
}
function authentication(provider) {
	firebase.auth().signInWithPopup(provider)
	.then(function(result) {
		var token = result.credential.accessToken;
		var user = result.user;
		console.log(result);
	  }).catch(function(error) {
		console.log(error);
		var errorCode = error.code;
		console.log(errorCode);
		var errorMessage = error.message;
		console.log(errorMessage);
		var email = error.email;
		console.log(email);
		var credential = error.credential;
		console.log(credential);
	  });
}


/*$(document).ready(function() {
	
});*/