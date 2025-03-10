var swiper = new Swiper("#heroSwiper", {
    loop: true,
    navigation: {
        nextEl: ".hero-swiper__button-next",
        prevEl: ".hero-swiper__button-prev",
    },

});
//End hero swiper

var swiper = new Swiper(".brandSwiper", {
    spaceBetween: 30,
    slidesPerView: 2,
    loop: true,
    pagination: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 5,
        },

        768: {
            slidesPerView: 4,
        },

    },
});
//End brand swiper

var swiper = new Swiper(".productSwiper", {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-next",
    },
});

var swiper = new Swiper(".product-descSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-next",
    },
    breakpoints: {
        991: {
            slidesPerView: 4,
        },

        475: {
            slidesPerView: 3,
        }
    },
});

var swiper = new Swiper(".productContentSwiper", {
    slideClass: 'product-swiper__slide',
    allowTouchMove: false,
    spaceBetween: 10,
    slidesPerView: 1,
    direction: 'horizontal',
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        768: {
            direction: 'vertical',
        }
    },
});
var swiper2 = new Swiper(".productContentSwiper2", {
    slideClass: 'product-swiper__slide',
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

function openVideo() {
    const videoModal = document.getElementById('video-box__modal');
    const youtubeVideo = document.getElementById('youtube-video');

    const youtubeLink = 'https://www.youtube.com/watch?v=fkoEj95puX0';

    youtubeVideo.src = youtubeLink + "?autoplay=1";
    videoModal.style.display = 'flex';
}

function closeVideo() {
    const videoModal = document.getElementById('video-modal');
    const youtubeVideo = document.getElementById('youtube-video');

    youtubeVideo.src = "";
    videoModal.style.display = 'none';
}
//End youtube video modal

// მოიძიე დივები
const filter = document.getElementById('filter');
const filterContent = document.getElementById('filterContent');

// დაამატე click event listener div1-ზე
filter.addEventListener('click', () => {
    // toggle კლასის დამატება/მოშორება div2-ს
    filterContent.classList.toggle('product-filter--active');
});



