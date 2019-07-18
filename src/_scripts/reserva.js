'use strict';

// Constructor
var Reserva = function() {

    var buttonSubstract =$('.reserva__button--substract');
    var buttonAdd =$('.reserva__button--add');

    buttonSubstract.on('click', function(e) {
        e.preventDefault();
        
        var currentQuantity = $('span.-quantity').html();
        var currentQuantityToNumber = parseInt(currentQuantity);

        if(currentQuantity > 1) {
            var newQuantity = currentQuantityToNumber - 1;
            $('span.-quantity').html(newQuantity + ' ');

            if (newQuantity == 1) {
                var substractQuantityButton = $('.reserva__button--substract.-quantity');
                $(substractQuantityButton).attr('disabled', true);

            } else if (currentQuantity == 10) {
                var addQuantityButton = $('.reserva__button--add.-quantity');
                $(addQuantityButton).removeAttr('disabled');
            }
        }
    });

    buttonAdd.on('click', function(e) {
        e.preventDefault();
        var currentQuantity = $('span.-quantity').html();
        var currentQuantityToNumber = parseInt(currentQuantity);

        var newQuantity = currentQuantityToNumber + 1;

        $('span.-quantity').html(newQuantity + ' ');

        if (currentQuantity == 1) {
            var substractQuantityButton = $('.reserva__button--substract.-quantity');
            $(substractQuantityButton).removeAttr('disabled');
        }

        if (newQuantity === 10) {
            var addQuantityButton = $('.reserva__button--add.-quantity');
            $(addQuantityButton).attr('disabled', true);
        }
    });

    var dateTextField = $('.js-date');
    var reservarButton = $('.reserva__reservar-button');
    var continueButton = $('.reserva__continue-button');
    var backButton = $('.reserva__back-button');
    var detailsContainer = $('.reserva__container--details');
    var confirmationContainer = $('.reserva__container--confirmation');
    var informationContainer = $('.reserva__container--information');
    var confirmationText = $('.js-confirmation');
    var reservaName = $('.reserva__input--nombre');
    var reservaPhone = $('.reserva__input--telefono');
    var reservaEmail = $('.reserva__input--email');
    var reservaInput = $('.reserva__input');
    var dayPicker = $('.reserva__date-button');
    var reservaHours = $('.reserva__hours');
    var mesasInput = $('.js-total');
    var updateMesasButton = $('.reservas-admin__update-mesas-button');
    var currentDate = new Date();

    var weekDays = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sábado'
    ];

    function init() {
        detailsContainer.addClass('-active');

        setInitialDate();
        updateText(dateTextField, currentDate, weekDays);
    }

    function updateReservasByHour(hour, reserva) {
        var hourGroup = $('[data-time="' + hour + '"]');
        var total = hourGroup.find('.js-total');
        var reservas = hourGroup.find('.js-reservas');
        var disponible = hourGroup.find('.js-disponible');
        var currentReservas = parseInt(reservas.val());

        if(reserva && reserva > 0) {
            reservas.val(currentReservas + reserva);
        }
        disponible.val(total.val() - reservas.val());
    }

    function resetValues() {
        var reservas = $('.js-reservas');
        var disponible = $('.js-disponible');

        for(var i = 0; i < reservas.length; i++) {
            $(reservas[i]).val(0);
            $(disponible[i]).val(0);
        }
    };

    function setInitialDate() {
        var initialMonthValue = ("0" + (currentDate.getMonth() + 1)).slice(-2);
        var initialDayValue = ("0" + currentDate.getDate()).slice(-2);
        var initialYearValue = currentDate.getFullYear();

        $('input[type="date"]').val(initialYearValue + '-' + initialMonthValue + '-' + initialDayValue);
        $('input[type="date"]').attr('min', initialYearValue + '-' + initialMonthValue + '-' + initialDayValue);
    }

    dayPicker.on('change', function() {
        var selectedDate = new Date($('.reserva__date-button').val() + ' 00:00:00');
        reservaHours.val("Selecciona el horario de la reserva");
        continueButton.attr('disabled', true);
        
        if(selectedDate.getDay() === 0) {
            dateTextField.addClass('js-wrong');
            $('.js-subtitle').addClass('js-wrong');
            $('.reserva__alert').addClass('-active');
            reservaHours.attr('disabled', true);
            continueButton.attr('disabled', true);
            dateTextField.html('Cerrado los Domingos');
        } else {
            reservaHours.removeAttr('disabled');
            dateTextField.removeClass('js-wrong');
            $('.js-subtitle').removeClass('js-wrong');
            $('.reserva__alert').removeClass('-active');
            updateText(dateTextField, selectedDate, weekDays);

            if(reservaHours.val() !== null) {
                continueButton.removeAttr('disabled');
            }
        }

        if(selectedDate.getDay() === 1 || selectedDate.getDay() === 2 || selectedDate.getDay() === 3) {
            $('.-jueves-sabado').attr('hidden', true);
        } else {
            $('.-jueves-sabado').removeAttr('hidden');
        }
    });

    reservaHours.on('change', function() {
        continueButton.removeAttr('disabled');
    })

    function updateText(element, date, days, hour) {
        if(hour) {
            element.html(days[date.getDay()] + ' ' + (date.getDate()) + '/' + (date.getMonth() + 1) + ' a las ' + hour);
        } else {
            element.html(days[date.getDay()] + ' ' + (date.getDate()) + '/' + (date.getMonth() + 1));
        }
    };

    continueButton.on('click', function(e) {
        e.preventDefault();
        detailsContainer.removeClass('-active');
        informationContainer.addClass('-active');
    });
    
    backButton.on('click', function(e) {
        e.preventDefault();
    

        informationContainer.removeClass('-active');
        detailsContainer.addClass('-active');
    });
    
    var selectedReservaName = reservaName.on('change', function() {
        var inputName = reservaName.val();
        
        return inputName;
    })

    var selectedReservaPhone = reservaPhone.on('change', function() {
        var  inputPhone= reservaPhone.val();

        return inputPhone;
    })

    var selectedReservaEmail = reservaEmail.on('change', function() {
        var inputEmail = reservaEmail.val();

        return inputEmail;
    })

    reservaInput.on('change', function() {
        if(selectedReservaName.val().length > 0 && selectedReservaPhone.val().length > 0  && selectedReservaEmail.val().length > 0) {
            reservarButton.removeAttr('disabled');
        } else {
            reservarButton.attr('disabled', true);
        }

        // function validateEmail(email) {
        //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     return re.test(String(email).toLowerCase());
        // }
    })

    mesasInput.on('change', function() {
        updateMesasButton.addClass('-active');
    });

    updateMesasButton.on('click', function() {
        updateMesasButton.removeClass('-active');

        var selectedDate = new Date($('.reservas-admin__daypicker').val() + ' 00:00:00');
        var year = selectedDate.getFullYear();
        var month = ("0" + (selectedDate.getMonth() + 1)).slice(-2);
        var day = ("0" + selectedDate.getDate()).slice(-2);
        var formattedDate = year + month + day;
        console.log($("[data-time]"));
            
        $("[data-time]").each(function() {
            var time = $(this).data('time');
            var hourGroup = $('[data-time="' + time + '"]');
            var total = hourGroup.find('.js-total');
            var reservas = hourGroup.find('.js-reservas');
            var disponible = hourGroup.find('.js-disponible');
            disponible.val(total.val() - reservas.val());
        })

        var mesasUpdate = {
            fecha: formattedDate,
            h1230: $(mesasInput[0]).val(),
            h1300: $(mesasInput[1]).val(),
            h1330: $(mesasInput[2]).val(),
            h1400: $(mesasInput[3]).val(),
            h1430: $(mesasInput[4]).val(),
            h1500: $(mesasInput[5]).val(),
            h1900: $(mesasInput[6]).val(),
            h1930: $(mesasInput[7]).val(),
            h2000: $(mesasInput[8]).val(),
            h2030: $(mesasInput[9]).val(),
            h2100: $(mesasInput[10]).val(),
            h2130: $(mesasInput[11]).val(),
            h2200: $(mesasInput[12]).val(),
            h2230: $(mesasInput[13]).val(),
            h2300: $(mesasInput[14]).val(),
            h2330: $(mesasInput[15]).val(),
            h2400: $(mesasInput[16]).val(),
        };

        storeMesasInDatabase(mesasUpdate);
    })
    
    reservarButton.on('click', function(e) {
        e.preventDefault();
        var selectedDate = new Date($('.reserva__date-button').val() + ' 00:00:00');
        var year = selectedDate.getFullYear();
        var month = ("0" + (selectedDate.getMonth() + 1)).slice(-2);
        var day = ("0" + selectedDate.getDate()).slice(-2);
        var formattedDate = year + month + day;
        var inputName = reservaName.val();
        var inputPhone= reservaPhone.val();
        var inputEmail = reservaEmail.val();
        var personQuantity = $('.-quantity').html();
        var selectedTime = reservaHours.val();

        var reservaDetails = {
            nombre: inputName,
            telefono: inputPhone,
            email: inputEmail,
            fecha: formattedDate,
            personas: personQuantity,
            hora: selectedTime
        };
        storeReservaInDatabase(reservaDetails);
        sendMailVariables(reservaDetails);
    });

    function storeReservaInDatabase(reserva) {
        var selectedDate = new Date($('.reserva__date-button').val() + ' 00:00:00');

        $.ajax({
            type: "POST",
            url: 'http://localhost/store-reservas.php',
            crossDomain: true,
            data: {            
                inputName: reserva.nombre,
                inputPhone: reserva.telefono,
                inputEmail: reserva.email,
                selectedDate: reserva.fecha,
                personQuantity: reserva.personas,
                selectedTime: reserva.hora
            }
        }).done(function(response) {
            console.log('success AJAX', response);
            if(response === 'success') {

                updateText(confirmationText, selectedDate, weekDays, reserva.hora);

                // var text = confirmationText.html();
                // text = text + ' a las ' + (reserva.hora).toString();
                // console.log(text);

                // confirmationText.html(text);

                informationContainer.removeClass('-active');
                confirmationContainer.addClass('-active');
            }
        }).fail(function(response) {
            console.log('fail', response);
        });
    }

    function sendMailVariables(reserva) {
        var selectedDate = new Date($('.reserva__date-button').val() + ' 00:00:00');

        $.ajax({
            type: "POST",
            url: 'http://localhost/send-mail.php',
            crossDomain: true,
            data: {            
                inputName: reserva.nombre,
                inputPhone: reserva.telefono,
                inputEmail: reserva.email,
                selectedDate: reserva.fecha,
                personQuantity: reserva.personas,
                selectedTime: reserva.hora
            }
        }).done(function(response) {
            console.log('success AJAX', response);
            if(response === 'success') {

                updateText(confirmationText, selectedDate, weekDays, reserva.hora);

                // var text = confirmationText.html();
                // text = text + ' a las ' + (reserva.hora).toString();
                // console.log(text);

                // confirmationText.html(text);

                informationContainer.removeClass('-active');
                confirmationContainer.addClass('-active');
            }
        }).fail(function(response) {
            console.log('fail', response);
        });
    }

    function storeMesasInDatabase(mesas) {
        console.log(mesas);

        $.ajax({
            type: "POST",
            url: 'http://localhost/store-mesas.php',
            crossDomain: true,
            data: {            
                fecha: mesas.fecha,
                h1230: mesas.h1230,
                h1300: mesas.h1300,
                h1330: mesas.h1330,
                h1400: mesas.h1400,
                h1430: mesas.h1430,
                h1500: mesas.h1500,
                h1900: mesas.h1900,
                h1930: mesas.h1930,
                h2000: mesas.h2000,
                h2030: mesas.h2030,
                h2100: mesas.h2100,
                h2130: mesas.h2130,
                h2200: mesas.h2200,
                h2230: mesas.h2230,
                h2300: mesas.h2300,
                h2330: mesas.h2330,
                h2400: mesas.h2400
            }
        }).done(function(response) {
            console.log('success AJAX', response);
            // if(response === 'success') {
            // }
        }).fail(function(response) {
            console.log('fail', response);
        });
    }

    function getReservasFromDay(selectedDate) {
        
        var year = selectedDate.getFullYear();
        var month = ("0" + (selectedDate.getMonth() + 1)).slice(-2);
        var day = ("0" + selectedDate.getDate()).slice(-2);
        var formattedDate = year + month + day;
        
        $.when(
            getReservasFromDatabase(formattedDate)
        ).done(function(data) {
            var reservasInDatabase = JSON.parse(data);
            resetValues();

            if(reservasInDatabase.length > 0) {
                var formFieldSet = reservasInDatabase.map(function(reservaItem,index){
                var reservaName = reservaItem.nombre;
                var reservaPhone = reservaItem.telefono;
                var reservaEmail = reservaItem.email;
                var reservaQuantity = reservaItem.personas;
                var reservaTime = reservaItem.hora;


                updateReservasByHour(reservaTime, 1);

                return(
                    $('<div class="reservas-admin__reserva-details">' + 
                        '<div class="reservas-admin__fields-group"><span class="reservas-admin__group-label">Nombre</span><span class="reserva-admin__detail">' + reservaName + '</span></div>' + 
                        '<div class="reservas-admin__fields-group"><span class="reservas-admin__group-label">Teléfono</span><span class="reserva-admin__detail">' + reservaPhone + '</span></div>' + 
                        '<div class="reservas-admin__fields-group"><span class="reservas-admin__group-label">Email</span><span class="reserva-admin__detail">' + reservaEmail + '</span></div>' + 
                        '<div class="reservas-admin__fields-group"><span class="reservas-admin__group-label">personas</span><span class="reserva-admin__detail">' + reservaQuantity + '</span></div>' + 
                        '<div class="reservas-admin__fields-group"><span class="reservas-admin__group-label">hora</span><span class="reserva-admin__detail">' + reservaTime + '</span></div>' + 
                    '</div>')
                    );
                });

                $('.reservas-admin__reservas-container').html(formFieldSet);
            } else {
                $('.reservas-admin__reservas-container').html('<h2>No hay reservas para la fecha ' + day + '/' + month + '</h2>');
            }
        });
    };

    function getMesasFromDay(selectedDate) {
        
        var year = selectedDate.getFullYear();
        var month = ("0" + (selectedDate.getMonth() + 1)).slice(-2);
        var day = ("0" + selectedDate.getDate()).slice(-2);
        var formattedDate = year + month + day;
        
        $.when(
            getMesasFromDatabase(formattedDate)
        ).done(function(data) {
            var mesasInDatabase = JSON.parse(data);
            console.log(mesasInDatabase);

            if(mesasInDatabase.length > 0) {
                $(mesasInput[0]).val(mesasInDatabase[0].h1230);
                $(mesasInput[1]).val(mesasInDatabase[0].h1300);
                $(mesasInput[2]).val(mesasInDatabase[0].h1330);
                $(mesasInput[3]).val(mesasInDatabase[0].h1400);
                $(mesasInput[4]).val(mesasInDatabase[0].h1430);
                $(mesasInput[5]).val(mesasInDatabase[0].h1500);
                $(mesasInput[6]).val(mesasInDatabase[0].h1900);
                $(mesasInput[7]).val(mesasInDatabase[0].h1930);
                $(mesasInput[8]).val(mesasInDatabase[0].h2000);
                $(mesasInput[9]).val(mesasInDatabase[0].h2030);
                $(mesasInput[10]).val(mesasInDatabase[0].h2100);
                $(mesasInput[11]).val(mesasInDatabase[0].h2130);
                $(mesasInput[12]).val(mesasInDatabase[0].h2200);
                $(mesasInput[13]).val(mesasInDatabase[0].h2230);
                $(mesasInput[14]).val(mesasInDatabase[0].h2300);
                $(mesasInput[15]).val(mesasInDatabase[0].h2330);
                $(mesasInput[16]).val(mesasInDatabase[0].h2400);

            } else {
                for(var i = 0; i < mesasInput.length; i++) {
                    $(mesasInput[i]).val(10);
                }                
            }

            $("[data-time]").each(function() {
                var time = $(this).data('time');
                var hourGroup = $('[data-time="' + time + '"]');
                var total = hourGroup.find('.js-total');
                var reservas = hourGroup.find('.js-reservas');
                var disponible = hourGroup.find('.js-disponible');
                disponible.val(total.val() - reservas.val());
                console.log(total.val());
            });
        });
    };

    $('.reservas-admin__daypicker').on('change', function(e){
        var selectedDate = new Date($('.reservas-admin__daypicker').val() + ' 00:00:00');
        getReservasFromDay(selectedDate);
        getMesasFromDay(selectedDate);

        $("[data-time]").each(function() {
            var time = $(this).data('time');
            var hourGroup = $('[data-time="' + time + '"]');
            var total = hourGroup.find('.js-total');
            var reservas = hourGroup.find('.js-reservas');
            var disponible = hourGroup.find('.js-disponible');
            disponible.val(total.val() - reservas.val());
            console.log(total.val());
        });
    });

    function getReservasFromDatabase(date) {
        return new Promise(function(resolve, reject) {
            resolve(
                $.get('http://localhost/load-reservas.php?selectedDate=' + date, function (data, status) {
                    return data;
                })
            );
        });
    }

    function getMesasFromDatabase(date) {
        return new Promise(function(resolve, reject) {
            resolve(
                $.get('http://localhost/load-mesas.php?selectedDate=' + date, function (data, status) {
                    return data;
                })
            );
        });
    }

    init();

    getReservasFromDay(currentDate);
    getMesasFromDay(currentDate);
};

module.exports = Reserva;

