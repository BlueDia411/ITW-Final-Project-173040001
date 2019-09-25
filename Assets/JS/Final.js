// Navigasi
$(window).scroll(function() {

var wScroll = $(this).scrollTop();
	// Jika scroll sudah sampai ketinggian 608px maka navigation akan di tambahkan class baru bernama fixed-header
    if ($(window).scrollTop() >= 608) {
		$('nav').addClass('fixed-header');
	} 
	// jika scroll tidak menjacapi ketinggian 608px maka class fixed-header akan di hapus
	else {
		$('nav').removeClass('fixed-header');
	}

// portfolio

	// jika  scroll sudah mencapai 200px maka akan memanggil jquery untuk menjalankan fungsi (i) untuk di terapkan pada cllass thumbnails di dalam kelas portfolio
	if (wScroll > $('.portfolio').offset().top - 200 ) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
		//jquery akan menambahkan class "muncul" 
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


// Akhir Scroll