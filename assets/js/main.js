const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const headerBars = document.querySelector('.header .bars');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBg = document.querySelector('.mobile-menu__bg');

if (headerBars) {
    headerBars.onclick = () => {
        mobileMenu.classList.add('active');
        bodyHidden();
    }

    mobileMenuBg.onclick = () => {
        mobileMenu.classList.remove('active');
        bodyVisible();
    }
}

const text = document.querySelector('.news-block__left .texts');
const textBtn = document.querySelector('.news-block__left .btn-purple');

if (textBtn) {
    textBtn.onclick = () => {
        text.classList.toggle('active');
        textBtn.classList.toggle('active');

        if (textBtn.classList.contains('active')) {
            textBtn.querySelector('span').textContent = 'Свернуть';
        } else {
            textBtn.querySelector('span').textContent = 'Читать всё';
        }
    }
}