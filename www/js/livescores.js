Parse.$ = jQuery;

$(document).ready(function() {
	Parse.initialize("i0yTtNH3w54vJlwdyYzh0CoitwRflvD886VC5Jh0", "GLxyAdVIFFjFgyiz0ZjNjy7Kf0rfzlRI3pCsW08h");

	var query = new Parse.Query("University");
		query.descending("score");
		query.find({
  			success: function(results) {
    		// results is an array of Parse.Object.
			
			for(var i=0;i<results.length;i++) {
				document.getElementById('name' + (i+1)).innerHTML = results[i].get("name");
				document.getElementById('score' + (i+1)).innerHTML = results[i].get("score");
			}
			
  		},	

  		error: function(error) {
    		// error is an instance of Parse.Error.
  		}
	});

	


});