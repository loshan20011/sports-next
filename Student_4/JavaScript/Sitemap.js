//Creating the hover effect of a button by changing svg parameters
var contentBox = document.getElementsByClassName("wrapper-box")
for(let i=0; i<contentBox.length; i++){
  let rectangleElement =contentBox[i].getElementsByTagName("rect")[0];
  
  contentBox[i].addEventListener("mouseover",function(){
    
    rectangleElement.style.fill = "var(--primary-highlight)";
      
    rectangleElement.setAttribute("x","5");
    rectangleElement.setAttribute("y","5");
    rectangleElement.setAttribute("width","160");
    rectangleElement.style.strokeWidth =".6";
    
    contentBox[i].getElementsByClassName("content-box")[0].style.transform="translate(5px,5px)"
    
    if(i == 0){
      rectangleElement.setAttribute("height","110");

      contentBox[i].getElementsByTagName("polygon")[0].setAttribute("points","7,7 166,6 170,10 170,120 10,120 5,115");
    }else{
      contentBox[i].getElementsByTagName("polygon")[0].setAttribute("points","5,5 166,5 170,10 170,260 10,260 5,256");
    }
  })

  contentBox[i].addEventListener("mouseout",function(){
    let rectangleElement =contentBox[i].getElementsByTagName("rect")[0];

    rectangleElement.style.fill = "var(--background-white)";

    rectangleElement.setAttribute("x","0");
    rectangleElement.setAttribute("y","0");
    rectangleElement.setAttribute("width","160");
    rectangleElement.style.strokeWidth ="1";

    contentBox[i].getElementsByClassName("content-box")[0].style.transform="translate(0)"
    
    if(i == 0){
      rectangleElement.setAttribute("height","110");
      contentBox[i].getElementsByTagName("polygon")[0].setAttribute("points","0,0 161,0 170,10 170,120 10,120 0,110");
    }else{
      contentBox[i].getElementsByTagName("polygon")[0].setAttribute("points","0,0 161,0 170,10 170,260 10,260 0,251");
    }
  })
}

// Change in navigation bar after passing the video container
window.addEventListener('scroll',()=>{
  const videoObject = document.getElementById("video-container");
  let videoHeight = window.getComputedStyle(videoObject).height;
  videoHeight = Number(videoHeight.replace("px",""));
  
  console.log(videoHeight);
  const scrolled = window.scrollY +73;
  console.log(scrolled);
  if(scrolled<videoHeight){
    document.getElementsByClassName("navbar__background")[0].style.background = "rgba(00,00,00, 0.0)";
  }
  else if(scrolled>videoHeight){
    document.getElementsByClassName("navbar__background")[0].style.background = "";
  }
})