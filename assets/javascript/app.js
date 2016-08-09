<script>

// ========================================== START CODING BELOW!!

// Initialize Firebase
var config = {
	apiKey: "AIzaSyA5eYKsB8T2q6rMGdKSvac6eQsWTzsZEjE",
	authDomain: "fir-recent-user.firebaseapp.com",
	databaseURL: "https://fir-recent-user.firebaseio.com",
	storageBucket: "fir-recent-user.appspot.com",
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Values
var name = "";
var email = "";
var age = 0;
var comment = "";


// Capture Button Click
$("#addUser").on("click", function() {

	// YOUR TASK!!!
	// Code in the logic for storing and retrieving the most recent user.
	// Dont forget to provide initial data to your Firebase database.

	name = $('#nameinput').val().trim();
	email = $('#emailinput').val().trim();
	age = $('#ageinput').val().trim();
	comment = $('#commentinput').val().trim();

	database.ref().set({
		name: name,
		email: email,
		age: age,
		comment: comment
	});

	// Don't refresh the page!
	return false;
});

//Firebase watcher + initial loader HINT: .on("value")
database.ref().on("value", function(snapshot) {

	// Log everything that's coming out of snapshot
	console.log(snapshot.val());
	console.log(snapshot.val().name);
	console.log(snapshot.val().email);
	console.log(snapshot.val().age);
	console.log(snapshot.val().comment);

	// Change the HTML to reflect
	$("#namedisplay").html(snapshot.val().name);
	$("#emaildisplay").html(snapshot.val().email);
	$("#agedisplay").html(snapshot.val().age);
	$("#commentdisplay").html(snapshot.val().comment);


// Handle the errors
}, function(errorObject) {

	console.log("Errors handled: " + errorObject.code);
});

</script>