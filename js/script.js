// Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
$(document).ready(function(){
  for (var i=1; i<6; i++){
    var clone = $('.rettangolo_verticale').find('.quadrato').first().clone();
    $('.rettangolo_verticale').prepend(clone);
  }
  for (var i=1; i<6; i++){
    var clone = $('.rettangolo_verticale').first().clone();
    $('body').prepend(clone);
  }
  $('.quadrato').click(function(){
    var esito = $(this);
    if (esito.html() == 0){
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
    }
  });
});
