//check content 
 var scrollContainer =  document.querySelector("#scroll-container");
 var navigationLinks = document.querySelectorAll(".section-links");
 scrollContainer.addEventListener('scroll',()=>{
  const scrolled = scrollContainer.scrollTop;
  
  if(scrolled < visualViewport.height){
   removeActive()
   navigationLinks[0].classList.add("active-link")

  }else if(scrolled<(2*visualViewport.height)){
   removeActive()
   navigationLinks[1].classList.add("active-link")

  }
  else if(scrolled<(3*visualViewport.height)){
   removeActive()
   navigationLinks[2].classList.add("active-link")
  }
  else if(scrolled<(4*visualViewport.height)){
   removeActive()
   navigationLinks[3].classList.add("active-link")
  }
  else if(scrolled<(5*visualViewport.height)){
   removeActive()
   navigationLinks[4].classList.add("active-link")
  }
 })

 function removeActive(){
  for (var i=0; i<navigationLinks.length; i++){
   navigationLinks[i].classList.remove("active-link")
  }
 }

 window.addEventListener("load",()=>{
   removeActive()
   navigationLinks[0].classList.add("active-link")

 })