// скачай архив https://github.com/OwlCarousel2/OwlCarousel2/archive/2.3.4.zip
// и распакуй папку в свой проект
import AOS from 'aos';
AOS.init();


// Слайдер
// тут ссылка должна быть на файл owl.carousel.min.js, поменять нужно будет как у тебя в проекте будет
import '../../modules/OwlCarousel2-2.3.4//dist/owl.carousel.min.js';	

$(document).ready(function(){
	
	// тут я добавил стрелочки в виде svg - предыдущая кнопка и следующая кнопка, их можно поменять, либо заменить на обычные ссылки в кавычках 'https://svg.ru/saasksaksa'
    let prevButton = `
        <svg width="10" height="15" transform="scale(-1 1)" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.1875 7.34308L0 1.63154L1.7675 0L9.7225 7.34308L1.7675 14.6862L0 13.0546L6.1875 7.34308Z" fill="black"/>
        </svg>
    `;
    let nextButton = `
        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.1875 7.34308L0 1.63154L1.7675 0L9.7225 7.34308L1.7675 14.6862L0 13.0546L6.1875 7.34308Z" fill="black"/>
        </svg>
    `
    
    // тут я ищу по id='owl1' слайдер, можно другой выбрать в html
    
    $("#owl").owlCarousel({
        autoWidth: true,
        center: true,			// хуй знает что это, но что-то в центр ставит))
        items: 3,				// сколько элементов на странице показывать (можешь 3 или 4 поставить, поиграться с параметрами)
        dots: false,				// это чтобы по кругу они работали, можно убрать если false поставить
        margin: 24,
        loop: false,				// расстояние до чего-то
        nav: true,				// это кнопки навигации, поставь true вместо false
        navText: [prevButton, nextButton],		// это я задаю кнопки навигации, которые выше прописал
    });
    
    $("#owl1").owlCarousel({
        autoWidth: true,
        center: false,			// хуй знает что это, но что-то в центр ставит))
        items: 1,				// сколько элементов на странице показывать (можешь 3 или 4 поставить, поиграться с параметрами)
        dots: false,				// это чтобы по кругу они работали, можно убрать если false поставить
        margin: 24,
        loop: false,				// расстояние до чего-то
        nav: true,				// это кнопки навигации, поставь true вместо false
        navText: [prevButton, nextButton],		// это я задаю кнопки навигации, которые выше прописал
    });
})