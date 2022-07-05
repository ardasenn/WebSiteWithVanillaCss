const btnHamburger=document.querySelector("#btn-hamburger")


btnHamburger.addEventListener("click",()=>{
    const slideMenu=document.querySelector(".slide-menu")
    if(slideMenu.classList=="slide-menu")
    {
        slideMenu.className="slide-menu open";
        btnHamburger.classList="x"

    }
    else{
        slideMenu.className="slide-menu"
        btnHamburger.classList="normal"
    }    
})

/*----Carousel---- */
const slides = document.querySelectorAll("#main-gallery .slide")
const numericButtons = document.querySelectorAll("#main-gallery nav.bullets button")
const directionalButtons = document.querySelectorAll("#main-gallery nav.directional button")
let carouselCurrentIndex = 0;
const slidesLength = slides.length
const slider=document.querySelector("#main-gallery .slider")
numericButtons.forEach(function (el) {
    el.addEventListener("click", handleNumericClick)
})
directionalButtons.forEach(function (el) {
    el.addEventListener("click", handleDirectionalClick)
})

function handleDirectionalClick(e) {
    const target = e.currentTarget
    const direction = target.dataset.direction
    if (direction === "next" && carouselCurrentIndex < slidesLength - 1) {
        carouselCurrentIndex++
    }
    else if (direction === "prev" && carouselCurrentIndex !== 0) {
        carouselCurrentIndex--
    }
    
    moveSlider()

}
function handleNumericClick(e) {

    const target = e.currentTarget
    const index = target.dataset.index

    carouselCurrentIndex = Number(index)
    moveSlider()

}

function moveSlider(e) {
    slider.style.left = `${ -carouselCurrentIndex * 100 }%`
}

/* Css'e numerical buttonun aktif clasını oluştur
* js ile aktif classa sahip butonu seç

*/