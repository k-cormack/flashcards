$(document).ready(() => {

    $('#text-area').keypress((e)=>{
        if(e.which == 13){
            $(this).blur();
            $('#start-btn').focus().click();
        }
    })

    let user;
    $('#start-btn').click(()=>{
        if($('#index-textArea').val() != ''){
            user = $('#index-textArea').val().toUpperCase();
            $('#name-splash').text("Hello, "+user+"!");
            $('#start-btn').hide();
            if(user == 'MILA'){
                $('#merj-pic').attr('src', './src/Images/merj/Mila-1.jpg')
            } else if (user == 'ELIANA'){
                $('#merj-pic').attr('src', './src/Images/merj/Eliana-1.jpg')
            } else if (user == 'RILEY'){
                $('#merj-pic').attr('src', './src/Images/merj/Riley-1.jpg')
            } else if (user == 'JACKSON'){
                $('#merj-pic').attr('src', './src/Images/merj/Jackson-1.jpg')
            } else{
                $('#merj-pic').attr('src', './src/Images/merj/booger.jpg')
            }
            $('#nav-bar').hide();
            $('#index-textArea').val('').hide();
            $('#name-splash').show();
            $('#img-div').show();
            $('#begin-btn').show();
            $('#reset-btn').show();
        } else {
            alert('Please enter your name or initials!')
        }

    });

    $('#begin-btn').click(()=>{
        $('#name-splash').hide();
        $('#img-div').hide();
        $('#begin-btn').hide();
        $('#choose-splash').text(user + ", choose the topic you want to practice below!")
        // $('.btn-primary').text('test');
        $('#choose-splash').show();
        $('#choose-buttons').show();
    });

    $('#reset-btn').click(()=>{
        $('#name-splash').text('');
        $('#choose-splash').hide();
        $('#nav-bar').show();
        $('#index-textArea').show();
        $('#start-btn').show();
        $('#img-div').hide();
        $('#begin-btn').hide();
        $('#reset-btn').hide();
    })



    
});