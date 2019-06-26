function slide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // if (nav.style.animation) {
        //     nav.style.animation = '';
        // } else {
        //     nav.style.animation = 'slideAnimation 0.5s ease-in forwards';
        // }

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'slideAnimation 1s ease-in forwards';
            }
        });

        burger.classList.toggle('effect');
    });
}

slide();