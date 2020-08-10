let docWidth = $(document).width();
let checkHeight = $(window).height();
// console.log(docWidth)

$(window).on('load', function(){
            
    if(docWidth > 991){
        headerDesktopAnimation();
        desktopHeaderMotion();

        // detail.html
        detailDesktopHeaderMotion();
    } else if(docWidth > 768 && docWidth <= 991){
        headerTabletAnimation();
        desktopHeaderMotion();

        // detail.html
        detailDesktopHeaderMotion();
    } else if(docWidth > 576 && docWidth <= 768){
        headerTabletAnimation();

        // detail.html
        detailDesktopHeaderMotion();
    } else{
        headerMobileAnimation();
        
        if(checkHeight <= 660){
            $('.banner-text').css({'transform':'translateY(0px)'})
        } else if(checkHeight > 660){
            $('.banner-text').css({'transform':'translateY(-70px)'})
        }

        // detail.html
        detailMobileHeaderMotion();
    }

});


function desktopHeaderMotion(){
    
	setTimeout(() => {
        
        $('#screenBanner').on('mousemove',function(e){
			let x = parseInt(Math.ceil((e.clientX + e.screenX)));
			let y = parseInt(Math.ceil((e.clientY + e.screenY)));
				// console.log(x, y)
			$('.banner-deco').css('transform',`translate(${x/150}px, ${y/150}px)`);
			$('.banner-img .img-box').css('background-position',`-${(x / 70)+100}px ${(y/ 100)-15}px`);
			$('.banner-img img.circ-group').css('transform',`translate(${x/150}px, ${y/150}px) scale(.3)`);
		})

    }, 3000);
}






function headerDesktopAnimation(){
    setTimeout(() => {
        // Image
        TweenMax.to('.banner-img', 1.3, {height: '100vh', scaleY: 1, opacity:1,ease: Circ.easeOut})
        TweenMax.to('.banner-img .img-box',1.3, {delay:1.8,width: '300px', scaleX: 1, opacity:1,ease: Circ.easeOut})

        // Deco
        TweenMax.to('.banner-img .circ-group',1, {delay:1,top: '30%',x:0,opacity:.15,ease: Circ.easeOut})
        TweenMax.to('#deco-1',1.5, {delay:.5,left: '-7%',opacity:.1,ease: Circ.easeOut})
        TweenMax.to('#deco-2',1, {delay:.5,left: '40%',top: '-25%',opacity:.1,ease: Circ.easeOut})
        
        // Text
        TweenMax.to('.banner-text h4',1, {delay:0, y:0, opacity:1, ease: Circ.easeOut})
        TweenMax.to('.banner-text h1',1.2, {delay:.9,y:0,opacity:1,ease: Circ.easeOut})
        TweenMax.to('.banner-text p',1, {delay:1.8,y:0,opacity:1,ease: Circ.easeOut})
        TweenMax.to('.banner-text button',.6, {delay:2.4,y:0,opacity:1,ease: Circ.easeOut})
        // TweenMax.to('.banner-text .btn-banner-1', .4, {delay:2.4,y:0,opacity:1})
        // TweenMax.to('.banner-text .btn-banner-2', .4, {delay:2.8,y:0,opacity:1})
    }, 500);
}


function headerTabletAnimation(){
    setTimeout(() => {
        TweenMax.to('.banner-img', 1.3, {height: '100vh', scaleY: 1, opacity:1,ease: Circ.easeOut})
        TweenMax.to('.banner-img .img-box',1.3, {top: '50%',left: '20%',width: '250px',  delay:1.5, opacity:1,ease: Circ.easeOut})

        // Deco
        TweenMax.to('.banner-img .circ-group',1, {delay:1,top: '30%',x:0,opacity:.15,ease: Circ.easeOut})
        TweenMax.to('#deco-1',1.5, {delay:.5,left: '-7%',opacity:.1,ease: Circ.easeOut})
        TweenMax.to('#deco-2',1, {delay:.5,left: '40%',top: '-25%',opacity:.1,ease: Circ.easeOut})

        // Text
        TweenMax.to('.banner-text h4',1, {delay:0, y:0, opacity:1, ease: Circ.easeOut})
        TweenMax.to('.banner-text h1',1.2, {delay:.9,y:0,opacity:1,ease: Circ.easeOut})
        TweenMax.to('.banner-text p',1, {delay:1.8,y:0,opacity:1,ease: Circ.easeOut})
        // TweenMax.to('.banner-text button',.6, {delay:2.4,y:0,opacity:1,ease: Circ.easeOut})
        TweenMax.to('.banner-text .btn-banner-1', .4, {delay:2.4,y:0,opacity:1})
        TweenMax.to('.banner-text .btn-banner-2', .4, {delay:2.8,y:0,opacity:1})
    }, 500);
}




