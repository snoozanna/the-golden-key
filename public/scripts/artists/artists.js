// scripts/index.js
export const fetchArtists = () => {
  const artistsReq = new Request("http://localhost:1337/artists");

  fetch(artistsReq)
    .then((response) => response.json())
    .then((artists) => {
      // let fairList = document.getElementById("fair-list");

      // artists.forEach((fair) => {
      //   fairList.appendChild(createArticleCard(fair));
      // });
      console.log(artists);
      return artists;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getArtist = (id) => {
  const artistReq = new Request(`http://localhost:1337/artists/${id}`);

  fetch(artistReq)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(resp.statusText);
      }
    })
    .then(displayArtist)
    // .then((artist) => {
    //   console.log("artist", artist);
    // })
    .catch(showMissingArtistMsg);
};

export const showMissingArtistMsg = (msg) => {
  document.getElementById("not-found").style =
    "display: flex; display: -webkit-box; display: -ms-flexbox;";
  document.getElementById("err-msg").innerHTML = msg;
  // console.log("artist not found");
};

export const displayArtist = (artist) => {
  const { name, showname, description, shows, fair, biog } = artist;
  console.log(artist);
  // TODO check why this [0] is different to another collection

  const showInfoMount = document.getElementById("showInfo");
  showInfoMount.innerHTML = `<h2 class="title" id="artistTitle">${name}</h2>
      <img id="artistImg" class="artist-img hero" src=http://localhost:1337${artist.img[0].url}>

      <h3 class="subtitle" id="showName">${showname}</h3>
      <p id="showDescription">${description}</p>
      <p>Times: <span id="showTimes">${shows}</p>
      <p>Fair: <span id="artistFair"><a href="./../fairs/${fair.slug}.html" class="highlighted">${fair.title}</a> </span>
      </p>`;

  const artistInfoMount = document.getElementById("artistInfo");
  artistInfoMount.innerHTML = ` <h3 class="subtitle">About <span id="aboutArtistTitle">${name}</span></h3>
      <p id="artistBiog">${biog}</p>`;
  // add if we implement artist tags

  // let artistTags = document.getElementById("artistTags");
  // let tag;

  // artist.tags.forEach((tg) => {
  //   if (tg.name) {
  //     tag = document.createElement("span");
  //     tag.classList.add("artist-tag");
  //     tag.innerHTML = tg.name;
  //     artistTags.appendChild(tag);
  //   }
  // });
};

// const showdown = window.showdown;
// const converter = new showdown.Converter();
// document.getElementById("fair-content").innerHTML = converter.makeHtml(
//   fair.content,
// );

// TODO best way to dynamically populate artists per page
