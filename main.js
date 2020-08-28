// Attraverso una chiamata ajax all’Api di boolean avremo
// a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.

$(document).ready(function() {
    // Richiamo ajax
    $.ajax(
        {
            url: "https://flynn.boolean.careers/exercises/api/array/music",
            method: "GET",
            success: function (data) {
                var music = data.response;
				for (var i = 0; i < music.length; i++) {
                    // Stampo a schermo con Handlebars
					var source = document.getElementById("entry-template").innerHTML;
	                var template = Handlebars.compile(source);
					var context = music[i];
					var html = template(context);
					$('.cds-container').append(html)
				}
            },
            error: function () {
                alert("E' avvenuto un errore. " + errore);
            }
        }
    );
    // Selezione genere
    var genere = $('select').val();
    if (genere ==  ) {
        
    }
});
