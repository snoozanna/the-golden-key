// let showdown = require("showdown");

import { fetchArtists } from "../artists/artists.js";

// scripts/index.js
export const fetchFairs = () => {
  const fairsReq = new Request("http://localhost:1337/fairs");

  fetch(fairsReq)
    .then((response) => response.json())
    .then((fairs) => {
      // let fairList = document.getElementById("fair-list");

      // fairs.forEach((fair) => {
      //   fairList.appendChild(createArticleCard(fair));
      // });
      console.log(fairs);
      return fairs;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getFair = (id) => {
  const fairReq = new Request(`http://localhost:1337/fairs/${id}`);

  fetch(fairReq)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(resp.statusText);
      }
    })
    .then(displayFair)
    // .then((fair) => {
    //   console.log("fair", fair);
    // })
    .catch(showMissingFairMsg);
};

export const showMissingFairMsg = (msg) => {
  document.getElementById("not-found").style =
    "display: flex; display: -webkit-box; display: -ms-flexbox;";
  document.getElementById("err-msg").innerHTML = msg;
  // console.log("fair not found");
};

export const displayFair = (fair) => {
  console.log(fair);
  const { title, location, description, cover_image, content, artists } = fair;
  const fairInfoMount = document.getElementById("fairInfoMount");
  const travelInfoMount = document.getElementById("travelInfoMount");
  const programmeInfoMount = document.getElementById("programmeInfoMount");
  const artistFeaturedMount = document.getElementById("artistFeaturedMount");

  fairInfoMount.innerHTML = `<h2 class="title" id="fairTitle">${title}</h2>
      <img id="fairImg" class="fair-img hero" src="http://localhost:1337${cover_image.url}"/>
      <h3 class="location">Location: ${location}
      </h3>
      <p id="fairDescription" class="description">${description}</p>
      <div id="fairTags"></div>
   `;

  let fairTags = document.getElementById("fairTags");
  let tag;

  fair.tags.forEach((tg) => {
    if (tg.name) {
      tag = document.createElement("span");
      tag.classList.add("fair-tag");
      tag.innerHTML = tg.name;

      fairTags.appendChild(tag);
    }
  });
  // DISPLAY TRAVEL
  travelInfoMount.innerHTML = `<h3 class="subtitle">How to get there</h3>
      <p>Nearest tube: Bank </p>
      <p>Show on <a href="https://goo.gl/maps/ybYRGqWUe6Em8EBVA" target="_blank" class="highlighted">Google Maps</a></p>`;

  // DISPLAY PROGRAMME
  programmeInfoMount.innerHTML = ` <h3 class="subtitle">Programme</h3>
        <p>${content}</p>`;

  // DISPLAY ARTISTS

  // TODO MAP OVER ARTISTS
  const artistsToDisplay = [];
  artists.map((artist) => {
    artistsToDisplay.push(artist);
    const li = document.createElement("li");
    li.innerHTML = ` <li class="artist-item">
          <a href="#">
            <h4 class="artist-name">${artist.name}</h4>
          </a>
          <p class="artist-time">${artist.shows}</p>
          <p>${artist.showname}</p>
          <p><a href="./../artists/${artist.slug}.html" class="highlighted">
              More info
            </a></p>
        </li>`;
    artistFeaturedMount.append(li);
  });
};

// const showdown = window.showdown;
// const converter = new showdown.Converter();
// document.getElementById("fair-content").innerHTML = converter.makeHtml(
//   fair.content,
// );
