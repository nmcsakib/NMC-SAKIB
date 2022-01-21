$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});
let togg = document.getElementById('checkbox');
let body = document.querySelector('body');
let about = document.querySelector('.heading');
let its= document.querySelector('.its');
let h2 = document.querySelector('h2');
let hc = document.querySelector('.hc');
let h4 = document.querySelector('h4');
let p = document.querySelector('.pp');
let s1 = document.querySelector('.s1');
let s2 = document.querySelector('.s2');
let s3 = document.querySelector('.s3');
let s4 = document.querySelector('.s4');
let s5 = document.querySelector('.s5');
let dis = document.querySelector('.dis');
let to = document.querySelector('.to');
let ran = document.querySelector('.ran');
let pla = document.querySelector('.pla');
let then= document.querySelector('.then');

let i = document.querySelector('.i');
let o = document.querySelector('.o');
let m = document.querySelector('.m');

let n= document.querySelector('.n');

let j = document.querySelector('.j');

let k = document.querySelector('.k');
let l = document.querySelector('.l');
let my = document.querySelector('.my');
let how = document.querySelector('.how');
let me = document.querySelector('.me');
let title = document.querySelector('.title');
let mm = document.querySelector('.mm');
let mmm = document.querySelector('.mmm');
let mmmm = document.querySelector('.mmmm');
let mmmmm = document.querySelector('.mmmmm');
let face = document.querySelector('.face');
let light= document.querySelector('.light');
let dark= document.querySelector('.dark');
togg.addEventListener("change", ()=>{
  if(togg.checked === true){
    body.style.backgroundColor = "white";
    p.style.color = "black";
    its.style.color = "black";

    about.style.color = "black";
    s1.style.color = "black";
    s2.style.color = "black";
    s3.style.color = "black";
    s4.style.color = "black";
    s5.style.color = "black";
    hc.style.color = "black";
   s2.style.color = "black";
    s3.style.color = "black";
    s4.style.color = "black";
    s5.style.color = "black";
    dis.style.color = "black";
    to.style.color = "black";
    pla.style.color = "black";
    then.style.color = "black";
    ran.style.color = "black";
    i.style.color = "black";
    n.style.color = "black";
    o.style.color = "black";
    j.style.color = "black";
    k.style.color = "black";
    l.style.color = "black";
    m.style.color = "black";
    my.style.color = "black";
    how.style.color = "black";
    me.style.color = "black";
    title.style.color = "black";
    mm.style.color = "black";
    mmm.style.color = "black";
     mmmm.style.color = "black";
      mmmmm.style.color = "black";
      face.style.color = "black";
      light.style.color = "black";
      light.style.display = "block";
      dark.style.display = "none"
      dark.style.color = "black";


  }else{
    body.style.backgroundColor = "black";
     p.style.color = "white";
    its.style.color = "white";
    p.style.color = "white";
    about.style.color = "white";
    s1.style.color = "white";
    
    hc.style.color = "white";
   s2.style.color = "white";
    s3.style.color = "white";
    s4.style.color = "white";
    s5.style.color = "white";
    dis.style.color = "white";
    to.style.color = "white";
    pla.style.color = "white";
    then.style.color = "white";
    ran.style.color = "white";
    i.style.color = "white";
    n.style.color = "white";
    o.style.color = "white";
    j.style.color = "white";
    k.style.color = "white";
    l.style.color = "white";
    m.style.color = "white";
    
    my.style.color = "white";
   
    how.style.color = "white";
    me.style.color = "white";
    title.style.color = "white";
    mm.style.color = "white";
    mmm.style.color = "white";
     mmmm.style.color = "white";
      mmmmm.style.color = "white";
      face.style.color = "white";
      dark.style.color = "white";
    light.style.color = "white";
    light.style.display = "none";
    dark.style.display = "block";
  }
  
});




function myFunc() {
  confirm("This may take 2GB to download                                                                    do you want to download it??");
}


