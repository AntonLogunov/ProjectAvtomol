ymaps.ready(init);
        function init(){
            /*--------------2nd map----------------*/
            var myMap2 = new ymaps.Map("map2", {
                center: [55.19831862068815,61.32016475065578],  
                zoom: 12
            });

            var placemark2 = new ymaps.Placemark(myMap2.getCenter(),
            {
            balloonContentHeader: '<p class="baloon-p1">ул. Бейвеля 4а</p>',
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

            myMap2.geoObjects.add(placemark2);
        }