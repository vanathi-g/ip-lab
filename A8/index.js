const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, db){
	var dbo = db.db("Patient_Details");
	const new_patient = {
		name: "Steve", 
		age: 25, 
		ID: 100, 
		gender: "Male", 
		address: "Random building, New City", 
		married: "single", 
		dov: "2021-04-30"
	}
	
	dbo.collection("patients").insertOne(new_patient, function(err, res){
		if(err) throw err;
		console.log("\nInserted new patient's details successfully!");

		const query = {ID: 100};
		const new_info = { $set: {name: "Stephen", address: "New Address, Old City" } };

		dbo.collection("patients").updateOne(query, new_info, function(err, res){
			if(err) throw err;
			console.log("\nPatient's document updated successfully!");

			dbo.collection("patients").findOne({ name: "Stephen" }, function(err, result) {
				if(err) throw err;
				console.log(`\nFound details:\nID: ${result.ID}\nName: ${result.name}\nAge: ${result.age}\nGender: ${result.gender}\nAddress: ${result.address}\nMarital Status: ${result.married}\nDate of Visit: ${result.dov}`);

				dbo.collection("patients").deleteOne(query, function(err, obj) {
					if (err) throw err;
    				console.log("\nPatient's document deleted successfully!");
					db.close();
				});
			});
		});
	});
});