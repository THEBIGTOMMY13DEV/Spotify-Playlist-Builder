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
      "<div class='Song-text'>" + songs.Song + ", "+songs.Artists+ ", "+ songs.Genre+"</div>"+
      "<button class='PlaylistaddButton'>+</button>";

    card.innerHTML = textData;
    grid.appendChild(card);
  });
}
    document.querySelectorAll(".PlaylistaddButton").forEach(PlaylistBTN => {
    PlaylistBTN.addEventListener("click", function () {
    console.log("Song Has been Saved to Playlist");
      PlaylistBTN.style.backgroundColor="#1db954";
      PlaylistBTN.style.color="#000";
      PlaylistBTN.style.border="#000";
      PlaylistBTN.innerHTML= `<img src="./checkmark.svg">`
      });
    });