
    var CATS = ['litter','drinking','feeding','grooming'];
    var CAT_ICONS = {
      litter:'<circle cx="20" cy="17" r="11"/><circle cx="20" cy="18" r="5"/><path d="M6 30h28"/>',
      drinking:'<path d="M20 5C26 13 26 20 20 20C14 20 14 13 20 5Z"/><path d="M7 28c4-3 8-3 12 0s8 3 13 0"/>',
      feeding:'<path d="M13 7h14v11l-3 5h-8l-3-5z"/><ellipse cx="20" cy="30" rx="10" ry="3"/>',
      grooming:'<rect x="16" y="9" width="8" height="20" rx="4"/><path d="M18 9V5h4v4"/><circle cx="20" cy="24" r="1.4"/>',
      dog:'<circle cx="13" cy="13" r="3"/><circle cx="27" cy="13" r="3"/><circle cx="8" cy="21" r="3"/><circle cx="32" cy="21" r="3"/><path d="M20 20c-4 0-8 3-8 7 0 3 3 4 8 4s8-1 8-4c0-4-4-7-8-7z"/>'
    };
    var CAT_TAGLINES = { litter:1, drinking:1, feeding:1, grooming:1 };
    // name/desc kétnyelvű (hu/en). A fizetéskor az árat a szerver a saját katalógusából ellenőrzi.
    var PRODUCTS = [
      {id:'fg-litter-smart', slug:'ontisztito-macska-wc', featured:true, cat:'litter', badge:'badge_popular', eur:'329', usd:'378.99', huf:119900,
        imgs:{'hu':['fg-litter-smart-hu-1.jpg','fg-litter-smart-hu-2.jpg','fg-litter-smart-hu-3.jpg','fg-litter-smart-hu-4.jpg'],
              'en':['fg-litter-smart-hu-1.jpg','fg-litter-smart-hu-2.jpg','fg-litter-smart-hu-3.jpg','fg-litter-smart-en-1.jpg']},
        hu:{name:'Automata öntisztító macska-WC', desc:'Búcsút inthetsz a lapátnak és a rossz szagoknak. Amint a cica kilép, a gép csendben átszitálja az almot, a piszkot pedig egy zárt fiókba tolja, ionos szagtalanítással. És nem, nem csípi be: érzékelők állítják le a forgást, mielőtt bármi történne. A 9 literes fiók két hétig is bírja, a telefonodra szól, ha üríteni kell, és azt is elárulja, hányszor járt bent a cicád. Készülj: többször, mint gondolnád. 48×52×51 cm, fél évesnél idősebb macskáknak.'},
        en:{name:'Automatic Self-Cleaning Litter Box', desc:'Say goodbye to the scoop and to the smell. The moment your cat steps out, it quietly sifts the litter and pushes the mess into a sealed drawer, with ionic deodorising. And no, it can’t pinch: sensors stop the drum before anything happens. The 9-litre drawer lasts up to two weeks, your phone tells you when to empty it, and it also reveals how often your cat pops in. Brace yourself: it’s more than you think. 48×52×51 cm, for cats over six months.'}},

      {id:'fg-fountain-sensor', slug:'vezetek-nelkuli-itatokut', cat:'drinking', badge:'badge_new', eur:'73.90', usd:'92.99', huf:28990,
        prices:{plast:{eur:'73.90', usd:'92.99',huf:28990}, steel:{eur:'78.90', usd:'98.99',huf:30990}},
        imgs:{'all':['fg-fountain-sensor-white-1.jpg','fg-fountain-sensor-white-2.jpg','fg-fountain-sensor-white-3.jpg']},
        opt2:{hu:'Tálca',en:'Tray',vals:[{k:'plast',hu:'Műanyag tálca, 12 szűrővel',en:'Plastic tray, 12 filters'},{k:'steel',hu:'Rozsdamentes acél tálca, 12 szűrővel',en:'Stainless steel tray, 12 filters'}]},
        hu:{name:'Vezeték nélküli itatókút', desc:'Sok kedvenc azért iszik keveset, mert az álló víz egyszerűen nem izgatja. Ez a kút akkor indítja a keringetést, amikor a kedvenced a tálhoz lép: friss, mozgó vizet kap, kábel nélkül. Nincs vezeték, amit megrágjon, és a kút ott állhat, ahol ő szeret inni, nem ott, ahol a konnektor van. A tálca kivehető és mosható, a csomagban 12 cserélhető szűrőbetét van, bő egy évre elég. Kb. 32×18×18 cm.'},
        en:{name:'Cordless Water Fountain', desc:'A lot of pets drink too little simply because still water is boring. This fountain starts circulating the moment your pet walks up: fresh, moving water, with no cable at all. Nothing to chew on, and it can stand where your pet likes to drink, not where the socket happens to be. The tray is removable and washable, and 12 replacement filters are included, enough for a good year. Approx. 32×18×18 cm.'}},

      {id:'fg-bottle-travel', slug:'hordozhato-itatopalack', cat:'drinking', badge:'badge_new', eur:'20.90', usd:'25.99', huf:7990,
        imgs:{'pink|printed':['fg-bottle-travel-img-1.jpg','fg-bottle-travel-img-2.jpg','fg-bottle-travel-img-3.jpg'],
              'pink|plain':['fg-bottle-travel-img-4.jpg','fg-bottle-travel-img-5.jpg'],
              'blue|printed':['fg-bottle-travel-img-6.jpg','fg-bottle-travel-img-7.jpg'],
              'blue|plain':['fg-bottle-travel-img-8.jpg','fg-bottle-travel-img-9.jpg','fg-bottle-travel-img-10.jpg']},
        opt1:{hu:'Szín',en:'Colour',vals:[{k:'pink',hu:'Rózsaszín',en:'Soft mist pink'},{k:'blue',hu:'Kék',en:'Tiffany blue'}]},
        opt2:{hu:'Kivitel',en:'Style',vals:[{k:'printed',hu:'Mintás',en:'Printed'},{k:'plain',hu:'Sima',en:'Unprinted'}]},
        hu:{name:'Hordozható itatópalack sétához', desc:'Ismerős a pillanat, amikor a kedvenced lihegve néz rád a park közepén, és nincs nálad víz? Pont ezért van ez a palack: egy mozdulattal kinyitod, iszik belőle, a maradékot visszatöltöd. Egy csepp sem megy kárba, és a táskád sem lesz vizes. Sétához, túrához, autóúthoz, állatorvosi várakozáshoz. 285 ml, szivárgásmentes, csuklópánttal és kakizacskó-tartóval. Kék és rózsaszín színben.'},
        en:{name:'Portable Travel Water Bottle', desc:'You know the moment: your pet looks up at you panting in the middle of the park and you have no water. That’s exactly what this bottle is for. Flip it open, let them drink, pour the rest back. Not a drop wasted and your bag stays dry. Good for walks, hikes, car trips and waiting rooms. 285 ml, leak-proof, with a wrist strap and a waste-bag holder. In blue or pink.'}},

      {id:'fg-feeder-hicap', slug:'gravitacios-eteto-itato', cat:'feeding', eur:'55.90', usd:'69.99', huf:21990,
        prices:{steel:{eur:'55.90', usd:'69.99',huf:21990}, cer:{eur:'58.90', usd:'73.99',huf:22990}},
        imgs:{'green|steel':['fg-feeder-hicap-img-1.jpg'],
              'blue|steel':['fg-feeder-hicap-img-2.jpg'],
              'brown|steel':['fg-feeder-hicap-img-3.jpg'],
              'green|cer':['fg-feeder-hicap-img-4.jpg'],
              'blue|cer':['fg-feeder-hicap-img-5.jpg'],
              'brown|cer':['fg-feeder-hicap-img-6.jpg'],
              'info':['fg-feeder-hicap-info-1.jpg','fg-feeder-hicap-info-2.jpg','fg-feeder-hicap-info-3.jpg','fg-feeder-hicap-info-4.jpg','fg-feeder-hicap-info-5.jpg']},
        opt1:{hu:'Szín',en:'Colour',vals:[{k:'green',hu:'Zöld',en:'Grass green'},{k:'blue',hu:'Kék',en:'Haze blue'},{k:'brown',hu:'Barna',en:'Kaki brown'}]},
        opt2:{hu:'Tál',en:'Bowl',vals:[{k:'steel',hu:'Rozsdamentes acél',en:'Stainless steel'},{k:'cer',hu:'Kerámia',en:'Ceramic'}]},
        hu:{name:'2 az 1-ben gravitációs etető és itató', desc:'Egy hétvégi elutazás ettől már nem logisztikai dráma. Ahogy fogy a táp és a víz, a gravitáció magától utántölti. Egy töltés nagyjából tíz napra elég. A száraz és a nedves oldal külön van, így a táp nem ázik szét, a megemelt perem pedig felfogja azt, amit a kedvenced kifröcsköl. Rozsdamentes acél vagy kerámia tál, teljesen szétszedhető, mosogatógépbe mehet, szűrő van a víztartályban. 27,5×27,5×25,5 cm.'},
        en:{name:'2-in-1 Gravity Feeder & Water Dispenser', desc:'A weekend away stops being a logistics problem. As the food and water go down, gravity tops them up. One fill lasts about ten days. The dry and wet sides are fully separated so the kibble never goes soggy, and the raised rim catches whatever gets splashed. Stainless steel or ceramic bowl, fully dismountable, dishwasher safe, with a filter in the water tank. 27.5×27.5×25.5 cm.'}},
      {id:'fg-feeder-6l', slug:'okos-automata-eteto-6l', cat:'feeding', badge:'badge_popular', eur:'93.90', usd:'117.99', huf:36990,
        prices:{key:{eur:'93.90', usd:'117.99',huf:36990}, app:{eur:'101.90', usd:'127.99',huf:39990}, cam:{eur:'129.90', usd:'162.99',huf:50990}},
        imgs:{'all':['fg-feeder-6l-all-1.jpg','fg-feeder-6l-all-2.jpg','fg-feeder-6l-all-3.jpg','fg-feeder-6l-all-4.jpg','fg-feeder-6l-all-5.jpg','fg-feeder-6l-all-6.jpg','fg-feeder-6l-all-7.jpg']},
        opt2:{hu:'Kivitel',en:'Version',vals:[{k:'key',hu:'Gombos, WiFi nélkül',en:'Key version, no WiFi'},{k:'app',hu:'Wi-Fi + app vezérlés',en:'Wi-Fi + app control'},{k:'cam',hu:'Wi-Fi + kamera',en:'Wi-Fi + camera'}]},
        hu:{name:'6 literes okos etető hangüzenettel', desc:'Felveszed a saját hangodat, és etetéskor az szólal meg, a kedvenced pedig úgy rohan a táljához, mintha épp hazaértél volna. Napi tíz adagig időzíthető, adagonként pontosan kimért mennyiséggel, 6 literes tartállyal. A tartály és a tál kivehető, mosható, BPA-mentes, a nedvszívó tasak pedig szárazon tartja a tápot. Hálózatról és elemről is megy, tehát egy áramszünet nem borítja fel a vacsorát. 32×21×19 cm, EU-dugó.'},
        en:{name:'6 L Smart Feeder with Voice Recorder', desc:'Record your own voice and it plays at feeding time, and your pet comes running as if you had just walked in. Up to ten precisely measured meals a day from a 6-litre hopper. Tank and bowl come out for washing, BPA-free, and the four desiccant bags keep the food dry. Runs on mains or batteries, so a power cut never skips dinner. 32×21×19 cm, EU plug.'}},
      {id:'fg-bowl-antiant', slug:'ferde-szaju-tal', cat:'feeding', eur:'12.90', usd:'15.99', huf:4990,
        prices:{single:{eur:'12.90', usd:'15.99',huf:4990}, steel:{eur:'17.90', usd:'22.99',huf:6990}},
        imgs:{'narancs':['fg-bowl-antiant-narancs-acel.jpg'],
              'sarga':['fg-bowl-antiant-sarga-acel.jpg'],
              'zold':['fg-bowl-antiant-zold-acel.jpg'],
              'kek':['fg-bowl-antiant-kek-acel.jpg'],
              'single':['fg-bowl-antiant-sima.jpg'],
              'egyeb':['fg-bowl-antiant-szinek-acel.jpg','fg-bowl-antiant-kutya.jpg'],
              'meret|hu':['fg-bowl-antiant-meret-hu.jpg'],
              'meret|en':['fg-bowl-antiant-meret-en.jpg']},
        opt1:{hu:'Szín',en:'Colour',vals:[{k:'narancs',hu:'Narancs',en:'Orange'},{k:'sarga',hu:'Sárga',en:'Yellow'},{k:'zold',hu:'Zöld',en:'Green'},{k:'kek',hu:'Kék',en:'Blue'}]},
        opt2:{hu:'Kivitel',en:'Style',vals:[{k:'single',hu:'Belső tál nélkül',en:'No inner bowl'},{k:'steel',hu:'Rozsdamentes acél betéttel',en:'With stainless steel bowl'}]},
        hu:{name:'Ferde szájú tál', desc:'A megdöntött tál miatt a kedvencednek nem kell mélyen a táljába hajolnia. Kényelmesebb neki enni, és nem tolja maga előtt az utolsó falatokat a tál alján. A széles perem felfogja a kiszórt tápot és a kifröccsent vizet, a súlyozott talp pedig akkor sem borul fel, ha a kedvenced nagyon lelkes. Kérheted belső tál nélkül vagy kivehető rozsdamentes acél belsővel. Az acél rágásbiztos, higiénikus, mosogatógépbe mehet. Tál 13 cm, teljes szélesség 21,8 cm, magasság 8,6 cm. Négy színben.'},
        en:{name:'Oblique Mouth Pet Bowl', desc:'The tilted bowl means your pet never has to dip deep into it. More comfortable to eat from, and no pushing the last few bites around the bottom. The wide rim catches scattered food and splashed water, and the weighted base won’t tip however enthusiastic they get. Choose it with no inner bowl, or with a removable stainless steel liner that is chew-proof, hygienic and dishwasher safe. Bowl 13 cm, total width 21.8 cm, height 8.6 cm. Four colours.'}},

      {id:'fg-nail-grinder', slug:'elektromos-koromreszelo', cat:'grooming', ar:'7/10', eur:'32.90', usd:'41.99', huf:12990,
        imgs:{'hu':['fg-nail-grinder-hu-3.jpg','fg-nail-grinder-hu-5.jpg','fg-nail-grinder-hu-6.jpg','fg-nail-grinder-hu-4.jpg','fg-nail-grinder-hu-9.jpg'],
              'en':['fg-nail-grinder-en-1.jpg','fg-nail-grinder-en-3.jpg','fg-nail-grinder-en-4.jpg','fg-nail-grinder-en-2.jpg','fg-nail-grinder-en-7.jpg']},
        hu:{name:'LED-es elektromos körömreszelő', desc:'A körömvágásnál az a legnehezebb, hogy nem látod, hol kezdődik az élő rész. Ezért csinálja a legtöbb gazdi félve, vagy sehogy. Itt a kettős LED átvilágítja a körmöt, tehát pontosan látod, meddig mehetsz. Halk, 40 dB alatti, és alig rezeg, ezért a legtöbb kedvenc végigüli. Két sebességfokozat, külön kapcsolható lámpa, USB-ről tölthető: töltés közben piros, késznél zöld. Kis és nagy testű kutyához, cicához egyaránt. 283 g.'},
        en:{name:'LED Electric Pet Nail Grinder', desc:'The hard part about trimming nails is that you can’t see where the quick begins. That is why most owners do it nervously, or not at all. Here a dual LED shines through the nail, so you can see exactly how far to go. It is quiet, under 40 dB, and barely vibrates, so most pets sit through it. Two speeds, a separately switchable light, USB rechargeable: red while charging, green when done. For small and large dogs and for cats. 283 g.'}},

      {id:'fg-nail-trim', slug:'led-karomvago', cat:'grooming', eur:'15.90', usd:'19.99', huf:5990,
        imgs:{'peach':['fg-nail-trim-peach-1.jpg','fg-nail-trim-peach-2.jpg'],
              'coffee':['fg-nail-trim-coffee-1.jpg','fg-nail-trim-coffee-2.jpg'],
              'blue':['fg-nail-trim-blue-1.jpg','fg-nail-trim-blue-2.jpg']},
        opt1:{hu:'Szín',en:'Colour',vals:[{k:'peach',hu:'Barackrózsaszín',en:'Peach pink'},{k:'coffee',hu:'Bézs',en:'Light coffee'},{k:'blue',hu:'Világoskék',en:'Light blue'}]},
        hu:{name:'LED-es karomvágó biztonsági védővel', desc:'Ugyanaz a nyugalom, csak áram nélkül. A LED átvilágítja a karmot, így látod, hol kezdődik az élő rész, a biztonsági védő pedig fizikailag megakadályozza, hogy túl mélyre vágj, akkor is, ha a kedvenced pont abban a pillanatban rándul egyet. Használat után a retesz lezárja a pengét, tehát a fiókban sem lesz baleset. Rozsdamentes acél penge, csúszásmentes nyél, 133×50×25 mm. Cicáknak és kis vagy közepes testű kutyáknak, gombelemmel.'},
        en:{name:'LED Nail Clipper with Safety Guard', desc:'Same peace of mind, no charging. The LED shines through the claw so you can see where the quick begins, and the safety guard physically stops you cutting too deep, even if your pet twitches at exactly the wrong moment. A lock closes the blade after use, so there are no accidents in the drawer either. Stainless steel blade, non-slip handle, 133×50×25 mm. For cats and small or medium dogs, button battery included.'}},
      
    ];
    var I18N = {
      hu:{ skip_link:"Ugrás a termékekhez", cur_label:"Pénznem", nav_products:"Termékek",nav_about:"Rólunk",nav_contact:"Kapcsolat",cart:"Kosár",
        ab_kicker:"Rólunk",
        ab_pos:"főnév",
        ab_lead:"Védett hely, ahol semmiért nem kell megküzdeni. Egy állat akkor van igazán otthon, ha nem kell figyelnie, sem a tálra, sem az ajtóra, sem a többiekre. Ez a nyugalom apró, jól megcsinált dolgokon múlik: friss vízen, pontos adagon, tiszta almon. A Hima ezekért van.",
        ab_c1_t:"Itthon vagyunk",
        ab_c1_d:"Budapesti kis csapat. Aki a boltot csinálja, az válaszol az e-mailekre, ugyanaz a néhány ember.",
        ab_c2_t:"Amit beveszünk, azt ismerjük",
        ab_c2_d:"Minden darabot a kezünkben forgattunk meg, mielőtt felkerült ide. Ami nem győzött meg, az ki sem került a boltba.",
        ab_c3_t:"Ha elakadsz, szólj",
        ab_c3_d:"Nem call-center vesz fel, hanem mi. Írj bármikor: rendelés, szállítás, csere, vagy csak egy kérdés, hogy melyik való a te kedvencednek.",
        ab_c4_t:"Ha mégsem jött be",
        ab_c4_d:"14 napon belül visszaküldheted, és nem kérdezünk vissza: a visszaküldés díját is mi álljuk. A garancia és a csere ugyanígy megy: egy e-mail, és mi intézzük a többit.",
        ab_family:"Családi vállalkozás, Budapestről.",
        ab_hours:"Hétköznap 9 és 17 óra között",
        hero_l1:"Védett hely,",
        hero_l2:"ahol semmiért",
        hero_l3:"nem kell",
        hero_l4:"megküzdeni.",
        hero_sub:"Prémium okos kisállatkellékek kutyáknak és cicáknak.",
        foot_slogan_a:"Creature",foot_slogan_b:"Comforts",
        hero_h1a:"Creature",hero_h1b:"Comforts",
        
        hero_cta1:"Irány a bolt",
        tr2_t:"Okos megoldások",tr2_d:"Technológia a kényelmesebb mindennapokért.",
        tr3_t:"Gondoskodás",tr3_d:"A kis kedvencek jóléte az első.",
        shop_kicker:"A kínálat",shop_h2:"Okos kütyük okos cicáknak és kutyáknak",
        price_disclaimer:"* Az árak tartalmazzák az áfát. A szállítási díj a pénztárnál látszik. Fizetés bankkártyával, Apple Pay-jel vagy Google Pay-jel, biztonságos Stripe-pénztárban.",
        gpsr_t:"Termékbiztonság (GPSR)",
        gpsr_p:"EU-felelős / importőr: Keystone Dynamics Kft., 1136 Budapest, Pannónia utca 19. 1. em. 4., info@himapets.com. A gyártói adatok és a biztonsági tájékoztató a termékhez mellékelve, illetve a termékleírásban találhatók. Részletek az ÁSZF-ben.",
        cat_litter:"Macska-WC",cat_drinking:"Itatás",cat_feeding:"Etetés",cat_grooming:"Karomápolás",
        cattag_litter:"Kevesebb lapátolás. <em>Több dorombolás.</em>",cattag_drinking:"Friss víz. <em>Egész nap.</em>",cattag_feeding:"Pontos adag. <em>Bármikor.</em>",cattag_grooming:"Karomvágás. <em>Dráma nélkül.</em>",
        add_to_cart:"Kosárba",ph_photo:"Fotó helye",more:"Tovább",less:"Kevesebb",details:"Részletek",
        badge_popular:"Sláger",badge_new:"Új",badge_premium:"Prémium",
        foot_tag:"Okos kisállatkellékek cicáknak és kutyáknak.",
        foot_company_intro:"A Hima üzemeltetője:",foot_ceo:"Ügyvezető",
        foot_shop:"Bolt",foot_legal:"Jogi",foot_impressum:"Impresszum",foot_terms:"ÁSZF",foot_withdrawal:"Elállási tájékoztató",foot_privacy:"Adatkezelési tájékoztató",foot_versand:"Szállítás & fizetés",foot_cookie:"Cookie-beállítások",
        foot_vat:"Az árak tartalmazzák az áfát, a szállítási díj nélkül.",contact_cta:"Írj nekünk",
        cookie_title:"Cookie-k & hozzájárulás",cookie_text:"A bolt működéséhez szükséges cookie-kat használunk. A hozzájárulásoddal Google-cookie-kat is használunk hirdetéshez és méréshez. Ezt bármikor módosíthatod.",cookie_more:"Adatkezelési tájékoztató",cookie_accept:"Összes elfogadása",cookie_necessary:"Csak a szükségesek" },
      en:{ skip_link:"Skip to products", cur_label:"Currency", nav_products:"Products",nav_about:"About",nav_contact:"Contact",cart:"Cart",
        ab_kicker:"About us",
        ab_pos:"noun",
        ab_lead:"A sheltered place, where nothing has to be fought for. An animal is truly at home when it no longer has to keep watch, not on the bowl, not on the door, not on the others. That kind of calm rests on small, well-made things: fresh water, the right portion, clean litter. This is what Hima is for.",
        ab_c1_t:"We\u2019re right here",
        ab_c1_d:"A small team in Budapest. The people who run the shop are the ones who answer your e-mail.",
        ab_c2_t:"We know what we sell",
        ab_c2_d:"We have handled every item ourselves before it went up here. Whatever didn’t convince us never made it into the shop.",
        ab_c3_t:"If you get stuck, tell us",
        ab_c3_d:"No call centre picks up, we do. Write any time: orders, delivery, swaps, or just which one suits your pet.",
        ab_c4_t:"If it isn\u2019t right",
        ab_c4_d:"Send it back within 14 days, no questions asked, and we cover the return shipping too. Warranty and swaps work the same way: one e-mail and we handle the rest.",
        ab_family:"A family business, from Budapest.",
        ab_hours:"Weekdays 9am to 5pm",
        hero_l1:"A sheltered place,",
        hero_l2:"where nothing",
        hero_l3:"has to be",
        hero_l4:"fought for.",
        hero_sub:"Premium smart pet gear for dogs and cats.",
        foot_slogan_a:"Creature",foot_slogan_b:"Comforts",
        hero_h1a:"Creature",hero_h1b:"Comforts",
        
        hero_cta1:"Shop the goods",
        tr2_t:"Smart solutions",tr2_d:"Technology for easier everyday care.",
        tr3_t:"Real care",tr3_d:"Your pet's wellbeing comes first.",
        shop_kicker:"The goods",shop_h2:"Smart gear for smart cats and dogs",
        price_disclaimer:"* Prices include VAT. Shipping is shown at checkout. Pay by card, Apple Pay or Google Pay in a secure Stripe checkout.",
        gpsr_t:"Product safety (GPSR)",
        gpsr_p:"EU responsible person / importer: Keystone Dynamics Kft., 1136 Budapest, Pannónia utca 19. 1. em. 4., info@himapets.com. Manufacturer information and safety notices are included with the product or stated in the description. See our Terms.",
        cat_litter:"Litter",cat_drinking:"Drinking",cat_feeding:"Feeding",cat_grooming:"Nail care",
        cattag_litter:"Less scooping. <em>More purring.</em>",cattag_drinking:"Fresh water. <em>All day.</em>",cattag_feeding:"Right portion. <em>Anytime.</em>",cattag_grooming:"Nail trims. <em>Without the drama.</em>",
        add_to_cart:"Add to cart",ph_photo:"Photo here",more:"More",less:"Less",details:"Details",
        badge_popular:"Bestseller",badge_new:"New",badge_premium:"Premium",
        foot_tag:"Smart pet gear for cats and dogs.",
        foot_company_intro:"Hima is operated by:",foot_ceo:"Managing director",
        foot_shop:"Shop",foot_legal:"Legal",foot_impressum:"Imprint",foot_terms:"Terms",foot_withdrawal:"Right of withdrawal",foot_privacy:"Privacy policy",foot_versand:"Shipping & payment",foot_cookie:"Cookie settings",
        foot_vat:"Prices incl. VAT, plus shipping.",contact_cta:"Contact",
        cookie_title:"Cookies & consent",cookie_text:"We use necessary cookies to run the shop. With your consent we also use Google cookies for advertising and measurement. You can change this anytime.",cookie_more:"Privacy policy",cookie_accept:"Accept all",cookie_necessary:"Only necessary" }
    };
    var currentLang = 'hu';
    var currentCur = 'huf';   // 'huf' | 'eur'
    var curPinned = false;    // igaz, ha a vásárló maga választott pénznemet
    function pf(p,f){ return (p[currentLang] && p[currentLang][f]) || (p.hu && p.hu[f]) || ''; }
    function money(p){ if(currentCur==='huf'){ return String(p.huf).replace(/\B(?=(\d{3})+(?!\d))/g,'&nbsp;')+'&nbsp;Ft'; }
      if(currentCur==='usd'){ return '$'+p.usd; } return '\u20AC'+p.eur; }
    function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
    function svgIcon(cat, cls){ return '<svg class="'+cls+'" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+CAT_ICONS[cat]+'</svg>'; }
    function cartSvg(){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>'; }
    /* egy termékkártya teljes HTML-je – a főoldal rácsa és a termékoldal vásárlódoboza (mode==='pp') is ezt használja */
    function cardHtml(p, mode){
      var PP = (mode==='pp');
      var name=pf(p,'name'), desc=pf(p,'desc'), vatLabel=I18N[currentLang].foot_vat;
      var badge=p.badge?'<span class="badge" data-i18n="'+p.badge+'"></span>':'';
      var select='', custom='', media='';
      function selHtml(o,idx){
        if(!o) return '';
        var lbl=(currentLang==='en'?o.en:o.hu);
        var opts=o.vals.map(function(v){return '<option value="'+esc(v.k)+'">'+esc(currentLang==='en'?v.en:v.hu)+'</option>';}).join('');
        return '<div><label>'+esc(lbl)+'</label><select class="card-select opt'+idx+'" data-for="'+p.id+'" aria-label="'+esc(lbl)+'">'+opts+'</select></div>';
      }
      if(p.opt1||p.opt2){ select='<div class="opt-row">'+selHtml(p.opt1,1)+selHtml(p.opt2,2)+'</div>'; }
      if(p.opt1){ custom+=' data-item-custom1-name="'+esc(p.opt1.hu)+'" data-item-custom1-options="'+esc(p.opt1.vals.map(function(v){return v.hu;}).join('|'))+'" data-item-custom1-value="'+esc(p.opt1.vals[0].hu)+'"'; }
      if(p.opt2){ custom+=' data-item-custom2-name="'+esc(p.opt2.hu)+'" data-item-custom2-options="'+esc(p.opt2.vals.map(function(v){return v.hu;}).join('|'))+'" data-item-custom2-value="'+esc(p.opt2.vals[0].hu)+'"'; }
      var href=p.slug?p.slug+'.html':'#shop', link=!!(p.slug&&!PP);
      if(p.imgs){
        var fi=flatImgs(p);
        var firstKey=galKeyOf(p, p.opt1?p.opt1.vals[0].k:'', p.opt2?p.opt2.vals[0].k:'');
        var start=fi.starts[firstKey]||0;
        var list=fi.list;
        var thumbs=list.map(function(s,i){return '<button type="button" class="'+(i===start?'on':'')+'" data-gal="'+p.id+'" data-i="'+i+'" aria-label="'+esc(name)+', '+(i+1)+'. kép"><img src="'+s+'" alt="" loading="lazy" decoding="async" width="120" height="120"></button>';}).join('');
        var mainImg='<img id="gal-'+p.id+'" src="'+list[start]+'" alt="'+esc(name)+'" loading="'+(PP?'eager':'lazy')+'" decoding="async" width="600" height="600">';
        media='<div class="card-media"><div class="card-gal"'+(p.ar?' style="aspect-ratio:'+p.ar+'"':'')+'>'+(link?'<a class="card-gal-link" href="'+href+'" aria-label="'+esc(name)+'">'+mainImg+'</a>':mainImg)+'</div><div class="gal-thumbs" id="th-'+p.id+'"'+(list.length>1?'':' style="display:none"')+'>'+thumbs+'</div></div>';
      } else {
        media='<div class="card-media"><div class="card-img">'+badge+svgIcon(p.cat,'ic')+'</div></div>';
      }
      var nameHtml=link?'<a class="card-name-link" href="'+href+'">'+esc(name)+'</a>':esc(name);
      var more=link?'<a class="card-more" href="'+href+'"><span data-i18n="details"></span> &rarr;</a>':'';
      var pr0=p.prices?p.prices[p.opt2.vals[0].k]:p;
      return '<div class="card'+((p.featured||PP)?' featured':'')+(PP?' pp-card':'')+'" data-pid="'+p.id+'">'+media+'<div class="card-body"><div class="card-name">'+nameHtml+'</div><div class="card-desc" id="d-'+p.id+'">'+esc(desc)+'</div><button type="button" class="desc-more" data-desc="'+p.id+'"></button>'+more+select+'<div class="card-foot"><span class="card-price" id="pr-'+p.id+'">'+money(pr0)+'<span class="card-vat">'+vatLabel+'</span></span><button class="card-add" id="add-'+p.id+'" data-item-id="'+(p.prices?p.id+'-'+p.opt2.vals[0].k:p.id)+'" data-item-name="'+esc(p.hu.name)+'" data-item-price="{&quot;eur&quot;:&quot;'+pr0.eur+'&quot;,&quot;huf&quot;:&quot;'+pr0.huf+'&quot;,&quot;usd&quot;:&quot;'+pr0.usd+'&quot;}" data-item-url="/'+(p.slug?p.slug+'.html':'')+'" data-item-description="'+esc(p.hu.desc)+'"'+custom+'>'+cartSvg()+'<span data-i18n="add_to_cart"></span></button></div></div></div>';
    }
    function renderShop(){
      var nav=document.getElementById('catNav'), grid=document.getElementById('shopGrid'); var navHtml='', gridHtml='';
      if(!nav||!grid){ if(typeof window.ppRender==='function') window.ppRender(); return; }
      CATS.forEach(function(cat){
        var items=PRODUCTS.filter(function(p){return p.cat===cat;}); if(!items.length) return;
        navHtml+='<a class="chip" href="#cat-'+cat+'" data-i18n="cat_'+cat+'"></a>'; var cards='';
        items.forEach(function(p){ cards+=cardHtml(p); });
        var tag = CAT_TAGLINES[cat] ? '<p class="cat-tag" data-i18n="cattag_'+cat+'"></p>' : '';
        gridHtml+='<section class="cat-section" id="cat-'+cat+'"><h3 class="cat-title"><span class="badge-ic">'+svgIcon(cat,'ic')+'</span><span data-i18n="cat_'+cat+'"></span></h3>'+tag+'<div class="grid'+(items.length===2?' two':'')+'">'+cards+'</div></section>';
      });
      nav.innerHTML=navHtml; grid.innerHTML=gridHtml;
    }
    function applyI18n(){
      var dict=I18N[currentLang]; if(!dict) return;
      var nodes=document.querySelectorAll('[data-i18n]');
      for(var i=0;i<nodes.length;i++){ var k=nodes[i].getAttribute('data-i18n'); if(dict[k]!=null){ if(k.indexOf('cattag_')===0) nodes[i].innerHTML=dict[k]; else nodes[i].textContent=dict[k]; } }
    }
    function syncCurrency(){ /* a pénznemet a saját kosár és a pénztár kérése viszi tovább */ }
    function setLang(lang){
      if(!I18N[lang]) return; currentLang=lang; document.documentElement.lang=lang;
      if(!curPinned){ currentCur = (lang==='hu'?'huf':'eur'); markCur(); }
      renderShop(); applyI18n(); syncCurrency(); if(typeof syncMore==='function') setTimeout(syncMore,0);
      var lk=document.querySelectorAll('[data-hu][data-en]');
      for(var q=0;q<lk.length;q++){ lk[q].setAttribute('href', lk[q].getAttribute('data-'+lang)); }
      var btns=document.querySelectorAll('.lang-btn');
      for(var j=0;j<btns.length;j++){ btns[j].classList.toggle('active', btns[j].getAttribute('data-lang')===lang); }
    }
    function markCur(){
      var cb=document.querySelectorAll('[data-cur]');
      for(var i=0;i<cb.length;i++){ cb[i].classList.toggle('active', cb[i].getAttribute('data-cur')===currentCur); }
    }
    function setCur(c){
      if(['huf','eur'].indexOf(c)<0) return;
      currentCur=c; curPinned=true; markCur(); renderShop(); applyI18n(); syncCurrency();
      if(typeof syncMore==='function') setTimeout(syncMore,0);
    }
    setLang('hu');
    function galKeyOf(p, v1, v2){
      if(!p.imgs) return null;
      var L=currentLang, c=[];
      if(v1&&v2) c.push(v1+'|'+v2+'|'+L, v1+'|'+v2);
      /* kivitelre szóló közös kép (pl. „belső tál nélkül”): ha nincs színenkénti fotó,
         a kivitelt mutató egy kép erősebb, mint a jó színű, de rossz kivitelű */
      if(v2) c.push(v2+'|'+L, v2);
      if(v1) c.push(v1+'|'+L, v1);
      c.push(L);
      for(var i=0;i<c.length;i++) if(p.imgs[c[i]]) return c[i];
      return Object.keys(p.imgs)[0];
    }
    function flatImgs(p){
      var list=[], starts={}, all=Object.keys(p.imgs||{}), ks=[];
      var other = (currentLang==='hu'?'en':'hu');
      for(var i=0;i<all.length;i++){ if(all[i].split('|').indexOf(other)<0) ks.push(all[i]); }
      for(var i=0;i<ks.length;i++){ starts[ks[i]]=list.length; list=list.concat(p.imgs[ks[i]]); }
      return {list:list, starts:starts};
    }
    function prodById(id){ for(var i=0;i<PRODUCTS.length;i++){ if(PRODUCTS[i].id===id) return PRODUCTS[i]; } return null; }
    window.HimaShop={cardHtml:cardHtml,flatImgs:flatImgs,galKeyOf:galKeyOf,money:money,esc:esc,pf:pf,prodById:prodById,svgIcon:svgIcon,cartSvg:cartSvg,applyI18n:applyI18n,lang:function(){return currentLang;}};
    document.addEventListener('change', function(e){
      var el=e.target;
      if(!el || !el.classList || !el.classList.contains('card-select')) return;
      var id=el.getAttribute('data-for'), p=prodById(id), btn=document.getElementById('add-'+id);
      if(!p) return;
      var which=el.classList.contains('opt2')?2:1, o=which===2?p.opt2:p.opt1;
      // a tétel neve mindig a magyar címke, hogy stabil legyen az azonosítás
      if(btn && o){
        var pick=o.vals.filter(function(v){return v.k===el.value;})[0];
        if(pick) btn.setAttribute('data-item-custom'+which+'-value', pick.hu);
      }
      if(which===2 && p.prices && p.prices[el.value]){
        var pr=p.prices[el.value], pn=document.getElementById('pr-'+id);
        if(pn) pn.innerHTML=money(pr)+'<span class="card-vat">'+I18N[currentLang].foot_vat+'</span>';
        if(btn){ btn.setAttribute('data-item-id', id+'-'+el.value);
                 btn.setAttribute('data-item-price','{"eur":"'+pr.eur+'","huf":"'+pr.huf+'","usd":"'+pr.usd+'"}'); }
      }
      if(p.imgs){
        var q1=document.querySelector('.card-select.opt1[data-for="'+id+'"]');
        var q2=document.querySelector('.card-select.opt2[data-for="'+id+'"]');
        var key=galKeyOf(p, q1?q1.value:'', q2?q2.value:'');
        var fi=flatImgs(p), at=fi.starts[key];
        if(at!=null){
          var main=document.getElementById('gal-'+id);
          if(main) main.src=fi.list[at];
          var th=document.getElementById('th-'+id);
          if(th){ var bs=th.querySelectorAll('button');
            for(var z=0;z<bs.length;z++) bs[z].classList.toggle('on', z===at); }
        }
      }
    });
    document.addEventListener('click', function(e){
      var b=e.target.closest ? e.target.closest('.gal-thumbs button') : null;
      if(!b) return;
      var id=b.getAttribute('data-gal'), i=parseInt(b.getAttribute('data-i'),10), p=prodById(id);
      if(!p||!p.imgs) return;
      var list=flatImgs(p).list;
      var main=document.getElementById('gal-'+id);
      if(main&&list[i]) main.src=list[i];
      var bs=b.parentNode.querySelectorAll('button');
      for(var j=0;j<bs.length;j++) bs[j].classList.toggle('on', j===i);
    });

    /* leírás kinyitása */
    document.addEventListener('click', function(e){
      var b=e.target.closest ? e.target.closest('.desc-more') : null;
      if(!b) return;
      var d=document.getElementById('d-'+b.getAttribute('data-desc'));
      if(!d) return;
      var open=d.classList.toggle('open');
      b.textContent = open ? I18N[currentLang].less : I18N[currentLang].more;
    });
    /* a "Tovább" csak ott jelenjen meg, ahol tényleg le van vágva a szöveg */
    function syncMore(){
      var bs=document.querySelectorAll('.desc-more');
      for(var i=0;i<bs.length;i++){
        var d=document.getElementById('d-'+bs[i].getAttribute('data-desc'));
        if(!d){ bs[i].style.display='none'; continue; }
        var clipped = d.scrollHeight > d.clientHeight + 2;
        bs[i].style.display = clipped ? '' : 'none';
        if(!d.classList.contains('open')) bs[i].textContent = I18N[currentLang].more;
      }
    }
    window.addEventListener('load', syncMore);
    window.addEventListener('resize', syncMore);

    /* vissza a tetejére */
    (function(){
      var b=document.getElementById('toTop');
      b.addEventListener('click', function(){ window.scrollTo({top:0,behavior:'smooth'}); });
      window.addEventListener('scroll', function(){ b.classList.toggle('show', window.scrollY>700); }, {passive:true});
    })();

    (function(){
      var hd=document.querySelector('header');
      function onScroll(){ hd.classList.toggle('scrolled', window.scrollY > 40 || hd.classList.contains('always')); }
      window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
    })();
    var langBtns=document.querySelectorAll('.lang-btn');
    for(var b=0;b<langBtns.length;b++){ langBtns[b].addEventListener('click', function(){ setLang(this.getAttribute('data-lang')); }); }
    (function(){
      var mb=document.getElementById('menuBtn'), mm=document.getElementById('mobileMenu'); if(!mb||!mm) return;
      function setOpen(o){ mm.classList.toggle('open',o); mb.setAttribute('aria-expanded',o?'true':'false'); }
      mb.addEventListener('click', function(){ setOpen(!mm.classList.contains('open')); });
      mm.addEventListener('click', function(e){ if(e.target.closest('a')) setOpen(false); });
      document.addEventListener('click', function(e){ if(mm.classList.contains('open') && !e.target.closest('#mobileMenu,#menuBtn')) setOpen(false); });
      document.addEventListener('keydown', function(e){ if(e.key==='Escape') setOpen(false); });
    })();
    var curBtns=document.querySelectorAll('[data-cur]');
    for(var c2=0;c2<curBtns.length;c2++){ curBtns[c2].addEventListener('click', function(){ setCur(this.getAttribute('data-cur')); }); }
    markCur();   // induláskor is jelölve legyen az aktív pénznem (a mobil választón is)
  
;

    (function(){
      var banner=document.getElementById('cookieBanner');
      function grant(){ if(typeof gtag==='function'){ gtag('consent','update',{'ad_storage':'granted','ad_user_data':'granted','ad_personalization':'granted','analytics_storage':'granted'}); } }
      function hide(){ banner.classList.add('cookie-hidden'); }
      function show(){ banner.classList.remove('cookie-hidden'); }
      var c=null; try{ c=localStorage.getItem('hima_consent'); }catch(e){}
      if(c==='all'){ grant(); } else if(c!=='necessary'){ show(); }
      document.getElementById('ckAccept').addEventListener('click',function(){ try{localStorage.setItem('hima_consent','all');}catch(e){} grant(); hide(); });
      document.getElementById('ckNecessary').addEventListener('click',function(){ try{localStorage.setItem('hima_consent','necessary');}catch(e){} hide(); });
      var s=document.getElementById('cookieSettingsBtn'); if(s){ s.addEventListener('click',function(){ show(); }); }
    })();
  
;

(function(){
  var ENDPOINT = (window.HIMA_API || '');
  if (!/^https:\/\//.test(ENDPOINT)) return;
  if (navigator.webdriver) return;

  var URL_E = ENDPOINT.replace(/\/+$/,'') + '/e';
  var SID = (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2)); // csak a memóriában él
  var queue = [], timer = null, seenView = {};

  /* --- forgalom forrása --- */
  var qs = new URLSearchParams(location.search);
  var ref = document.referrer || '';
  var refHost = '';
  try { refHost = ref ? new window.URL(ref).hostname.replace(/^www\./,'') : ''; } catch(e){}
  var src = qs.get('utm_source') || '', med = qs.get('utm_medium') || '', camp = qs.get('utm_campaign') || '';
  if (!src) {
    if (qs.get('gclid') || qs.get('gad_source')) { src = 'google'; med = 'cpc'; }
    else if (qs.get('fbclid')) { src = 'facebook'; med = 'social'; }
    else if (refHost && refHost.indexOf(location.hostname) === -1) {
      src = refHost.split('.')[0];
      med = /google|bing|yahoo|duckduckgo|ecosia/.test(refHost) ? 'organic'
          : /facebook|instagram|tiktok|youtube|pinterest|twitter|x\.com|linkedin/.test(refHost) ? 'social'
          : 'referral';
    } else { src = 'közvetlen'; med = 'direct'; }
  }

  function baseId(itemId){
    var list = (window.PRODUCTS || []);
    for (var i=0;i<list.length;i++){
      if (itemId === list[i].id || itemId.indexOf(list[i].id + '-') === 0) return list[i].id;
    }
    return itemId;
  }
  function lang(){ return document.documentElement.lang || 'hu'; }
  function currency(){
    if (typeof window.currentCur === 'string' && window.currentCur) return window.currentCur;
    var b = document.querySelector('.cur-switch .lang-btn.on, .cur-switch .lang-btn.active');
    return b ? (b.getAttribute('data-cur') || 'huf') : 'huf';
  }

  function push(type, extra, now){
    var e = { t:type, s:SID, lang:lang(), path:location.pathname, src:src, med:med, camp:camp };
    for (var k in extra) if (extra[k] != null && extra[k] !== '') e[k] = extra[k];
    queue.push(e);
    if (now) flush(); else { clearTimeout(timer); timer = setTimeout(flush, 2500); }
  }

  function flush(){
    if (!queue.length) return;
    var payload = JSON.stringify({ v:1, events: queue.splice(0, 40) });
    try {
      if (navigator.sendBeacon) navigator.sendBeacon(URL_E, new Blob([payload], {type:'text/plain;charset=UTF-8'}));
      else fetch(URL_E, {method:'POST', body:payload, headers:{'content-type':'text/plain;charset=UTF-8'}, keepalive:true, mode:'cors'});
    } catch(e){}
  }
  window.HimaTrack = { sid:SID, src:src, med:med, camp:camp, push:push };
  addEventListener('visibilitychange', function(){ if (document.visibilityState === 'hidden') flush(); });
  addEventListener('pagehide', flush);

  /* --- oldalmegnyitás --- */
  push('pageview');

  /* --- termék láthatóság --- */
  function watchCards(){
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (en.intersectionRatio < 0.5) return;
        var btn = en.target.querySelector('.card-add');
        if (!btn) return;
        var id = baseId(btn.getAttribute('data-item-id') || '');
        if (seenView[id]) { io.unobserve(en.target); return; }
        seenView[id] = 1;
        push('product_view', { p:id });
        io.unobserve(en.target);
      });
    }, { threshold:[0.5] });
    document.querySelectorAll('.card').forEach(function(c){ io.observe(c); });
  }
  if (document.querySelectorAll('.card').length) watchCards();
  else {
    var mo = new MutationObserver(function(){
      if (document.querySelectorAll('.card').length) { mo.disconnect(); watchCards(); }
    });
    mo.observe(document.body, { childList:true, subtree:true });
  }

  /* --- kattintások --- */
  document.addEventListener('click', function(ev){
    var t = ev.target;
    var add = t.closest && t.closest('.card-add');
    if (add) {
      var id = add.getAttribute('data-item-id') || '', base = baseId(id);
      var price = 0;
      try { price = Number(JSON.parse((add.getAttribute('data-item-price')||'{}').replace(/&quot;/g,'"'))[currency()]) || 0; } catch(e){}
      push('add_to_cart', { p:base, v:(id === base ? '' : id.slice(base.length + 1)), val:price, cur:currency() }, true);
      return;
    }
    if (t.closest && t.closest('.cart-open')) { push('checkout_open', {}, true); return; }
    if (t.closest && t.closest('.gal-thumbs button')) { push('gallery_click'); return; }
    if (t.closest && t.closest('.desc-more')) { push('desc_expand'); return; }
    if (t.closest && t.closest('[data-lang]')) { push('lang_switch', { meta:t.closest('[data-lang]').getAttribute('data-lang') }); return; }
    if (t.closest && t.closest('[data-cur]'))  { push('currency_switch', { meta:t.closest('[data-cur]').getAttribute('data-cur') }); return; }
    if (t.id === 'ckAccept')    { push('cookie_accept', {}, true); return; }
    if (t.id === 'ckNecessary') { push('cookie_necessary', {}, true); return; }
    if (t.id === 'promoYes')    { push('promo_accept', {}, true); return; }
    if (t.id === 'promoNo' || t.id === 'promoX') { push('promo_decline'); return; }
    var a = t.closest && t.closest('a[href]');
    if (a) {
      var href = a.getAttribute('href') || '';
      if (href.indexOf('mailto:') === 0) push('contact_click');
      else if (/\.html$/.test(href)) push('legal_click', { meta:href });
    }
  }, true);

  document.addEventListener('change', function(ev){
    if (ev.target.classList && ev.target.classList.contains('card-select')) {
      push('variant_change', { p:ev.target.getAttribute('data-for'), v:ev.target.value });
    }
  }, true);

  /* --- görgetés a boltig --- */
  var shop = document.getElementById('shop');
  if (shop && 'IntersectionObserver' in window) {
    var io2 = new IntersectionObserver(function(en){
      if (en[0].isIntersecting) { push('scroll_shop'); io2.disconnect(); }
    }, { threshold:0.15 });
    io2.observe(shop);
  }

})();

