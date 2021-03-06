$(document).ready(function () {
    $('.switch-img1').on('click', function () {
        $('.switch-img1-big').show();
        $('.switch-img2-big').hide();
        $('.switch-img3-big').hide();
        $('.switch-img4-big').hide();
    });
});
$('.switch-img2').on('click', function () {
    $('.switch-img2-big').show();
    $('.switch-img1-big').hide();
    $('.switch-img3-big').hide();
    $('.switch-img4-big').hide();
});
$('.switch-img3').on('click', function () {
    $('.switch-img3-big').show();
    $('.switch-img2-big').hide();
    $('.switch-img1-big').hide();
    $('.switch-img4-big').hide();
});
$('.switch-img4').on('click', function () {
    $('.switch-img4-big').show();
    $('.switch-img2-big').hide();
    $('.switch-img1-big').hide();
    $('.switch-img3-big').hide();
});
$('.step-btn1').on("click", function () {
    $(".reserveModal").hide();
});
$('.step-btn2').on("click", function () {
    $(".reserve2Modal").hide();
});
$('.step-btn3').on("click", function () {
    $(".reserve3Modal").hide();
});
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    spaceBetween: 30,

    slidesPerView: 3,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    autoplay: {
        delay: 3000,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
    },


});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

$(function () {
    var dateFormat = "yy/mm/dd",
        from = $("#date-start").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
        }).on("change", function () {
            to.datepicker("option", "minDate", getDate(this));
        }),
        to = $("#date-end").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
        }).on("change", function () {
            from.datepicker("option", "maxDate", getDate(this));
        });

    function getDate(element) {
        var date;

        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }
});