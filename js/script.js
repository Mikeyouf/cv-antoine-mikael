function blink() {
    $(".glyphAvatar2").animate({
        opacity: 0
    }, 1000).animate({
        opacity: 1
    }, 1000);
    setTimeout("blink()", 2000);
}

$(function () {

    //animation de defilement
    $(".navbar a, footer a").on("click", function (event) {

        event.preventDefault();
        var hash = this.hash;

        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {
            window.location.hash = hash;
        })
    });

    //animation pour rendre visible/invisible le formulaire au clic
    $("#showPref").click(function () {
        $("#preferences").animate({
            width: 'toggle'
        }, "slow");
    });

    $('section').click(function () {
        $('#preferences').hide("slow");
    })


    $("#tabs").tabs();

    //empecher mon avatar d'apparaitre sur des écrans trop petits
    var ecran = document.documentElement.clientWidth;
    if (ecran > 720) {
        //mon avatar
        $("#imageAvatar").delay(3000).fadeIn(100);
        $("#divAvatar").delay(3000).fadeIn(100);
        $(".glyphAvatar2").delay(3000).fadeIn(100);
    } else {
        $("#showPref").hide(); //cacher le bouton de pref sur petits écrans
        
        //changer la place de l'expérience pro si écran trop petit
        $("#expProXs").removeClass("timeline-panel-container-inverted");
        $("#expProXs").addClass("timeline-panel-container");
        
        $(".timeline-panel-container").css("width", "90%");
        $(".timeline li .timeline-badge").css("left", "90%");
        $(".timeline :before").css("left", "90%");
    }

    $("section").click(function () {
        $("#imageAvatar").fadeOut(100);
    })
    $("section").click(function () {
        $("#divAvatar").fadeOut(100);
    })
    $("section").click(function () {
        $(".glyphAvatar2").hide();
    })
    
    $("#imageAvatar").click(function () {
        $("#imageAvatar").fadeOut(100);
    })
    $("#imageAvatar").click(function () {
        $("#divAvatar").fadeOut(100);
    })
    $("#imageAvatar").click(function () {
        $(".glyphAvatar2").hide();
    })

    //animation sur la fleche
    blink();

    //couleur de départ
    $(':radio[id="fBleu"]').prop('checked', true);
    $(".couleur").css("color", "dodgerblue");
    $(".bckCouleur").css("background-color", "dodgerblue");
    $(".buttonNormal").css('background-color', 'dodgerblue');
    $(".buttonNormal").hover(function () {
        $(this).addClass("buttonBleu");
        $(this).removeClass("buttonRed buttonViolet buttonGreen bckCouleur");
    }, function () {
        $(this).removeClass("buttonBleu");
        $(this).addClass('bckCouleur');
    })

    //liens du menu
    $('.navbar li a').addClass('lienBlanc');
    //hover sur les liens du menu
    $('.navbar li a').hover(function () {
        $(this).removeClass("lienBlanc");
        $(this).addClass("buttonBleu");
    }, function () {
        $(this).removeClass("buttonBleu");
        $(this).addClass("lienBlanc");
    })
    //Active des liens menu
    $('.navbar li:active a').css('background-color', 'white').css('color', 'dodgerblue');

    //indicator du carousel
    $('#myCarousel li').css('border-color', 'dodgerblue');

    //li du form des préférences
    $('#tabs li').css('background-color', 'dodgerblue');

    //cacher les qualités dans le carousel
    $('.slideQ').hide();
    $('.preferencesQ').hide().removeClass('item');

    //limiter le nombre de checkbox a trois
    //form2
    var cb = document.querySelectorAll(".form2 [type=checkbox]");
    var i = 0,
        l = cb.length;
    for (; i < l; i++)
        cb[i].addEventListener("change", function () {
            if (document.querySelectorAll(".form2 [type=checkbox]:checked").length > 3)
                this.checked = false;
        }, false);

    //form4
    var cb = document.querySelectorAll(".form4 [type=checkbox]");
    var j = 0,
        k = cb.length;
    for (; j < k; j++)
        cb[j].addEventListener("change", function () {
            if (document.querySelectorAll(".form4 [type=checkbox]:checked").length > 3)
                this.checked = false;
        }, false);


    //formulaire de choix
    //Couleur
    $("#validePref").click(function () {
        //BLEU
        if ($(':radio[id="fBleu"]:checked').val()) {
            $(".couleur").css("color", "dodgerblue");
            $(".bckCouleur").css("background-color", "dodgerblue");
            $(".buttonNormal").css("background-color", "dodgerblue");
            $('#myCarousel li').css('border-color', 'dodgerblue');
            $('#tabs li').css('background-color', 'dodgerblue');

            //hover du bouton1
            $(".buttonNormal").hover(function () {
                $(this).addClass("buttonBleu");
                $(this).removeClass("buttonRed buttonViolet buttonGreen");
            }, function () {
                $(this).removeClass("buttonBleu");
            })
            //hover lien menu
            $('.navbar li a').hover(function () {
                $(this).removeClass("lienBlanc buttonRed buttonViolet buttonGreen");
                $(this).addClass("buttonBleu");
            }, function () {
                $(this).removeClass("buttonBleu");
                $(this).addClass("lienBlanc");
            })
        }
        //ROUGE
        if ($(':radio[id="fRouge"]:checked').val()) {
            $(".couleur").css("color", "#d82c2e");
            $(".bckCouleur").css("background-color", "#d82c2e");
            $(".buttonNormal").css("background-color", "#d82c2e");
            $('#myCarousel li').css('border-color', '#d82c2e');
            $('#tabs li').css('background-color', '#d82c2e');

            //hover et active
            //hover du bouton1
            $(".buttonNormal").hover(function () {
                $(this).removeClass("buttonBleu buttonViolet buttonGreen");
                $(this).addClass('buttonRed');
            }, function () {
                $(this).removeClass("buttonRed");
            })
            //hover lien menu
            $('.navbar li a').hover(function () {
                $(this).removeClass("lienBlanc buttonViolet buttonGreen buttonBleu");
                $(this).addClass("buttonRed");
            }, function () {
                $(this).removeClass("buttonRed");
                $(this).addClass("lienBlanc");
            })
        }
        //VIOLET
        if ($(':radio[id="fViolet"]:checked').val()) {
            $(".couleur").css("color", "#e33a8c");
            $(".bckCouleur").css("background-color", "#e33a8c");
            $(".buttonNormal").css("background-color", "#e33a8c");
            $('#myCarousel li').css('border-color', '#e33a8c');
            $('#tabs li').css('background-color', '#e33a8c');

            //hover du bouton1
            $(".buttonNormal").hover(function () {
                $(this).removeClass("buttonBleu buttonRed buttonGreen");
                $(this).addClass('buttonViolet');
            }, function () {
                $(this).removeClass("buttonViolet");
            })
            //hover lien menu
            $('.navbar li a').hover(function () {
                $(this).removeClass("lienBlanc buttonRed buttonGreen buttonBleu");
                $(this).addClass("buttonViolet");
            }, function () {
                $(this).removeClass("buttonViolet");
                $(this).addClass("lienBlanc");
            })
        }

        //VERT
        if ($(':radio[id="fVert"]:checked').val()) {
            $(".couleur").css("color", "#50c798");
            $(".bckCouleur").css("background-color", "#50c798");
            $(".buttonNormal").css("background-color", "#50c798");
            $('#myCarousel li').css('border-color', '#50c798');
            $('#tabs li').css('background-color', '#50c798');

            //hover du bouton1
            $(".buttonNormal").hover(function () {
                $(this).removeClass("buttonBleu buttonRed buttonViolet");
                $(this).addClass('buttonGreen');
            }, function () {
                $(this).removeClass("buttonGreen");
            })
            //hover lien menu
            $('.navbar li a').hover(function () {
                $(this).removeClass("lienBlanc buttonRed buttonViolet buttonBleu");
                $(this).addClass("buttonGreen");
            }, function () {
                $(this).removeClass("buttonGreen");
                $(this).addClass("lienBlanc");
            })
        }

        //Formulaire de choix
        //Prénom et entreprise
        var prenom = $('#prenomPref').val();
        var entreprise = $('#entreprisePref').val();
        if (prenom.length > 1) {
            $('#prenomChoix').text('Peut-être chez vous ' + prenom + ' !');
        }

        if (entreprise.length > 1) {
            $('#entrepriseChoix').text('Développeur Front-End chez ' + entreprise);
        }


        //formulaire de choix
        //checkbox qualité
        
//    var itemElts = $('.item');
//        alert(itemElts.length);
//    if(itemElts.length <= 3) {
        if($('.preferencesQ').hasClass('item')) {
            $('.preferencesQ').hide().removeClass('item');
        }
        
        if ($('input[id="qual1"]:checked').val()) {
            $('#slide1').show();
            if($('#qualite1').hasClass('item')) {
                $('#qualite1').hide().removeClass('item');
            } else {
                $('#qualite1').show().addClass('item');
            }
        }
        if ($('input[id="qual2"]:checked').val()) {
            $('#slide2').show();
            if($('#qualite2').hasClass('item')) {
                $('#qualite2').hide().removeClass('item');
            } else {
                $('#qualite2').show().addClass('item');
            }
        }
        if ($('input[id="qual3"]:checked').val()) {
            $('#slide3').show();
            if($('#qualite3').hasClass('item')) {
                $('#qualite3').hide().removeClass('item');
            } else {
                $('#qualite3').show().addClass('item');
            }
        }
        if ($('input[id="qual4"]:checked').val()) {
            $('#slide4').show();
            if($('#qualite4').hasClass('item')) {
                $('#qualite4').hide().removeClass('item');
            } else {
                $('#qualite4').show().addClass('item');
            }
        }
        if ($('input[id="qual5"]:checked').val()) {
            $('#slide5').show();
            if($('#qualite5').hasClass('item')) {
                $('#qualite5').hide().removeClass('item');
            } else {
                $('#qualite5').show().addClass('item');
            }
        }
        if ($('input[id="qual6"]:checked').val()) {
            $('#slide6').show();
            if($('#qualite6').hasClass('item')) {
                $('#qualite6').hide().removeClass('item');
            } else {
                $('#qualite6').show().addClass('item');
            }
        }
        if ($('input[id="qual7"]:checked').val()) {
            $('#slide7').show();
            if($('#qualite7').hasClass('item')) {
                $('#qualite7').hide().removeClass('item');
            } else {
                $('#qualite7').show().addClass('item');
            }
        }
        if ($('input[id="qual8"]:checked').val()) {
            $('#slide8').show();
            if($('#qualite8').hasClass('item')) {
                $('#qualite8').hide().removeClass('item');
            } else {
                $('#qualite8').show().addClass('item');
            }
        }
//    }

        //formulaire de choix
        //checkbox compétences
//        if($('.form2:checked')) {
//            
//        }
//        if ($('.progress-bar').hasClass('progress-bar-striped active')) {
//            $('.progress-bar').removeClass('progress-bar-striped active');
//        }
        if ($('input[id="chx1"]:checked').val()) {
            $('#pb1').addClass('progress-bar-striped active');
        } else {
            $('#pb1').removeClass('progress-bar-striped active');
        }
        if ($('input[id="chx2"]:checked').val()) {
            $('#pb2').addClass('progress-bar-striped active');
        } else {
            $('#pb2').removeClass('progress-bar-striped active');
        }
        if ($('input[id="chx3"]:checked').val()) {
            $('#pb3').addClass('progress-bar-striped active');
        } else {
            $('#pb3').removeClass('progress-bar-striped active');
        }
        if ($('input[id="chx4"]:checked').val()) {
            $('#pb4').addClass('progress-bar-striped active');
        } else {
            $('#pb4').removeClass('progress-bar-striped active');
        }
        if ($('input[id="chx5"]:checked').val()) {
            $('#pb5').addClass('progress-bar-striped active');
        } else {
            $('#pb5').removeClass('progress-bar-striped active');
        }
        if ($('input[id="chx6"]:checked').val()) {
            $('#pb6').addClass('progress-bar-striped active');
        } else {
            $('#pb6').removeClass('progress-bar-striped active');
        }
        if ($('input[id="chx7"]:checked').val()) {
            $('#pb7').addClass('progress-bar-striped active');
        } else {
            $('#pb7').removeClass('progress-bar-striped active');
        }
        if ($('input[id="chx8"]:checked').val()) {
            $('#pb8').addClass('progress-bar-striped active');
        } else {
            $('#pb8').removeClass('progress-bar-striped active');
        }


        //tout les reset du formulaire après validation
        $('#pref1')[0].reset();
//        $('#pref3')[0].reset();
        $('#pref4')[0].reset();
    })

})
