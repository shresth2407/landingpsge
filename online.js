const slides = document.querySelectorAll(".slider")
var counter = 0;
slides.forEach(
    (slider,index) =>{
        slider.style.left = `${index * 100}%`
    }
)

const goPrev = () =>{
    counter--
    slideImage()
}

const goNext = () =>{
    counter++
    slideImage()
}

// console.log(slides)

const slideImage = () =>{
    slides.forEach(
        (slider) =>{
        slider.style.transform = `translateX(-${counter*100}%)`
        }
    )
}





