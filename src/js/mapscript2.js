ymaps.ready(init);
        function init(){
            /*--------------2nd map----------------*/
            var myMap2 = new ymaps.Map("map2", {
                center: [55.19831862068815,61.32016475065578],  
                zoom: 12
            });

            var placemark = new ymaps.Placemark([55.164566989281276,61.52518889519932],
            {
            balloonContentHeader: '<p class="baloon-p1">Эльтонская 1-я, 16</p>',
            balloonContentBody: '<p class="baloon-p2">ПН- ВС с 09:00 до 20:00</p> <br/> ' + 
                                '<button class="baloon-button"><a class="baloon-link" href="linkpage.html">Запись on-line</a></button>'

            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'src/img/mark.png',
                iconImageSize: [48, 48],
                iconImageOffset: [-3, -42],
            }
            );

            var placemark2 = new ymaps.Placemark([55.09393942974375,61.388720357387655],
            {
            balloonContentHeader: '<p class="baloon-p1">троицкий тракт 62ф</p>',
            balloonContentBody: '<p class="baloon-p2">ПН- ВС с 09:00 до 20:00</p> <br/> ' + 
                                '<button class="baloon-button"><a class="baloon-link" href="linkpage.html">Запись on-line</a></button>'

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
                let text = item.innerText,
                currentText = item.closest(".map-select").querySelector(".map-current"),
                select = item.closest(".map-select");

                currentText.innerText = text;
                select.classList.remove("map-is-active");

                if(item.getAttribute("id") == "el"){                 
                    //myMap.panTo([55.164566989281276,61.52518889519932], 16);
                    myMap2.panTo([55.164566989281276,61.52518889519932], 16);
                }
                if(item.getAttribute("id") == "tr"){
                    //myMap.panTo([55.09393942974375,61.388720357387655], 16);
                    myMap2.panTo([55.09393942974375,61.388720357387655], 16);
                }
                });
            });
        }