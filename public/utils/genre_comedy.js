const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
		'X-RapidAPI-Key': '091770bfa7msh1d96849cce8ca74p12ca57jsn019c66494710'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles?info=mini_info&limit=12&page=1&titleType=movie&genre=Comedy&list=top_boxoffice_200', options)
	.then(response => response.json())
	.then(response => {
		let movies = document.getElementsByClassName("movies");
		console.log(response);
		console.log(movies[0]);
		let list = response.results.map((movie) => `<div class="movie_tile grid-item"><h1 class="movie_title">${movie.titleText.text}</h1><img class="movie_img" src="${movie.primaryImage ? movie.primaryImage.url : `https://via.placeholder.com/300x400?text=No+Picture+Available`}"></div>`).join('');
		movies[0].innerHTML = list;
	})
	.catch(err => console.error(err));