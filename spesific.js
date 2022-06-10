//get the parameter
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
//retrives the data from the parameter and assign it to a variable
const id = params.get("post");


const spesObj = [{
    "post": "rainydays",
    "title": "RainyDays",
    "desc": "This is a really outdated project of mine, the first project that lasted over a week, this was built with HTML and CSS",
    "ghlink": `<a href="https://github.com/AudunTA/RainyDays">GitHub Repository</a>`,
    "lslink": `<a href="#">Live Site</a>`,
    "imgsrc": `<img src="/images/rainy.png" id="rainyIMG" alt="rainy days featured image">`
  },
  {
    "post": "ismk",
    "title": "International Sience Museum Kristiansand",
    "desc": "This is a really outdated project of mine, the first project that lasted over a week, this was built with HTML and CSS",
    "ghlink": `<a href="https://github.com/AudunTA/ISMK">GitHub Repository</a>`,
    "lslink": `<a href="#">Live Site</a>`,
    "imgsrc": `<img src="/images/imskkk.png" id="rainyIMG" alt="ismk featured image">`
  },
  {
    "post": "plantspire",
    "title": "PlantSpire",
    "desc": "This is one of my more recent projects, this was built with HTML, CSS and JavaScript. In this project i use rest-API calls to fetch results and post comments. more information about the project and its features are on GitHub",
    "ghlink": `<a href="https://github.com/AudunTA/PlantSpire_p">GitHub Repository</a>`,
    "lslink": `<a href="https://unrivaled-mooncake-14dedc.netlify.app/index.html">Live Site</a>`,
    "imgsrc": `<img src="/images/plantspiree.png" id="rainyIMG" alt="plantspire featured image">`
  }];
  
  console.log(spesObj[0]);

  const description = document.querySelector("#description");
  const ghlink = document.querySelector("#git-link");
  const imgspan = document.querySelector("#image-spes");
  const livespan = document.querySelector("#live");

for(let i=0; i < spesObj.length; i++) {
    if(spesObj[i].post === id) {
        description.innerHTML = `${spesObj[i].desc}`;
        ghlink.innerHTML= `${spesObj[i].ghlink}`;
        imgspan.innerHTML = `${spesObj[i].imgsrc}`
        livespan.innerHTML = `${spesObj[i].lslink}`
    }
}
