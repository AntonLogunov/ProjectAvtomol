ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.19831862068815,61.32016475065578],  
                zoom: 12
            });

            //var myPlacemark = new ymaps.Placemark([55.66, 37.7]);

            var placemark = new ymaps.Placemark([55.164566989281276,61.52518889519932],
            {
            balloonContentHeader: '<div class="baloon-divheader"><p class="baloon-p1">Эльтонская 1-я, 16</p></div>',
            balloonContentBody: '<div class="baloon-div"><p class="baloon-p2">ПН- ВС с 09:00 до 21:00</p>' + 
                                '<button class="baloon-button"><a class="baloon-link" href="request.html">Запись on-line</a></button></div>'
    
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
            balloonContentHeader: '<div class="baloon-divheader"><p class="baloon-p1">​СНТ Вишнёвый, 1264</p></div>',
            balloonContentBody: '<div class="baloon-div"><p class="baloon-p2">ПН- ВС с 09:00 до 21:00</p>' + 
                                '<button class="baloon-button"><a class="baloon-link" href="request.html">Запись on-line</a></button></div>'
        
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'src/img/mark.png',
                iconImageSize: [48, 48],
                iconImageOffset: [-3, -42],
            }
            );

            myMap.geoObjects.add(placemark);
            myMap.geoObjects.add(placemark2);


            let address_list = document.querySelectorAll(".address_list_item");

            address_list.forEach(list_item => {
               list_item.addEventListener('click', () => {
                if(list_item.getAttribute("id") == "el"){                 
                    myMap.panTo([55.164566989281276,61.52518889519932], 16);
                    //myMap2.panTo([55.164566989281276,61.52518889519932], 15);
                }
                if(list_item.getAttribute("id") == "snt"){
                    myMap.panTo([55.13012608675315,61.25751477307758], 16);
                    //myMap2.panTo([55.13012608675315,61.25751477307758], 15);
                }
                if(list_item.getAttribute("id") == "template"){
                    myMap.panTo([55.19831862068815,61.32016475065578], 16);
                    //myMap2.panTo([55.13012608675315,61.25751477307758], 15);
                }
               })
            });
        }