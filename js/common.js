$(document).ready(function () {
    $.bootSusterial();
    $('.sidebar-wrapper').scrollbox();
    $(window).on('resize orientationchange', function () {
        $('.sidebar-wrapper').scrollbox('update');
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
});

$.bootSusterial = function () {
    if (arguments[0] != "destroy") {
        $(document).on('click', 'a[href="#"]', function (e) {
            e.preventDefault();
        });

        $('.content').scrollbox();
        $(window).on('resize orientationchange', function () {
            $('.content').scrollbox('update');
        });

        $(".mat-input").each(function () {
            if ($(this).val() != "") {
                $(this).parents(".mat-form-group").addClass("is-filled");
            } else {
                $(this).parents(".mat-form-group").removeClass("is-filled");
            }
        });
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();

        $('.modal').on('show.bs.modal', function (e) {
            $('.swal2-success').show().addClass('animate');
            $('.line.tip').show().addClass('animate-success-tip');
            $('.line.long').show().addClass('animate-success-long');
            $('.swal2-error').show().addClass('animate-x-mark');
            $('.swal2-warning').show().addClass('pulse-warning');
        });

        $('.modal').on('hide.bs.modal', function (e) {
            $('.swal2-success').show().removeClass('animate');
            $('.line.tip').show().removeClass('animate-success-tip');
            $('.line.long').show().removeClass('animate-success-long');
            $('.swal2-error').show().removeClass('animate-x-mark');
            $('.swal2-warning').show().removeClass('pulse-warning');
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

        $(document).on("focus", ".mat-input", function () {
            $(this).parent(".mat-form-group").addClass("is-focused");
        }).on("blur", ".mat-input", function () {
            $(this).parent(".mat-form-group").removeClass("is-focused");
            if ($(this).val() != "") {
                $(this).parents(".mat-form-group").addClass("is-filled");
            } else {
                $(this).parents(".mat-form-group").removeClass("is-filled");
            }
        });
    } else {
        $('.content').scrollbox('destroy');
        $(window).off('resize orientationchange', '.content');

        $(document).off('click', 'a[href="#"]');

        $('[data-toggle="tooltip"]').tooltip('dispose')
        $('[data-toggle="popover"]').popover('dispose')
        $('.modal').modal('dispose').remove();
        $('.modal-backdrop').remove();

        $(document).off('click', '[data-toggle-src]');
        $(document).off('focus', '.mat-input');
        $(document).off('blur', '.mat-input');
    }
}