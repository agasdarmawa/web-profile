$('.page-scroll').on('click', function(e){
    let tujuan = $(this).attr('href');
    $(e.target).addClass('active')
    $('.page-scroll').not($(e.target)).removeClass('active')

    let elemenTujuan = $(tujuan)

    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 150
    }, 1000)

    e.preventDefault()
})


function openMobileNavigation(){
    $('body').css('overflow-y', 'hidden')
    $('.menu-responsive').addClass('actived')
}

function closeMobileNavigation(){
    $('body').css('overflow-y', 'visible')
    $('.menu-responsive').removeClass('actived')
}

// halaman web ketika discroll
$(window).scroll(function(){
    let scroll = $(window).scrollTop();

    if(scroll > 80){
        $('header nav.bg-menu').addClass('scrolled');
        $('nav.bg-menu ul li button.btn-masuk').addClass('scrolled');
        $('nav.bg-menu ul.logo h3 a').addClass('scrolled');
        $('nav.bg-menu ul li i').addClass('scrolled');
    } else{
        $('header nav.bg-menu').removeClass('scrolled');
        $('nav.bg-menu ul li button.btn-masuk').removeClass('scrolled');
        $('nav.bg-menu ul.logo h3 a').removeClass('scrolled');
        $('nav.bg-menu ul li i').removeClass('scrolled');
    }


    // navigasi dinamis ketika discroll (no plugin)
    let sectionContent = document.querySelectorAll('.offset-section');
    let navMenu = document.querySelectorAll('.nav-desktop');
    let navMobile = document.querySelectorAll('.nav-mobile');
    
    for (let i = 0; i < sectionContent.length; i++) {
        let sectionOffset = (sectionContent[i].offsetTop > 20)?sectionContent[i].offsetTop - 300: sectionContent[i].offsetTop;

        if(scroll >= sectionOffset){
            navMenu[i].classList.add('active')
            navMobile[i].classList.add('active')
            
            if(i >= 1){
                navMenu[i - 1].classList.remove('active')
                navMobile[i - 1].classList.remove('active')
            }
        } else{
            navMenu[i].classList.remove('active')
            navMobile[i].classList.remove('active')
        }
    }
})

// cek input form kontak kosong saat mengetik
const inputContact = document.querySelectorAll('.contact-input');
inputContact.forEach(input =>{
    input.addEventListener('input', function(){
        let inputChar = this.value;
        if(inputChar.length > 0){
            this.classList.add('form-valid')
        } else{
            this.classList.remove('form-valid')
        }
    })
})


