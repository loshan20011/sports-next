// document.getElementsByClassName("news-heading")[0].innerHTML = window.localStorage.getItem("news");
console.log(window.localStorage.getItem("newsHeading"));

function loaded(){
 document.getElementsByClassName("news-image")[0].setAttribute("src",window.localStorage.getItem("newsImage"));
 document.getElementsByClassName("news-heading")[0].innerHTML = window.localStorage.getItem("newsHeading");
 document.getElementsByClassName("news-time")[0].innerHTML = window.localStorage.getItem("newsTime");
 document.getElementsByClassName("news-content")[0].innerHTML = window.localStorage.getItem("newsContent")
}