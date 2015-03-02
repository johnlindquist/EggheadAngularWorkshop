var filterAndOrder = angular.module("filterAndOrder",[]);

filterAndOrder.controller("AppCtrl", function AppCtrl() {
    var app = this;
    app.order = "";
    app.setOrder = function setOrder(order) {
        if(app.order == order){
            order = "-" + order;
        }

        app.order = order;
    };

    app.people = [
        {
            "firstName": "Aurora",
            "lastName": "Strickland",
            "email": "Suspendisse.eleifend.Cras@Donecfeugiat.net"
        },
        {
            "firstName": "Sawyer",
            "lastName": "Prince",
            "email": "vel@etarcu.org"
        },
        {
            "firstName": "Emery",
            "lastName": "Dyer",
            "email": "Cras@hendreritidante.co.uk"
        },
        {
            "firstName": "Orla",
            "lastName": "Campbell",
            "email": "sem.magna.nec@necurna.com"
        },
        {
            "firstName": "Rhonda",
            "lastName": "Gibbs",
            "email": "nulla.Integer.vulputate@neque.com"
        },
        {
            "firstName": "Matthew",
            "lastName": "Roberson",
            "email": "In.ornare.sagittis@Maurisut.net"
        },
        {
            "firstName": "Vielka",
            "lastName": "Faulkner",
            "email": "Fusce@luctuset.com"
        },
        {
            "firstName": "Eden",
            "lastName": "Sanchez",
            "email": "sapien@adipiscingelitEtiam.net"
        },
        {
            "firstName": "Hope",
            "lastName": "Aguirre",
            "email": "elit@lectuspede.edu"
        },
        {
            "firstName": "Kuame",
            "lastName": "Long",
            "email": "euismod.mauris@Pellentesque.net"
        },
        {
            "firstName": "Selma",
            "lastName": "Mendez",
            "email": "placerat.eget@ipsumsodalespurus.edu"
        },
        {
            "firstName": "Irene",
            "lastName": "Parrish",
            "email": "arcu@nislMaecenas.net"
        },
        {
            "firstName": "Janna",
            "lastName": "Clay",
            "email": "Suspendisse.commodo@Cras.edu"
        },
        {
            "firstName": "Keane",
            "lastName": "Giles",
            "email": "iaculis@arcuVestibulumut.com"
        },
        {
            "firstName": "Ciara",
            "lastName": "Valenzuela",
            "email": "elementum.at.egestas@placeratvelit.net"
        },
        {
            "firstName": "Ina",
            "lastName": "Solis",
            "email": "ultrices.Duis.volutpat@noncursus.ca"
        },
        {
            "firstName": "August",
            "lastName": "Key",
            "email": "ante.iaculis@metusfacilisislorem.org"
        },
        {
            "firstName": "Signe",
            "lastName": "Dale",
            "email": "Nullam.feugiat@auctorvelit.org"
        },
        {
            "firstName": "Iola",
            "lastName": "Duncan",
            "email": "dolor.tempus.non@diam.net"
        },
        {
            "firstName": "Nigel",
            "lastName": "Carey",
            "email": "Aenean.massa@dis.edu"
        },
        {
            "firstName": "Kylynn",
            "lastName": "Holmes",
            "email": "Praesent.eu@mifelisadipiscing.com"
        },
        {
            "firstName": "Lucas",
            "lastName": "Parker",
            "email": "sodales.nisi@nuncestmollis.co.uk"
        },
        {
            "firstName": "Jermaine",
            "lastName": "Rosales",
            "email": "Quisque@Integer.ca"
        },
        {
            "firstName": "Courtney",
            "lastName": "Shepherd",
            "email": "mattis@atarcuVestibulum.edu"
        },
        {
            "firstName": "Yvonne",
            "lastName": "Beard",
            "email": "nunc@vestibulumlorem.com"
        },
        {
            "firstName": "Iliana",
            "lastName": "Mcknight",
            "email": "vehicula.risus@odio.org"
        },
        {
            "firstName": "Cullen",
            "lastName": "Blanchard",
            "email": "nibh.lacinia@loremfringillaornare.ca"
        },
        {
            "firstName": "Upton",
            "lastName": "Quinn",
            "email": "Suspendisse@aliquetProin.edu"
        },
        {
            "firstName": "Laith",
            "lastName": "Burnett",
            "email": "mauris@ligula.edu"
        },
        {
            "firstName": "Melvin",
            "lastName": "Stone",
            "email": "metus@loremfringilla.edu"
        },
        {
            "firstName": "Raya",
            "lastName": "Moon",
            "email": "arcu.imperdiet@gravidamaurisut.net"
        },
        {
            "firstName": "Leilani",
            "lastName": "Moody",
            "email": "Donec@Suspendissesed.ca"
        },
        {
            "firstName": "Xantha",
            "lastName": "Terry",
            "email": "sagittis.placerat.Cras@volutpat.edu"
        },
        {
            "firstName": "Cheryl",
            "lastName": "Blankenship",
            "email": "neque@lobortismaurisSuspendisse.co.uk"
        },
        {
            "firstName": "Irene",
            "lastName": "Carpenter",
            "email": "ante@Nullaeuneque.com"
        },
        {
            "firstName": "Josiah",
            "lastName": "Neal",
            "email": "odio.Nam.interdum@molestie.ca"
        },
        {
            "firstName": "Mohammad",
            "lastName": "Rojas",
            "email": "et@necleoMorbi.com"
        },
        {
            "firstName": "Neville",
            "lastName": "Simon",
            "email": "libero@purusDuiselementum.net"
        },
        {
            "firstName": "Sylvester",
            "lastName": "Walters",
            "email": "Aenean.gravida.nunc@fermentum.ca"
        },
        {
            "firstName": "Stacey",
            "lastName": "Hurst",
            "email": "quis.tristique.ac@ac.org"
        },
        {
            "firstName": "Ignatius",
            "lastName": "Baker",
            "email": "Aliquam@nislarcuiaculis.net"
        },
        {
            "firstName": "Justin",
            "lastName": "Espinoza",
            "email": "ut.molestie.in@mauris.edu"
        },
        {
            "firstName": "Amela",
            "lastName": "Mullins",
            "email": "lectus.ante.dictum@Craseget.com"
        },
        {
            "firstName": "Mona",
            "lastName": "Gardner",
            "email": "libero.Proin.sed@hendreritconsectetuercursus.co.uk"
        },
        {
            "firstName": "Trevor",
            "lastName": "Garrett",
            "email": "odio.tristique@vehiculaaliquet.org"
        },
        {
            "firstName": "Chadwick",
            "lastName": "Patterson",
            "email": "montes@duiCraspellentesque.co.uk"
        },
        {
            "firstName": "Berk",
            "lastName": "Franco",
            "email": "nec.cursus.a@nonquamPellentesque.edu"
        },
        {
            "firstName": "Kitra",
            "lastName": "Hayes",
            "email": "sit@magnaSedeu.net"
        },
        {
            "firstName": "Karleigh",
            "lastName": "Parks",
            "email": "Mauris.vestibulum.neque@ut.net"
        },
        {
            "firstName": "Hayes",
            "lastName": "Keller",
            "email": "arcu@velit.com"
        },
        {
            "firstName": "Chaney",
            "lastName": "Kent",
            "email": "arcu@sitametante.org"
        },
        {
            "firstName": "Quamar",
            "lastName": "Wilkerson",
            "email": "Donec.sollicitudin@anunc.ca"
        },
        {
            "firstName": "Berk",
            "lastName": "Vinson",
            "email": "cursus.diam@sedorci.edu"
        },
        {
            "firstName": "Melvin",
            "lastName": "Burton",
            "email": "mauris.aliquam.eu@arcuimperdiet.ca"
        },
        {
            "firstName": "Rosalyn",
            "lastName": "Hatfield",
            "email": "nisl.elementum.purus@tortorIntegeraliquam.com"
        },
        {
            "firstName": "Nehru",
            "lastName": "Calhoun",
            "email": "elementum.dui.quis@vitae.net"
        },
        {
            "firstName": "Jermaine",
            "lastName": "Alexander",
            "email": "elit.pretium@disparturientmontes.com"
        },
        {
            "firstName": "Lane",
            "lastName": "Pollard",
            "email": "sit@sedorcilobortis.com"
        },
        {
            "firstName": "Jasper",
            "lastName": "Bennett",
            "email": "non.sapien.molestie@sitamet.com"
        },
        {
            "firstName": "Germane",
            "lastName": "Roman",
            "email": "pede.Nunc@diamluctuslobortis.ca"
        },
        {
            "firstName": "Alfonso",
            "lastName": "Hudson",
            "email": "eu@augueeu.edu"
        },
        {
            "firstName": "Hermione",
            "lastName": "Fox",
            "email": "auctor@at.com"
        },
        {
            "firstName": "Tamara",
            "lastName": "Marshall",
            "email": "Nullam.lobortis@vehiculaaliquet.ca"
        },
        {
            "firstName": "Ayanna",
            "lastName": "Cooke",
            "email": "enim.diam.vel@ametorciUt.org"
        },
        {
            "firstName": "Troy",
            "lastName": "Powers",
            "email": "ipsum.Suspendisse.non@Duis.org"
        },
        {
            "firstName": "Matthew",
            "lastName": "Townsend",
            "email": "libero.mauris@at.edu"
        },
        {
            "firstName": "Dara",
            "lastName": "Gamble",
            "email": "vitae@blanditcongueIn.org"
        },
        {
            "firstName": "Karina",
            "lastName": "Casey",
            "email": "facilisis@scelerisquemollis.edu"
        },
        {
            "firstName": "Gavin",
            "lastName": "Leonard",
            "email": "diam.luctus@nisi.com"
        },
        {
            "firstName": "Jamal",
            "lastName": "Rose",
            "email": "pellentesque.Sed@eleifendnecmalesuada.edu"
        },
        {
            "firstName": "Theodore",
            "lastName": "Wynn",
            "email": "ut@massa.com"
        },
        {
            "firstName": "Cleo",
            "lastName": "Chase",
            "email": "In.condimentum.Donec@accumsan.com"
        },
        {
            "firstName": "Miranda",
            "lastName": "Watkins",
            "email": "a.malesuada@adipiscingenim.com"
        },
        {
            "firstName": "Paula",
            "lastName": "Hayden",
            "email": "mi.pede@sagittis.com"
        },
        {
            "firstName": "Tanner",
            "lastName": "Fry",
            "email": "fringilla.mi@quam.co.uk"
        },
        {
            "firstName": "Maggy",
            "lastName": "Briggs",
            "email": "Donec@velit.ca"
        },
        {
            "firstName": "Leonard",
            "lastName": "Sweeney",
            "email": "nostra.per.inceptos@rhoncusProinnisl.com"
        },
        {
            "firstName": "Fay",
            "lastName": "Burton",
            "email": "diam.Pellentesque@etpede.com"
        },
        {
            "firstName": "Nyssa",
            "lastName": "Clements",
            "email": "non.massa@etnetus.org"
        },
        {
            "firstName": "Richard",
            "lastName": "Preston",
            "email": "neque.sed@sapiencursusin.com"
        },
        {
            "firstName": "Blossom",
            "lastName": "Mayo",
            "email": "velit.in.aliquet@orciconsectetuer.co.uk"
        },
        {
            "firstName": "Erasmus",
            "lastName": "Warren",
            "email": "pretium@ut.net"
        },
        {
            "firstName": "Lester",
            "lastName": "Stafford",
            "email": "feugiat.nec.diam@nibh.co.uk"
        },
        {
            "firstName": "Kennedy",
            "lastName": "Mcintyre",
            "email": "Nullam.velit@nequepellentesque.net"
        },
        {
            "firstName": "Chancellor",
            "lastName": "Ewing",
            "email": "pharetra@egestasblanditNam.co.uk"
        },
        {
            "firstName": "Felix",
            "lastName": "Marshall",
            "email": "metus.urna.convallis@intempus.com"
        },
        {
            "firstName": "Lavinia",
            "lastName": "Ayers",
            "email": "aliquet.vel.vulputate@convallisincursus.org"
        },
        {
            "firstName": "Vincent",
            "lastName": "Hatfield",
            "email": "sit.amet@duiSuspendisseac.net"
        },
        {
            "firstName": "Fuller",
            "lastName": "Holman",
            "email": "sit.amet@faucibusidlibero.net"
        },
        {
            "firstName": "Kyra",
            "lastName": "Kelley",
            "email": "a.ultricies.adipiscing@velit.ca"
        },
        {
            "firstName": "Lacey",
            "lastName": "Webb",
            "email": "a.enim.Suspendisse@Etiambibendumfermentum.com"
        },
        {
            "firstName": "Steven",
            "lastName": "Larsen",
            "email": "mauris.a.nunc@euligulaAenean.com"
        },
        {
            "firstName": "Tucker",
            "lastName": "Webb",
            "email": "lorem@orciconsectetuer.net"
        },
        {
            "firstName": "Benjamin",
            "lastName": "George",
            "email": "Donec.tempus@Aliquamrutrumlorem.ca"
        },
        {
            "firstName": "Sybill",
            "lastName": "Brady",
            "email": "non@Etiam.ca"
        },
        {
            "firstName": "Alfonso",
            "lastName": "Horn",
            "email": "amet.luctus.vulputate@pretiumnequeMorbi.net"
        },
        {
            "firstName": "Sylvia",
            "lastName": "Vargas",
            "email": "fringilla@magnaSedeu.edu"
        },
        {
            "firstName": "Dennis",
            "lastName": "Sawyer",
            "email": "Nullam.lobortis.quam@vitae.edu"
        },
        {
            "firstName": "Yoshi",
            "lastName": "Petersen",
            "email": "nulla.magna@antebibendumullamcorper.com"
        },
        {
            "firstName": "Sonia",
            "lastName": "Hayes",
            "email": "et.commodo.at@ultriciesornareelit.net"
        }
    ]

})
