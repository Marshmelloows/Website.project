//Top 5 movies
let topMovies = [{id: 0, title: "The The Shawshank Redemption", year: 1994, price: 9.9,
  		image_url: "https://www.filmsite.org/posters/shawshankredemption.jpg"},
	{id: 1, title: "The Godfather", year: 1992, price: 19.9,
      image_url: "https://media.timeout.com/images/105455970/750/562/image.jpg"},
	{id: 2, title: "The Dark Knight", year: 2008, price: 29.9,
     image_url: "https://upload.wikimedia.org/wikipedia/sco/8/8a/Dark_Knight.jpg"},
	{id: 3, title: "Star Wars", year: 1977, price: 39.9,
     image_url: "https://media.timeout.com/images/105456000/750/562/image.jpg"},
	{id: 4, title: " Schindler\'s List", year: 1993, price: 49.9,
     image_url: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg"},
];

//----------------------------------------
//Slideshow: Manual
let slideIndex = 0;//Initial slide = 0
const nextSlide = () => {
	//Change the slide_index
  slideIndex < topMovies.length - 1 ? slideIndex++ : (slideIndex = 0);
	//Change the title, year and image source accordingly
	document.getElementById("manual-slide-title").innerHTML = topMovies[slideIndex].title;
  document.getElementById("manual-slide-year").innerHTML = topMovies[slideIndex].year;
	document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url;	
}

const previousSlide = () => {
	//Change the slide_index
  slideIndex > 0 ? slideIndex-- : (slideIndex = topMovies.length - 1);
	//Change the title, year and image source accordingly
	document.getElementById("manual-slide-title").innerHTML = topMovies[slideIndex].title;
	document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url;		
}

//------------------------------------------------
//Slideshow: Automatic
let autoSlideIndex = 0;

let autoSlideShow = () => {
//Change the slide_index
	if (autoSlideIndex < topMovies.length - 1) {
		autoSlideIndex++;
	} else {
		autoSlideIndex = 0;
	}
	//Change the title, year and image source accordingly
	document.getElementById("auto-slide-title").innerHTML = topMovies[autoSlideIndex].title;
  document.getElementById("auto-slide-year").innerHTML = topMovies[autoSlideIndex].year;
	document.getElementById("auto-slide-image").src = topMovies[autoSlideIndex].image_url;
	//Wait 2 seconds
	setTimeout(autoSlideShow, 2000);//Auto change slide every 2 seconds
}
autoSlideShow();

