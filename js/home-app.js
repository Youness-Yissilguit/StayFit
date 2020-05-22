
//animate the content
const titles = document.querySelectorAll('.content h1');
counter = 0;
content = [
  [`<span>..</span> be strong`, 'stay <span>fit</span>'],
  ['<span>..</span>be yourself', 'join <span>us</span>']
];
function nexttitle(){
  if(counter === content.length - 1){
    counter = 0;
  } else{
    counter++;
  }
  titles.forEach(title => {
    title.classList.remove('show');
  });
  titles.forEach(title => {
    setTimeout(function(){
      title.classList.add('show');
      const bg = document.querySelector('header .bg');
      document.querySelector('.content .head1').innerHTML = content[counter][0];
      document.querySelector('.content .head2').innerHTML = content[counter][1];
      bg.style.background = `url('images/bg${counter}.jpg') no-repeat 100% 50%`;
      bg.style.backgroundSize = 'cover'
    }, 900);
  });
};
//auto slider
setInterval(function(){
  nexttitle()
}, 5000);

//open and close the navbar;
const openBtn = document.querySelector('nav .open-n');
const closeBtn = document.querySelector('.fixed-nav .close-n');
const theNav = document.querySelector('.fixed-nav');
openBtn.addEventListener('click', () => {
  theNav.classList.add('show')
});
closeBtn.addEventListener('click', () => {
  theNav.classList.remove('show')
});

//call the carousel
$(document).ready(function(){
  //activate the carousel
  $('.owl-carousel').owlCarousel({
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

});
