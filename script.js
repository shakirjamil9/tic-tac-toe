$(document).ready(function () {

    var o = 'o';
    var x = 'x';
    var turns = 1;

    var spot1 = $('#default1')
    var spot2 = $('#default2')
    var spot3 = $('#default3')
    var spot4 = $('#default4')
    var spot5 = $('#default5')
    var spot6 = $('#default6')
    var spot7 = $('#default7')
    var spot8 = $('#default8')
    var spot9 = $('#default9')
    var reset = $('#reset')

    $('.target').on('click', function () {

        if ($(this).hasClass('o') || $(this).hasClass('x')) {
            alert('Already Filled')
        } else if (turns === 9) {
            alert("Tie Match")
            $('.target').text('+')
            $('.target').removeClass('o');
            $('.target').removeClass('x');
            turns = 1
        }
        else if (turns % 2 == 0) {
            turns++;
            $(this).text(o)
            $(this).addClass('o');

            if (spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
                spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
                spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
                spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
                spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
                spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
                spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
                spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')) {

                alert('Winner : "O"');

            }
        } else if (turns % 2 != 0) {
            turns++;
            $(this).text(x);
            $(this).addClass('x');

            if (spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
                spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
                spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
                spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
                spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
                spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
                spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
                spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')) {

                alert('Winner : "X"');

            }
        }
    })
    reset.on('click', function () {
        $('.target').removeClass('o');
        $('.target').removeClass('x');
        $('.target').text('+');
        turns = 1;
    })

})