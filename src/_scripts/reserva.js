'use strict';

// Constructor
var Reserva = function() {

    var buttonSubstract =$('.reserva__button--substract');
    var buttonAdd =$('.reserva__button--add');

    var currentQuantity = $('span.-quantity').html();
    var currentQuantityToNumber = parseInt(currentQuantity);

    var currentMinutes = $('span.-minutes').html();
    var currentMinutesToNumber = parseInt(currentMinutes);

    buttonSubstract.on('click', function(e) {
        e.preventDefault();
        
        if($(this).hasClass('-quantity')) {
            var currentQuantity = $('span.-quantity').html();
            var currentQuantityToNumber = parseInt(currentQuantity);

            if(currentQuantity > 1) {
                var newQuantity = currentQuantityToNumber - 1;
                $('span.-quantity').html(newQuantity);

                if (newQuantity == 1) {
                    var substractQuantityButton = $('.reserva__button--substract.-quantity');
                    $(substractQuantityButton).attr('disabled', true);

                } else if (currentQuantity == 10) {
                    var addQuantityButton = $('.reserva__button--add.-quantity');
                    $(addQuantityButton).removeAttr('disabled');
                }
            }

        } else {
            var currentHour = $('span.-hour').html();
            var currentHourToNumber = parseInt(currentHour);

            var newHour = currentHourToNumber - 1;

            var currentMinutes = $('span.-minutes').html();
            var currentMinutesToNumber = parseInt(currentMinutes);

            if(newHour == 11 && currentMinutesToNumber == 0) {
                var substractHourButton = $('.reserva__button--substract.-hour');
                substractHourButton.attr('disabled', true);
            }
            
            if(currentHourToNumber == 23) {
                var addHourButton = $('.reserva__button--add.-hour');
                addHourButton.removeAttr('disabled');
            }

            if(currentMinutesToNumber == 30) {
                $('span.-minutes').html('00');
            } else {
                $('span.-hour').html(newHour);
                $('span.-minutes').html('30');
            }
        }
    });

    buttonAdd.on('click', function(e) {
        e.preventDefault();
        
        if($(this).hasClass('-quantity')) {
            var currentQuantity = $('span.-quantity').html();
            var currentQuantityToNumber = parseInt(currentQuantity);

            var newQuantity = currentQuantityToNumber + 1;

            $('span.-quantity').html(newQuantity);

            if (currentQuantity == 1) {
                var substractQuantityButton = $('.reserva__button--substract.-quantity');
                $(substractQuantityButton).removeAttr('disabled');
            }

            if (newQuantity === 10) {
                var addQuantityButton = $('.reserva__button--add.-quantity');
                $(addQuantityButton).attr('disabled', true);
            }
    
        } else {
            var currentHour = $('span.-hour').html();
            var currentHourToNumber = parseInt(currentHour);
            
            var currentMinutes = $('span.-minutes').html();
            var currentMinutesToNumber = parseInt(currentMinutes);
            
            var newHour = currentHourToNumber + 1;
            
            if(currentHourToNumber == 11) {
                var substractHourButton = $('.reserva__button--substract.-hour');
                substractHourButton.removeAttr('disabled');
            }
            
            if(currentHourToNumber == 22 && currentMinutesToNumber == 30) {
                var addHourButton = $('.reserva__button--add.-hour');
                addHourButton.attr('disabled', true);
            }

            if(currentMinutesToNumber == 30) {
                $('span.-minutes').html('00');
                $('span.-hour').html(newHour);
            } else {
                $('span.-minutes').html('30');
            }
        }
    });
};

module.exports = Reserva;
