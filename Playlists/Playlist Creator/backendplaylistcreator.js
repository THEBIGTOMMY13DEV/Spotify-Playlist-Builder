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

    const Playlist = document.getElementById("Song");

    const song = data.track.name;
    const artist = data.artists.map(a => a.name).join(", ");
    const album = data.album.name;

    const row = document.createElement("div");
    row.className = 'Song-item';

    row.innerHTML = `
      <div class='Song-text'>
        ${song}, ${artist}, ${album}
      </div>
      <button class="PlaylistaddButton">+</button>
    `;

    Playlist.appendChild(row);
    const PlaylistBTN=document.querySelector(".PlaylistaddButton");
    PlaylistBTN.addEventListener("click", function() {
      PlaylistBTN.innerHTML= `✔`
      PlaylistBTN.style.backgroundColor="#1db954";
      PlaylistBTN.style.color="#000";
      PlaylistBTN.style.border="#000";
    });
  }
};

xhr.send();
    // row.innerHTML = `
    //   <div class="Playlist-text">
    //     ${song}, ${artist}, ${album}
    //   </div>
    //   <button class="add-btn">+</button>
    // `;