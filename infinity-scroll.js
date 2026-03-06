const nav = document.getElementById("navScroll");

nav.addEventListener("scroll", () => {
  const scrollWidth = nav.scrollWidth / 2;

  if(nav.scrollLeft >= scrollWidth){
    nav.scrollLeft = 0;
  }
});

/* 
setInterval(()=>{
  nav.scrollLeft += 1;
}, 30);
*/