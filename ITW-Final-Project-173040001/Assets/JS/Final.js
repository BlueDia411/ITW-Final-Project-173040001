// Navigasi
$(window).scroll(function() {

var wScroll = $(this).scrollTop();

    if ($(window).scrollTop() >= 608) {
		$('nav').addClass('fixed-header');
	} else {
		$('nav').removeClass('fixed-header');
	}

// portfolio
	if (wScroll > $('.portfolio').offset().top - 200 ) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
		$('.portfolio .thumbnail').eq(i).addClass('muncul');		
			}, 300 * (i+1));
		});
		
	}	

// About
	if (wScroll > $('.about').offset().top - 500 ) {
		$('.about .row').each(function(i) {
			setTimeout(function() {
		$('.about .row').eq(i).addClass('muncul');		
			}, 300 * (i+1));
		});
		
	}

	// if (wScroll > 1300) {
	// 	console.log('oke');
	// }
});




// Scroll
// Event pada saat link di klick
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);



	// pindahkan scroll
	$('html , body').animate({
		scrollTop: elemenTujuan.offset().top - 70
	}, 1000, 'easeInOutSine');


});

function contact() {
	var nameKu = document.getElementById('name').value;
	var emailKu = document.getElementById('email').value;
	var phoneKu = document.getElementById('phone').value;
	var subjectKu = document.getElementById('subject').value;
	var messageKu = document.getElementById('massage').value;

	if (nameKu == "" && emailKu == "" && phoneKu == "" && subjectKu == "" && messageKu == "" ) {
		alert('Terimakasih Telah mengisi Form');
	}
}
// Akhir Scroll