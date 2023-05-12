var head_nav_responsive_btn = document.querySelector('.head-nav-responsive-btn')
var overlay = document.querySelector('.overlay')
var head_nav_responsive = document.querySelector('.head-nav-responsive')


head_nav_responsive_btn.onclick = () => {
    head_nav_responsive.classList.add('showNav')
    overlay.classList.add('showNav')
    // head_nav_responsive.classList.remove('hideNav')
    // overlay.classList.remove('hideNav')
    
    
    // animaiton
    head_nav_responsive_btn.classList.add('holeOut');
    head_nav_responsive_btn.classList.add('magictime');
    head_nav_responsive_btn.classList.remove('twisterInDown');

}

overlay.onclick = () => {
    // head_nav_responsive.classList.add('hideNav')
    // overlay.classList.add('hideNav')

    overlay.classList.remove('showNav')
    head_nav_responsive.classList.remove('showNav')

// animaiton
    head_nav_responsive_btn.classList.remove('holeOut');
    head_nav_responsive_btn.classList.add('twisterInDown');
}


var h2=document.getElementsByTagName('h2')
var h1=document.getElementsByTagName('h1')
var circle=document.querySelectorAll('.circle-box-icon')
var logo_texts=document.querySelectorAll('.logo-text')


setInterval(() => {
    h1[0].classList.add('leBeat')

    logo_texts.forEach((e)=>{
        e.classList.add('leFadeIn')
    })
    circle.forEach((e)=>{
        e.classList.add('vanishIn')
    })


}, 3000);

setInterval(() => {
    h1[0].classList.remove('leBeat')

    logo_texts.forEach((e)=>{
        e.classList.remove('leFadeIn')
    })
    circle.forEach((e)=>{
        e.classList.remove('vanishIn')
    })
}, 8000);

setInterval(()=>{
    for (var i = 0;i < h2.length ; i++){
        h2[i].classList.add('leZoomInTop')
    }
},10000)


setInterval(()=>{
    for (var i = 0;i < h2.length ; i++){
        h2[i].classList.remove('leZoomInTop')
    }
},21000)

// setInterval(()=>{
//     $('.criteria__circle').removeClass('vanishIn magictime');
// },6000)