function headerMobileAnimation(){
    setTimeout(() => {
        TweenMax.to('.banner-img', 1.3, {height: '45vh', scaleY: 1, opacity:1,ease: Circ.easeOut})
        TweenMax.to('.banner-img .img-box',1.3, {x:'-50%', top: '50%',left: '50%',delay:1.5,width: '82%', scaleX: 1, opacity:1,ease: Circ.easeOut})
        // .banner-text{padding: 1em 2em 0 2em; height: auto;}
        

        // Text
        TweenMax.to('.banner-text h4',1, {delay:0, y:0, opacity:1, ease: Circ.easeOut})
        TweenMax.to('.banner-text h1',1.2, {delay:.9,y:0,opacity:1,ease: Circ.easeOut})
        TweenMax.to('.banner-text p',1, {delay:1.8,y:0,opacity:1,ease: Circ.easeOut})
        // TweenMax.to('.banner-text button',.6, {delay:2.4,y:0,opacity:1,ease: Circ.easeOut})
        TweenMax.to('.banner-text .btn-banner-1', .4, {delay:2.4,y:0,opacity:1})
        TweenMax.to('.banner-text .btn-banner-2', .4, {delay:2.8,y:0,opacity:1})
    }, 500);
}




// detail.html animations
function detailDesktopHeaderMotion(){
    TweenMax.to('.bg-banner-detail',1.3, {height:'70vh',ease: Circ.easeOut});
    TweenMax.to('.bg-banner-detail .banner-text',1, {delay:1.4,y:0,opacity:1,visibility:'visible',ease: Circ.easeOut});
}

function detailMobileHeaderMotion(){
    TweenMax.to('.bg-banner-detail',1.3, {height:'50vh',ease: Circ.easeOut});
    TweenMax.to('.bg-banner-detail .banner-text',1, {delay:1.4,y:0,opacity:1,visibility:'visible',ease: Circ.easeOut});
}







