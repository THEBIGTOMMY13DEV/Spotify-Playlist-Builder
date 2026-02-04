console.log("form script started");

// Safe load for form page (SKIP THIS STEP IF YOU PUT ALL JS CODE IN SAME FILE)
if (localStorage.getItem("SongsList")) {
  data = JSON.parse(localStorage.getItem("SongsList"));
} else {
  data = [];
}

//if all in the same file, copy all of the code below underneath the script code from snippet A
var form = document.querySelector("form");
var SongNameInput = document.querySelector("#SongName");
var ArtistNameInput = document.querySelector("#ArtistName");
var GenreDropdownInput = document.querySelector("#Genre");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var newObj = {
    Song: SongNameInput.value,
    Artists: ArtistNameInput.value,
    Genre: GenreDropdownInput.value
  };

  data.push(newObj);
  localStorage.setItem("SongsList", JSON.stringify(data));
  console.log("Saved new item to localStorage");

  // Only render if grid exists on this page
  if (document.querySelector(".grid-container")) {
    makeCards();
  }

  form.reset();
});
