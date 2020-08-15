let imgSrc = 'moo.png';

function showImage(e) {
  const img = document.createElement("img");
  img.src = `${imgSrc}`;
  img.style.width = "70px";
  img.style.height = "70px";
   
  const mq = window.matchMedia("(max-width: 480px)");
  if (mq.matches) { 
    img.style.width = "150px";
    img.style.height = "150px";
  } else {
    img.style.width = "70px";
    img.style.height = "70px";
  }
   
  const x = Math.floor(Math.random()*(window.innerHeight - 50));
  const y = Math.floor(Math.random()*(window.innerWidth - 50));
  img.style.top = (e.pageY - 25);
  img.style.left = (e.pageX - 25);
   
   document.querySelector("body").appendChild(img);
  document.querySelector(".delete").addEventListener("click", (e) => {
    img.style.visibility = "hidden";
    // img.style.display = "none";
    img.style.opacity = "0";
  })
}

document.querySelector(".background").addEventListener("click", (e) => {
  showImage(e);
  console.log(e.pageX);
  console.log(e.pageY);
});

document.querySelector(".cntr").addEventListener("click", (e) => {
  imgSrc = e.target.src;
});