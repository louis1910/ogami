window.addEventListener('scroll', function(ev) {

    var navigation = document.getElementById('navigation');
    var sticky = navigation.offsetTop;
    // var distanceToTop = navigation.getBoundingClientRect().top;

    if(window.pageYOffset > sticky){
        navigation.classList.add('nav-animation-active');
        navigation.classList.remove('animation-deactive');
    }
    else {
        navigation.classList.remove('nav-animation-active');
        navigation.classList.add('animation-deactive');

    }
});
