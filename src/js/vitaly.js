function createSliderRadio(
    sliderElement,
    sliderList,
    slideWidth,
    btnNext,
    btnPrev
    ) {
        let currentRadioNumber = 1;
        let nextRadioNumber = 2;
        let prevRadioNumber = 0;
        let current = 0;
        // if(isRadio == false){
        //     btnPrev.style.display = "block"
        // }
        btnNext.addEventListener("click",function(){
            if(nextRadioNumber > 4){
                nextRadioNumber = 4;
                currentRadioNumber = 3;
                prevRadioNumber = 2;
            } 
            current++;
            let dist = current*slideWidth;
            let currentRadio = sliderElement.querySelector(".slider-radio--"+currentRadioNumber)
            let currentRadioNext = sliderElement.querySelector(".slider-radio--"+nextRadioNumber)
            sliderList.style.transform = "translate("+ (-dist) +"px)";
            currentRadio.removeAttribute("checked")
            currentRadioNumber++;
            currentRadioNext.setAttribute("checked","checked")
            nextRadioNumber++;
            prevRadioNumber++;
            if(current == 3){
                btnNext.style.display = "none";
            }
            if(current != 0){
                btnPrev.style.display = "block";
            }
        });
        btnPrev.addEventListener("click",function(){
            if(nextRadioNumber < 2){
                nextRadioNumber = 2;
                currentRadioNumber = 1;
                prevRadioNumber = -1;
            } 
            current--;
            let dist = current*slideWidth;
            let currentRadio = sliderElement.querySelector(".slider-radio--"+currentRadioNumber)
            let currentRadioPrev = sliderElement.querySelector(".slider-radio--"+prevRadioNumber)
            sliderList.style.transform = "translate("+ (-dist) +"px)";
            currentRadio.removeAttribute("checked")
            currentRadioNumber--;
            currentRadioPrev.setAttribute("checked","checked")
            prevRadioNumber--;
            nextRadioNumber--;
            if(current == 0){
                btnPrev.style.display = "none"
            }
            if(current != 3){
                btnNext.style.display = "block"
            }
        });
}
function createSlider(
    sliderList,
    slidesAmount,
    slideWidth,
    btnNext,
    btnPrev
    ) {
        let currentSlideNumber = 1;
        let nextSlideNumber = 2;
        let prevSlideNumber = 0;
        let current = 0;

        //btnPrev.style.display = "block"

        btnNext.addEventListener("click",function(){
            current++;
            let dist = current*slideWidth;
            sliderList.style.transform = "translate("+ (-dist) +"px)";
            nextSlideNumber++;
            currentSlideNumber++;
            prevSlideNumber++;
            console.log(prevSlideNumber +" "+ currentSlideNumber +" "+ nextSlideNumber);
            if(currentSlideNumber == slidesAmount){
                btnNext.style.display = "none"

                // nextSlideNumber = slidesAmount;
                // currentSlideNumber = slidesAmount - 1;
                // prevSlideNumber = slidesAmount - 2;
            } 
            else{
                btnPrev.style.display = "block"
            }
        });
        btnPrev.addEventListener("click",function(){
            current--;
            let dist = current*slideWidth;
            sliderList.style.transform = "translate("+ (-dist) +"px)";
            prevSlideNumber--;
            currentSlideNumber--;
            nextSlideNumber--;
            console.log(prevSlideNumber +" "+ currentSlideNumber +" "+ nextSlideNumber);
            if(currentSlideNumber == 1){
                btnPrev.style.display = "none"
                
                // nextSlideNumber = 2;
                // currentSlideNumber = 1;
                // prevSlideNumber = 0;
            }
            else{
                btnNext.style.display = "block"
            }
        });
}
const slider = document.querySelector(".section-slider__slider")
const list = document.querySelector(".section-slider__list")
const widthSLide = 1233;
const btnNext = document.querySelector(".section-slider__slider-buton-next")
const btnPrev = document.querySelector(".section-slider__slider-buton-prev")

//const reviewsSlider = document.querySelector(".section_clients_reviews__slider")
const reviewsList = document.querySelector(".section_clients_reviews__list")
const reviewsSlidesAmount = 4;
//const reviewsWidthSLide = 1233;
const reviewsWidthSLide = 354;
const reviewsBtnNext = document.querySelector(".section_clients_reviews__slider-buton-next")
const reviewsBtnPrev = document.querySelector(".section_clients_reviews__slider-buton-prev")
//const reviewsRadio = false

createSliderRadio(slider,list,widthSLide,btnNext,btnPrev);

createSlider(reviewsList,reviewsSlidesAmount,reviewsWidthSLide,reviewsBtnNext,reviewsBtnPrev);