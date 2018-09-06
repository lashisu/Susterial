$(document).ready(function () {
    bootSusterial();

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    $('.modal').on('show.bs.modal', function (e) {
        $('.swal2-success').show().addClass('animate');
        $('.line.tip').show().addClass('animate-success-tip');
        $('.line.long').show().addClass('animate-success-long');
        $('.swal2-error').show().addClass('animate-x-mark');
        $('.swal2-warning').show().addClass('pulse-warning');
        $('.form-control').parent().addClass('is-filled');
    });
    $('.modal').on('hide.bs.modal', function (e) {
        $('.swal2-success').show().removeClass('animate');
        $('.line.tip').show().removeClass('animate-success-tip');
        $('.line.long').show().removeClass('animate-success-long');
        $('.swal2-error').show().removeClass('animate-x-mark');
        $('.swal2-warning').show().removeClass('pulse-warning');
    });

    $(document).on('click', '.navbar-toggler', function () {
        if ($(this).hasClass('toggled')) {
            $('html').removeClass('nav-open');
            $(this).removeClass('toggled');
            $(".close-layer").removeClass('visible').remove();
            $("#PageTop").removeClass('collapse');
        } else {
            $('html').addClass('nav-open');
            $(this).addClass('toggled');
            $(".main-panel").append('<div class="close-layer"></div>');
            $(".close-layer").fadeIn().addClass('visible');
        }
    });

    $(document).on('click', '.close-layer', function () {
        $('html').removeClass('nav-open');
        $('.navbar-toggler').removeClass('toggled');
        $(".close-layer").fadeOut().remove();
        $("#PageTop").removeClass('collapse show');
    });

    var SidebarMini = localStorage.getItem("SidebarMini");
    if (SidebarMini == undefined || SidebarMini == "on") {
        $('body').addClass('sidebar-mini');
        localStorage.setItem("SidebarMini", "on");
    } else {
        $('body').removeClass('sidebar-mini');
    }

    $(document).on('click', '#SidebarMini', function () {
        if ($('body').hasClass('sidebar-mini')) {
            $('body').removeClass('sidebar-mini');
            localStorage.setItem("SidebarMini", "off");
        } else {
            $('body').addClass('sidebar-mini');
            localStorage.setItem("SidebarMini", "on");
        }
    });



    $(document).on('click', '[data-toggle-src]', function (e) {
        e.preventDefault();
        $($(this).attr('data-toggle-src')).slideToggle('fast', function () {
            $(this).closest('.card').toggleClass('closed');
        });
        $(this).closest('.card').toggleClass('flipArrow');
        if ($(this).attr('data-multi') == 'true' || $(this).attr('data-multi') == true || $(this).attr('data-multi') != undefined) {
            $('body').removeClass('FilterOff');
        } else {
            $('body').toggleClass('FilterOff');
        }
    });
});

function bootSusterial() {
    $(".form-control").each(function () {
        if ($(this).val() != "") {
            $(this).parents(".form-group").addClass("is-filled");
        } else {
            $(this).parents(".form-group").removeClass("is-filled");
        }
    });
}