const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img-modal");
const img = document.getElementsByClassName("modalImage");

for(let i = 0; i < img.length; i++) {
        img[i].addEventListener("click", function() {
             modal.classList.toggle("displayClass");
     modalImg.src = this.src
    });
}
    

  
  

   //this is probably not the best way to only close the modal if anything but the image is clicked, if the background is pressed the classlist will be more than 2 so i made this function to check if image is pressed.
  modal.addEventListener("click", function(e) {
    if( (e.target.classList.length) > 1) {
      modal.classList.remove("displayClass");
    };
    
  });

  const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

one.onclick = function() {
  window.location.href = "spesific.html?post=ismk";
}
two.onclick = function() {
  window.location.href = "spesific.html?post=plantspire";
}
three.onclick = function() {
  window.location.href = "spesific.html?post=rainydays";
}




const sitebtn = document.querySelector("#site-button");

const gitbtn = document.querySelector("#github-button");

sitebtn.onclick = function(){
  window.location.href = "https://unrivaled-mooncake-14dedc.netlify.app/contact.html";
} 

gitbtn.onclick = function(){
  window.location.href = "https://github.com/AudunTA/PlantSpire_p";
} 