const bannerDetails = [
  {
    title: "Badminton",
    description:
      "Racquets are used in the racquet sport of badminton to hit a shuttlecock through a net. The most popular versions of the game are singles (with one player each side) and doubles, though it can also be played with bigger teams (with two players per side). While formal matches are conducted on a rectangular indoor court, badminton is frequently played as a recreational outdoor pastime in a yard or on a beach. The shuttlecock must land inside the other team's half of the court in order to score a point.",
    link: "../Student_2/content_page.html",
  },
  {
    title: "BasketBall",
    description:
      "Basketball is a team sport in which two teams, usually each with five players, compete against one another on a rectangular court with the main goal of preventing the opposing team from shooting through their own hoop while putting the ball through the defender's hoop, which is a basket with a diameter of 18 inches (46 cm) mounted 10 feet (3.048 m) high to a backboard at each end of the court. Unless when made from behind the three-point line, a field goal is worth three points.",
    link: "../Student_4/Content-page-basketball.html",
  },
  {
    title: "Cricket",
    description:
      "Cricket is a bat-and-ball sport that is played between two teams of eleven players on a field that has a wicket at each end made up of two bails balanced on three stumps. The pitch measures 22 yards (20 meters) in length. The bowling and fielding side tries to prevent this (by keeping the ball from leaving the field and getting it to either wicket) and dismisses each batter. The batting side scores runs by hitting the ball bowled at one of the wickets with the bat and then running between the wickets (so they are out).",
    link: "../Student_3/content-page.html",
  },
  {
    title: "Football",
    description:
      "Football refers to a group of team sports that, in varied degrees, involve kicking a ball in order to score goals. Without qualification, the term football generally refers to the variety of the game that is most common in the context in which it is used. Association football, also known as soccer in North America, Ireland, and Australia, gridiron football, sometimes known as American football or Canadian football, Australian rules football, rugby union and rugby league, and Gaelic football are all sports that are frequently referred to as football. These different football variations, referred to as football codes, have varying degrees of shared ancestry.",
    link: "../Student_1/Html/Content_page.html",
  },
];

const btns = document.querySelectorAll(".slide-btn");
const slider = document.querySelectorAll(".video-bg");
const bannerTitle = document.getElementById("banner-title");
const bannerDescription = document.getElementById("banner-description");
const bannerLink = document.getElementById("banner-link");

var slideVideo = function (index) {
  const item = bannerDetails[index];
  console.log(item);
  bannerTitle.innerHTML = item.title;
  bannerDescription.innerHTML = item.description;
  bannerLink.setAttribute("onclick", "window.location.href='"+item.link+"'");

  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slider.forEach((slide) => {
    slide.classList.remove("active");
  });
  btns[index].classList.add("active");
  slider[index].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    slideVideo(i);
  });
});
