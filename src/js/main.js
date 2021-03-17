import './vendor/focus-visible.min.js';
import './_vars';
import './modal';
import './calculator';
import './mobile-menu';
import './portfolio-slider';
import './contacts-map';
import {resizeContent} from './functions/resize';
import {scrollTo} from './functions/smooth-scroll';
import {disableScroll, enableScroll} from './functions/stop-scroll';

//disableScroll(fix) // fix -> class of element with position: fixed
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
        center: [52.6175,39.6060],
        zoom: 16.4
     }, {
        searchControlProvider: 'yandex#search'
     }),

     // Создаём макет содержимого.
     MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
     ),

     myPlacemark = new ymaps.Placemark([52.6165,39.6058], {
        hintContent: 'Добро пожаловать',
        // balloonContent: 'Это красивая метка'
     }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '/img/map-pin.svg',
        // Размеры метки.
        iconImageSize: [80, 90],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-20, -38]
     });
     myMap.behaviors.disable('scrollZoom');
     myMap.geoObjects
        .add(myPlacemark)
});