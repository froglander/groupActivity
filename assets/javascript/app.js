// Initialize Firebase
 var config = {
   apiKey: "AIzaSyD10FESfKFpARn6L6vvfwBB4YfiAuSuP3k",
   authDomain: "fork-this-activity.firebaseapp.com",
   databaseURL: "https://fork-this-activity.firebaseio.com",
   storageBucket: "fork-this-activity.appspot.com",
 };
 firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Capture Button Click
$("#submitEmployee").on("click", function() {
	database.ref().push({
		empName: $('#empNameInput').val().trim(),
		empRole: $('#roleInput').val().trim(),
		empStartDate: $('#startDateInput').val().trim(),
		empRate: $('#rateInput').val().trim()
	});

	// Don't refresh the page!
	return false;
});

//Firebase watcher + initial loader HINT: .on("value")
database.ref().on("child_added", function(childSnapshot) {

	// Log everything that's coming out of snapshot
	console.log(childSnapshot.val());
	console.log(childSnapshot.val().empName);
	console.log(childSnapshot.val().empRole);
	console.log(childSnapshot.val().empStartDate);
	console.log(childSnapshot.val().empRate);

	var $empBody = $('#employeeRows');

	var $empRow = $('<tr>');

	var $empName = $('<td>').html(childSnapshot.val().empName).appendTo($empRow);
	var $empRole = $('<td>').html(childSnapshot.val().empRole).appendTo($empRow);
	var $empStartDate = $('<td>').html(childSnapshot.val().empStartDate).appendTo($empRow);
	var $empRate = $('<td>').html(childSnapshot.val().empRate).appendTo($empRow);

		
	$empRow.appendTo($empBody);


// Handle the errors
}, function(errorObject) {

	console.log("Errors handled: " + errorObject.code);
});

 $( function() {
    $( "#startDateInput" ).datepicker();
  } );


