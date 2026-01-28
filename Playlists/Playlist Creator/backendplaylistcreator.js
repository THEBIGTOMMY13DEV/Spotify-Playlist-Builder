const xhr = new XMLHttpRequest();
xhr.open("GET", "Spotify.json", true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    data.forEach(function(songs) {
    const Playlist = document.getElementById("Song");
    const row = document.createElement("div");
    row.className = 'Song-item';
    row.innerHTML = "<div class='Song-text'>" +songs.Song + ", "+songs.Artists+"</div>"+"<button class='PlaylistaddButton'>+</button>";
    Playlist.appendChild(row);
  });
    document.querySelectorAll(".PlaylistaddButton").forEach(PlaylistBTN => {
    PlaylistBTN.addEventListener("click", function () {
    console.log("Song Has been Saved to Playlist");
      PlaylistBTN.style.backgroundColor="#1db954";
      PlaylistBTN.style.color="#000";
      PlaylistBTN.style.border="#000";
      PlaylistBTN.innerHTML= `<img src="./checkmark.svg">`
      });
    });
  }
};

xhr.send();