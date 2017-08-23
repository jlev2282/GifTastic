$(document).ready(function() {

	var topics = ["bears", "birds", "fish", "dogs", "frogs", "turtles", "cats", "bats", "sloths"];

// function that creates the buttons
function createButton () {
	for (var i = 0; i < topics.length; i++) {
		$("#buttons").prepend("<button id="+topics[i]+">"+topics[i]+"</button>");
	};
		
	$("div.buttonHome").children().attr("class", "animal-button");

};

createButton(topics);

// function that controls the AJAX calls to giphy when preloaded button is pressed
	$(".animal-button").on("click", function() {

	var queryURL ="https://api.giphy.com/v1/gifs/search?q="+this.id+"&api_key=dc6zaTOxFJmzC&limit=10";

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

// function that control the pull of input and AJAX call to giphy when submit button is pressed
	$("#submit").on("click", function(event){

		event.preventDefault();

		var searchTopic = document.getElementById('newAnimal').value;
		searchQueryUrl="https://api.giphy.com/v1/gifs/search?q="+searchTopic+"&api_key=dc6zaTOxFJmzC&limit=10";
		console.log(searchQueryUrl);

		$.ajax({url:searchQueryUrl,
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

		topics.push(searchTopic);
		$( "#buttons" ).empty();
		createButton();
		$( "#newAnimal" ).empty();
		// $('animalpics').empty();
		// newButton=$("#newAnimal").val
		// topics.push(newButton);
		// createButton(topics);
	});
});
