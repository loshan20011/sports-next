
carousel_navigation();

function carousel_navigation(){
  var carouselTrack = document.getElementById("carousel-track");
  document.getElementById("right-carousel").addEventListener("click",function(){
    carouselTrack.scrollTo({
      left: 500,
      behavior: "smooth",
    });
    }
  );
  
  document.getElementById("left-carousel").addEventListener("click",function(){
    carouselTrack.scrollTo({
      left: -500,
      behavior: "smooth",
    });
  });
}


var videoElements = document.querySelectorAll(".carousel-story-video");
var carouselItem = document.querySelectorAll(".carousel-item")

for(var i=0; i< carouselItem.length;i++){
  carouselItem[i].addEventListener("click",(e)=>{
    this.autoplay="false"
  })
}

