var news_module= document.getElementsByClassName("news__item-module");

for(var i = 0; i<news_module.length; i++){
 let module = news_module[i]
 module.addEventListener("click",function(){
  let heading = module.getElementsByClassName("news__headline")[0].innerHTML;
  let time = module.getElementsByClassName("news__time")[0].innerHTML;
  let image = module.getElementsByTagName("img")[0].getAttribute("src");
  let content = module.getElementsByClassName("news__content")[0].innerHTML;
  console.log(image)
  
  window.localStorage.setItem("newsImage",image),
  window.localStorage.setItem("newsHeading",heading);
  window.localStorage.setItem("newsTime",time);
  window.localStorage.setItem("newsContent",content);
  window.location.href = "news-more.html";
 })
}
