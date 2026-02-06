console.log("js started");
var data;
var grid = document.getElementById("Song");

// LOAD DATA (localStorage first, otherwise XHR)
if (localStorage.getItem("SongsList")) {
  data = JSON.parse(localStorage.getItem("SongsList"));
  console.log("Loaded from localStorage");
  if (grid) {
    makeCards();
  }
} else {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      localStorage.setItem("SongsList", JSON.stringify(data));

      if (grid) {
        makeCards();
      }
    }
  };

  xhttp.open("GET", "Spotify.json", true);
  xhttp.send();
}

// RENDER CARDS
function makeCards() {
  grid.innerHTML = "";

  data.forEach(function (songs) {
    let card = document.createElement("div");
    card.classList.add("Song-item");

    let textData =
      "<div class='Song-text'>" +
      songs.Song + ", " + songs.Artists + ", " + songs.Genre +
      "</div>" +
      "<button class='PlaylistaddButton'>+</button>";

    card.innerHTML = textData;
    grid.appendChild(card);

    // 🔧 ATTACH CLICK AFTER INSERTION
    let PlaylistBTN = card.querySelector(".PlaylistaddButton");

    PlaylistBTN.addEventListener("click", function () {
      console.log("Song Has been Saved to Playlist");

      PlaylistBTN.style.backgroundColor = "#1db954";
      PlaylistBTN.style.color = "#000";
      PlaylistBTN.style.borderColor = "#000";
      PlaylistBTN.innerHTML = `<img src="/Images/checkmark.svg">`;
      PlaylistBTN.disabled = true;
    });
  });
}

// identify sorting buttons (make sure the #IDs below match your buttons in html)
var sortAZBtn = document.querySelector("#sort-az");
var sortZABtn = document.querySelector("#sort-za");


// sort click handlers for buttons, add two buttons to your html and give them the same IDs as below
sortAZBtn.addEventListener("click", function () {
  sortByTitle("az");
  console.log("Sort works 1 !");
});
  sortZABtn.addEventListener("click", function () {
  sortByTitle("za");
});


// sort function
function sortByTitle(direction) {
  // data should be the variable that stores the list of data, make sure the name matches what you have
  data.sort(function (a, b) {
    var titleA = String(a.Song).toLowerCase();
    var titleB = String(b.Song).toLowerCase();


    if (titleA < titleB) {
      if (direction == "az") {
        return -1;
      } else {
        return 1;
      }
    }


    if (titleA > titleB) {
      if (direction == "az") {
        return 1;
      } else {
        return -1;
      }
    }


    return 0;
  });


  makeCards();
}

