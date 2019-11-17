$(document).ready(() => {

    $('#text-area').keypress((e)=>{
        if(e.which == 13){
            $(this).blur();
            $('#start-btn').focus().click();
        }
    })

    $('#start-btn').click(()=>{
        $('#name-splash').text($('#index-textArea').val().toUpperCase());
        $('#index-textArea').val('').hide();
        $('#start-btn').hide();
        if($('#name-splash').text() == 'MILA'){
            $('#merj-pic').attr('src', './src/Images/merj/Mila-1.jpg')
        } else if ($('#name-splash').text() == 'ELIANA'){
            $('#merj-pic').attr('src', './src/Images/merj/Eliana-1.jpg')
        } else if ($('#name-splash').text() == 'RILEY'){
            $('#merj-pic').attr('src', './src/Images/merj/Riley-1.jpg')
        } else if ($('#name-splash').text() == 'JACKSON'){
            $('#merj-pic').attr('src', './src/Images/merj/Jackson-1.jpg')
        } else{
            $('#merj-pic').attr('src', './src/Images/merj/booger.jpg')
        }
        $('#merj-pic').show();
        $('#begin-btn').show();
        $('#reset-btn').show();

    });

    $('#begin-btn').click(()=>{
        $('#nav-bar').hide();
        $('#name-splash').hide();
        $('#merj-pic').hide();
        $('#begin-btn').hide();
        // $('#reset-btn').hide();
    });

    $('#reset-btn').click(()=>{
        $('#name-splash').text('');
        $('#nav-bar').show();
        $('#index-textArea').show();
        $('#start-btn').show();
        $('#merj-pic').hide();
        $('#begin-btn').hide();
        $('#reset-btn').hide();
    })



    
});