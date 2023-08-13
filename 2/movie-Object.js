function Movie(title, director, genre, releaseYear, rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

Movie.prototype.getOverview = function() {
    return `\n ${this.title}, a ${this.genre} flim directed by ${this.director} was released in ${this.releaseYear}. It recieved a rating of ${this.rating}.\n`;
}

const SpiderMan = new Movie("SpiderMan", "Sam Raimi", "Action", 2002, 87);

const Batman = new Movie(
    "The Dark Knight",
    "Christpher Nolan",
    "Action",
    2008,
    83
);

console.log(SpiderMan);
console.log(SpiderMan.getOverview());
console.log(Batman.getOverview());