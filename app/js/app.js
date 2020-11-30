// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
// require('./other_script.js') // Require Other Script(s) from app/js folder Example

import { gsap } from 'gsap'



document.addEventListener('DOMContentLoaded', () => {			//начинает отслеживать когда загрузится DOM (DOMContentLoaded происходит когда весь HTML был полностью загружен и пройден парсером, не дожидаясь окончания загрузки таблиц стилей, изображений и фреймов.)
																// как только загрузился начнет выполнять следующий код
	// Custom JS
	const body 	= document.querySelector('body')			//вводим константу которая выбирает body
	let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree		//вводим нужные для функции переменные
		cx		= window.innerWidth / 2,					//cx будет равна ширине окна в пикселях / 2
		cy		= window.innerHeight / 2					//cу будет равна высоте окна в пикселях / 2

	body.addEventListener('mousemove', e => {				//на боди вешаем обработчик событий который следит за движением мыши
			clientX = e.pageX,								// clientX равен положению мыши по оси Х
			clientY = e.pageY								// clientY равен положению мыши по оси Y
			request = requestAnimationFrame(updateMe)		//requestAnimationFrame указывает браузеру на то, что вы хотите произвести анимацию, 
															//и просит его запланировать перерисовку на следующем кадре анимации. В качестве параметра
															// метод получает функцию, которая будет вызвана перед перерисовкой, тоесть updateMe
	})

	function updateMe() {									//вот ее
		dx 		= clientX - cx			//равен положению мыши по оси Х минус половина ширины окна
		dy 		= clientY - cy			//равен положению мыши по оси Y минус половина высоты окна
		tiltx 	= dy / cy				// равен (положению мыши по оси Y минус половина высоты окна) деленному на половину высоты окна
		tilty 	= dx / cx				// равен (положению мыши по оси X минус половина ширины окна) деленному на половину ширины окна
		radius 	= Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))	// равен квадратному корню из tiltx возведенному в квадрат + tilty возведенному в квадрат
		degree 	= radius * 12			//умножаем радиус на 12
		gsap.to('.content', 1, { transform: `rotate3d( ${-tiltx}, ${tilty}, 0, ${degree}deg )`})		// применяем  gsap анимации по заданнм параметрам
	}		// тоесть див content вращаем в 3д по параметрам  ${-tiltx}, ${tilty}, 0, ${degree}deg
		// применяем  gsap анимации по заданнм параметрам
	gsap.to('.card', {zoom: .98})		// карточку приближаем
	gsap.to('.l_main', {opacity: 1, duration: .1})		//основной слой карточки становятся из прозрачныого непрозрачным за 0.1 секунды
	gsap.to('.l2_main', {opacity: 1, left: -10, top: 10, duration: .25, delay: .25})	//тут еще добавляются положения второстепенных слоев и небольшая задержка
	gsap.to('.l3_main', {opacity: 1, left: -20, top: 20, duration: .25, delay: .25})
	gsap.to('.card-russia', {opacity: .07,  duration: .1})	// карта становится из прозрачныого непрозрачным
	gsap.to('.card-logo_w', {opacity: 1, duration: .25})	// лого становится из прозрачныого непрозрачным
	gsap.to('.card-chip', {opacity: 1, duration: .25})		// чип становится из прозрачныого непрозрачным
	gsap.to('.card-valid', {opacity: 1, zoom: 1, duration: .1, delay: .25})		// все тоже самое только редактируется зум который установили в стилях равный 3 (типа вылетает)
	gsap.to('.card-number-holder', {opacity: 1, zoom: 1, duration: .1, delay: .25})

});

//страница урока https://webdesign-master.ru/blog/javascript/javascript-3d-tilt-animation.html
// GSAP https://greensock.com/get-started/
//видео https://www.youtube.com/watch?v=ydEFTv8Teko&t=2280s