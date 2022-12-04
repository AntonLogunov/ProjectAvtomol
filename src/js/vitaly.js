function createSlider(
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
                btnNext.style.display = "none"
            }
            if(current != 0){
                btnPrev.style.display = "block"
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
const slider = document.querySelector(".section-slider__slider")
const list = slider.querySelector(".section-slider__list")
const widthSLide = 1233;
const btnNext = slider.querySelector(".section-slider__slider-buton-next")
const btnPrev = slider.querySelector(".section-slider__slider-buton-prev")

const reviewsSlider = document.querySelector(".section_clients_reviews__slider")
const reviewsList = reviewsSlider.querySelector(".section_clients_reviews__list")
const reviewsWidthSLide = 1233;
const reviewsBtnNext = reviewsSlider.querySelector(".section_clients_reviews__slider-buton-next")
const reviewsBtnPrev = reviewsSlider.querySelector(".section_clients_reviews__slider-buton-prev")

createSlider(slider,list,widthSLide,btnNext,btnPrev);

createSlider(reviewsSlider,reviewsList,reviewsWidthSLide,reviewsBtnNext,reviewsBtnPrev);

// btnNext.addEventListener("click",function(){
//     if(nextRadioNumber > 4){
//         nextRadioNumber = 4;
//         currentRadioNumber = 3;
//         prevRadioNumber = 2;
//         // console.log("FINISH currentRadioNumber " +currentRadioNumber);console.log("nextRadioNumber " +nextRadioNumber);console.log("prevRadioNumber " +prevRadioNumber);
//     } 
//     current++;
//     let dist = current*widthSLide;
//     let currentRadio = slider.querySelector(".slider-radio--"+currentRadioNumber)
//     let currentRadioNext = slider.querySelector(".slider-radio--"+nextRadioNumber)

//     // console.log("NEXT1 currentRadioNumber " +currentRadioNumber);console.log("nextRadioNumber " +nextRadioNumber);console.log("prevRadioNumber " +prevRadioNumber);

//     list.style.transform = "translate("+ (-dist) +"px)";
//     currentRadio.removeAttribute("checked")
//     currentRadioNumber++;
//     currentRadioNext.setAttribute("checked","checked")
//     nextRadioNumber++;
//     prevRadioNumber++;

//     // console.log("NEXT2 currentRadioNumber " + currentRadioNumber);console.log("nextRadioNumber " + nextRadioNumber);console.log("prevRadioNumber " +prevRadioNumber);
    
//     if(current == 3){
//         btnNext.style.display = "none"
//     }
//     if(current != 0){
//         btnPrev.style.display = "block"
//     }
// });


// btnPrev.addEventListener("click",function(){
//     if(nextRadioNumber < 2){
//         nextRadioNumber = 2;
//         currentRadioNumber = 1;
//         prevRadioNumber = -1;
//         // console.log("START currentRadioNumber " +currentRadioNumber);console.log("nextRadioNumber " +nextRadioNumber);console.log("prevRadioNumber " +prevRadioNumber);
//     } 
//     current--;
//     let dist = current*widthSLide;
//     let currentRadio = slider.querySelector(".slider-radio--"+currentRadioNumber)
//     let currentRadioPrev = slider.querySelector(".slider-radio--"+prevRadioNumber)

//     // console.log("PREV1 currentRadioNumber " +currentRadioNumber);console.log("nextRadioNumber " +nextRadioNumber);console.log("prevRadioNumber " +prevRadioNumber);
//     list.style.transform = "translate("+ (-dist) +"px)";
//     currentRadio.removeAttribute("checked")
//     currentRadioNumber--;
//     currentRadioPrev.setAttribute("checked","checked")
//     prevRadioNumber--;
//     nextRadioNumber--;
//     // console.log("PREV2 currentRadioNumber " + currentRadioNumber);console.log("nextRadioNumber " +nextRadioNumber);console.log("nextRadioNumber " + nextRadioNumber);
//     if(current == 0){
//         btnPrev.style.display = "none"
//     }
//     if(current != 3){
//         btnNext.style.display = "block"
//     }
// });