ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.19831862068815,61.32016475065578],  
                zoom: 12
            });

            //var myPlacemark = new ymaps.Placemark([55.66, 37.7]);

            var placemark = new ymaps.Placemark(myMap.getCenter(),
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

            var haroldMark = new ymaps.Placemark([55.19731862068815,61.32016475065578],
            {
            balloonContentHeader: 'Amogus',
            balloonContentBody: 'just letters for popitus',
            balloonContentFooter: 'lil ogus',
            hintContent: 'Hint'
            },
            {
            iconLayout: 'default#image',
            iconImageHref: 'src/img/mark.png',
            iconImageSize: [48, 48],
            iconImageOffset: [-3, -42],
            }
            );

            
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FF0000; font-weight: bold;">$[properties.iconContent]</div>'
             );

            myPlacemarkWithContent = new ymaps.Placemark([55.19631862068815,61.32016475065578],
            {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: '<a href="linkpage.html">link</a>',
            iconContent: 'У меня работает ссылка'
            },
            {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'src/img/mark.png',
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
            });


            // counter = 0,

            // BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            //     '<div class="baloon-div">' +
            //         '<b>{{properties.name}}</b><br />' +
            //         '<i id="count"></i> ' +
            //         '<button id="counter-button"> +1 </button>' +
            //     '</div>'
            // );

            // var placemark = new ymaps.Placemark([55.650625, 37.62708], {
            // name: 'Считаем'
            // },
            // {
            //     balloonContentLayout: BalloonContentLayout,
            //     balloonPanelMaxMapArea: 0
            // });

            myMap.geoObjects.add(myPlacemarkWithContent);
            //yMap.geoObjects.add(placemark);
            myMap.geoObjects.add(haroldMark);
            myMap.geoObjects.add(placemark);

        }