// initialize AOS
        AOS.init();

        $('.yearCopyright').html(new Date().getFullYear());
        


        $(document).ready(function(){
              $('.bg-testimonials').slick({
                dots: true,
                infinite: true,
                speed: 300,
                centerMode: true,
                autoplay: true,
                slidesToShow: 1,
                adaptiveHeight: true,
                variableWidth: true
              });
        });


        
        $(window).scroll(function(){
            let scroll = $(window).scrollTop();
            let screenWidth = $(document).width()

            if(screenWidth > 991){
                if(scroll > 300){
                    // halaman index
                    $('.bg-header-menu').addClass('scrolled')
                    $('.bg-header-menu ul.hamburger .hamburger-menu span').addClass('scrolled-black')


                    // halaman detail
                    $('.bg-header-menu-detail ul.logo li a').addClass('scrolled')
                } else{
                    // halaman index
                    $('.bg-header-menu').removeClass('scrolled')
                    $('.bg-header-menu ul.hamburger .hamburger-menu span').removeClass('scrolled-black')


                    // halaman detail
                    $('.bg-header-menu-detail ul.logo li a').removeClass('scrolled')
                }
            } 
             // jika ukuran browser > 991
            else if(screenWidth > 768 && screenWidth <= 991){
                if(scroll > 200){
                    // halaman index
                    $('.bg-header-menu').addClass('scrolled-tablet')
                    $('.bg-header-menu ul.hamburger .hamburger-menu span').addClass('scrolled-black')


                    // halaman detail
                    $('.bg-header-menu-detail ul.logo li a').addClass('scrolled')
                } else{
                    // halaman index
                    $('.bg-header-menu').removeClass('scrolled-tablet')
                    $('.bg-header-menu ul.hamburger .hamburger-menu span').removeClass('scrolled-black')


                    // halaman detail
                    $('.bg-header-menu-detail ul.logo li a').removeClass('scrolled')
                }
            }
            // jika ukuran browser > 768 dan <= 991
            else if(screenWidth > 576 && screenWidth <= 768){
                if(scroll > 200){
                    // halaman index
                    $('.bg-header-menu').addClass('scrolled-mobile')
                    $('.bg-header-menu ul.hamburger .hamburger-menu span').addClass('scrolled-black')


                    // halaman detail
                    $('.bg-header-menu-detail ul.logo li a').addClass('scrolled')
                } else{
                    // halaman index
                    $('.bg-header-menu').removeClass('scrolled-mobile')
                    $('.bg-header-menu ul.hamburger .hamburger-menu span').removeClass('scrolled-black')


                    // halaman detail
                    $('.bg-header-menu-detail ul.logo li a').removeClass('scrolled')
                }
            }
            // jika ukuran browser > 576 dan <= 768
            else{
                if(scroll > 200){
                    // halaman index
                    $('.bg-header-menu').addClass('scrolled-mobile')
                    $('.bg-header-menu ul.hamburger .hamburger-menu span').addClass('scrolled-black')


                    // halaman detail
                    $('.bg-header-menu-detail ul.logo li a').addClass('scrolled')
                } else{
                    // halaman index
                    $('.bg-header-menu').removeClass('scrolled-mobile')
                    $('.bg-header-menu ul.hamburger .hamburger-menu span').removeClass('scrolled-black')


                    // halaman detail
                    $('.bg-header-menu-detail ul.logo li a').removeClass('scrolled')
                }
            }
            // jika ukuran browser < 576

        })



        function openSidebarMenu(){
            $('.hamburger-menu .span-bars-1').addClass('clicked')
            $('.hamburger-menu .span-bars-2').addClass('clicked')
            $('.hamburger-menu .span-bars-3').addClass('clicked')

            $('body').css({'overflow-y':'hidden'})

            TweenMax.to('.bg-screen-menu',1, {bottom:0,delay:0,height:'100vh',ease: Circ.easeOut});

            TweenMax.to('.header-screen-menu',1, {y:0,delay:1,opacity:1,visibility: 'visible',ease: Circ.easeOut});
            TweenMax.to('.list-nav-menu',1, {opacity:1,visibility: 'visible'});

            TweenMax.to('.list-nav-menu ul.menu li:nth-child(1)',0.6, {y:0,delay:1.2,opacity:1,visibility: 'visible'});
            TweenMax.to('.list-nav-menu ul.menu li:nth-child(2)',0.6, {y:0,delay:1.3,opacity:1,visibility: 'visible'});
            TweenMax.to('.list-nav-menu ul.menu li:nth-child(3)',0.6, {y:0,delay:1.4,opacity:1,visibility: 'visible'});

            TweenMax.to('.screen-copyright',0.6, {y:0,delay:1.4,opacity:1,visibility: 'visible',ease: Circ.easeOut});
        }

        function closeSidebarMenu(){
            $('.hamburger-menu .span-bars-1').removeClass('clicked')
            $('.hamburger-menu .span-bars-2').removeClass('clicked')
            $('.hamburger-menu .span-bars-3').removeClass('clicked')

            $('body').css({'overflow-y':'auto'})


            TweenMax.to('.bg-screen-menu',0.8, {top:0,delay:1,height:0,ease: Circ.easeOut});

            TweenMax.to('.header-screen-menu',1, {y:'-10px',opacity:0,visibility: 'hidden'});
            TweenMax.to('.list-nav-menu',1, {opacity:0,visibility: 'hidden'});

            TweenMax.to('.screen-copyright',0.6, {y:'20px',delay:0.2,visibility: 'hidden',opacity:0});

            TweenMax.to('.list-nav-menu ul.menu li:nth-child(1)',0.6, {y:'-15px',delay:0.4,opacity:0,visibility: 'hidden'});
            TweenMax.to('.list-nav-menu ul.menu li:nth-child(2)',0.6, {y:'-15px',delay:0.3,opacity:0,visibility: 'hidden'});
            TweenMax.to('.list-nav-menu ul.menu li:nth-child(3)',0.6, {y:'-15px',delay:0.2,opacity:0,visibility: 'hidden'});
        }


        $('.preview-links').on('mouseenter', function(e){
            console.log(e.target.innerText)
            TweenMax.to('.preview-hover h1',.5,{y:0,opacity:.5});
            // $('.preview-hover h1').addClass('showed')
            $('.heading-show-links-preview').html(e.target.innerText);
        })

        $('.preview-links').on('mouseleave', function(e){
            // $('.preview-hover h1').removeClass('showed')
            TweenMax.to('.preview-hover h1',.5,{y:'30px',opacity:0});
            $('.heading-show-links-preview').html('')
        })



        $('.page-scroll').on('click', function(e){
            var tujuan = $(this).attr('href');

            var elemenTujuan = $(tujuan)

            $('html').animate({
                scrollTop: elemenTujuan.offset().top - 150
            }, 1000)

            e.preventDefault()
        })



        const dataWeb = [
            {
                id:1,
                name: 'Baliku',
                title: 'Web Traveling (Beta)',
                link: 'https://agasdarmawa.github.io/baliku/',
                image: 'baliku.jpg',
                langUsed: 'html-css-js',
                tools: 'sublime-vscode-xd-ps',
                description: 'Baliku adalah sebuah design website travelling yang menampilkan daftar-daftar tempat pariwisata di Bali. Di website ini terdapat konten keunggulan-keunggulan kenapa harus mengunjungi Bali dan beberapa testimoni dari orang-orang yang telah menggunakan jasa web ini. Web ini adalah BETA dan dalam proses development.',
                public: true
            },

            {
                id:2,
                name: 'Souvernice',
                title: 'Web Lomba ITCC Web Design 2019',
                link: 'https://agasdarmawa.github.io/souvernice/',
                image: 'itcc.jpg',
                langUsed: 'html-css-js',
                tools: 'sublime-vscode-xd-ps',
                description: 'Souvernice adalah sebuah website yang dibuat untuk Lomba ITCC Web Design 2019 dimana lomba ini diselenggarakan di Universitas Udayana Jimbaran pada Oktober 2019. Tema yang diangkat adalah E-Commerce Kerajinan Tradisional. Jadi, saya memilih produk kerajinan seperti furniture, gelas dan lain-lain sebagai konten web ini.',
                public: true
            },

            {
                id:3,
                name: 'Potmefarm',
                title: 'Web Projek GCC',
                link: '',
                image: 'potmefarm.jpg',
                langUsed: 'html-css-js-php',
                tools: 'sublime-vscode-ps-bs-mysql-xampp',
                description: 'Potmefarm adalah sebuah projek website e-commerce oleh Globaliti Creative Center (GCC) yang beranggotakan 2 orang yaitu Putu Agas Darmawa (Front-End) dan Adrian (Back-End). Tema web ini adalah web commerce jual-beli produk berkebun dan juga paket untuk belajar cara berkebun. Client kami adalah seorang pemilik toko yang menjual produk-produk untuk berkebun.',
                public: false
            },

            {
                id:4,
                name: 'Crafter',
                title: 'Web Lomba INVENTION Web Design 2019',
                link: 'https://agasdarmawa.github.io/crafter/',
                image: 'invention.jpg',
                langUsed: 'html-css-js',
                tools: 'sublime-vscode-xd-ps',
                description: 'Crafter adalah sebuah website yang dibuat untuk Lomba INVENTION Web Design 2019 dimana pada babak penyisihan diadakan secara online pada Maret 2019 dan jika lolos maka finalnya diselenggarakan di Universitas Udayana Jimbaran pada April 2019 secara offline dan web ini berhasil lolos ke babak final. Tema yang diangkat adalah E-Commerce Kerajinan Tangan. Jadi, saya memilih produk kerajinan seperti furniture, baju, gelang dan lain-lain sebagai konten web ini.',
                public: true
            },

            {
                id:5,
                name: 'BaliNey',
                title: 'Web Dicoding Submission',
                link: 'https://agasdarmawa.github.io/baliney/',
                image: 'baliney.jpg',
                langUsed: 'html-css-js',
                tools: 'sublime-vscode-ps',
                description: 'Dicoding, merupakan sebuah program yang berjalan dalam bidang pengembangan aplikasi, serta memiliki banyak kelas "Dicoding Academy", dan dapat dipelajari dengan system pembelajaran online. Dari tingkat keahlian, tersedia kelas bagi peserta yang dengan kemampuan programming pemula (beginner), pertengahan, hingga mahir (advance atau expert). Dicoding menyediakan dua jenis sertifikat yaitu Sertifikat Keikutsertaan dan Sertifikat Kelulusan. Developer akan mendapatkan Sertifikat Keikutsertaan apabila hadir dalam salah satu event yang Dicoding adakan. Peserta mendapat sertifikat kelulusan setelah menyelesaikan dan lulus dari tugas (submission) akhir dengan baik. Web ini adalah submission dari kelas Dasar Pemrograman Web.',
                public: true
            }
        ];


        const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		console.log(urlParams)

		const idWebsite = urlParams.get('id_website');
		// console.log(idWebsite)


		const checkAccess = urlParams.has('id_website');
        // console.log(checkAccess)



		// Display to elements
        // index.html
        let dataElem = "", listLanguage = "", listTools = "";
		$.each(dataWeb, (index, value) =>{

                // index.html
				dataElem += `
				<div class="box-project" data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="500">
        		
					<div class="project-img img-proj-adj">
						
						<div class="project-action">
							<a href="${value.link}" style="display:${(value.public == true)?"flex":"none"}" class="href-visit-website">
								<button class="btn1"><i class="fa fa-globe"></i> Kunjungi Website</button>
							</a>

							<a href="detail.html?id_website=${value.id}" class="href-detail-website">
								<button class="btn2"><i class="fa fa-eye"></i> Detail Website</button>
							</a>
						</div>

					</div>

					<h3 class="proxima-bold web-title">${value.name}</h3>
					<p class="web-desc">${value.title}</p>

				</div>
                `
                

                // detail.html

                // jika ?id_website sama dengan dataWeb.id
                if(value.id == idWebsite){
                    $('.webName').html(value.name);
                    // $('#detailTitle').html(`Detail Website - ${value.name}`);
                    $('#webTitle').html(value.title);
                    $('input.copy-text').val(value.link);
                    $('a#webHrefLink').attr('href', `${value.link}`)
                    $('.box-img-preview').css({'background-image':`url(img/portfolio/${value.image})`});
                    $('#webDesc').html(value.description);

                    // $('.bg-banner-detail').css({'background-image':`url(img/portfolio/${value.image})`});

                    // console.log(value.public)
                    if(value.public == false){
                        $('.btn-action').css('display','none')
                    }
                    
                    // cek bahasa web
                    if(value.langUsed == 'html-css-js'){
                        listLanguage += `
                        <li><img src="img/skills/html5.png" alt="HTML"></li>
                        <li><img src="img/skills/css.png" alt="CSS"></li>
                        <li><img src="img/skills/js.png" alt="Javascript"></li>
                        `
                    }  if(value.langUsed == 'html-css-js-php'){
                        listLanguage += `
                        <li><img src="img/skills/html5.png" alt="HTML"></li>
                        <li><img src="img/skills/css.png" alt="CSS"></li>
                        <li><img src="img/skills/js.png" alt="Javascript"></li>
                        <li><img src="img/skills/php.png" alt="PHP"></li>
                        `
                    }

                    // cek tools web
                    if(value.tools == 'sublime-vscode-xd-ps'){
                        listTools += `
                        <li><img src="img/tools/sublime.png" alt="Sublime Text"></li>
                        <li><img src="img/tools/vscode.png" alt="Visual Studio Code"></li>
                        <li><img src="img/skills/xd.png" alt="Adobe XD"></li>
                        <li><img src="img/skills/photoshop.png" alt="Photoshop"></li>
                        `
                    } if(value.tools == 'sublime-vscode-ps'){
                        listTools += `
                        <li><img src="img/tools/sublime.png" alt="Sublime Text"></li>
                        <li><img src="img/tools/vscode.png" alt="Visual Studio Code"></li>
                        <li><img src="img/skills/xd.png" alt="Adobe XD"></li>
                        `
                    } if(value.tools == 'sublime-vscode-ps-bs-mysql-xampp'){
                        listTools += `
                        <li><img src="img/tools/sublime.png" alt="Sublime Text"></li>
                        <li><img src="img/tools/vscode.png" alt="Visual Studio Code"></li>
                        <li><img src="img/skills/photoshop.png" alt="Photoshop"></li>
                        <li><img src="img/tools/bootstrap.png" alt="Bootstrap"></li>
                        <li><img src="img/tools/mysql.png" alt="MySQL"></li>
                        <li><img src="img/tools/xampp.png" alt="XAMPP"></li>
                        `
                    }

                    $('#webLang').html(listLanguage)
                    $('#webTools').html(listTools)
                    
                }

		})

		// console.log(btnProjects)
        $('.projects-wrap').html(dataElem)
        



        // detail.html
        function copyURL(){
			let copyText = document.querySelector('.copy-text')
			
			// Select the text field
			copyText.select();
			// For mobile devices
			copyText.setSelectionRange(0, 10000);

			// Copy the text inside the text field
			document.execCommand('copy')
		}

		let checkCopied;

		$('.btn-copy').click(function(){
			checkCopied = true;
			
			if( checkCopied == true ) {
				toastr.success("Berhasil disalin ke clipboard!", "Copied!")
			}
		});


        // set box-project img poster
		$.each($('.box-project'), (index, elems) =>{
			$(`.box-project:nth-child(${index+1}) .project-img`).css({
				'background-image':`url(img/portfolio/${dataWeb[index].image})`
			})
		})
