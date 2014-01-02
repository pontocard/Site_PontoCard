function promocao(){
	window.open('promocao-mes0.html',"",'width=700,height=510,status=no,toolbar=no,scrollbars=auto');
}
// REQUISIÇÃO AJAX
function pagina(){
	$.ajax({ // Copia #top-bar e #header
		url:'index.html',
		success:function(copia){
			copia=$(copia).find('div#top-bar,div#header');
			$('#itens-copiados-topo').html(copia);
		}
	});
	$.ajax({ // copia #footer-esquerda e #footer-meio
		url:'index.html',
		success:function(copia2){
			copia2=$(copia2).find('div#footer-esquerda,div#footer-meio');
			$('#itens-copiados-footer').html(copia2);
		},
		error:function(){
			alert('Pedimos desculpas, mas os componentes da página não foram carregados totalmente. Por favor, atualize a página.');
		}
	});
	$.ajax({ // copia #copyrights
		url:'index.html',
		success:function(copia3){
			copia3=$(copia3).find('div#copyrights');
			$('#direitos-autorais').html(copia3);
		}
	});
	$.ajax({ // copia marquee
		url:'index.html',
		success:function(copia4){
			copia4=$(copia4).find('marquee');
			$('#promo-button').html(copia4);
		}
	});
}