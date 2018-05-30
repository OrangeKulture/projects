$(document).ready(function(){

    $('.bottom-1').css('display', 'none');
    $('.bottom-2').css('display', 'none');
    $('.bottom-3').css('display', 'none');
    $('.bottom-4').css('display', 'none');

    let label = 'on';

    $('.show-me').on('click', (e)=>{
            if(!e) e = window.event;
            let box = e.target.id.split('');
            let select = box[4];
    
            $('.top-container').toggleClass('user-active');
            if($('.top-container').hasClass('user-active')){
                $(`.bottom-${select}`).css('display', 'block');
                console.log('yeap '+select);
            }else {
                setTimeout(()=>{
                    $(`.bottom-${select}`).css('display', 'none');
                },1500)
                label = 'off';
            }
    })


});