// data lengkap tempat wisata
const dataWisata = [
    {
        name: "Pura Lempuyang",
        image: "lempuyang.jpg",
        location: "Karangasem",
        ratings: 4.2,
        reviews: 490,
        address: "Jl. Pura Lempuyang Luhur, Tri Buana, Abang, Kabupaten Karangasem, Bali 80852",
        openedAt: "Buka Jam 7:00",
        description: "Berlokasi di Desa Tista, Kecamatan Abang, Kabupaten Karangasem, pura yang berdiri di Bukit Bisnis ini kerap disambangi umat Hindu Bali untuk menyembah Ida Sanghyang Widhi Wasa. Bagi wisatawan baik nusantara maupun mancanegara, keberadaan pura ini pun lebih dikenal lewat 'gerbang surga' yang terletak di bagian tertinggi pura. Untuk mencapai spot ini traveler harus berjalan mendaki 1.700 anak tangga lebih dulu dari area parkir.",
        embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4973.038885680806!2d115.63008202628362!3d-8.391483330573493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd20745c3f7eb0b%3A0x4f4f3195601822ea!2sPenataran%20Lempuyang!5e0!3m2!1sen!2sid!4v1596555005620!5m2!1sen!2sid"
    },
    {
        name: "Bukit Campuhan",
        image: "campuhan.jpg",
        location: "Gianyar",
        ratings: 4.5,
        reviews: 1865,
        address: "Jl. Bangkiang Sidem, Kelusa, Payangan, Kabupaten Gianyar, Bali 80571",
        openedAt: "-",
        description: "Tjampuhan Ridge Walk begitulah para wisatawan manca negara mengenal bukit Campuhan, Ubud. Destinasi itu merupakan satu dari yang jadi primadona di sana. Sebagai sebuah lokasi wisata, Campuhan Ubud menyuguhkan alam terbuka dengan pemandangan lanskap Desa Ubud. Selain maish asri, wisatawan tak dikenakan biaya untuk menyusuri jalan setapak di sana. Menariknya, lokasi wiaata ini memungkinkan pengunjung untuk melakukan aktivitas luar ruang tanpa harus jauh-jauh masuk ke dalam hutan.agarterasing dari pusat keramaian.Di Campuhan, pelancong bisa mendapatkan semua. Aktivitas luar ruangan dengan suasana alam yang tenang. Oleh karena itu, aktivitas yang tepat adalah bersepeda, hiking, trekking, atau jogging. Kondisi treknya tidak sulit, sudah ditata rapi dengan pemandangan segar dan hijaunya alam Ubud. Dengan lokasi yang mudah untuk dicapai, Campuhan menjadi salah salah tempat favorit wisatawan untuk melakukan aktivitas olahraga atau sekadar menikmati pagi di sekitar Ubud.",
        embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.000334829135!2d115.2539440553234!3d-8.499346693889352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d3968fd1da5%3A0x90fb03bfae62a888!2sBukit%20Campuhan!5e0!3m2!1sen!2sid!4v1596555425778!5m2!1sen!2sid"
    },
    {
        name: "Pantai Kelingking",
        image: "kelingking.jpg",
        location: "Klungkung",
        ratings: 4.8,
        reviews: 10543,
        address: "Bunga Mekar, Nusapenida, Klungkung Regency, Bali 80771",
        openedAt: "-",
        description: "Nusa Penida adalah sebuah pulau yang terletak di sebelah tenggara Bali, yang secara administratif berada di bawah Kabupaten Klungkung. Salah satu objek yang memukau di sini adalah Kelingking Secret Point Nusa Penida. Kelingking Secret Point terletak di Dusun Karang Dawa, Desa Bunga Mekar, Kecamatan Nusa Penida. Pantainya ada di bawah tebing dan tidak terlalu luas. Bukitnya sangat tinggi dan tidak ada akses jalan untuk turun ke bawah. Jadi memang pengunjung hanya bisa menyaksikan pemandangan Kelingking Secret Point dari atas bukit Karang Dawa. Meskipun begitu, berwisata ke sini sangat memuaskan karena di Indonesia tidak gampang mencari pemandangan seperti di Kelingking Secret Point.",
        embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.3692965344!2d115.4713675893014!3d-8.751280452462566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd271d41604fb99%3A0x5ae4784b33c35c5b!2sKelingking%20Beach!5e0!3m2!1sen!2sid!4v1596555995035!5m2!1sen!2sid"
    },
    {
        name: "Pura Ulundanu Beratan",
        image: "ulundanu.jpg",
        location: "Candikuning, Tabanan",
        ratings: 4.6,
        reviews: 23514,
        address: "Danau Beratan, Candikuning, Baturiti, Tabanan Regency, Bali 82191",
        openedAt: "Buka Jam 7:00",
        description: "Anda pastinya sudah tidak asing lagi dengan gambar Pura yang terdapat dalam pecahan uang Rp 50.000,00. Pura Ulun Danu Beratan, salah satu Pura terbesar di Bali. Nama Pura ini merujuk pada lokasinya yang berdiri di tepi Danau Beratan. Secara administratif, Pura Ulun Danu Beratan terletak di Desa Candikuning, Kecamatan Baturiti, Kabupaten Tabanan. Sekitar 50 KM di utara kota Denpasar, di jalan utama Bedugul-Singaraja. Pada hari-hari tertentu seperti misalnya Purnama, Tilem, Galungan maupun hari besar agama Hindu lainnya, seringkali diadakan persembahyangan bersama. Tidak hanya itu area Ulun Danu Beratan yang indah sering juga digunakan untuk lokasi prewedding yang mempesona.",
        embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.2772426515203!2d115.16463471404342!3d-8.275180694045957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1896c9fac0857%3A0x18246568e4db1b53!2sUlun%20Danu%20Beratan%20Temple!5e0!3m2!1sen!2sid!4v1596557663262!5m2!1sen!2sid"
    }
]

// mengambil & menampilkan data wisata
function infoDetailWisata(wisata){
    let iconRatings = document.querySelectorAll('.icon-rating');
    let list = "";
    dataWisata.forEach(data =>{
        if(wisata == data.name){
            // logika rating wisata
            let rating = Math.floor(data.ratings);
            console.log(rating)
            for(let i=0; i < rating; i++){
                iconRatings[i].classList.add('filled')
            }

            list = `
                <li title="Alamat"><i class="fa fa-map-marker-alt" style="transform: translate(3px, 5px);"></i> <span>${data.address}</span></li>
                <li title="Jam Operasional"><i class="fa fa-clock" style="transform: translateY(4px);"></i> <span>${data.openedAt}</span></li>
            `
            $('.detail-wisata').html(list)
            $('#namaWisata').html(data.name)
            $('#imgWisata').attr('src', `assets/images/${data.image}`)
            $('#imgWisata').attr('alt', data.name)
            $('#lokasiWisata').html(data.location)
            $('#totalRating').html(data.ratings)
            $('#totalReviews').html(`(${data.reviews.toLocaleString()})`)
            $('#descWisata').html(data.description)
            $('#mapWisata').attr('src', data.embedSrc)
        }
    })
}

function openDetailWisata(that){
    $('body').css('overflow-y','hidden')
    setTimeout(() => {
        $('.content-delay').addClass('showed')
    }, 1000);
    $('.bg-popup-detail').addClass('showed')

    let name = that.getAttribute('data-name')

    infoDetailWisata(name)
}

function closeDetailWisata(){
    setTimeout(() => { 
        $('.bg-popup-detail').removeClass('showed')
    }, 1000);
    
    setTimeout(() => {
        $('body').css('overflow-y','visible')
    }, 2000);

    $('.content-delay').removeClass('showed')
}