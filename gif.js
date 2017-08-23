$(document).ready(function() {

	var topics = ["bears", "birds", "fish", "dogs", "frogs", "turtles", "cats", "bats", "sloths"];

function createButton () {
	for (var i = 0; i < topics.length; i++) {
		$("#buttons").prepend("<button id="+topics[i]+">"+topics[i]+"</button>");
	};
		
	$("div.buttonHome").children().attr("class", "animal-button");

}

createButton(topics);


	$(".animal-button").on("click", function() {

	var queryURL ="http://api.giphy.com/v1/gifs/search?q="+this.id+"&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({url:queryURL,
				method: "GET"
				})
		.done(function(response) {

			console.log(response);
			for (var i=0; i < response.data.length; i++) {
			var imageURL=response.data[i].images.downsized.url;

			var animalpic= $("<img>");

			animalpic.attr("src", imageURL);
			animalpic.attr("alt", "animal pic");

			$("#animalpics").prepend(animalpic);
			console.log(animalpic);
			}
		});
	});

	$("#submit").on("click", function(){
		animalpics.empty();
		newButton=$("#newAnimal").val
		topics.push(newButton);
		createButton(topics);
	});
});
