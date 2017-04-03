$(document).ready(function() {

	var topics = ["bears", "birds", "fish", "dogs", "frogs", "turtles", "cats", "bats", "sloths"];

	for (var i = 0; i < topics.length; i++) {
		$("#buttons").prepend("<button id="+topics[i]+">"+topics[i]+"</button>");
	};
		
	$("div.buttonHome").children().attr("class", "animal-button");


	$(".animal-button").on("click", function() {

	var queryURL ="http://api.giphy.com/v1/gifs/search?q=sloth&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({url:queryURL,
				method: "GET"
				})
		.done(function(response) {

			console.log(response);
			var imageURL=response.data.image_original_url;

			var animalpic= $("<img>");

			animalpic.attr("src", imageURL);
			animalpic.attr("alt", "animal pic");

			$("#animalpics").html(animalpic);
		});
	});
});
