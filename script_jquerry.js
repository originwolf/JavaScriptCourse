$(function(){
    $('#btn1').click(function(){
        $('h1').hide();
    });

    $('#btn2').click(function(){
        $('h1').show();
    });

    $('#btn3').click(function(){
        $('h1').css("color","red");
        $('h1').fadeOut('slow');
        $('h1').delay(1000);
        $('h1').fadeIn('fast');
    });

    $('#btn4').click(function(){
        $('h1').css("color","blue");
        $('h1').fadeOut(2000);
        $('h1').fadeIn(2000);
    });

    // $('#btn5').click(function(){
    //     $('h1').css("color", "green");
    //     $('#mensagem').css("color", "red");
    //     $('#mensagem').text("Cor alterada com sucesso!");
    //     $('#mensagem').fadeOut(1500);
    //     $('#mensagem').css("border", "1px solid red");
    // });

    //Também é possivel fazer sem multiplas chamadas de $('seletor'), encadeando tudo (com ou sem identação)

    // $('#btn5').click(function(){
    //     $('h1').css("color", "green");
    //     $('#mensagem')
    //         .text("Cor alterada com sucesso!") 
    //         .css("color", "red")  
    //         .css("border", "1px solid red")
    //         .fadeOut(1500);
    // });

    //É possível ainda unir os elementos de css que estão duplicados:

    // $('#btn5').click(function(){
    //     $('h1').css("color", "green");
    //     $('#mensagem')
    //         .text("Cor alterada com sucesso!") 
    //         .css({color: 'red', border: '1px solid red'})
    //         .fadeOut(1500);
    // });

    //É possível também adicionar uma classe de estilo css usando o .addClass

    $('#btn5').click(function(){
        $('h1').css("color", "green");
        $('#mensagem')
            .fadeIn(1500)
            .text("Cor alterada com sucesso!") 
            .css({color: 'red', border: '1px solid red'})
            .fadeOut(1500);
        $('p').addClass('blue');
        $('#btn3').removeClass('red');
    });
});