$(document).ready(function(){
    $('.registration').on('click', function(){
        $(this).hide();
        $(this).parent().append('<div class="form-background"></div>');
        $('.registration-form').fadeIn(600);
    });
    $('.cancel').on('click', function(){
        $('.registration-form').fadeOut(500);
        $('.form-background').remove().fadeOut(800);
        $('.registration').fadeIn(1000);
    });
    $('.next').on('click', function() {
        $('input[name=tabs]:checked').nextAll('input[name=tabs]').eq(0).prop('checked', true);
    });
    $('.prev').on('click', function() {
        $('input[name=tabs]:checked').prevAll('input[name=tabs]').eq(0).prop('checked', true);
    });
});
