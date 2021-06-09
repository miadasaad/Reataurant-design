$(document).ready(function () {

    var mixer = mixitup('.menu .row');
    // toggle for fa-gear icon
    document.querySelector(".toggle-settings .fa-gear").onclick = function () {
        // adding rotation to the icon by addinf fa-spin class
        this.classList.toggle("fa-spin");

        //making setting box visible onclick
        document.querySelector(".left-nav").classList.toggle("open");
    };

    document.querySelector(".list li a").on('click', function () {

        $($(this).data('scroll')).addClass('appear').siblings().removeClass('appear');
    });

    /**nice scroll**/
    /**حطيت72 عشان العنوان بتاع السكشن يظهر  */
    $('.list li a').on('click', function () {

        $('html, body').animate({
            /**'#' + $(this).data('scroll')الجزء دا كانى بقوله هاش والاى دى اللى بضغط عليه */
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 72
        }, 2000);
    })



    /************************************************************************** */
});