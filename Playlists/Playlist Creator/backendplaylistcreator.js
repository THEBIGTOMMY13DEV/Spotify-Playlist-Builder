// console.log("Data Loading ...");
// var xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         let playlist = JSON.parse(xhttp.responseText);
//         console.log(playlist);
    
//     playlist.forEach(function(SpotifySongs){
//         let Songs = document.createElement("div");
//         Songs.classList.add("Songs");
//     let textData=`<img src="${albumImage}" alt="${albumName}"><h3>${songName}</h3> <p><strong>Artist:</strong> ${artistName}</p> <p><strong>Album:</strong> ${albumName}</p> <p><strong>Year:</strong> ${releaseYear}</p>`;
//     Songs.innerHTML=textData;
//     container.appendChild(Songs);
//     });
//  }
// };
// xhttp.open("GET", "Spotify.json", true);
// xhttp.send();

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
    row.innerHTML = "<div class='Song-text'>" +songs.TrackName + ", "+songs.Artists+"</div>"+"<button class='PlaylistaddButton'>+</button>";
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
{/* <button class="PlaylistaddButton">+</button> */}