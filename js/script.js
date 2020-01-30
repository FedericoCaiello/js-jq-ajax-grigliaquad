// Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
$(document).ready(function(){
  $('.quadrato').click(function(){
    var esito = $(this);
    $.ajax(
      {
        'url' : "https://ﬂynn.boolean.careers/exercises/api/random/int",
        'method' : "GET",
        'success' : function (response) {
          var numero = response.response;
          esito.text(numero);
          if (response.response <= 5) {
            esito.addClass('colore_giallo');
          }
          else {
            esito.addClass('colore_verde');
          }
        }
      }
    )
  });

  //  for (var i=1; i<6; i++){
  //   // var clone = $('.rettangolo_verticale').clone();
  //   $('body').append('<div class="rettangolo_verticale"></div>');
  //   $('.rettangolo_verticale').append('<div class="quadrato"></div>');
  // }
});
