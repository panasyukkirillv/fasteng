$(function () {

    var message = {
        required: 'Это поле обязательно для заполнения.',
        email: 'Введите корректный адрес эл.почты.',
        number: 'Только цифры.',
        confirm: 'Подтвердите свое согласие на обработку персональных данных.',
    };

    $('#contact-form').validate({
        rules: {
            name: {
                required: true,
            },          
            email: {
                required: true,
                email: true,
            },
            phone: {
                required: true,
                number: true
            },
            confirm: {
                required: true,
            },
        },
        messages: {
            name: {
                required: message.required,
            },          
            email: {
                required: message.required,
                email: message.email,
            },
            phone: {
                required: message.required,
                number: message.number,
            },
            confirm: {
                required: message.confirm,
            },
        },
        errorPlacement: function(error, element) {
            error.appendTo( element.closest('.form-group'));
        },
        submitHandler: function(form) {

            var dataparam = $('#contact-form').serialize();

            $.ajax({
                type: 'POST',
                async: true,
                url: 'assets/php/sendEmail.php',
                data: dataparam,
                datatype: 'json',
                cache: true,
                global: false,
                beforeSend: function() { 
                    $('.preloader').show();
                },
                success: function(data) {
                    if(data == 'success'){
                        $('.form-notification').html('Сообщение успешно отправлено!');
                        $('#contact-form')[0].reset();
                    } else {
                        $('.form-notification').html('Сообщение не отправлено...');
                    }
                },
                complete: function() { 
                    $('.preloader').hide();
                }
            });
        }                
    });

});