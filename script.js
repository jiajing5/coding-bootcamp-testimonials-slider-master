let n = 0;
let imageData = [
  {
    src: "./images/image-tanya.jpg",
    saying: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    name: "Tanya Sinclair",
    carrer: "UX Engineer",
  }
  ,
  {
    src: "./images/image-john.jpg",
    saying: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    name: "John Tarkpor",
    carrer: "Junior Front-end Developer",
  }
];
let photo0 = document.getElementById('photo0');
let saying0 = document.getElementById('saying0');
let name0 = document.getElementById('name0');
let carrer0 = document.getElementById('carrer0');
let imglen = imageData.length
function nextPage () {
  // console.log(imageData);
  n++;
  if (n < imglen) {
    photo0.src = imageData[n].src;
    saying0.innerHTML = imageData[n].saying;
    name0.innerHTML = imageData[n].name;
    carrer0.innerHTML = imageData[n].carrer;
    // console.log(n);
  } else if (n == imglen){
    photo0.src = imageData[0].src;
    saying0.innerHTML = imageData[0].saying;
    name0.innerHTML = imageData[0].name;
    carrer0.innerHTML = imageData[0].carrer;
    // console.log(n);
    n = 0;
  }
}
function prePage () {
  n++;
  if (n == 1) {
    photo0.src = imageData[imglen-1].src;
    saying0.innerHTML = imageData[imglen-1].saying;
    name0.innerHTML = imageData[imglen-1].name;
    carrer0.innerHTML = imageData[imglen-1].carrer;
  } else if (n < imglen) {
    photo0.src = imageData[imglen-n].src;
    saying0.innerHTML = imageData[imglen-n].saying;
    name0.innerHTML = imageData[imglen-n].name;
    carrer0.innerHTML = imageData[imglen-n].carrer;
  } else if (n == imglen){
    photo0.src = imageData[0].src;
    saying0.innerHTML = imageData[0].saying;
    name0.innerHTML = imageData[0].name;
    carrer0.innerHTML = imageData[0].carrer;
    n = 0;
  }
}
document.getElementById('prearrow').addEventListener('click', prePage);
document.getElementById('nextarrow').addEventListener('click', nextPage);