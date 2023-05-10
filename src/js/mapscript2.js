ymaps.ready(init);
        function init(){
            /*--------------2nd map----------------*/
            var myMap2 = new ymaps.Map("map2", {
                center: [55.19831862068815,61.32016475065578],  
                zoom: 15
            });

            var placemark = new ymaps.Placemark([55.164566989281276,61.52518889519932],
            {
            balloonContentHeader: '<div class="baloon-divheader"><p class="baloon-p1">Эльтонская 1-я, 16</p></div>',
            balloonContentBody: '<div class="baloon-div"><p class="baloon-p2">ПН- ВС с 09:00 до 21:00</p>' + 
                                '<button class="baloon-button"> Выбрать </button></div>'

            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'src/img/mark.png',
                iconImageSize: [48, 48],
                iconImageOffset: [-3, -42],
            }
            );

            var placemark2 = new ymaps.Placemark([55.13012608675315,61.25751477307758],
            {
            balloonContentHeader: '<div class="baloon-divheader"><p class="baloon-p1">СНТ вишнёвый, 1264</p></div>',
            balloonContentBody: '<div class="baloon-div"><p class="baloon-p2">ПН- ВС с 09:00 до 21:00</p>' + 
                                '<button class="baloon-button"> Выбрать </button></div>'

            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'src/img/mark.png',
                iconImageSize: [48, 48],
                iconImageOffset: [-3, -42],
            }
            );

            myMap2.geoObjects.add(placemark);
            myMap2.geoObjects.add(placemark2);

            var selectHeader = document.querySelector(".map-select-header");
            var selectBody = document.querySelectorAll(".map-select-item");

            selectHeader.addEventListener("click", () => {
                selectHeader.parentElement.classList.toggle("map-is-active");
            })

            selectBody.forEach(item => {
                item.addEventListener("click", () => {
                let text = item.innerText;
                currentText = item.closest(".map-select").querySelector(".map-current");
                select = item.closest(".map-select");

                currentText.innerText = text;
                select.classList.remove("map-is-active");


                selectHeader.classList.add("map-select-header_active");
                currentText.classList.add("current_active");
                const arrowDown = document.getElementById("arrowdown");
                arrowDown.classList.add("arrowdown_path");

                if(item.getAttribute("id") == "el"){                 
                    //myMap.panTo([55.164566989281276,61.52518889519932], 16);
                    myMap2.panTo([55.164566989281276,61.52518889519932], 15);
                }
                if(item.getAttribute("id") == "tr"){
                    //myMap.panTo([55.09393942974375,61.388720357387655], 16);
                    myMap2.panTo([55.13012608675315,61.25751477307758], 15);
                }
                console.log(text);
                });
            });

            var mapDiv = document.querySelector(".map-style2");
            var mapCurrentPoint = document.querySelector(".map-current");

            mapDiv.addEventListener('click', (event) => {
                if(event.target.classList.contains("baloon-button"))  {
                    let lll = event.target.closest(".ymaps-2-1-79-balloon__content");
                    let p = lll.querySelector(".baloon-p1");
                    mapCurrentPoint.innerHTML = p.innerHTML;

                    selectHeader.classList.add("map-select-header_active");

                    currentText = event.target.closest(".map-container-choise").querySelector(".map-current");
                    currentText.classList.add("current_active");

                    const arrowDown = document.getElementById("arrowdown");
                    arrowDown.classList.add("arrowdown_path");
                }  
            })

            myMap2.events.add('click', function (e) {  
                placemark.balloon.close();  
                placemark2.balloon.close();                 
            });
        }