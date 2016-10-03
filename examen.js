var total=new Array();
var respuesta=['c','a','c','b','b','d','d','d','b','c'];
var contador=0;
var buenas=0;
localStorage['nombre']="wdwdwd";
$(function(){

  $('form#nombre').on('submit',preguntas);
  $('section.preguntas input[type=radio]').on('click', califica);
  scroll();
  //checa();
});

function checa()
{
  if(localStorage['nombre']!="")
  {
    alert("no puedes hacer el examen dos veces");
  }
  else
  {
    $('form#nombre input').attr('disabled','True');
    $('form#nombre input[type=text]').css('border','none');
    $('form#nombre input[type=submit]').hide('slow');
    localStorage['nombre']=$('form#nombre input[type=text]').val();
    $('section.preguntas').show('slow');
  }
}


function preguntas(e)
{
  console.log("entra a funcion")
  e.preventDefault();
  checa();

}



function califica()
{
  var respuesta=$(this).val();
  total.push(respuesta);
$(this).parent().parent().hide('slow');
contador+=1;
if(contador>9)
  {
    for(x in total)
    {
      if(total[x]==respuesta[x])
      {
        buenas+=10;
      }
    }
    $('input.dial').attr('value',buenas);
    $(".dial").knob({'min':0,
      'max':100,'readOnly':true});
      $('section.resultado').show('slow');
  }
}



function scroll()
{
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll>1)
    {
        $('header').addClass('header-scroll');
        $('header input').addClass('inputScroll');
    }
    else
    {
    	$('header').removeClass('header-scroll');
        $('header input').removeClass('inputScroll');
    }



});
}
