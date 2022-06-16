(function() {

	const fallbackQuotes = [
		{
			text: 
				"Some testing text.",
			author: "Life"
		},
		{
			text: 
				"Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all.",
			author: "John Kenneth Galbraith"
		},
		{
			text: "God save me from my friends. I can protect myself from my enemies.",
			author: "Claude Louis Hector de Villars"
		},
		{
			text: "The price of anything is the amount of life you excange for it.",
			author: "David Thoreau"
		},
		{
			text: "LIfe is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.",
			author: "Charles Lindbergh"
		},
		{
			text: "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
			author: "Tyne Daly"
		}
	];

	const api = "https://type.fit/api/quotes";
	const container = document.querySelector(".container");
	const content = document.querySelector(".content")
	const quote = document.getElementById("quote");
	const author = document.querySelector(".author");
	const animationIn = "scale-in-center";
	const animationOut = "scale-out-center";

	container.addEventListener("click", function() {

		function getQuoteAndAuthor(source) {
			quote.textContent = source[randomQuoteIndex(source)].text;
			author.textContent = source[randomQuoteIndex(source)].author; 
		}
	
		function randomQuoteIndex(source) {
			return Math.floor(Math.random() * source.length)
		}

		function quoteAnimation(animation) {
			content.classList.add(animation); 
		}

		function displayQuote(source) {
			quoteAnimation(animationOut);
			setTimeout(() => { getQuoteAndAuthor(source); }, 200);
			quoteAnimation(animationIn);
		}

		let headers = {}
		fetch(api, {
			method : "GET",
			mode: 'cors',
			headers: headers
		})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			displayQuote(data);			
		})
		.catch((err) => {
			console.log(err);
			displayQuote(fallbackQuotes);
		});

		content.classList.remove(animationIn, animationOut);
	});
})();
