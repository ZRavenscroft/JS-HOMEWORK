function Movie(name, rating, image){
    this.movie = name;
    this.rating = rating;
    this.image = image;
}

Movie.prototype.toString = function(){
    return this.movie + " " + this.rating
}

let films = [];
let box = document.getElementById("box");

function getMovie(){
    box.innerHTML = "";
    for (const movie of films){
        box.innerHTML +=
        `<div class="col-md-4 card">
          <img class="w-100" src="${movie.image}">
             <div>
                <h1>${movie.name}</h1>
                <small>${movie.rating}</small>
            </div>
        </div>`
    }
}
getMovie()

function CreateMovie(){
    films.push(new Movie(inputMovie.value, inputRating.value, ImageUrl.value))
    getMovie()
}