;

(function(){
  var API = (window.HIMA_API || '').replace(/\/+$/,'');
  var KEY = 'hima_cart';
  var T = {
    hu:{ title:'Kosár', empty:'A kosarad még üres.', sum:'Részösszeg', vat:'Az árak tartalmazzák az áfát. A szállítási díj a pénztárban jelenik meg.',
         go:'Tovább a fizetéshez', del:'Törlés', err:'A pénztár most nem érhető el. Próbáld újra kicsit később.',
         soon:'A fizetés hamarosan indul, a bolt éles beállítása még folyamatban van.',
         upTitle:'Ez is érdekelhet', upHint:'Kedvezményes ár, ha ezzel együtt viszed.', upAdd:'Hozzáadom',
         thanks:'Köszönjük a rendelést!', thanksText:'A visszaigazolást e-mailben küldjük, és amint elindul a csomag, megkapod a követési azonosítót is.', ok:'Rendben' },
    en:{ title:'Cart', empty:'Your cart is empty.', sum:'Subtotal', vat:'Prices include VAT. Shipping is shown at checkout.',
         go:'Continue to payment', del:'Remove', err:'Checkout is unavailable right now. Please try again shortly.',
         soon:'Payments are not switched on yet, the shop is still being set up.',
         upTitle:'You might also like', upHint:'Discounted price when bought together.', upAdd:'Add',
         thanks:'Thank you for your order!', thanksText:'We will send the confirmation by e-mail, and the tracking number as soon as the parcel ships.', ok:'OK' }
  };
  function L(){ return document.documentElement.lang === 'en' ? T.en : T.hu; }
  function cur(){ return (typeof window.currentCur === 'string' && window.currentCur) || 'huf'; }

  /* Melyik termékhez mit ajánlunk, és hány százalék kedvezménnyel.
     A kedvezményes tételnek szerepelnie kell a worker katalógusában is (…-promo25 / …-promo30). */
  var UPSELL = {
    'fg-litter-smart':    [['fg-bowl-antiant',30], ['fg-nail-trim',25]],
    'fg-fountain-sensor': [['fg-bowl-antiant',30], ['fg-bottle-travel',25]],
    'fg-bottle-travel':   [['fg-bowl-antiant',30]],
    'fg-feeder-hicap':    [['fg-bottle-travel',30], ['fg-bowl-antiant',25]],
    'fg-feeder-6l':       [['fg-bowl-antiant',30], ['fg-nail-grinder',25]],
    'fg-bowl-antiant':    [['fg-bottle-travel',25]],
    'fg-nail-trim':       [['fg-bowl-antiant',25], ['fg-bottle-travel',25]],
    'fg-nail-grinder':    [['fg-bowl-antiant',25], ['fg-nail-trim',25]]
  };
  var MAX_UPSELL = 2;

  /* ugyanaz a kerekítés, mint a szerver árlistájában */
  function niceEur(r){ var b=Math.floor(r), c=b+0.90; if(c>r) c=b-0.10; return (c<0.90?0.90:c).toFixed(2); }
  function niceUsd(r){ var b=Math.floor(r), c=b+0.99; if(c>r) c=b-0.01; return (c<0.99?0.99:c).toFixed(2); }
  function niceHuf(r){ var c=Math.floor(r/100)*100-10; return c<90?90:c; }

  var CART = [];
  try { CART = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch(e){ CART = []; }
  if (!Array.isArray(CART)) CART = [];

  function save(){ try { localStorage.setItem(KEY, JSON.stringify(CART)); } catch(e){} paint(); }
  function count(){ return CART.reduce(function(a,i){ return a + i.qty; }, 0); }
  function money(p){
    var c = cur(), v = p[c];
    if (c === 'huf') return String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g,' ') + ' Ft';
    if (c === 'usd') return '$' + Number(v).toFixed(2);
    return '€' + Number(v).toFixed(2);
  }
  function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }

  function products(){ return window.PRODUCTS || []; }
  function byId(id){ var l=products(); for(var i=0;i<l.length;i++) if(l[i].id===id) return l[i]; return null; }
  function baseOf(id){ var l=products(); for(var i=0;i<l.length;i++){ if(id===l[i].id || id.indexOf(l[i].id+'-')===0) return l[i].id; } return id; }
  function nameOf(p){
    if (typeof window.pf === 'function') { try { return window.pf(p,'name'); } catch(e){} }
    return (document.documentElement.lang === 'en' ? p.en.name : p.hu.name);
  }
  function imgOf(p){
    var ims = p.imgs || {};
    for (var k in ims) if (ims[k] && ims[k].length) return ims[k][0];
    return 'hero-mark.png';
  }

  window.HimaCart = {
    add: function(item){
      var same = CART.filter(function(i){ return i.id === item.id && i.opts === item.opts; })[0];
      if (same) same.qty = Math.min(same.qty + 1, 20);
      else CART.push({ id:item.id, name:item.name, opts:item.opts||'', img:item.img||'', price:item.price, qty:1 });
      save();
      setTimeout(open, 120);
    },
    open: function(){ open(); },
    count: count,
    items: function(){ return CART.slice(); }
  };

  /* --- ajánlott termékek a kosár tartalma alapján --- */
  function suggestions(){
    var inCart = {};
    CART.forEach(function(i){ inCart[baseOf(i.id)] = 1; });
    var out = [], seen = {};
    CART.forEach(function(i){
      (UPSELL[baseOf(i.id)] || []).forEach(function(rule){
        var target = rule[0], off = rule[1];
        if (inCart[target] || seen[target]) return;
        var p = byId(target); if (!p) return;
        seen[target] = 1;
        out.push({
          id: target + '-promo' + off, off: off,
          name: nameOf(p), img: imgOf(p),
          full: { huf:p.huf, eur:Number(p.eur), usd:Number(p.usd) },
          price: { huf:niceHuf(p.huf*(100-off)/100),
                   eur:Number(niceEur(Number(p.eur)*(100-off)/100)),
                   usd:Number(niceUsd(Number(p.usd)*(100-off)/100)) }
        });
      });
    });
    return out.slice(0, MAX_UPSELL);
  }

  /* --- megjelenítés --- */
  function badge(){
    var b = document.querySelectorAll('.cart-count');
    for (var i=0;i<b.length;i++) b[i].textContent = count();
  }
  function paint(){
    badge();
    var body = document.getElementById('cartBody'), foot = document.getElementById('cartFoot'), d = L();
    if (!body) return;
    document.getElementById('cartTitle').textContent = d.title;
    if (!CART.length){
      body.innerHTML = '<p class="cart-empty">' + d.empty + '</p>';
      foot.innerHTML = '';
      return;
    }
    var html = CART.map(function(i, ix){
      return '<div class="cart-item">'
        + (i.img ? '<img src="' + esc(i.img) + '" alt="" loading="lazy">' : '')
        + '<div style="flex:1;min-width:0">'
        + '<div class="cart-name">' + esc(i.name) + '</div>'
        + (i.opts ? '<div class="cart-opts">' + esc(i.opts) + '</div>' : '')
        + '<div class="cart-line">'
        + '<span class="qty"><button data-dec="' + ix + '" aria-label="-">&minus;</button><span>' + i.qty + '</span><button data-inc="' + ix + '" aria-label="+">+</button></span>'
        + '<button class="cart-del" data-del="' + ix + '">' + d.del + '</button>'
        + '<span class="cart-price">' + money({huf:i.price.huf*i.qty, eur:i.price.eur*i.qty, usd:i.price.usd*i.qty}) + '</span>'
        + '</div></div></div>';
    }).join('');

    var sug = suggestions();
    if (sug.length){
      html += '<div class="cart-up"><h4>' + d.upTitle + '</h4><p class="up-hint">' + d.upHint + '</p>'
        + sug.map(function(s){
            return '<div class="up-item">'
              + '<img src="' + esc(s.img) + '" alt="" loading="lazy">'
              + '<div style="flex:1;min-width:0">'
              + '<div class="up-name">' + esc(s.name) + '</div>'
              + '<div class="up-price"><span class="up-new">' + money(s.price) + '</span>'
              + '<span class="up-old">' + money(s.full) + '</span>'
              + '<span class="up-off">-' + s.off + '%</span></div>'
              + '</div>'
              + '<button class="up-add" data-up="' + esc(s.id) + '">' + d.upAdd + '</button>'
              + '</div>';
          }).join('')
        + '</div>';
    }
    body.innerHTML = html;

    var sum = CART.reduce(function(a,i){
      return { huf:a.huf + i.price.huf*i.qty, eur:a.eur + i.price.eur*i.qty, usd:a.usd + i.price.usd*i.qty };
    }, {huf:0,eur:0,usd:0});
    foot.innerHTML = '<div class="cart-sum"><span>' + d.sum + '</span><span>' + money(sum) + '</span></div>'
      + '<p class="cart-note">' + d.vat + '</p>'
      + '<div id="cartErr"></div>'
      + '<button class="cart-go" id="cartGo">' + d.go + '</button>';
  }

  function open(){ var o = document.getElementById('cartOv'); if(!o) return; paint(); o.hidden = false; document.body.style.overflow='hidden'; }
  function close(){ var o = document.getElementById('cartOv'); if(!o) return; o.hidden = true; document.body.style.overflow=''; }

  /* --- események --- */
  document.addEventListener('click', function(ev){
    var t = ev.target;
    if (t.closest && t.closest('.cart-open')) { ev.preventDefault(); open(); return; }
    if (t.id === 'cartX' || t.id === 'cartOv') { close(); return; }

    var up = t.closest && t.closest('.up-add');
    if (up) {
      var sid = up.getAttribute('data-up');
      var s = suggestions().filter(function(x){ return x.id === sid; })[0];
      if (s) {
        CART.push({ id:s.id, name:s.name + (document.documentElement.lang === 'en' ? ' (bundle offer)' : ' (akciós csomagajánlat)'),
                    opts:'-' + s.off + '%', img:s.img, price:s.price, qty:1 });
        save();
        if (window.HimaTrack) window.HimaTrack.push('promo_accept', { p:sid, val:s.price[cur()], cur:cur() }, true);
      }
      return;
    }

    var add = t.closest && t.closest('.card-add');
    if (add) {
      ev.preventDefault();
      var price = {};
      try { price = JSON.parse((add.getAttribute('data-item-price')||'{}').replace(/&quot;/g,'"')); } catch(e){}
      var card = add.closest('.card');
      var imgEl = card ? card.querySelector('.card-gal img') : null;
      var opts = [];
      if (card) card.querySelectorAll('.card-select').forEach(function(s){
        opts.push(s.options[s.selectedIndex].textContent.trim());
      });
      window.HimaCart.add({
        id: add.getAttribute('data-item-id'),
        name: (card && card.querySelector('.card-name') ? card.querySelector('.card-name').textContent : add.getAttribute('data-item-name')) || '',
        opts: opts.join(' · '),
        img: imgEl ? imgEl.getAttribute('src') : '',
        price: { huf:Number(price.huf)||0, eur:Number(price.eur)||0, usd:Number(price.usd)||0 }
      });
      return;
    }

    var dec = t.getAttribute && t.getAttribute('data-dec'), inc = t.getAttribute && t.getAttribute('data-inc'), del = t.getAttribute && t.getAttribute('data-del');
    if (dec !== null && dec !== undefined) { var i = CART[+dec]; if (i){ i.qty--; if (i.qty < 1) CART.splice(+dec,1); } save(); return; }
    if (inc !== null && inc !== undefined) { var j = CART[+inc]; if (j) j.qty = Math.min(j.qty + 1, 20); save(); return; }
    if (del !== null && del !== undefined) { CART.splice(+del,1); save(); return; }

    if (t.id === 'cartGo') { checkout(t); return; }
    if (t.id === 'thanksX' || t.id === 'thanksOk') { document.getElementById('thanksOv').classList.remove('open'); return; }
  });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });

  /* nyelv- vagy pénznemváltás után újrarajzolás */
  document.addEventListener('click', function(ev){
    if (ev.target.closest && (ev.target.closest('[data-lang]') || ev.target.closest('[data-cur]'))) setTimeout(paint, 30);
  }, true);

  /* --- pénztár --- */
  function checkout(btn){
    var d = L(), err = document.getElementById('cartErr');
    if (!/^https:\/\//.test(API)) { err.innerHTML = '<p class="cart-err">' + d.soon + '</p>'; return; }
    btn.disabled = true;
    var payload = {
      items: CART.map(function(i){ return { id:i.id, qty:i.qty, opts:i.opts }; }),
      currency: cur(), lang: document.documentElement.lang === 'en' ? 'en' : 'hu'
    };
    if (window.HimaTrack) { payload.sid = window.HimaTrack.sid; payload.src = window.HimaTrack.src; payload.med = window.HimaTrack.med; payload.camp = window.HimaTrack.camp; window.HimaTrack.push('begin_checkout', {}, true); }
    fetch(API + '/checkout', { method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify(payload) })
      .then(function(r){ return r.json().then(function(j){ j.__status = r.status; return j; }); })
      .then(function(res){
        if (res && res.url) { location.href = res.url; return; }
        btn.disabled = false;
        /* 503 = a fizetés még nincs bekapcsolva (nincs Stripe kulcs) – ilyenkor udvarias üzenet, nem hiba */
        var msg = (res && res.__status === 503) ? d.soon : esc(res && res.error || d.err);
        err.innerHTML = '<p class="cart-err">' + msg + '</p>';
      })
      .catch(function(){ btn.disabled = false; err.innerHTML = '<p class="cart-err">' + d.err + '</p>'; });
  }


  /* A rendelés végösszegét a workertől kérjük el (a böngészőben tárolt kosár ilyenkor
     már üres, és amúgy sem lenne hiteles forrás). A Stripe webhookja pár másodperccel
     a visszatérés után írja be a rendelést, ezért néhányszor újrapróbáljuk. */
  function sendPurchase(sid){
    var API = (window.HIMA_API || '');
    if (!/^https:\/\//.test(API) || !sid) return;
    var tries = 0;
    (function pull(){
      tries++;
      fetch(API + '/order?s=' + encodeURIComponent(sid), { mode:'cors' })
        .then(function(r){ return r.json(); })
        .then(function(o){
          if (!o || !o.ok) { if (tries < 5) setTimeout(pull, 2000); return; }
          var cur = String(o.currency || 'huf').toUpperCase();
          if (typeof gtag === 'function') {
            gtag('event', 'purchase', { transaction_id:o.id, value:o.total, currency:cur });
            var A = window.HIMA_ADS;
            if (A && A.id && A.label) {
              gtag('event', 'conversion', { send_to:A.id + '/' + A.label, value:o.total, currency:cur, transaction_id:o.id });
            }
          }
        })
        .catch(function(){ if (tries < 5) setTimeout(pull, 2000); });
    })();
  }

  /* --- visszatérés a fizetésből --- */
  var q = new URLSearchParams(location.search);
  if (q.get('fizetve') === '1') {
    CART = []; try { localStorage.removeItem(KEY); } catch(e){}
    var ov = document.getElementById('thanksOv'), d = L();
    if (ov) {
      document.getElementById('thanksTitle').textContent = d.thanks;
      document.getElementById('thanksText').textContent = d.thanksText;
      document.getElementById('thanksOk').textContent = d.ok;
      ov.classList.add('open');
    }
    if (window.HimaTrack) window.HimaTrack.push('purchase', { meta:'stripe' }, true);
    sendPurchase(q.get('s'));
    history.replaceState({}, '', location.pathname);
  } else if (q.get('megszakitva') === '1') {
    history.replaceState({}, '', location.pathname);
    setTimeout(open, 400);
  }

  badge(); paint();
})();
