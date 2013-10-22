// Google map
	
		$(document).ready(function(){
			$("#map").gMap({
				controls: true,
				scrollwheel: false,
				draggable: false,
				markers: [{ latitude: -24.950925,
							longitude: -53.454147
						}],
				icon: { image: "images/marker.png",
				iconsize: [50, 60],
				iconanchor: [0, 75],
				infowindowanchor: [0, 0] },
				latitude: -24.950925,
				longitude: -53.454147,
				zoom: 15
			});
		});
		
		
// Slideshows

	// O Villa
	
    $("#slide1").backstretch([
      "images/foto_banner_feijao.jpg",
      "images/foto_banner_caixa.jpg",
      "images/foto_banner_parede.jpg"
    ], {
        fade: 750,
        duration: 4000
    });
	
// Lightbox receitas

$('.veja-receita').click(function(e) {
    $('.receita-single').lightbox_me({
        centered: true,
		overlayCSS: {
			background: '#79d29c',
			opacity: .95
		}
        });
    e.preventDefault();
});