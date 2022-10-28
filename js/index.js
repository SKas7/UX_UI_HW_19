console.log("this worked");

$(".navInteraction").hover(function () {
  $(this).toggleClass("active");
}
);

  $(document).on("click",".navInteraction",function(){
    answer = $(this);
    if($("a").hasClass("clicked")){
        $(document).find("a").removeClass("clicked");
        answer.addClass("clicked");
    }else{
        answer.addClass("clicked");
    }
});

function scrollWin() {
  window.scrollTo(500, 500);
  console.log("I made it");
}

$("button").hover(function () {
  $(this).toggleClass("active");
}
);

$(".toggleProject").hover(function () {
  $(this).toggleClass("active");
}
);
$(".hoverText").hover(function () {
  $(this).toggleClass("active");
}
);
/*
$(window).scroll(function () {
  $("span").css("display", "inline").fadeOut("slow");
});

let section = document.querySelectorAll('.sectionFunction');
let lists = document.querySelectorAll('.hide-mobile ul li');
console.log(section);
console.log(lists);
function activeLink(li) {
  lists.forEach((item) => item.classList.remove('active'));
  li.classList.add('active');
  console.log("In AtiveLink");
}
lists.forEach((item) =>
  item.addEventListener('click', function () {
    activeLink(this);
  }));

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    console.log(id);

    if (top >= offset && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`).parentElement;
      activeLink(target);
      console.log(target);
    }
  })
};
*/