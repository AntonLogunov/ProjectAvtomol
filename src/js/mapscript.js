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
                                '<button class="baloon-button"><a class="baloon-link" href="linkpage.html">Запись on-line</a></button></div>'
    
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
                                '<button class="baloon-button"><a class="baloon-link" href="linkpage.html">Запись on-line</a></button></div>'
        
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

        }