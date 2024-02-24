ToolTip_Activation();
item_hover("news__item-module");
item_hover("carousel-item");
video_play();

//---------APPLYING SETTINGS---------------------------------------

//When pressing font size buttons all font sizes change accordingly
document.getElementById("font-size__small").addEventListener("click",function(){
  document.getElementsByTagName("html")[0].style.fontSize = "12px";
});

document.getElementById("font-size__medium").addEventListener("click",function(){
  document.getElementsByTagName("html")[0].style.fontSize = "16px";
})

document.getElementById("font-size__large").addEventListener("click",function(){
  document.getElementsByTagName("html")[0].style.fontSize = "24px";
})

var colorBtn = document.getElementsByClassName("color-btn");

//When pressing color buttons all colors change accordingly
document.getElementById("green-btn").addEventListener("click",function(){
  changeColorTo("neonGreen");
})
document.getElementById("blue-btn").addEventListener("click",function(){
  changeColorTo("lightBlue");
})
document.getElementById("orange-btn").addEventListener("click",function(){
  changeColorTo("neonOrange");
})
document.getElementById("random-btn").addEventListener("click",function(){
  changeColorTo("randomColor");
});


function ToolTip_Activation(){
  //Tooltip activation
  var pageSettingIcon = document.querySelector("#page__settings");
  
  pageSettingIcon.addEventListener("click",(e)=>{
  
    var settingData = pageSettingIcon.dataset.settingsActive;
    if(settingData === "false"){
      console.log("the setting button is active")
  
      document.getElementsByClassName("tooltip__popup")[0].classList.add("active")
      pageSettingIcon.setAttribute("data-settings-active","true")
  
    }else if(settingData === "true"){
      console.log("the settings button is inactive")
      document.getElementsByClassName("tooltip__popup")[0].classList.remove("active")
      pageSettingIcon.setAttribute("data-settings-active","false")
    }
  })
  }

/* Hover effect for carousel item */
function item_hover(item){
  var Elements = document.getElementsByClassName(item) ;

  for(let i =0; i<Elements.length; i++){
    Elements[i].addEventListener("mouseover",function(){
      this.style.transform ="scale(1.01)";
    })
    Elements[i].addEventListener("mouseout",function(){
      this.style.transform = "scale(1)";
    })
  }
}

function video_play(){
  var videoContainerArray = document.getElementsByClassName("carousel-story-video");

  for(let i=0; i<videoContainerArray.length; i++){
    videoContainerArray[i].addEventListener("mouseover",(e)=>{
      e.target.play();
      e.target.setAttribute("controls",true)
      let storyTag = e.target.parentElement.getElementsByClassName("story-heading")[0];
      storyTag.style.opacity="0";
    })
    videoContainerArray[i].addEventListener("mouseout",(e)=>{
      e.target.pause();
      e.target.removeAttribute("controls")
      let storyTag = e.target.parentElement.getElementsByClassName("story-heading")[0];
      storyTag.style.opacity="1";
    })
  }
}

const settingProperty = document.querySelector(':root').style

function changeColorTo(color){
  switch (color){
    case "neonGreen":{
      settingProperty.setProperty("--primary-highlight","#E5F100");
      break;
    }

    case "lightBlue": {
      settingProperty.setProperty("--primary-highlight","#63D2E1");
      break;
  }

    case "neonOrange":{
      settingProperty.setProperty("--primary-highlight","#FF9737DD");

      break;
    }

    case "randomColor":{
      settingProperty.setProperty("--primary-highlight",randomColorPicker())
      break;
    }
  }
}

function randomColorPicker(mode){
  var randomRed,randomGreen,randomBlue
  
  randomRed = Math.floor(Math.random()*256);
  randomGreen = Math.floor(Math.random()*256);
  randomBlue = Math.floor(Math.random()*256);

  var colorSum = randomRed+randomGreen+randomBlue;
  return "rgba("+randomRed+","+randomGreen+","+randomBlue+","+"0.5)";
}


//Change appearence to light or dark
var modeSwitch = document.getElementById("modeSwitch");

modeSwitch.addEventListener("change",()=>{
  if(modeSwitch.checked){
    // ref: https://codepen.io/GennadiD/pen/Moxopa
    for(var color in themes.dark){
      console.log(color);
      settingProperty.setProperty(color,(themes.dark[color]))
    }
  }
  else if(!modeSwitch.checked){
    for(var color in themes.light){
      console.log(color);
      settingProperty.setProperty(color,(themes.light[color]))
    }
  }
})

const themes= {
  light: {
    '--background-color':'#F6F5F8',
    '--headline-color': '#161616',
    '--storyline-color':'#F6F5F8',
    '--newsline-color': '#000000',
    '--news-time-color': '#2d2d2d'
  },
  dark: {
    '--background-color':'#161616',
    '--headline-color': '#F6F5F8',
    '--storyline-color':'#F6F5F8',
    '--newsline-color': '#F6F5F8',
    '--news-time-color': '#cecece'
  }

}

