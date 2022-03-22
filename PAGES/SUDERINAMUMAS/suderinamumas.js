let suderinamumoForma = document.querySelector("form")

suderinamumoForma.addEventListener("submit", function (e) {
    e.preventDefault();

    let jusuZenklas = +suderinamumoForma["jusuZenklas"].value;
    let partnerioZenklas = +suderinamumoForma["partnerioZenklas"].value;
    let pora = document.querySelector("#jusuZenklas").value +
        document.querySelector("#partnerioZenklas").value;
    let porosid = "#" + pora;
    let porosAprasymas = document.querySelector(porosid);


    if (pora == "avinasavinas") {
        document.querySelector(".result").innerHTML =
            `<p>
                <h3>Avinas ir Avinas</h3> Neišsenkančios kalbos apie viską pasaulyje ir taip mėgstamas aktyvus
                laisvalaikis
                kartu stiprins šios poros santykius. Aistra lovoje veršis per kraštus, tačiau abipusis noras
                dominuoti gali kelti audringus ginčus. Taigi, labai svarbu, kad abu partneriai šioje poroje
                suprastų, jog kartais reikia nusileisti savo išrinktajam, neįrodinėti savo tiesų.</p>`;
    }
    if (pora == "avinasjautis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Avinas ir Jautis</h3> Avinas –veržlus nutrūktgalvis švaistūnas. Jautis –ramus, praktiškas ir šiek tiek konservatyvus  taupuolis. Avinui patinka Jaučio protas ir saugumo jausmas, o Jautį  žavi  Avino  aistra  ir  spontaniškumas.  Abu  ženklai  jausmingi  ir  be  galo mėgstantys komfortą. Tai juos vienija, tačiau ilgainiui lėtesnis Jaučio gyvenimo tempas ir praktiškumas Avinui gali pabosti. Visgi  tokie  santykiai  gali  trukti  ilgai, jeigu tik Jautis leis Avinui dominuoti.</p>`;
    }
    if (pora == "avinasdvyniai") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Avinas ir Dvyniai</h3> Ši  sąjunga  žada  daug  nepamirštamų  akimirkų.  Abu  ženklai  be  galo  aktyvūs, kūrybingi,  nepailstantys  optimistai,  tad  judviejų  santykiai  gali  būti  kaip  vienas didelis nuotykis. Tik Dvyniai turėtų atsisakyti savo pomėgio flirtuoti su priešingos lyties atstovais, nes Avinas nemėgsta savo partneriu dalintis dar su kažkuo.</p>`;
    }
    if (pora == "avinasvezys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Avinas ir Vėžys</h3>Ši kombinacija gana sudėtinga. Vėžys vertina šeimą ir namų židinį, todėl bando pririšti  partnerį  prie  savęs,  namų.  Tuo  tarpu  Avino  tokia  perspektyva  visai nedžiugina, jis jaučiasi supančiotas ir veržiasi išsivaduoti. Visgi stiprus seksualinis potraukis gali kurį laiką šią porą išlaikyti drauge, tačiau neilgai.</p>`;
    }
    if (pora == "avinasliutas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Avinas ir Liūtas</h3> Abu Zodiako ženklai pasižymi stipriu lytiniu potraukiu ir neišsenkančia seksualine energija. Tad liepsnojanti aistra gali šiuodu ugnies ženklus sulipdyti į įspūdingą porą.  Tačiau  Avino  noras  vadovauti,  būti  dėmesio  centre  ir  Liūto  išdidumas, garbės ir neišsenkančio dėmesio troškimas gali juos paversti amžinais varžovais. Kad ši sąjunga taptų ilgalaike, abu partneriai turi būti supratingi ir taktiški vienas kito  atžvilgiu.  Avinas  turėtų  pasistengti  neužgauti  Liūto  išdidumo  ir  leisti  jam „sužibėti“ viešumoje.</p>`;
    }
    if (pora == "avinasmergele") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Avinas ir Mergelė</h3> Šie zodiako ženklai labai skirtingi, tačiau kartais priešingybės traukia. Mergelės -viską apskaičiuojančios ir kruopščiai planuojančios strategės. Avinai -impulsyvūs, nenuspėjami, šia diena gyvenantys nutrūktgalviai. Gyvenimas su Avinu Mergelei tikras  išbandymas.  Avino  impulsyvumas  ir  nenuspėjamumas  gali  ardyti kruopščius Mergelės planus ir kelti nepasitenkinimą. Tačiau ją intriguoja Avino 
            drąsa ir aistra. Tuo tarpu Avinui patinka Mergelės pastovumas. Sėkminga sąjunga įmanoma, jeigu tik abu partneriai atsižvelgs į vienas kito norus ir poreikius. Tačiau šių santykių palaikymas pareikalaus daug kantrybės.</p>`;
    }
    if (pora == "avinassvarstykles") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Avinas ir Svarstyklės</h3> Aviną ir Svarstykles jungia bendras požiūris į gyvenimą. Tai pora, kurioje abu zodiako ženklai natūraliai vienas kitą traukia ir papildo. Svarstyklės įkvepia Aviną dideliems  darbams  ir  savo  taktiškumu  malšina  jų  įsiūtį.  Avinas  suteikia Svarstyklėms ryžto greičiau priimti svarbius sprendimus, nepilstant iš tuščio į kiaurą.  Tačiau  Avino  egoizmas  gali  trikdyti  Svarstykles.  O  ir  Avinas  ilgainiui pasiges partnerio dėmesio, kurio jam taip reikia. Tad jų skirtumai gali kelti įtampą santykiuose ir baigtis išsiskyrimu.</p>`;
    }
    if (pora == "avinasskorpionas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Avinas ir Skorpionas</h3> Aistra lovoje veršis per kraštus, tačiau šie santykiai gali pasirodyti aštroki. Abu Zodiako ženklai kovingi, energingi ir mėgstantys kontroliuoti, o būti kontroliuojamu nemėgsta  nei  vienas.  Skorpiono  savininkiškumas  vargins  Aviną,  jis  jausis supančiotas ir stengsis išsivaduoti. Tuo tarpu Skorpionas Avino savarankiškume matys išdavystę. Šisąjunga gali būti ilgalaikė tik tuo atveju, jeigu abu Zodiako ženklai  stengsis  suprasti  vienas  kitą  ir  iškilusias  problemas  spręs  iš  karto, neatidėliodami.</p>`;
    }
    if (pora == "avinassaulys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Avinas ir Šaulys</h3> Ši sąjunga gali būti labai harmoninga. Abu ugnies ženklai aistringi, seksualūs ir išradingi,  todėl  puikiai  dera  miegamajame.  Abu  aktyvūs,  spontaniški,  linkę  į nuotykius, tad smagiai leis laiką kartu džiaugdamiesi nerūpestingu gyvenimu. O ir kasdienėje veikloje šie ženklai puikiai papildo vienas kitą. Avinas padės mažiau ryžto turinčiam Šauliui įgyvendinti jo siekius ir planus, tuo tarpu Šaulys suteiks Avinui asmeninės erdvės, nekankindamas jokiais suvaržymais.</p>`;
    }
    if (pora == "avinasoziaragis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Avinas ir Ožiaragis</h3> Gana konfliktiškas derinukas. Avino polinkis rizikuoti pinigais ar švaistyti juos nereikalingiems     dalykams(žiūrint  Ožiaragio  akimis),  kels  Ožiaragio nepasitenkinimą.  Tuo  tarpu  optimistą  Aviną  erzins  gana  dažnos  pesimistinės Ožiaragio nuotaikos. Taigi, šie Zodiako ženklai kalba skirtingomis kalbomis ir suprasti vienas kitą jiems greičiausiai nepavyks..</p>`;
    }
    if (pora == "avinasvandenis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Avinas ir Vandenis</h3> Aktyvus  ir  energingasAvinastraukia permainų trokštantį Vandenį, o Aviną žavi Vandenio  nenuspėjamumas.  Be  toVandenisįkvepią  Aviną  ir  pasikrauna  iš  jo energijos. Abu Zodiako ženklai atviri naujovėms ir aktyviam gyvenimo būdui. Jie puikiai  vienas kitą supranta ir gerbia vienas kito laisvę. Taigi, ši sąjunga gana įdomi ir harmoninga.</p>`;
    }
    if (pora == "avinaszuvys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Avinas ir Žuvys</h3> Energingas užkariautojas Avinas ir ramios, švelnios svajoklės Žuvys. Iš pirmo žvilgsnio sudėtingas, tačiau gana dažnas, derinys. Avinas trokšta vadovauti,  o Žuvys nieko prieš nusileisti, joms netgi reikia tvirto partnerio peties. Taigi, Avinas suteikia Žuvims saugumo jausmą ir aktyvesni gyvenimą, tuo tarpu Žuvys suteikia Avinui  vidinės  ramybės.  Lyg  ir  visi  patenkinti..,  tik  Avinas  turėtų  pasistengti neužgauti jautrios Žuvų sielos.</p>`;
    }
    if (pora == "jautisavinas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Jautis ir Avinas</h3> Avinas –veržlus nutrūktgalvis švaistūnas. Jautis –ramus, praktiškas ir šiek tiek konservatyvus taupuolis. Avinui patinka Jaučio protas ir saugumo jausmas, o Jautį  žavi  Avino  aistra  ir spontaniškumas.  Abu  ženklai  jausmingi  ir  be  galo mėgstantys komfortą. Tai juos vienija, tačiau ilgainiui lėtesnis Jaučio gyvenimo tempas ir praktiškumas Avinui gali pabosti. Visgi tokie santykiai gali trukti ilgai, jeigu tik Jautis leis Avinui dominuoti.</p>`;
    }
    if (pora == "jautisjautis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Jautis ir Jautis</h3> Vienodas temperamentas, požiūris į gyvenimą, siekiai, leidžia jiems kartu jaustis gerai. Abu vertina šeimą, namų jaukumą, prabangą, meną, gražius daiktus. Be to yra gana konservatyvūs ir bijo permainų, tad nemaloniais siurprizais vienas kito nedžiugins. Tačiau abu labai užsispyrę ir tai gali trukdyti ilgalaikiams santykiams. Du  Jautukai  puikiai  sutars,  jeigu  išmoks  kartais  nusileisti  vienas  kitam, nedemonstruoti savo legendinio užsispyrimo.</p>`;
    }
    if (pora == "jautisdvyniai") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Jautis ir Dvyniai</h3> Tai labai skirtingi zodiako ženklai, todėl ilgalaikis ryšys tarp jų sudėtingas. Dėl permainingos Dvynių prigimties Jaučiui atrodo, kad jie išsiblaškę, nepastovūs ir paviršutiniški.  Tiesa  santykių  pradžioje  Jautį  žavi  Dvynių  gyvybingumas  ir linksmumas, tačiau ilgainiui iškyla ne viena problema. Didžiausia iš jų –pavydas. Labai judrūs ir daug bendraujantys Dvyniai, šeimą ir namų jaukumą vertinantiems Jaučiams, neatrodo labai patikimi partneriai santuokai ar ilgalaikiam ryšiui. O Dvyniams sunkiai suvokiamas Jaučio konservatyvumas ir ramybės troškimas.</p>`;
    }
    if (pora == "jautisvezys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Jautis ir Vėžys</h3> Abiems Zodiako ženklams svarbi šeima, jaukus namų židinys, patikimumas. Jie mėgaujasi patogia, estetiška aplinka, mėgsta prabangą, tad jų namai bus įrengti prabangiai  ir  patogiai,  o  svarbiausia  abu  tai  vertins  ir  didžiuosis.  Partneriai papildys ir palaikys vienas kitą įvairiose gyvenimo situacijose, kartu planuos namų biudžetą, pinigines investicijas ir kt. Taigi, ši sąjunga itin harmoninga, galima sakyti net tobula.</p>`;
    }
    if (pora == "jautissvarstykles") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Jautis ir Svarstyklės</h3> Abu Zodiako ženklai neabejingi menui, muzikai ir prabangai. Be to tiek Jautį tiek Svarstykles valdo Venera, kuri suteikia jų santykiams jausmingumo ir aistros, tad 
            miegamajame jie suderinami, tačiau tai ir viskas.. Jaučiai pernelyg ramūs, linkę planuoti toli į ateitį ir kurti jaukų namų lizdelį,kas gąsdina įsipareigoti ne itin linkusias ir pasilinksminimus mėgstančias Svarstykles. Tokia sąjunga galima tik tuo  atveju,  jeigu  abu  ženklai  bus  lankstesni,  stengsis  nepastebėti  partnerio „netobulumų“ ir prisiderins vienas prie kito.</p>`;
    }
    if (pora == "jautisskorpionas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Jautis ir Skorpionas</h3> Abu  Zodiako  ženklai  be  galo  aistringi  ir  jaučia  didelę  trauką  vienas  kitam. Skorpionas pavydus ir nelinkęs keisti partnerių, o Jautis vertina šeimos židinį, tad nei vienas iš partnerių nejaus poreikio neištikimybei. Kita vertus abu ženklai labaiužsispyrę  ir  trokštantys  valdyti,  tad  bendras  gyvenimas  gali  būti  labai triukšmingas. Bet jeigu jie sugebės prisitaikyti vienas prie kito, greičiausiai šios poros laukia rojus žemėje.</p>`;
    }
    if (pora == "jautissaulys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Jautis ir Šaulys</h3> Tai labai skirtingos asmenybės ir jų skirtumai sunkiaisuderinami. Jaukų namų židinį vertinantis Jautis niekada nesupras vėjavaikiško Šaulio gyvenimo būdo, jo laisvės ir nuotykių troškimo. Tuo tarpu Šauliui svetimas Jaučio konservatyvumas, jis atviras pokyčiams ir trokšta pažinti visas gyvenimo spalvas. Trumpalaikis ryšys galimas, tačiau ilgainiui besikartojantys priekaištai ir užgauliojimai juos išskirs.</p>`;
    }
    if (pora == "jautisoziaragis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Jautis ir Ožiaragis</h3> Tiesiog ideali sąjunga. Abu žemės ženklai puikiai supranta vienas kita, siekia panašių  tikslų,  mėgsta  komfortą,  gražius  daiktus,  vertina saugumo  jausmą  ir šeimos židinį. Meilę taip pat abu supranta labai panašiai, yra aistringi ir seksualūs, nelinkę į išdavystę. Be to, tiek Jautis, tiek Ožiaragis, moka ir mėgsta kalbėtis, tad nesunkiai  išspręs  bet  kokį  kilusį  konfliktą.  Jie  papildys  ir  palaikys  vienas  kitą įvairiose gyvenimo situacijose, kartu planuos namų biudžetą, pinigines investicijas ir kt. Taigi, ši sąjunga itin harmoninga, galima sakyti net tobula.</p>`;
    }
    if (pora == "jautisvandenis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Jautis ir Vandenis</h3> Gana sudėtingas derinukas. Trumpalaikis meilės ryšys galimas, tačiauilgalaikėje perspektyvoje naujovių ir nuotykių trokštančiam Vandeniui ramus ir konservatyvus Jautis  atrodys  pernelyg  nuobodus.  Tuo  tarpu  Jautį  erzins  nerimtas  Vandenio požiūris į meilę, ilgalaikius santykius, laisvės ir naujų pojūčių troškimas. Taigi, šieZodiako ženklai labai skirtingi, jų skirtumai sunkiai suderinami, todėl kurti jaukų šeimos lizdelį kartu jiems kažin ar pavyks.</p>`;
    }
    if (pora == "jautiszuvys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Jautis ir Žuvys</h3> Jautis ir Žuvys -tai pora, kurioje abu Zodiako ženklai natūraliai vienas kitą traukia ir papildo. Jautis žavisi Žuvų dvasiniu pasauliu ir džiaugiasi galėdamas suteikti joms saugumo jausmą, kurio Žuvims itin reikia. Be to realistas Jautis svajokles Žuvis sugražina į realybę, padrąsina jas siekti užsibrėžto tikslo. Tuo tarpu Žuvys išjudina  ramų  Jautį,  praskaidrina  jo  kasdienybę  romantiškomis  akimirkomis, išmoko į viską žvelgti kūrybiškiau. Taigi, šie Zodiako ženklai puikiai sutaria ir gali tapti neišskiriamais.</p>`;
    }
    if (pora == "dvyniaiavinas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Dvyniai ir Avinas</h3> Ši  sąjunga  žada  daug  nepamirštamų  akimirkų.  Abu  ženklai  be  galo  aktyvūs, kūrybingi,  nepailstantys  optimistai,  tad  judviejų  santykiai  gali  būti  kaip  vienas didelis nuotykis. Tik Dvyniai turėtų atsisakyti savo pomėgio flirtuoti su priešingos lyties atstovais, nes Avinas nemėgsta savo partneriu dalintis dar su kažkuo.</p>`;
    }
    if (pora == "dvyniaijautis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Dvyniai ir Jautis</h3> Tai  labai skirtingi zodiako ženklai, todėl ilgalaikis ryšys tarp jų sudėtingas. Dėl permainingos Dvynių prigimties Jaučiui atrodo, kad jie išsiblaškę, nepastovūs ir paviršutiniški.  Tiesa  santykių  pradžioje  Jautį  žavi  Dvynių  gyvybingumas  ir linksmumas, tačiau ilgainiui iškyla ne viena problema. Didžiausia iš jų –pavydas. Labai judrūs ir daug bendraujantys Dvyniai, šeimą ir namų jaukumą vertinantiems Jaučiams, neatrodo labai patikimi partneriai santuokai ar ilgalaikiam ryšiui. O Dvyniams sunkiai suvokiamas Jaučio konservatyvumas ir ramybės troškimas.</p>`;
    }
    if (pora == "dvyniaidvyniai") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Dvyniai ir Dvyniai</h3> Abu smalsūs, optimistiški, gyvybingi nenuoramos, mėgstantys leisti laiką draugų kompanijoje.   Vienodas   temperamentas,   humoro   jausmas,   noras   bendrauti, kalbėtis  įvairiausiomis  temomis  leidžia  jiems  kartu  jaustis   tiesiog   puikiai. Neišsenkančios kalbos apie viską pasaulyje ir taip mėgstamas aktyvus laisvalaikis padarys šių dviejų žmonių bendrą gyvenimą labai įdomiu ir smagiu. Tiesa Dvynių pomėgis  flirtuoti  gali  išprovokuoti  audringas  pavydo  scenas,  o  ilgalaikiams santykiams gali kenkti nebent tai, jeigu abu partneriai susilies į vieną visumą, neturės  skirtingų  pomėgių,  veiklos.  Tokiu  atveju  jie  vienas  kitam  gali  tiesiog nusibosti.</p>`;
    }
    if (pora == "") {
        document.querySelector(".result").innerHTML =
            `<p><h3></h3></p>`;
    }
    if (pora == "dvyniaivezys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Dvyniai ir Vėžys</h3> Tai labai skirtingi Zodiako ženklai ir jų skirtumai sunkiai suderinami.  Vienas  itin gyvybingas,  bendrauti  ir  keliauti  mėgstantis  nenuorama,  kitas –ramus, pastovumą ir jaukų namų židinį vertinantis namisėda. Vėžį žavi Dvynių protas, smalsumas ir gyvybingumas, tačiau ilgainiui poroje su Dvyniais jam gali pritrūkti stabilumo. Tuo tarpu Dvyniai vertina Vėžio atsidavimą šeimai, tačiau vien to tvirtai santuokai nepakanka. Ilgalaikis ryšys tarp jų įmanomas, tik tuo atveju, jeigu Vėžys pasistengs nevaržyti Dvynių laisvės, o Dvyniai atsižvelgs į partnerio poreikius ir bent iš dalies suvaldys savo vėjavaikišką prigimtį.</p>`;
    }
    if (pora == "dvyniailiutas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Dvyniai ir Liūtas</h3> Šiedu Zodiako ženklai natūraliai traukia vienas kitą. Liūtas myli visa širdimi. Dėl mylimo žmogaus jis gali padaryti daug gražių dalykų. Dvyniams patinka toks, išskirtinis, partnerio dėmesys. Dvyniai neapkenčia rutinos, o su Liūtu jiems tai tikrai negresia. Problemų gali kelti nebent stiprus Dvynių laisvės poreikis, nes Liūtai pernelyg savininkiški, jie nenori dalintis savo partneriu su niekuo. Liūtams teks  išmokti  valdyti  šį  jausmą.  Na  o  Dvyniaiturėtų  stengtis  neužgauti  Liūto išdidumo. Konfliktai šioje poroje greitai išsprendžiami, nes abu partneriai mėgsta kalbėtis. Tai sėkminga sąjunga, galinti pereiti į tvirtą santuoką.</p>`;
    }
    if (pora == "dvyniaimergele") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Dvyniai ir Mergelė</h3> Nepastovūs, vėjavaikiški, lengvabūdžiai Dvyniai ir rimtos, viską planuojančios ir stabilumą vertinančios Mergelės, lyg ir ne kokia sąjunga, tačiau šiuodu ženklus valdantis Merkurijus stiprina jų ryšį. Abu ženklai smalsūs, mėgstantys kalbėtis, tad trumpalaikėje perspektyvoje jų santykiai gali būti net labai įdomūs, tačiau ilgainiui Mergelės Dvyniams gali pasirodyti pernelyg nuobodžios, o tuo tarpu Mergelės pavargs nuo Dvynių aktyvumo ir nuotykių troškimo, pasiges santykių stabilumo. Tokia sąjunga galima, tačiau mažai tikėtina. Norėdami išlaikyti ilgalaikį ryšį abu Zodiako ženklai turės stengtis prisitaikyti vienas prie kito diena iš dienos.</p>`;
    }
    if (pora == "dvyniaisvarstykles") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Dvyniai ir Svarstyklės</h3> Abu intelektualūs, kūrybingi, panašaus temperamento Oro ženklai puikiai jaučiasi kartu. Jiems lengva bendrauti, regis vienas kitą supranta iš pusės žodžio. Be to vienas kitą įkvepia, papildo. Jiems patinka keliauti, leisti laiką kartu, regis šiedu Zodiako ženklai džiaugiasi kiekviena kartu praleista akimirka. Be to abu seksualūs ir išradingi, todėl puikiai dera ir miegamajame. TiesaSvarstyklėslabiau  vertina šeimą, tačiau nėra pavydžios, tad dėl to problemų kilti neturėtų. Taigi, ši sąjunga itin harmoninga, galima sakyti net ideali.</p>`;
    }
    if (pora == "dvyniaiskorpionas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Dvyniai ir Skorpionas</h3> Tai  labai  skirtingi  Zodiako  ženklai.  Gyvybingi,  lengvabūdžiai  Dvyniai  ir  gana uždari, paslaptingi Skorpionai. Skorpionas myli stipriai ir giliai, jis labai aistringas ir išradingas meilės guolyje, tačiau be galo pavydus, tad sunkiai taikstysis su Dvynių nepastovumu ir pomėgiu flirtuoti. Be to, nors Skorpionas ir atrodo stiprus ir  nepalaužiamas,  jis  labai  jautriai  reaguoja  į  tarpusavio  nesutarimus.  Šiuodu ženklus kurį laiką gali vienyti bendri tikslai ar pomėgiai, tačiau ilguoju laikotarpiu santykiai  bus  labai  sudėtingi.  Belieka  tikėtis,  kad  Dvyniai  vertins  begalinę Skorpiono aistrą, ir nebeieškos nuotykių kitur.</p>`;
    }
    if (pora == "dvyniaisaulys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Dvyniai ir Šaulys</h3> Šie du ženklai zodiako apskritime stovi vienas priešais kitą. Jie labai priešingi vienas kitam, sunkiai sutaria, tačiau gali jausti gilų dvasinį ryšį ir didelę trauką. Šaulys žvelgia į tolį, o Dvyniai geriau jaučiasisavo aplinkoje. Tačiau daug ir panašumų. Abu Zodiako ženklai gyvybingi, gyvenantys aktyvų socialinį gyvenimą ir per daug nereikalaujantys iš partnerio, tad jiems bus smagu kartu leisti laiką. Be to abu ženklai išradingi, tad puikiai dera miegamajame. Dvynių ir Šaulio pora greičiausiai susidurs su nemažais sunkumais, tačiau juos įveikus santykiai gali būti harmoningi ir ilgalaikiai.</p>`;
    }
    if (pora == "dvyniaioziaragis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Dvyniai ir Ožiaragis</h3> Tai labai skirtingos asmenybės ir jų skirtumai sunkiai suderinami. Darbštus, rimtas ir ambicingas  Ožiaragis  nesupranta  gyvybingų,  lengvabūdiškų,  flirtuoti mėgstančių  Dvynių,  o  Ožiaragio  rimtumas  svetimas  Dvyniams.  Kita  vertus Ožiaragio suteikiamą saugumą ir stabilumą Dvyniai tikrai įvertins ir pasistengs jį prablaškyti nuo Ožiaragį amžinai kamuojančių darbo ir karjeros problemų. Dėl skirtingų poreikių miegamajame šiems ženklams taip pat gali kilti problemų. Visgi 
            esant didelei meilei judviejų sąjunga įmanoma, tačiau Dvynys turės suvaldyti savo lengvabūdišką prigimtį, o Ožiaragis pasitelkti kantrybę ir nekankinti oro ženklo priekaištais.</p>`;
    }
    if (pora == "dvyniaivandenis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Dvyniai ir Vandenis</h3> Tai dvi giminingos sielos, einančios per gyvenimą koja kojon, suprantančios viena kitą iš pusės žodžio. Abu gyvybingi, mėgstantys kalbėtis, bendrauti, susipažinti su naujais žmonėmis. Judviejų bendras gyvenimas bus kupinas smagių kelionių, nuotykių. Šios poros santykius lydi sėkmė, tačiau tai nereiškia, kad nuomonių nesutapimų ar ginčų jų kasdieniniame gyvenime nebus. Santykiai gali pabosti ir atšalti dėl pernelyg vienodos veiklos, pomėgių, todėl jau nuo draugystės pradžios abiems ženklams vertėtų pasistengti išlaikyti savo individualumą.</p>`;
    }
    if (pora == "dvyniaizuvys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Dvyniai ir Žuvys</h3> Gana sudėtingas derinukas. Tai lyg skirtingų pasaulių atstovai. Vienas aktyvus ir gyvybingas,  be  galo  mėgstantis  bendrauti,  flirtuoti,  kitas  uždaras  vienišius mąstytojas,  trokštantis  meilės,  romantikos  ir  visiško  atsidavimo.  Jų  santykius lydės  įtarimai,  priekaištai  ir  nepasitikėjimas,  todėl  ilgalaikis  ryšys  vargiai įmanomas.</p>`;
    }
    if (pora == "vezysavinas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vėžys ir Avinas</h3> Ši kombinacija gana sudėtinga. Vėžys vertina šeimą ir namų židinį, todėl bando pririšti  partnerį  prie  savęs,  namų.  Tuo  tarpu  Avino  tokia  perspektyva  visai nedžiugina, jis jaučiasi supančiotas ir veržiasi išsivaduoti. Visgi stiprus seksualinis potraukis gali kurį laiką šią porą išlaikyti drauge, tačiau neilgai.</p>`;
    }
    if (pora == "vezysjautis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vėžys ir Jautis</h3> Abiems Zodiako ženklams svarbi šeima, jaukus namų židinys, patikimumas. Jie mėgaujasi patogia, estetiška aplinka, mėgsta prabangą, tad jų namai bus įrengti prabangiai  ir  patogiai,  o  svarbiausia  abu  tai  vertins  ir  didžiuosis.  Partneriai papildys ir palaikys vienas kitą įvairiose gyvenimo situacijose, kartu planuos namų biudžetą, pinigines investicijas ir kt. Taigi, ši sąjunga itin harmoninga, galima sakyti net tobula.</p>`;
    }
    if (pora == "vezysdvyniai") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vėžys ir Dvyniai</h3> Tai labai skirtingi Zodiako ženklai ir jų skirtumai sunkiai  suderinami.  Vienas  itin gyvybingas,  bendrauti  ir  keliauti  mėgstantis  nenuorama,  kitas –ramus, pastovumą ir jaukų namų židinį vertinantis namisėda. Vėžį žavi Dvynių protas, smalsumas ir gyvybingumas, tačiau ilgainiui poroje su Dvyniais jam gali pritrūkti stabilumo. Tuo tarpu Dvyniai vertina Vėžio atsidavimą šeimai, tačiau vien to tvirtai santuokai nepakanka. Ilgalaikis ryšys tarp jų įmanomas, tik tuo atveju, jeigu Vėžys pasistengs nevaržyti Dvynių laisvės, o Dvyniai atsižvelgs į partnerio poreikius irbent iš dalies suvaldys savo vėjavaikišką prigimtį.</p>`;
    }
    if (pora == "vezysvezys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vėžys ir Vėžys</h3> Tai dvi giminingos sielos, su malonumu kuriančios jaukų namų židinį. Abu trokšta gilių jausmų, harmonijos, švelnumo. Miegamajame sutaria, bet kartais abu nori vadovauti, tad ilgainiui turėtų išmokti bent kartais vienas kitam nusileisti. Bėda ta, kad  abu  labai  panašus,  tad  jų  šeimyninis  gyvenimas  ilgainiui  gali  tapti monotoniškas ir nuobodus, ko pasekoje jausmai gali atvėsti.</p>`;
    }
    if (pora == "vezysliutas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vėžys ir Liūtas</h3> Gana  nebloga  sąjunga,  kurioje  dominuoja  Liūtas. Vėžį  žavi  Liūto atlapaširdiškumas,  dosnumas  ir  pasitikėjimas  savimi,  tačiau  svetimas  Liūto troškimas būti pripažintu. Šiedu ženklai turėtų puikiai sutarti, tačiau yra tikimybė, kad Liūtui ilgainiui pabos Vėžio pernelyg ramus būdas ir motiniškas rūpestis. Santuoka  galima,  tačiau  Vėžys  turėtų  išmokti  nuolat  lepinti  Liūtą  išskirtiniu dėmesiu ir neskaičiuoti kiekvieno partnerio išleisto euro.</p>`;
    }
    if (pora == "vezysmergele") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vėžys ir Mergelė</h3> Nors  šiedu  Zodiako  ženklai  pakankamai  skirtingi,  jų  santykiai  klostosi  labai natūraliai ir harmoningai.Abu ramūs, tačiau ne nuobodūs, visada atras bendrų temų įdomiam pokalbiui. Vienas vadovaujasi protu, kitas jausmais ir emocijomis, tačiau šie skirtumai konfliktų jų šeimoje nekelia, greičiau atvirkščiai, taip jie vienas kitą tik papildo. Miegamajame ši pora taip pat puikiai dera. Taigi, ši sąjunga itin harmoninga, galima sakyti net ideali.</p>`;
    }
    if (pora == "vezyssvarstykles") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vėžys ir Svarstyklės</h3> Abu ženklai švelnūs, jausmingi. Santykių pradžioje gali atrodyti, kad jie idealiai tinka vienas kitam, tačiau ilgainiui išryškės santykius griaunantys skirtumai. Vėžys –šeimos žmogus, trokštantis stipraus emocinio ryšio su partneriu. Jis nori mylėti ir  būti  mylimas.  Tuo  tarpu  Svarstyklėms  labai  svarbi  socialinė  aplinka, bendravimas su naujais žmonėmis, intelektualinis pasitenkinimas. Jos neskiria tiek dėmesio šeimai, mėgsta vakarėlius, pasisėdėjimus su draugais. Vėžys šiuose santykiuose jaučiasi nesaugus, jis nesupranta Svarstyklių. Ilgalaikiai santykiai galimi, tačiau mažai tikėtini. Norėdami išlaikyti ilgalaikį ryšį abu Zodiako ženklai turės stengtis prisitaikyti vienas prie kito diena iš dienos.</p>`;
    }
    if (pora == "vezysskorpionas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vėžys ir Skorpionas</h3> Nors  šiedu  Zodiako  ženklai  nėra  labai  panašūs,  jų  sąjunga  gali  būti  labai sėkminga.  Skorpionas  stiprus,  seksualus,  aistringas,  beprotiškai  pavydus  ir savininkiškas. Bet Vėžio negąsdinašios Skorpiono savybės. Skorpiono energija ir drąsa žavi Vėžį, jis su malonumu pasiduoda Skorpiono aistrai, o pavydą ir savininkiškumą priima kaip didelės meilės požymį. Kadangi abu Zodiako ženklai gana ištikimi, čia problemų kilti neturėtų. Tačiau Vėžį gali  atstumti  per  didelis 
            Skorpiono egoizmas ir kartais pasireiškiantis grubumas. Nors lengva nebus, šiedu ženklai kartu gali būti labai laimingi</p>`;
    }
    if (pora == "vezyssaulys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vėžys ir Šaulys</h3> Šie Zodiako ženklai sunkiai vienas kitą supranta. Šaulys –keliautojas ir nuotykių ieškotojas  iš  prigimties,  o  tai  nedera  su  Vėžio  ramybe,  jausmingumu  ir praktiškumu. Vėžiui svetimas vėjavaikiškas Šaulio gyvenimo būdas, jo laisvės ir nuotykių troškimas, tad jis greitai pavargs nuo šaulio aktyvumo, pasiges santykių stabilumo  ir  jausmingumo. Tuo tarpu Šauliui gyvenimas su Vėžiu ilgainiui taps nuobodus. Jų poreikiai ir tikslai labai skirtingi. Trumpalaikis ryšys galimas, tačiau ilgalaikė sąjunga mažai tikėtina.</p>`;
    }
    if (pora == "") {
        document.querySelector(".result").innerHTML =
            `<p><h3></h3></p>`;
    }
    if (pora == "vezysoziaragis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vėžys ir Ožiaragis</h3> Šie du vienas priešais kitą Zodiako rate stovintys ženklai jaučia didelę tarpusavio trauką, tačiau karjeristas Ožiaragis turi daug pomėgių ir užsiėmimų, todėl neskiria Vėžiui  pakankamai  laiko  ir  dėmesio,  tuo  jį  labai  liūdindamas.  Vėžys  jautrus, jausmingas, trokštantis mylėti ir būti mylimas, tuo tarpu Ožiaragis ganašiurkštus, šaltas ir valdingas. Šie skirtumai greičiausiai taps iširusių santykių priežastimi, bet visgi  ilgalaikė  sąjunga  galima,  jeigu  abu  Zodiako  ženklaipasistengs  suprasti vienas kitą, išmoks nepastebėti partnerio netobulumo ir prisiderinti.</p>`;
    }
    if (pora == "vezysvandenis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vėžys ir Vandenis</h3> Šie du Zodiako ženklai jaučia didelę trauką vienas kitam, tačiau tai ir viskas. Aistra ilgai netruks, o pastovūs priekaištai ir barniai juos išskirs. Švelnus, jausmingas ir dvasingas Vėžys trokšta artumo, saugumo ir gilių jausmų, o iš prigimties gana lengvabūdiškas, šaltas ir plačiai bendraujantis Vandenis nemėgsta, kai kas nors varžo jo laisvę, tad poroje su Vėžiu jausis supančiotas. Ilgalaikė sąjunga galima tik tuo atveju, jeigu abu ženklai supras vienas kito poreikius, Vandenis neužgaus jautrios Vėžio sielos, o pastarasis neribos Vandenio laisvės.</p>`;
    }
    if (pora == "vezyszuvys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vėžys ir Žuvys</h3> Abu vandens ženklai jautrūs, švelnūs, rūpestingi, jaučiantys vienas kito nuotaikas irsuprantys vienas kitą iš pusės žodžio. Abu emocionalūs, ieškantys gilių jausmų, be to kūrybingi, apdovanoti lakia vaizduote, tik Žuvys –svajoklės, gebančios generuoti naujas idėjas, o Vėžys rūpinasi jų įgyvendinimu realybėje, tad kartu jie gali  paversti svajones realybe. Vėžys lepina Žuvis išskirtiniu dėmesiu, o Žuvys praturtina vėžio gyvenimą romantiškomis akimirkomis. Tiesiog ideali pora, kurios bendras gyvenimas žada daug laimingų akimirkų.</p>`;
    }
    if (pora == "liutasavinas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Liūtas ir Avinas</h3> Abu Zodiako ženklai pasižymi stipriu lytiniu potraukiu ir neišsenkančia seksualine energija. Tad liepsnojanti aistra gali šiuodu ugnies ženklus sulipdyti į įspūdingą 
            porą.  Tačiau  Avino  noras  vadovauti,  būti  dėmesio  centre  ir  Liūto  išdidumas, garbės ir neišsenkančio dėmesio troškimas gali juos paversti amžinais varžovais. Kad ši sąjunga taptų ilgalaike, abu partneriai turi būti supratingi ir taktiški vienas kito atžvilgiu. Avinas turėtų pasistengti neužgauti Liūto išdidumo.</p>`;
    }
    if (pora == "liutasjautis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Liūtas ir Jautis</h3> Šiedu Zodiako ženklai turi daug bendro. Jie protingi, intelektualūs ir jausmingi, be to labai tvirtos asmenybės. Tačiau Jaučiui svetimas Liūto egoizmas ir troškimas būti pripažintu, o Liūtas nesupranta Jaučio taupumo ir poreikio viską planuoti. Miegamajame sutaria, bet kartais abu nori vadovauti, tad ilgainiui turėtųišmokti bent kartais vienas kitam nusileisti. Tokia sąjunga galima, tačiau abu Zodiako ženklai turės stengtis prisitaikyti vienas prie kito diena iš dienos.</p>`;
    }
    if (pora == "liutasdvyniai") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Liūtas ir Dvyniai</h3> Šiedu Zodiako ženklai natūraliai traukia vienas kitą. Liūtas myli visa širdimi. Dėl mylimo žmogaus jis gali padaryti daug gražių dalykų. Dvyniams patinka toks, išskirtinis, partnerio dėmesys. Dvyniai neapkenčia rutinos, o su Liūtu jiems tai tikrai negresia. Problemų gali kelti nebent stiprus Dvynių laisvės poreikis, nes Liūtai pernelyg savininkiški, jie nenori dalintis savo partneriu su niekuo. Liūtams teks  išmokti  valdyti  šį  jausmą.  Na  o  Dvyniai  turėtų  stengtis  neužgauti  Liūto išdidumo. Konfliktai šioje poroje greitai išsprendžiami, nes abu partneriai mėgsta kalbėtis. Tai sėkminga sąjunga, galinti pereiti į tvirtą santuoką.</p>`;
    }
    if (pora == "liutasvezys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Liūtas ir Vėžys</h3> Gana  nebloga  sąjunga,  kurioje  dominuoja  Liūtas.  Vėžį  žavi  Liūto atlapaširdiškumas,  dosnumas  ir  pasitikėjimas  savimi,  tačiau  svetimas  Liūto troškimas būti pripažintu. Šiedu ženklai turėtų puikiai sutarti, tačiau yra tikimybė, kad Liūtui ilgainiui pabos Vėžio pernelyg ramus būdas ir motiniškas rūpestis. Santuoka  galima,  tačiau  Vėžys  turėtų  išmokti  nuolat  lepinti  Liūtą  išskirtiniu dėmesiu ir neskaičiuoti kiekvieno partnerio išleisto euro.</p>`;
    }
    if (pora == "liutasliutas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Liūtas ir Liūtas</h3> Kai karalius ir karalienė pasirodo kartu, aplinkinių dėmesys krypsta tik į juos. Šią porą  jungia  didelė  aistra  vienas  kitam  ir  gyvenimui.  Abu  ryškūs,  dosnūs, romantiški ir seksualūs. Pagrindinis, ramybės neduodantis klausimas: kuris taps lyderiu? Kurdu Liūtai –kova dėl valdžios neišvengiama, todėl abu turėtų sutarti kuriose srityse kurio žodis bus lemiamas. Tai padaryti nebus lengva, tačiau būtina, kad jų bendras gyvenimas netaptų mūšio lauku.</p>`;
    }
    if (pora == "liutasmergele") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Liūtas ir Mergelė</h3> Kukli, protinga, praktiška ir taupi Mergelė bei ekstravagantiškas, išskirtinį dėmesį ir prabangą mėgstantis Liūtas. Sudėtingas derinukas. Liūtą žavi aštrus Mergelės 
            protas, tačiau jis nemėgsta kritikos, kuria jį “apipila“ Mergelė. Tuo tarpu Mergelei svetimas  Liūto  poreikis  išlaidauti,  tačiau  ji  žavisi  nuoširdžia  Liūto  meile  ir pasiekimais profesinėje veikloje. Kad ši sąjunga taptų ilgalaike, abu partneriai turėtų būti supratingi ir taktiški vienas kito atžvilgiu. Mergelei vertėtų kuo mažiau kritikuoti Liūtą, neužgauti jo išdidumo.</p>`;
    }
    if (pora == "liutassvarstykles") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Liūtas ir Svarstyklės</h3> Abu  Zodiako  ženklai  mėgsta  bendrauti, užmegsti  naujas  pažintis.  Kūrybingoji Liūto pusė puikiai dera su meniškos prigimties, ryškų estetikos pojūtį turinčiomis Svarstyklėmis. Be to Liūtas įvairiose gyvenimo situacijose padės Svarstyklėms greičiau apsispręsti. Jie puikiai jaučiasi vienas kito draugijoje, tiesa daugelyje sričių  stengiasi  vienas  kitą  pranokti,  tačiau  miegamajame  karaliauja  Liūtas. Problemų  gali  kilti  nebent  su  jų  bendrais  finansais,  nes  abu  ženklai  išlaidūs, mėgstantys prabangą, naujus, kokybiškus daiktus.</p>`;
    }
    if (pora == "liutasskorpionas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Liūtas ir Skorpionas</h3> Šiuos Zodiako ženklus sieja stipri seksualinė trauka, tačiau Liūtui sunku taikstytis su Skorpiono pavydu ir savininkiškumu. Skorpionas linkęs slėpti jausmus, tuo tarpu  Liūtas  myli  atvirai  ir  nuoširdžiai,  tad  pastarojo  slapukavimas  jį  erzina. Supykęs Skorpionas greit užsidega ir gali ilgai kankinti savo partnerį priekaištais, tuo tarpu Liūtas ištvermingesnis, jis nekels audros dėl niekų, o ir supykęs labiau linkęs  išsiaiškinti  ir  susitaikyti.  Jų  santykiai  audringi,  suteikiantys  skausmo  ir palaimos. Kad ši sąjunga truktų ilgai, reikės gerokai pasistengti abiems.</p>`;
    }
    if (pora == "liutassaulys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Liūtas ir Šaulys</h3> Ideali  sąjunga.  Abu  Ugnies  ženklai  siekia  panašių  tikslų,  mėgsta  nuotykius, avantiūras ir laisvę. Savimi pasitikintis Liūtas žino kelius į Šaulio aistrą. Meilę abu supranta labai panašiai, yra romantiški ir labai seksualūs, tad miegamajame bus karšta.  Šauliui  patinka  Liūto  stiprybė  ir  ryžtas,  tuo  tarpu  Liūtą  žavi  Šaulio teisingumo jausmas. Ši pora puikiai leis laiką kartu, o judviejų bendras gyvenimas taps aistringu nuotykiu. Dviese jie gali pasiekti to, kas atrodytų neįmanoma.</p>`;
    }
    if (pora == "liutasoziaragis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Liūtas ir Ožiaragis</h3> Praktiškas, atsargus ir taupus Ožiaragis stengiasi pažaboti romantišką ir dosnų Liūtą. Ožiaragiui svetimas Liūto poreikisišlaidauti. Liūtas nesulauks iš partnerio pagyrų ir susižavėjimo šūksnių, o jam to reikia kaip oro. Abu zodiako ženklai seksualūs,  tačiau  jų  poreikiai  miegamajame  labai  skirtingi.  Liūtai  mėgsta romantiką, flirtą, komplimentus, žinoma išsakytus jo didingaiasmenybei. Be to jie 
            savo meilės guolį pagyvina įvairiausiais erotiniais žaidimais. Tuo tarpu Ožiaragis nesupranta kam viso to apskritai reikia, tad Liūtui jis atrodo pernelyg suvaržytas ir šaltas. Be to niekas šioje poroje nenori nusileisti. Šie skirtumai kels įtampą judviejų santykiuose ir galiausiai abu pasuks skirtingais keliais</p>`;
    }
    if (pora == "liutasvandenis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Liūtas ir Vandenis</h3> Šie du ženklai zodiako apskritime stovi vienas priešais kitą. Santykių pradžioje jie nuoširdžiai domisi vienas kitu ir jaučia seksualinę trauką, tačiau Vandenio polinkis analizuoti ir kritikuoti gali sužaloti Liūto pasitikėjimą savimi ir suduoti skaudų smūgį jo savimeilei. Abu Zodiako ženklai socialiai aktyvūs, mėgstantys megzti naujas pažintis, tačiau Liūtas nori būti dėmesio centre, o Vandenį tai erzina. Meilę jie taip pat supranta skirtingai. Liūtas nuoširdžiai mylintis, romantiškas ir sentimentalus, o Vandenis žaidžia santykius. Jis nelinkęs įsipareigoti ir prisileisti partnerį pernelyg arti, kas neabejotinai skaudina Liūtą. Santykių pradžia graži, bet greičiausiai Liūto meilė išblės taip greitai, kaip ir prasidėjo.</p>`;
    }
    if (pora == "liutaszuvys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Liūtas ir Žuvys</h3> Liūtas  aktyvus  ir  valdingas  ženklas.  Žuvys –jautrios,  uždaros,  mažakalbės vienišės, dažnai nepasitikinčios savimi. Jie intriguoja vienas kitą savo skirtumais, tačiau mažai vienas kitą papildo. Liūto karštakošiškumas ir noras būti dėmesio centre  visiškai  nedera  su  su  uždaru  Žuvų  gyvenimo  būdu,  jų  santūrumu  ir svajingumu.  Be  to  abu  nori  gauti,  bet  ne  duoti.  Tikėtinas  trumpalaikis susižavėjimas, bet neužilgo Liūtas ims dairytis kito partnerio.</p>`;
    }
    if (pora == "mergeleavinas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Mergelė ir Avinas</h3> Šie zodiako ženklai labai skirtingi, tačiau kartais priešingybės traukia. Mergelės -viską apskaičiuojančios ir kruopščiai planuojančios strategės. Avinai -impulsyvūs, nenuspėjami, šia diena gyvenantys nutrūktgalviai. Gyvenimas su Avinu Mergelei tikras  išbandymas.  Avino  impulsyvumas  ir  nenuspėjamumas  gali  ardyti kruopščius Mergelės planus ir kelti nepasitenkinimą. Tačiau ją intriguoja Avino drąsa ir aistra. Tuo tarpu Avinui patinka Mergelės pastovumas. Sėkminga sąjunga įmanoma, jeigu tik abu partneriai atsižvelgs į vienas kito norus ir poreikius. Tačiau šių santykių palaikymas pareikalaus daug kantrybės.</p>`;
    }
    if (pora == "mergelejautis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Mergelė ir Jautis</h3> Sumanus ir praktiškas Jautis bei kruopšti ir racionali Mergelė. Šiedu Zodiako ženklai turi daug bendro.. Jie praktiški, intelektualūs, mėgstantys viską planuoti ir priimti racionalius sprendimus, be to labai nemėgstantys naujovių. Jautis šioje poroje greičiausiai dominuos, o Mergelė nesipriešins, ji net žavėsis Jaučio ryžtu ir tvirtumu. Taigi, jie gali sudaryti harmoningą porą. Vienintelė bėda ta, kad judviejų bendras gyvenimas gali tapti pernelyg nuobodžiu, tad būtų ne pro šalį kartais įlieti naujovių, bent jau miegamajame.</p>`;
    }
    if (pora == "mergeledvyniai") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Mergelė ir Dvyniai</h3> Nepastovūs, vėjavaikiški, lengvabūdžiai Dvyniai ir rimtos, viską planuojančios ir stabilumą vertinančios Mergelės, lyg ir ne kokia sąjunga, tačiau šiuodu ženklus valdantis Merkurijus stiprina jų ryšį. Abu ženklai smalsūs, mėgstantys kalbėtis, tad trumpalaikėje perspektyvoje jų santykiai gali būti net labai įdomūs, tačiau ilgainiui Mergelės Dvyniams gali pasirodyti pernelyg nuobodžios, o tuo tarpu Mergelės pavargs nuo Dvynių aktyvumo ir nuotykių troškimo, pasiges santykių stabilumo. Tokia sąjunga galima, tačiau mažai tikėtina. Norėdami išlaikyti ilgalaikį ryšį abu Zodiako ženklai turės stengtis prisitaikyti vienas prie kito diena iš dienos.</p>`;
    }
    if (pora == "mergelevezys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Mergelė ir Vėžys</h3> Nors  šiedu  Zodiako  ženklai  pakankamai  skirtingi,  jų  santykiai  klostosi  labai natūraliai ir harmoningai. Abu ramūs, tačiau ne nuobodūs, visada atras bendrų temų įdomiam pokalbiui. Vienas vadovaujasi protu, kitas jausmais ir emocijomis, tačiau šie skirtumai konfliktų jų šeimoje nekelia, greičiau atvirkščiai, taip jie vienas kitą tik papildo. Miegamajame ši pora taip pat puikiai dera. Taigi, ši sąjunga itin harmoninga, galima sakyti net ideali.</p>`;
    }
    if (pora == "mergeleliutas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Mergelė ir Liūtas</h3> Kukli, protinga, praktiška ir taupi Mergelė bei ekstravagantiškas, išskirtinį dėmesį ir prabangą mėgstantis Liūtas. Sudėtingas derinukas. Liūtą žavi aštrus Mergelės protas, tačiau jis nemėgsta kritikos, kuria jį “apipila“ Mergelė. Tuo tarpu Mergelei svetimas  Liūto  poreikis  išlaidauti,  tačiau  ji  žavisi  nuoširdžia  Liūto  meile  ir pasiekimais profesinėje veikloje. Kad ši sąjunga taptų ilgalaike, abu partneriai turėtų būti supratingi ir taktiški vienas kito atžvilgiu. Mergelei vertėtų kuo mažiau kritikuoti Liūtą, neužgauti jo išdidumo.</p>`;
    }
    if (pora == "mergelemergele") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Mergelė ir Mergelė</h3> Santykiai  klostysis  labai  sklandžiai,  kol  abu  tobulumo  siekiantys  partneriai sugebės užgniaužti savyje norą ieškoti vienas kito trūkumų. Bet ir taijų neišskirs. Abu partneriai protingi atsakingi ir jausmingi, į meilę ir santykius žiūrintys labai rimtai. Jie visada ras temų įdomiam pokalbiui, tad puikiai jausis leisdami laiką kartu. Tiesa judviejų santykiai nebus labai aistringi, tačiau abu mano, kadnuoširdi draugystė, partnerystė ir emocinis ryšys yra kur kas svarbiau už seksą, todėl meilės guolyje problemų kilti neturėtų. Gali būti, kad poroje abu norės lyderiauti, tačiau ši priežastis per menka, kad juos išskirtų.</p>`;
    }
    if (pora == "mergelesvarstykles") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Mergelė ir Svarstyklės</h3> Svarstyklės pernelyg paviršutiniškos ir lengvabūdiškos asmenybės. Joms labai svarbi  socialinė  aplinka,  bendravimas  su  naujais  žmonėmis.  Jos  nevengia vakarėlių, pasisėdėjimų su draugais ir be galo mėgsta leisti pinigus. Tuo tarpu Mergelės santūrios ir praktiškos, joms labai svarbus finansinis stabilumas. Šioje sąjungoje Mergelė nevengs kritikuoti Svarstyklių, mokys jas gyventi taip, kaip jos tai  supranta,  nuo  ko  Svarstyklės  pasijus  nesuprastos  ir  nemylimos.  Ilgainiui Svarstyklės pradės dairytis labiau sau tinkančiopartnerio. Šiai porai bus sunku sukurti ilgalaikį ryšį.</p>`;
    }
    if (pora == "mergeleskorpionas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Mergelė ir Skorpionas</h3> Jie nuoširdžiai žavisi vienas kitu. Mergelė pasižymi racionaliu, analitiniu mąstymu. Skorpionas  paslaptingas,  apdovanotas  lakia  vaizduote.  Abiems  kartais  sunku išreikšti tikruosius jausmus, tačiau dažniausiai jie vienas kitą supranta be žodžių. Nors  Skorpionas  pavydus  ir  savininkiškas,  Mergelei  tai  patinka.  Ji  priima Skorpiono pavydą kaip tikros meilės įrodymą ir jos ištikimybė nuramina Skorpioną. Skiriasi jų poreikiai meilės guolyje. Skorpionas jausmingas, aistringas ir be galo išradingas. Jis nuolat stengiasi įtraukti Mergelę į naujus meilės žaidimus. Tuo tarpu Mergelei seksas nėra labai svarbus, tačiau aistringasis Skorpionas sugeba pažadinti drovios ir susikausčiusios Mergelėsaistrą. Šie Zodiako ženklai skirtingi, tačiau pasistengę jie gali sukurti gana tvirtą sąjungą.</p>`;
    }
    if (pora == "mergelesaulys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Mergelė ir Šaulys</h3> Abu Zodiako ženklai intelektualūs, tačiau nepriklausomas vėjavaikis Šaulys neturi nieko bendro su praktiška, viską planuojančia Mergele. Šaulys –žaidėjas, jis gyvena šia diena, per daug nieko neplanuodamas, tuo tarpu Mergelė kuria saugią ateitį  sau  ir  savo  artimiesiems.  Šaulys  neabejingas  prabangai,  o  Mergelė paprasta, kukli ir praktiška, ji nelinkusi švaistyti pinigų niekams. Šauliui nuolat reikia naujų pojūčių, jis nelinkęs įsipareigoti, tad be sąžinės graužaties gali dalintis savo aistra su keliais partneriais. Mergelė to niekada nesupras, įsipareigojimai jai tiesiog būtini ir šis esminis skirtumas kels didelę įtampą jų santykiuose. Prireiks didelių pastangų, kad ši pora galėtų būti kartu ilgesnį laiką.</p>`;
    }
    if (pora == "mergeleoziaragis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Mergelė ir Ožiaragis</h3> Ožiaragio  ambicijos  ir  sėkmės  troškulys  puikiai  dera  su  Mergelės  tobulumo paieškomis. Abu Zodiako ženklai darbštūs, dalykiški ir disciplinuoti, siekiantys užsibrėžtų tikslų. Jie nuoširdžiai domisi ir žavisi vienas kitu. Ožiaragis suteikia 
            Mergelei taip trokštamo stabilumo ir finansinio saugumo. Mergelė įkvepia Ožiaragį dideliems darbams. Jie vienas kitą papildo ir kartu jaučiasi saugūs. Kartu kuria jaukų  namų  židinį  ir tuo  didžiuojasi.  Miegamajame  ši  pora  suderinama,  tik pagrindinis  vaidmuo  paprastai  atitenka  Ožiaragiui.  Taigi,  ši  sąjunga  itin harmoninga, galima sakyti net tobula.</p>`;
    }
    if (pora == "mergelevandenis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Mergelė ir Vandenis</h3> Abu Zodiako ženklai intelektualūs, smalsūs ir racionaliai mąstantys. Abu meilę supranta labiau protu nei širdimi. Bet tai ir viskas kas juos sieja. Vandenis veidu atsisukęs į išorinį pasaulį, jis kūrėjas, novatorius, kurį jaudina globalios pasaulio problemos. Jis nuoširdžiai tiki, kad gali kažką pakeisti. Tuo tarpu Mergelė nežiūri taip toli, ji apskritai nelinkusi išeiti iš savo komforto zonos. Mergelė gyvena savo susikurtame pasaulyje, jai reikia stabilumo ir finansinio saugumo, ji linkusi viską pasverti, kelis kartus pamatuoti. Platūs Vandenio užmojai ją gąsdina ir verčia jaustis  nesaugiai.  Jie  bus  puikūs  partneriai  darbe,  bet  prasti  meilužiai miegamajame.  Trauka  minimali.  Ilgalaikis  ryšys  įmanomas,  tačiau  labiau  iš pripratimo nei iš meilės ir tai bus rimtas iššūkis abiems ženklams.</p>`;
    }
    if (pora == "mergelezuvys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Mergelė ir Žuvys</h3> Mergelei meilė –tai saugumas ir intelektualinis suderinamumas. Žuvims meilė –tai didingas, visa apimantis jausmas. Iš  pradžių Mergelė jaučia didelę trauką Žuvims. Sentimentalios, į pačią meilę įsimylėjusios Žuvys intriguoja Mergelę, o Žuvis  žavi  aštrus  analitinis  Mergelės  protas.  Tačiau  Žuvų  uždarukas, ekstravagancija  ir  svajingumas  ilgainiui  pradeda  erzinti  pragmatišką  ir disciplinuotą  Mergelę.  Be  to,  kažin  ar  Mergelė  pripras  prie  seksualinių  Žuvų poreikių. Kita vertus abu Zodiako ženklai rūpestingi ir atsidavę, kas gali jiems padėti išlikti kartu.</p>`;
    }
    if (pora == "svarstyklesavinas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Svarstyklės ir Avinas</h3> Aviną ir Svarstykles jungia bendras požiūris į gyvenimą. Tai pora, kurioje abu zodiako ženklai natūraliai vienas kitą traukia ir papildo. Svarstyklės įkvepia Aviną dideliems  darbams  ir  savo  taktiškumu  malšina jų  įsiūtį.  Avinas  suteikia Svarstyklėms ryžto greičiau priimti svarbius sprendimus, nepilstant iš tuščio į kiaurą.  Tačiau  Avino  egoizmas  gali  trikdyti  Svarstykles.  O  ir  Avinas  ilgainiui pasiges partnerio dėmesio, kurio jam taip reikia. Tad jų skirtumai gali kelti įtampą santykiuose ir baigtis išsiskyrimu.</p>`;
    }
    if (pora == "svarstyklesjautis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Svarstyklės ir Jautis</h3> Abu Zodiako ženklai neabejingi menui, muzikai ir prabangai. Be to tiek Jautį tiek Svarstykles valdo Venera, kuri suteikia jų santykiams jausmingumo ir aistros, tad miegamajame jie suderinami, tačiau tai ir viskas.. Jaučiai pernelyg ramūs, linkę planuoti toli į ateitį ir kurti jaukų namų lizdelį, kas gąsdina įsipareigoti ne itin linkusias ir pasilinksminimus mėgstančias Svarstykles. Tokia sąjunga galima tik tuo  atveju,  jeigu  abu  ženklaibus  lankstesni,  stengsis  nepastebėti  partnerio „netobulumų“ ir prisiderins vienas prie kito.</p>`;
    }
    if (pora == "svarstyklesdvyniai") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Svarstyklės ir Dvyniai</h3> Abu intelektualūs, kūrybingi, panašaus temperamento Oro ženklai puikiai jaučiasi kartu. Jiems lengva bendrauti, regis vienas kitą supranta iš pusės žodžio. Be to vienas kitą įkvepia, papildo. Jiems patinka keliauti, leisti laiką kartu, regis šiedu Zodiako ženklai džiaugiasi kiekviena kartu praleista akimirka. Be to abu seksualūs ir išradingi, todėl puikiai dera ir miegamajame. Tiesa Svarstyklės labiau vertina šeimą, tačiau nėra pavydžios, tad dėl to problemų kilti neturėtų. Taigi, ši sąjunga itin harmoninga, galima sakyti net ideali.</p>`;
    }
    if (pora == "svarstyklesvezys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Svarstyklės ir Vėžys</h3> Abu ženklai švelnūs, jausmingi. Santykių pradžioje gali atrodyti, kad jie idealiai tinka vienas kitam, tačiau ilgainiui išryškės santykius griaunantys skirtumai. Vėžys –šeimos žmogus, trokštantis stipraus emocinio ryšio su partneriu. Jis nori mylėti ir  būti  mylimas.  Tuo  tarpu  Svarstyklėms  labai  svarbi  socialinė  aplinka, bendravimas  su  naujais žmonėmis, intelektualinis pasitenkinimas. Jos neskiria tiek dėmesio šeimai, mėgsta vakarėlius, pasisėdėjimus su draugais. Vėžys šiuose santykiuose jaučiasi nesaugus, jis nesupranta Svarstyklių. Ilgalaikiai santykiai galimi, tačiau mažai tikėtini. Norėdami išlaikyti ilgalaikį ryšį abu Zodiako ženklai turės stengtis prisitaikyti vienas prie kito diena iš dienos.</p>`;
    }
    if (pora == "svarstyklesliutas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Svarstyklės ir Liūtas</h3> Abu  Zodiako  ženklai  mėgsta  bendrauti, užmegsti  naujas  pažintis.  Kūrybingoji Liūto pusė puikiai dera su meniškos prigimties, ryškų estetikos pojūtį turinčiomis Svarstyklėmis. Be to Liūtas įvairiose gyvenimo situacijose padės Svarstyklėms greičiau apsispręsti. Jie puikiai jaučiasi vienas kito draugijoje, tiesa daugelyje sričių  stengiasi  vienas  kitą  pranokti,  tačiau  miegamajame  karaliauja  Liūtas. Problemų  gali  kilti  nebent  su  jų  bendrais  finansais,  nes  abu  ženklai  išlaidūs, mėgstantys prabangą, naujus, kokybiškus daiktus.</p>`;
    }
    if (pora == "svarstyklesmergele") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Svarstyklės ir Mergelė</h3> Svarstyklės pernelyg paviršutiniškos ir lengvabūdiškos asmenybės. Joms labai svarbi  socialinė  aplinka,  bendravimas  su  naujais  žmonėmis.  Jos  nevengia vakarėlių, pasisėdėjimų su draugais ir be galo mėgsta leisti pinigus. Tuo tarpu Mergelės santūrios ir praktiškos, joms labai svarbus finansinis stabilumas. Šioje sąjungoje Mergelė nevengs kritikuoti Svarstyklių, mokys jas gyventi taip, kaip jos tai  supranta,  nuo  ko  Svarstyklės  pasijus  nesuprastos  ir  nemylimos.  Ilgainiui Svarstyklės pradės dairytis labiau sau tinkančio partnerio. Šiai porai bus sunku sukurti ilgalaikį ryšį.</p>`;
    }
    if (pora == "svarstyklessvarstykles") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Svarstyklės ir Svarstyklės</h3> Tai žavūs, draugiški, gyvybingi, bendrauti mėgstantys žmonės. Jie turės daug draugų, turiningai ir smagiai leis laiką kartu. Abu mėgsta prabangą ir gražius dauktus. Visgi šis ryšys gana paviršutiniškas, abu partneriai atitolę nuo realybės, nesistengiantyspažvelgti į santykius giliau. Jų sąjungoje daug vaidybos, skirtos daugiau aplinkinių akims. Dėl didelio jų panašumo partneriai gali greitai pabosti 
            vienas kitam ir ieškoti linksmybių ir supratimo kitų glėbyje. Bet jeigu jie atras bendrus sąlyčio taškus, šiai porai gali ir pavykti.</p>`;
    }
    if (pora == "svarstykelsskorpionas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Svarstyklės ir Skorpionas</h3> Dvasingosios Svarstyklės turi savo meilės partnerio idealą, kuris turi atnešti grožį, ramybę ir harmoniją į jų gyvenimą. Santykių pradžioje Svarstyklės mėgaujasi įvairiausiomis  formomis  pasireiškiančiu, išskirtiniu  Skorpiono  dėmesiu.  Tačiau Skorpionas  labai  savininkiškas  ir  pavydus,  kas  nelabai  suprantama  atviroms, bendravimą ir vakarėlius mėgstančioms Svarstyklėms. Vis dažniau pasireiškiantis Skorpiono pavydas ilgainiui kels įtampą jų santykiuose. Skorpionas širsta ir kaupia pyktį savyje, kuris prasiveržia triukšmingais skandalai. Tai nesiliau ir kuo toliau tuo labiau griaus jų santykius. Svarstyklės turės tiesiog pasiduoti arba išeiti.</p>`;
    }
    if (pora == "svarstyklessaulys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Svarstyklės ir Šaulys</h3> Žavingos ir švelnios Svarstyklės traukia Šaulį, o Svarstyklės nelieka abejingos Šaulio  gyvybingumui  ir  nuotykių  troškimui.  Abu  Zodiako  ženklai  romantiški optimistai, tik Svarstyklės labiau linkusios įsipareigoti, kas visai nebūdinga Šauliui, kuris bijo prarasti savo nepriklausomybę. Visgi Svarstyklės pakankamai gudrios, kad paleistų tokį laimikį. Jos neriboja Šaulio laisvės, kas padeda ugnies ženklui apsispręsti susieti savo gyvenimą su jomis. Taigi Svarstyklės nesunkiai išlaikys vėjavaikišką, nepastovų Šaulį šalia savęs. Jų sąjunga bus kupina džiaugsmingų akimirkų, kartu jie jausis laisvai ir smagiai. Tiesiog puiki pora.</p>`;
    }
    if (pora == "svarstyklesoziaragis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Svarstyklės ir Ožiaragis</h3> Svarstykles traukia Ožiaragio seksualumas, tačiau tuo visi geri dalykai ir baigiasi. Svarstyklės mėgsta bendravimą ir naktinį gyvenimą, jos dažni vakarėlių svečiai, tuo tarpu Ožiaragis tokio gyvenimo būdo nesupranta, jis vienišius, apsiribojantis vos  keliais  artimais  ir  patikimais  draugais.  Svarstyklėms  reikalingas  išskirtinis dėmesys  ir  šiluma,  tuo  tarpu  Ožiaragis  blaiviai  mąstantis,  šaltas  ir  uždaras Zodiako ženklas, jis slepia savo jausmus po devyniais užraktais. Be to Ožiaragis per  daug  užsiėmęs  savo  karjera  ir  materialinės  gerovės  kūrimu,  kad  rastų pakankamai  laiko  Svarstyklėms.  Nusivylimas  ir  vienišumo  jausmas  pastūmės romantikes Svarstykles ieškoti laimės kitur.</p>`;
    }
    if (pora == "svarstyklesvandenis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Svarstyklės ir Vandenis</h3> Šioje poroje yra viskas, kas gali užtikrinti jų tvirtą, ilgalaikį ryšį. Juos jungia meilė gyvenimui ir aplinkai. Abu Zodiako ženklai socialūs, mėgstantys leisti laiką draugų būryje,  abu  neabejingi  menui,  grožiui,  globalioms   pasaulio   problemoms. Neryžtingas, dažnai abejoti linkusias Svarstykles žavi vandenio ryžtas, jos su malonumu perda sprendimų priėmimą Vandeniui ir džiaugiasi atsikračiusios šios naštos. Jų bendras gyvenimas bus kupinas pasitikėjimo ir švelnios romantikos. Nesutarimų žinoma kils, bet juos bus nesunku išspręsti. Šiuos ženklus jungia 
            yypatingas  ryšys  ir  jie  supranta  vienas  kitą  iš  pusės  žodžio.  Tiesiog  tobula sąjunga.</p>`;
    }
    if (pora == "svarstykleszuvys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Svarstyklės ir Žuvys</h3> Romano pradžia nuostabi, tačiau vėliau pradeda lįsti skirtumai kurie griauna jų meilės  iliuziją.  Svarstyklės  neapsiriboja  savo  partnerio  draugija,  jos  mėgsta bendrauti,  leisti  laiką  su  draugas.  Joms  nesvetimas  naktinis  gyvenimas, vakarėliai,  įvairiausios  pramogos.  Tuo  tarpu  Žuvys  gyvena  savo  svajonių pasaulyje.   Nesulaukdamos  pakankamai  dėmesio  iš  partnerio  jos  jaučiasi nevertinamos,  apleistos,  nevengia  priekaištauti,  kaltinti  Svarstyklių,  nuo  ko santykiuose  atsiranda  įtampa.  Žuvys  jaučia,  kad  Svarstyklių  žavesys  ir atsidavimas  labai  paviršutiniški,  tačiau  priversti  Svarstykles   elgtis   kitaip neįmanoma,  kol  jos  pačios  to  nepanorės.  Be  to  Žuvims  reikia  stipraus,  jas globojančio partnerio, o Svarstyklės nelinkusios būti kažkam atrama.</p>`;
    }
    if (pora == "skorpionasavinas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Skorpionas ir Avinas</h3> Aistra lovoje veršis per kraštus, tačiau šie santykiai gali pasirodyti aštroki. Abu Zodiako ženklai kovingi, energingi ir mėgstantys kontroliuoti, o būti kontroliuojamu nemėgsta  nei  vienas.  Skorpiono  savininkiškumas  vargins  Aviną,  jis  jausis supančiotas ir stengsis išsivaduoti. Tuo tarpu Skorpionas Avino savarankiškume matys išdavystę. Ši sąjunga gali būti ilgalaikė tik tuo atveju, jeigu abu Zodiako ženklai  stengsis  suprasti  vienas  kitą  ir  iškilusias  problemas  spręs  iš  karto, neatidėliodami.</p>`;
    }
    if (pora == "skorpionasjautis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Skorpionas ir Jautis</h3> Abu  Zodiako  ženklaibe  galo  aistringi  ir  jaučia  didelę  trauką  vienas  kitam. Skorpionas pavydus ir nelinkęs keisti partnerių, o Jautis vertina šeimos židinį, tad nei vienas iš partnerių nejaus poreikio neištikimybei. Kita vertus abu ženklai labai užsispyrę  ir  trokštantys  valdyti,  tad  bendras  gyvenimas  gali  būti  labai triukšmingas. Bet jeigu jie sugebės prisitaikyti vienas prie kito, greičiausiai šios poros laukia rojus žemėje.</p>`;
    }
    if (pora == "skorpionasdvyniai") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Skorpionas ir Dvyniai</h3> Tai  labai  skirtingi  Zodiako  ženklai.  Gyvybingi,  lengvabūdžiaiDvyniaiir  gana uždari, paslaptingiSkorpionai.Skorpionasmyli stipriai ir giliai, jis labai aistringas ir išradingas meilės guolyje, tačiau be galo pavydus, tad sunkiai taikstysis su Dvynių nepastovumu ir pomėgiu flirtuoti. Be to, norsSkorpionasir atrodo stiprus ir  nepalaužiamas,  jis  labai  jautriai  reaguoja  į  tarpusavio  nesutarimus.  Šiuodu ženklus kurį laiką gali vienyti bendri tikslai ar pomėgiai, tačiau ilguoju laikotarpiu 
            santykiai  bus  labai  sudėtingi.  Beliekatikėtis,  kadDvyniaivertins  begalinę Skorpiono aistrą, ir nebeieškos nuotykių kitur.</p>`;
    }
    if (pora == "skorpionasvezys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Skorpionas ir Vėžys</h3> Nors  šiedu  Zodiako  ženklai  nėra  labai  panašūs,  jų  sąjunga  gali  būti  labai sėkminga.  Skorpionas  stiprus,  seksualus,  aistringas,  beprotiškai  pavydus  irsavininkiškas. Bet Vėžio negąsdina šios Skorpiono savybės. Skorpiono energija ir drąsa žavi Vėžį, jis su malonumu pasiduoda Skorpiono aistrai, o pavydą ir savininkiškumą priima kaip didelės meilės požymį. Kadangi abu Zodiako ženklai gana ištikimi, čia problemų kilti neturėtų. Tačiau Vėžį gali atstumti per didelis Skorpiono egoizmas ir kartais pasireiškiantis grubumas. Nors lengva nebus, šiedu ženklai kartu gali būti labai laimingi.</p>`;
    }
    if (pora == "skorpionasliutas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Skorpionas ir Liūtas</h3> Šiuos Zodiako ženklus sieja stipri seksualinė trauka, tačiau Liūtui sunku taikstytis su Skorpiono pavydu ir savininkiškumu. Skorpionas linkęs slėpti jausmus, tuo tarpu  Liūtas  myli  atvirai  ir  nuoširdžiai,  tad  pastarojo  slapukavimas  jį  erzina. Supykęs Skorpionas greit užsidega ir gali ilgai kankinti savo partnerį priekaištais, tuo tarpu Liūtas ištvermingesnis, jis nekels audros dėl niekų, o ir supykęs labiau linkęs  išsiaiškinti  ir  susitaikyti.  Jų  santykiai  audringi,  suteikiantys  skausmo  ir palaimos. Kad ši sąjunga truktų ilgai, reikės gerokai pasistengti abiems.</p>`;
    }
    if (pora == "skorpionasmergele") {
        document.querySelector(".result").innerHTML =
            `<p><h3Skorpionas ir Mergelė></h3> Jie nuoširdžiai žavisi vienas kitu. Mergelė pasižymi racionaliu, analitiniu mąstymu. Skorpionas  paslaptingas,  apdovanotas  lakia  vaizduote.  Abiems  kartais  sunku išreikšti tikruosius jausmus, tačiau dažniausiai jie vienas kitą supranta be žodžių. Nors  Skorpionas  pavydus  ir  savininkiškas,  Mergelei  tai  patinka.  Ji  priima Skorpiono pavydą kaip tikros meilės įrodymą ir jos ištikimybė nuramina Skorpioną. Skiriasi jų poreikiai meilės guolyje. Skorpionas jausmingas, aistringas ir be galo išradingas. Jis nuolat stengiasi įtraukti Mergelę į naujus meilės žaidimus. Tuo tarpu Mergelei seksas nėra labai svarbus, tačiau aistringasis Skorpionas sugeba pažadinti drovios ir susikausčiusios Mergelės aistrą. Šie Zodiako ženklai skirtingi, tačiau pasistengę jie gali sukurti gana tvirtą sąjungą.</p>`;
    }
    if (pora == "skorpionassvarstykles") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Skorpionas ir Svarstyklės</h3> Dvasingosios Svarstyklės turi savo meilės partnerio idealą, kuris turi atnešti grožį, ramybę ir harmoniją į jų gyvenimą. Santykių pradžioje Svarstyklės mėgaujasi įvairiausiomis  formomis  pasireiškiančiu,  išskirtiniu  Skorpiono  dėmesiu.  Tačiau Skorpionas  labai  savininkiškas  ir  pavydus,  kas  nelabai  suprantama  atviroms, bendravimą ir vakarėlius mėgstančioms Svarstyklėms. Vis dažniau pasireiškiantis Skorpiono pavydas ilgainiui kels įtampą jų santykiuose. Skorpionas širsta ir kaupia 
            pyktį savyje, kuris prasiveržia triukšmingais skandalai. Tai nesiliau ir kuo toliau tuo labiau griaus jų santykius. Svarstyklės turės tiesiog pasiduoti arba išeiti.</p>`;
    }
    if (pora == "skorpionasskorpionas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Skorpionas ir Skorpionas</h3> Seksualinis potraukis šioje sąjungoje labai stiprus. Dviejų Skorpionų pora be galo aistringa ir seksuali. Tačiau supranta jie vienas kitą sunkiai, nors ir yra labai panašūs.  Jie  savininkiški,  pavydūs  ir  reiklūs  savo  antrajai  pusei,  abu  nori lyderiauti, todėl menkas nesantaikos vėjelis, padvelkęs jų namuose, gali greitai virsti viską griaunančiu uraganu. Santykiai audringi, tačiau įmanomi, jei tik abu Skorpionai  pasistengs  nekankinti  vienas  kito  pykčio  priepuoliais,  audringomis pavydo scenomis ar nekalbadieniais.</p>`;
    }
    if (pora == "skorpionassaulys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Skorpionas ir Šaulys</h3> Skorpioną žavi nuoširdus, atviras ir nepriklausomas Šaulys. Abu Zodiako ženklai aistringi  ir  seksualūs,  abu  mėgsta  pramogas  ir  nuotykius.  Tačiau  Skorpiono jausmai  gilūs,  o  Šaulio  šiek  tiek  paviršutiniški.  Skorpionas  labai  pavydus, jis vertina  savo  namų  erdvę,  santykiuose  nori  jaustis  saugus  ir  trokšta  amžinos meilės.  Tuo  tarpu  Šaulys  prie  namų  neprisiriša,  jis  amžinas  keliautojas,  kurį traukia dar neištirti toliai. Be to Šauliui laisvė reikalinga kaip oras, o tai Skorpionui kelia pavydo priepuolius. Šioje sąjungoje be abejo dominuos Skorpionas, tačiau klausimas ar ilgai jam pavyks išlaikyti nenuoramą Šaulį šalia savęs.</p>`;
    }
    if (pora == "skorpionasoziaragis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Skorpionas ir Ožiaragis</h3> Ožiaragį žavi Skorpiono aistra ir gyvybingumas. Emocingasis Skorpionas padeda uždarajam  intravertui  Ožiaragiui  atsiskleisti  ir  pasinerti  į  šiltų  jausmų  ir nesuvaidintų  emocijų  jūrą.  Ši  pora  jaučia  stiprų  emocinį  ryšį.  Nors  daugelis Zodiako ženklų negali pakęsti Skorpiono pavydo, Ožiaragiui tai netgi patinka. Jis pavydą supranta kaipdidelės meilės įrodymą ir santykiuose su Skorpionu jaučiasi mylimas ir saugus. Be to abu ženklai ambicingi, ryžtingi ir atsakingi, siekiantys užsibrėžto tikslo, tad kartu turi puikias galimybes pasiekti finansines aukštumas. Tiesiog ideali sąjunga.</p>`;
    }
    if (pora == "skorpionasvandenis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Skorpionas ir Vandenis</h3> Skorpiono jausmai gilūs, iš savo partnerio jis tikisi visiško atsidavimo. Tuo tarpu Vandeniui meilė –tik dar vienas būdas praplėsti savo akiratį, jis labiau vadovaujasi protu,  ne  jausmais.  Vandenio  ženklo  žmonės  turi  išreikštą  laisvės  ir nepriklausomybės  siekimą,  kas  visai  nesuderinama  su  Skorpiono  pavydu  ir savininkiškumo  jausmu.  Gana  lengvabūdiškas,  šaltas  ir  plačiai  bendraujantis Vandenis nemėgsta, kai kas nors varžo jo laisvę, tad poroje su Skorpionu jausis supančiotas. Nors santykių pradžioje miegamajame šėls aistros, atslūgus pirmam susižavėjimui, pastovūs priekaištai ir barniai greičiausiai juos išskirs.</p>`;
    }
    if (pora == "skorpionaszuvys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Skorpionas ir Žuvys</h3> Skorpiono stiprybė žavi Žuvis, tuo labiau, kad neryžtingoms Žuvims reikalingas partneris į kurį jos galėtų atsiremti. Abu Zodiako ženklai jautrūs ir romantiški, 
            supranta vienas kitą iš pusės žodžio ir jaučiasi be galo artimi. Laki Žuvų vaizduotė pakursto  Skorpiono  kūrybines  galias.  Žuvys  su  malonumu  paklus  valdingam Skorpionui, bus jam atsidavusio, o pastarasis tuomėgausis. Paprastai šie ženklai jaučia didelę trauką vienas kitam. Skorpionas labai seksualus, o žuvys išradingos, tad  aistra  miegamajame  liepsnos.  Ši  sąjunga  tiesiog  ideali.  Nors  Skorpiono pavydas ir savininkiškumo jausmas gali tapti barnių priežastimi, tačiau ši pora turėtų atlaikyti laiko išbandymus</p>`;
    }
    if (pora == "saulysavinas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Šaulys ir Avinas</h3> Ši sąjunga gali būti labai harmoninga. Abu ugnies ženklai aistringi, seksualūs ir išradingi,  todėl  puikiai  dera  miegamajame.  Abu  aktyvūs,  spontaniški,  linkę  į nuotykius, tad smagiai leis laiką kartu džiaugdamiesi nerūpestingu gyvenimu. O ir kasdienėje veikloje šie ženklai puikiai papildo vienas kitą. Avinas padės mažiau ryžto turinčiam Šauliui įgyvendinti jo siekius ir planus, tuo tarpu Šaulys suteiks Avinui asmeninės erdvės, nekankindamas jokiais suvaržymais.</p>`;
    }
    if (pora == "saulysjautis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Šaulys ir Jautis</h3> Tai labai skirtingos asmenybės ir jų skirtumai sunkiai suderinami. Jaukų namų židinį vertinantis Jautis niekada nesupras vėjavaikiško Šaulio gyvenimo būdo, jo laisvės ir nuotykių troškimo. Tuo tarpu Šauliui svetimas Jaučio konservatyvumas, jis atviras pokyčiams ir trokšta pažinti visas gyvenimo spalvas. Trumpalaikis ryšys galimas, tačiau ilgainiui besikartojantys priekaištai ir užgauliojimai juos išskirs.</p>`;
    }
    if (pora == "saulysdvyniai") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Šaulys ir Dvyniai</h3> Šie du ženklai zodiako apskritime stovi vienas priešais kitą. Jie labai priešingi vienas kitam, sunkiai sutaria, tačiau gali jausti gilų dvasinį ryšį ir didelę trauką. Šaulys žvelgia į tolį, o Dvyniai geriau jaučiasi savo aplinkoje. Tačiau daug ir panašumų. Abu Zodiako ženklai gyvybingi, gyvenantys aktyvų socialinį gyvenimą ir per daug nereikalaujantys iš partnerio, tad jiems bus smagu kartu leisti laiką. Be to abu ženklai išradingi, tad puikiai dera miegamajame. Dvynių ir Šaulio pora greičiausiai susidurs su nemažais sunkumais, tačiau juos įveikus santykiai  gali būti harmoningi ir ilgalaikiai.</p>`;
    }
    if (pora == "saulysvezys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Šaulys ir Vėžys</h3> Šie Zodiako ženklai sunkiai vienas kitą supranta. Šaulys –keliautojas ir nuotykių ieškotojas  iš  prigimties,  o  tai  nedera  su  Vėžio  ramybe,  jausmingumu  ir praktiškumu. Vėžiui svetimas vėjavaikiškas Šaulio gyvenimo būdas, jo laisvės ir nuotykių troškimas, tad jis greitai pavargs nuo šaulio aktyvumo, pasiges santykių stabilumo ir jausmingumo. Tuo tarpu Šauliui gyvenimas su Vėžiu ilgainiui taps nuobodus. Jų poreikiai ir tikslai labai skirtingi. Trumpalaikis ryšys galimas, tačiau ilgalaikė sąjunga mažai tikėtina.</p>`;
    }
    if (pora == "saulysliutas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Šaulys ir Liūtas</h3> Ideali  sąjunga.  Abu  Ugnies  ženklai  siekia  panašių  tikslų,  mėgsta  nuotykius, avantiūras ir laisvę. Savimi pasitikintis Liūtas žino kelius į Šaulio aistrą. Meilę abu supranta labai panašiai, yra romantiški ir labai seksualūs, tad miegamajame bus karšta.  Šauliui  patinka  Liūto  stiprybė  ir  ryžtas,  tuo  tarpu  Liūtą  žavi  Šaulio teisingumo jausmas. Ši pora puikiai leis laiką kartu, o judviejų bendras gyvenimas taps aistringu nuotykiu. Dviese jie gali pasiekti to, kas atrodytų neįmanoma.</p>`;
    }
    if (pora == "saulysmergele") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Šaulys ir Mergelė</h3> Abu Zodiako ženklai intelektualūs, tačiau nepriklausomas vėjavaikis Šaulys neturi nieko bendro su praktiška, viską planuojančia Mergele. Šaulys –žaidėjas, jis gyvena šia diena, per daugnieko neplanuodamas, tuo tarpu Mergelė kuria saugią ateitį  sau  ir  savo  artimiesiems.  Šaulys  neabejingas  prabangai,  o  Mergelė paprasta, kukli ir praktiška, ji nelinkusi švaistyti pinigų niekams. Šauliui nuolat reikia naujų pojūčių, jis nelinkęs įsipareigoti, tad be sąžinės graužaties gali dalintis savo aistra su keliais partneriais. Mergelė to niekada nesupras, įsipareigojimai jai tiesiog būtini ir šis esminis skirtumas kels didelę įtampą jų santykiuose. Prireiks didelių pastangų, kad ši pora galėtų būti kartu ilgesnį laiką.</p>`;
    }
    if (pora == "saulyssvarstykles") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Šaulys ir Svarstyklės</h3> Žavingos ir švelnios Svarstyklės traukia Šaulį, o Svarstyklės nelieka abejingos Šaulio  gyvybingumui  ir  nuotykių  troškimui.  Abu  Zodiako  ženklai  romantiški optimistai, tik Svarstyklės labiau linkusios įsipareigoti, kas visai nebūdinga Šauliui, kuris bijo prarasti savo nepriklausomybę. Visgi Svarstyklės pakankamai gudrios, kad paleistų tokį laimikį. Jos neriboja Šaulio laisvės, kas padeda ugnies ženklui apsispręsti susieti savo gyvenimą su jomis. Taigi Svarstyklės nesunkiai išlaikys vėjavaikišką, nepastovų Šaulį šalia savęs. Jų sąjunga bus kupina džiaugsmingų akimirkų, kartu jie jausis laisvai ir smagiai. Tiesiog puiki pora.</p>`;
    }
    if (pora == "saulysskorpionas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Šaulys ir Skorpionas</h3> Skorpioną žavi nuoširdus, atviras ir nepriklausomas Šaulys. Abu Zodiako ženklai aistringi  ir  seksualūs,  abu  mėgsta  pramogas  ir  nuotykius.  Tačiau  Skorpiono jausmai  gilūs,  o  Šaulio  šiek  tiek  paviršutiniški.  Skorpionas  labai  pavydus,  jis vertina  savo  namų  erdvę,  santykiuose  nori  jaustis  saugus  ir  trokšta  amžinos meilės.  Tuo  tarpu  Šaulys  prie  namų  neprisiriša,  jis  amžinas  keliautojas,  kurį traukia dar neištirti toliai. Be to Šauliui laisvė reikalinga kaip oras, o tai Skorpionui kelia pavydo priepuolius. Šioje sąjungoje be abejo dominuos Skorpionas, tačiau klausimas ar ilgai jam pavyks išlaikyti nenuoramą Šaulį šalia savęs.</p>`;
    }
    if (pora == "saulyssaulys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Šaulys ir Šaulys</h3> Šiedu nepriklausomi, laisvę mylintys ir vietoje nenustygstantys žmonės atrodo skirti vienas kitam. Abu optimistai, tyrinėtojai, filosofai.. Juos traukia nuotykiai, dar neištirti toliai. Tačiau jų įdomūs, jaudinantys, chaotiški, nuotykių kupini santykiai sunkiai nuspėjami. Būdami kartu jie atskleidžia ne pačias geriausias vienas kito 
            savybes. Abu nevaržo savęs įsipareigojimais, kiekvienas turi savų interesų bei pomėgių, tad dažniausiai anksčiau ar vėliau pasuka skirtingais keliais, tačiau dažnu atveju lieka gerais draugais.</p>`;
    }
    if (pora == "saulysoziaragis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Šaulys ir Ožiaragis</h3> Abu Zodiako ženklai yra intelektualūs, ambicingi ir draugiški. Abu siekia didelių tikslų, kurie ir gali juos suvienyti, deja, greičiausiai neilgam. Ožiaragiui pinigai suteikia saugumo jausmą ir galimybę palaikyti solidų įvaizdį. Tuo tarpu Šaulys pinigus leidžia kelionėms, nuotykiams ir kitiems gyvenimo malonumams. Be to Šaulys  nepataisomas  optimistas,  o  Ožiaragis  labiau  linkęs  į  pesimistines nuotaikas. Šie skirtumai ilgainiui gerokai apkartins poros santykius. Be to ir Šaulio nenoras įsipareigoti privers Ožiaragį santykiuose jaustis nesaugiai. Ši sąjunga gali gyvuoti tik tol, kol juos sieja bendras tikslas.</p>`;
    }
    if (pora == "saulysvandenis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Šaulys ir Vandenis</h3> Abu Zodiako ženklai myli gyvenimą ir mėgaujasi jo teikiamais malonumais be suvaržymų. Jų požiūriai į meilę ir gyvenimą labai panašūs, juos sieja humaniški idealai  ir  noras  patirti  kuo  daugiau  nuotykių.  Vandenis  supranta  Šaulio nepriklausomybę  ir  nesistengia  jo  kontroliuoti.  Jie  su malonumu  leidžia  laiką vienas kito draugijoje ir supranta vienas kitą iš pusės žodžio. Abu ženklai be galo aistringi.  Vandenis  dievina  naujoves,  o  Šaulys  mėgsta  eksperimentuoti,  tad miegamajame ši pora tikrai neliūdės. Emocinis ryšys gali atsirasti ne iš karto, tačiau jeigu taip nutiks, ši pora gali praleisti kartu visą gyvenimą.</p>`;
    }
    if (pora == "saulyszuvys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Šaulys ir Žuvys</h3> Nors  miegamajame  šie  Zodiako  ženklai  suderinami,  tačiau  kasdieniame gyvenime  jie  neišvengiamai  susidurs  su  nemenkomis  problemomis.  Žuvys sukurtos  meilei,  jos  nepaprastai  jausmingos  ir  švelnios,  vertinančios  ne  tik kūniškus, bet ir dvasinius malonumus, kuriuos suteikia šis jausmas. Tuo tarpu Šaulys į santykius žiūri kaip į nuotykį. Mylėti Šaulys tikrai moka, tačiau savaip. Nepriklausomas Šaulys nesuteiks Žuvims tiek dėmesio, kiek jo tikėsis Žuvys, o tai kankins jautrias ir viską giliai į širdį imančias Žuvis. Be to aštrus Šaulio liežuvis neretai gali užgauti jautruoles Žuvis.</p>`;
    }
    if (pora == "ooziaragisavinas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Ožiaragis ir Avinas</h3> Gana konfliktiškas derinukas. Avino polinkis rizikuoti pinigais ar švaistyti  juos nereikalingiems  dalykams  (žiūrint  Ožiaragio  akimis),  kels  Ožiaragio nepasitenkinimą.  Tuo  tarpu  optimistą  Aviną  erzins  gana  dažnos  pesimistinės Ožiaragio nuotaikos. Taigi, šie Zodiako ženklai kalba skirtingomis kalbomis ir suprasti vienas kitą jiems greičiausiai nepavyks..</p>`;
    }
    if (pora == "oziaragisjautis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Ožiaragis ir Jautis</h3> Tiesiog ideali sąjunga. Abu žemės ženklai puikiai supranta vienas kita, siekia panašių  tikslų,  mėgsta  komfortą,  gražius  daiktus,  vertina  saugumo  jausmą  ir šeimos židinį. Meilę taip pat abu supranta labai panašiai, yra aistringi ir seksualūs, 
            nelinkę į išdavystę. Be to, tiek Jautis, tiek Ožiaragis, moka ir mėgsta kalbėtis, tad nesunkiai  išspręs  bet  kokį  kilusį  konfliktą.  Jie  papildys  ir  palaikys  vienas  kitą įvairiose gyvenimo situacijose, kartu planuos namųbiudžetą, pinigines investicijas ir kt. Taigi, ši sąjunga itin harmoninga, galima sakyti net tobula.</p>`;
    }
    if (pora == "oziaragisdvyniai") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Ožiaragis ir Dvyniai</h3> Tai labai skirtingos asmenybės ir jų skirtumai sunkiai suderinami. Darbštus, rimtas ir  ambicingas  Ožiaragis  nesupranta  gyvybingų,  lengvabūdiškų,  flirtuoti mėgstančių  Dvynių,  o  Ožiaragio  rimtumas  svetimas  Dvyniams.  Kita  vertus Ožiaragio suteikiamą saugumą ir stabilumą Dvyniai tikrai įvertins ir pasistengs jį prablaškyti nuo Ožiaragį amžinai kamuojančių darbo ir karjeros problemų. Dėl skirtingų poreikių miegamajame šiems ženklams taip pat gali kilti problemų. Visgi esant didelei meilei judviejų sąjunga įmanoma, tačiau Dvynys turės suvaldyti savo lengvabūdišką prigimtį, o Ožiaragis pasitelkti kantrybę ir nekankinti oro ženklo priekaištais.</p>`;
    }
    if (pora == "oziaragisvezys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Ožiaragis ir Vėžys</h3> Šie du vienas priešais kitą Zodiako rate stovintys ženklai jaučia didelę tarpusavio trauką, tačiau karjeristas Ožiaragis turi daug pomėgių ir užsiėmimų, todėl neskiria Vėžiui  pakankamai  laiko  ir  dėmesio,  tuo  jį  labai  liūdindamas.  Vėžys  jautrus, jausmingas, trokštantis mylėti ir būti mylimas, tuo tarpu Ožiaragis gana šiurkštus, šaltas ir valdingas. Šie skirtumai greičiausiai taps iširusių santykių priežastimi, bet visgi  ilgalaikė  sąjunga  galima,  jeigu  abu  Zodiako  ženklai  pasistengs  suprasti vienas kitą, išmoks nepastebėti partnerio netobulumo ir prisiderinti.</p>`;
    }
    if (pora == "oziaragisliutas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Ožiaragis ir Liūtas</h3> Praktiškas, atsargus ir taupus Ožiaragis stengiasi pažaboti romantišką ir dosnų Liūtą. Ožiaragiui svetimas Liūto poreikis išlaidauti. Liūtas nesulauks iš partnerio pagyrų ir susižavėjimo šūksnių, o jam to reikia kaip oro. Abu zodiako ženklai seksualūs,  tačiau  jų  poreikiai  miegamajame  labai  skirtingi.  Liūtai  mėgsta romantiką, flirtą, komplimentus, žinoma išsakytus jo didingai asmenybei. Be to jie savo meilės guolį pagyvina įvairiausiais erotiniais žaidimais. Tuo tarpu Ožiaragis nesupranta kam viso to apskritai reikia, tad Liūtui jis atrodo pernelyg suvaržytas ir šaltas. Be to niekas šioje poroje nenori nusileisti. Šie skirtumai kels įtampą judviejų santykiuose ir galiausiai abu pasuks skirtingais keliais.</p>`;
    }
    if (pora == "oziaragismergele") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Ožiaragis ir Mergelė</h3> Ožiaragio  ambicijos  ir  sėkmės  troškulys  puikiai  dera  su  Mergelės  tobulumo paieškomis. Abu Zodiako ženklai darbštūs, dalykiški ir disciplinuoti, siekiantys užsibrėžtų tikslų. Jie nuoširdžiai domisi ir žavisi vienas kitu. Ožiaragis suteikia Mergelei taip trokštamo stabilumo ir finansinio saugumo. Mergelė įkvepia Ožiaragį 
            dideliems darbams. Jie vienas kitą papildo ir kartu jaučiasi saugūs. Kartu kuria jaukų  namų  židinį  ir  tuo  didžiuojasi.  Miegamajame  ši  pora  suderinama,  tik pagrindinis  vaidmuo  paprastai  atitenka  Ožiaragiui.  Taigi,  ši  sąjunga  itin harmoninga, galima sakyti net tobula.</p>`;
    }
    if (pora == "oziaragissvarstykles") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Ožiaragis ir Svarstyklės</h3> Svarstykles traukia Ožiaragio seksualumas, tačiau tuo visi geri dalykai ir baigiasi. Svarstyklės mėgsta bendravimą ir naktinį gyvenimą, jos dažni vakarėlių svečiai, tuo tarpu Ožiaragis tokio gyvenimo būdo nesupranta, jis vienišius, apsiribojantis vos  keliais  artimais  ir  patikimais  draugais.  Svarstyklėms  reikalingas  išskirtinis dėmesys  ir  šiluma, tuo  tarpu  Ožiaragis  blaiviai  mąstantis,  šaltas  ir  uždaras Zodiako ženklas, jis slepia savo jausmus po devyniais užraktais. Be to Ožiaragis per  daug  užsiėmęs  savo  karjera  ir  materialinės  gerovės  kūrimu,  kad  rastų pakankamai  laiko  Svarstyklėms.  Nusivylimas  ir  vienišumo  jausmas  pastūmės romantikes Svarstykles ieškoti laimės kitur.</p>`;
    }
    if (pora == "oziaragisskorpionas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Ožiaragis ir Skorpionas</h3> Ožiaragį žavi Skorpiono aistra ir gyvybingumas. Emocingasis Skorpionas padeda uždarajam  intravertui  Ožiaragiui  atsiskleisti  ir  pasinerti  į  šiltų jausmų  ir nesuvaidintų  emocijų  jūrą.  Ši  pora  jaučia  stiprų  emocinį  ryšį.  Nors  daugelis Zodiako ženklų negali pakęsti Skorpiono pavydo, Ožiaragiui tai netgi patinka. Jis pavydą supranta kaip didelės meilės įrodymą ir santykiuose su Skorpionu jaučiasi mylimas ir saugus. Be to abu ženklai ambicingi, ryžtingi ir atsakingi, siekiantys užsibrėžto tikslo, tad kartu turi puikias galimybes pasiekti finansines aukštumas. Tiesiog ideali sąjunga.</p>`;
    }
    if (pora == "oziaragissaulys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Ožiaragis ir Šaulys</h3> Abu Zodiako ženklai yra intelektualūs, ambicingi ir draugiški. Abu siekia didelių tikslų, kurie ir gali juos suvienyti, deja, greičiausiai neilgam. Ožiaragiui pinigai suteikia saugumo jausmą ir galimybę palaikyti solidų įvaizdį. Tuo tarpu Šaulys pinigus leidžia kelionėms, nuotykiams ir kitiems gyvenimo malonumams.  Be  to Šaulys  nepataisomas  optimistas,  o  Ožiaragis  labiau  linkęs  į  pesimistines nuotaikas. Šie skirtumai ilgainiui gerokai apkartins poros santykius. Be to ir Šaulio nenoras įsipareigoti privers Ožiaragį santykiuose jaustis nesaugiai. Ši sąjunga galigyvuoti tik tol, kol juos sieja bendras tikslas.</p>`;
    }
    if (pora == "oziaragisoziaragis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Ožiaragis ir Ožiaragis</h3>Šiedu žmonės labai panašūs, abu atsargūs, santūrūs, darbštūs ir taupūs, abu vertina saugumą ir stabilumą, tad tarp jų tikėtinas glaudus ryšys. Be to jie visada ras temų intelektualiampokalbiui ir santykių pradžioje jausis atradę savo sielos 
            dvynį. Tačiau abu jie karjeristai, tad šioje poroje greičiausiai nebus kas rūpinasi namais, šeima, nebus kas įpučia santykiams naujos gyvybės, tad ilgainiui gali tapti nuobodu. Jie nemoka ilsėtis, atsipalaiduoti ir giliai širdyje kiekvienas trokšta partnerio,  kuris  įneštų  į  jų  gyvenimą  daugiau  spalvų,  aistros,  gyvenimo džiaugsmo. Bet kadangi abu vertina ištikimybę, tai greičiausiai ir liks tik svajonėse. Jeigu ši pora tokiomis sąlygomis sugebės išsaugoti meilę, jie gali likti kartu ilgam.</p>`;
    }
    if (pora == "oziaragisvandenis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Ožiaragis ir Vandenis</h3> Šie Zodiako ženklai visiškos priešingybės. Ožiaragis praktiškas, konservatyvus ir gana  taupus.  Jam  svarbus  jaukus  namų  židinys.  Santykiuose  jis  nori  jaustis saugus ir vertina ištikimybę. Tuo tarpu Vandenis nei viena iš šių savybių pasigirti negali.  Jis  nepriklausomas,  nenuspėjamas,  amžinai  trokštantis  permainų. Vandenis neapsiriboja namais, jį jaudina globalios problemos, jis nuoširdžiai tiki galįs pakeisti pasaulį. O ir miegamajame Ožiaragio santūrumas Vandeniui nelabai suprantamas. Be to jis linkęs bent kartais nuklysti į šalį. Tokia sąjunga iš abiejų Zodiako ženklų pareikalaus didelių pastangų ir galiausiai vistiek greičiausiai nebus sėkminga.</p>`;
    }
    if (pora == "oziaragiszuvys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Ožiaragis ir Žuvys</h3> Šiuodu Zodiako ženklus sieja abipusė trauka ir supratimas. Žuvys nuoširdžiai žavisi Ožiaragio tvirtybe, taip leisdamos jam pasijusti labai reikšmingu. Tuo tarpu praktiškas Ožiaragis suteikia svajoklėms Žuvims stabilumo ir saugumo jausmą, o ir pats Ožiaragis su švelniomis ir jausmingomisŽuvimis jaučiasi saugus. Žinoma šioje poroje Ožiaragis užima vadovaujančią poziciją ir Žuvys tam nesipriešina, joms reikia tvirto peties. Šios dvi labai skirtingos asmenybės viena kitą papildo ir patenkina viena kitos poreikius, todėl ši sąjunga gali būtinet labai sėkminga.</p>`;
    }
    if (pora == "vandenisavinas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vandenis ir Avinas</h3> Aktyvus ir energingas Avinas traukia permainų trokštantį Vandenį, o Aviną žavi Vandenio nenuspėjamumas. Be to Vandenis įkvepią Aviną ir pasikrauna iš jo energijos. Abu Zodiako ženklai atviri naujovėms ir aktyviam gyvenimo būdui. Jie puikiai vienas kitą supranta ir gerbia vienas kito laisvę. Taigi, ši sąjunga gana įdomi ir harmoninga.</p>`;
    }
    if (pora == "vandenisjautis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vandenis ir Jautis</h3> Gana sudėtingas derinukas. Trumpalaikis meilės ryšys galimas, tačiau ilgalaikėje perspektyvoje naujovių ir nuotykių trokštančiam Vandeniui ramus ir konservatyvus Jautis  atrodys  pernelyg  nuobodus.  Tuo  tarpu  Jautį  erzins  nerimtas  Vandenio požiūris į meilę, ilgalaikius santykius, laisvės ir naujų pojūčių troškimas. Taigi, šie Zodiako ženklai labai skirtingi, jų skirtumai sunkiai suderinami, todėl kurti jaukų šeimos lizdelį kartu jiems kažin ar pavyks.</p>`;
    }
    if (pora == "vandenisdvyniai") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vandenis ir Dvyniai</h3> Tai dvi giminingos sielos, einančios per gyvenimą koja kojon, suprantančios viena kitą iš pusės žodžio. Abu gyvybingi, mėgstantys kalbėtis, bendrauti, susipažinti su naujais žmonėmis. Judviejų bendras gyvenimas bus kupinas smagių kelionių, 
            nuotykių. Šios poros santykius lydi sėkmė, tačiau tai nereiškia, kad nuomonių nesutapimų ar ginčų jų kasdieniniame gyvenime nebus. Santykiai gali pabosti ir atšalti dėl pernelyg vienodos veiklos, pomėgių, todėl jau nuo draugystės pradžios abiems ženklams vertėtų pasistengti išlaikyti savo individualumą</p>`;
    }
    if (pora == "vandenisvezys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vandenis ir Vėžys</h3> Šie du Zodiako ženklai jaučia didelę trauką vienas kitam, tačiau tai ir viskas. Aistra ilgai netruks, o pastovūs priekaištai ir barniai juos išskirs. Švelnus, jausmingas ir dvasingas Vėžys trokšta artumo, saugumo ir gilių jausmų, o iš prigimties gana lengvabūdiškas, šaltas ir plačiai bendraujantis Vandenis nemėgsta, kai kas nors varžo jo laisvę, tad poroje su Vėžiu jausis supančiotas. Ilgalaikė sąjunga galima tik tuo atveju, jeigu abu ženklai supras vienas kito poreikius, Vandenis neužgaus jautrios Vėžio sielos, o pastarasis neribos Vandenio laisvės.</p>`;
    }
    if (pora == "vandenisliutas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vandenis ir Liūtas</h3> Šie du ženklai zodiako apskritime stovi vienas priešais kitą. Santykių pradžioje jie nuoširdžiai domisi vienas kitu ir jaučia seksualinę trauką, tačiau Vandenio polinkis analizuoti ir kritikuoti gali sužaloti Liūto pasitikėjimą savimi ir suduoti skaudų smūgį jo savimeilei. Abu Zodiako ženklai socialiai aktyvūs, mėgstantys megzti naujas pažintis, tačiau Liūtas nori būti dėmesio centre, o Vandenį tai erzina. Meilę jie taip pat supranta skirtingai. Liūtas nuoširdžiai mylintis, romantiškas ir sentimentalus, o Vandenis žaidžia santykius. Jis nelinkęs įsipareigoti ir prisileisti partnerį pernelyg arti, kas neabejotinai skaudina Liūtą. Santykių pradžia graži, bet greičiausiai Liūto meilė išblės taip greitai, kaip ir prasidėjo.</p>`;
    }
    if (pora == "vandenismergele") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vandenis ir Mergelė</h3> Abu Zodiako ženklai intelektualūs, smalsūs ir racionaliai mąstantys. Abu meilę supranta labiau protu nei širdimi. Bet tai ir viskas kas juos sieja. Vandenis veidu atsisukęs į išorinį pasaulį, jis kūrėjas, novatorius, kurį jaudina globalios pasaulio problemos. Jis nuoširdžiai tiki, kad gali kažką pakeisti. Tuo tarpu Mergelė nežiūri taip toli, ji apskritai nelinkusi išeiti iš savo komforto zonos. Mergelė gyvena savo susikurtame pasaulyje, jai reikia stabilumo ir finansinio saugumo, ji linkusi viską pasverti, kelis kartus pamatuoti. Platūs Vandenio užmojai ją gąsdina ir verčia jaustis  nesaugiai.  Jie  bus  puikūs  partneriai  darbe,  bet  prasti  meilužiai miegamajame.  Trauka  minimali.  Ilgalaikis  ryšys  įmanomas,  tačiau  labiau  iš pripratimo nei iš meilės ir tai bus rimtas iššūkis abiems ženklams.</p>`;
    }
    if (pora == "vandenissvarstykles") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vandenis ir Svarstyklės</h3> Šioje poroje yra viskas, kas gali užtikrinti jų tvirtą, ilgalaikį ryšį. Juos jungia meilė gyvenimui ir aplinkai. Abu Zodiako ženklai socialūs, mėgstantys leisti laiką draugų būryje,  abu  neabejingi  menui,  grožiui,  globalioms  pasaulio  problemoms. Neryžtingas, dažnai abejoti linkusias Svarstykles žavi vandenio ryžtas, jos su malonumu perda sprendimų priėmimą Vandeniui ir džiaugiasi atsikračiusios šios naštos. Jų bendras gyvenimas bus kupinas pasitikėjimo ir švelnios romantikos. Nesutarimų žinoma kils, bet juos bus nesunku išspręsti. Šiuos ženklus jungia yypatingas  ryšys  ir  jie  supranta  vienas  kitą  iš  pusės  žodžio.  Tiesiog  tobula sąjunga.</p>`;
    }
    if (pora == "vandenisskorpionas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vandenis ir Skorpionas</h3> Skorpiono jausmai gilūs, iš savo partnerio jis tikisi visiško atsidavimo. Tuo tarpu Vandeniui meilė –tik dar vienas būdas praplėsti savo akiratį, jis labiau vadovaujasi protu,  ne  jausmais.  Vandenio  ženklo  žmonės  turi  išreikštą  laisvės  ir nepriklausomybės  siekimą,  kas  visai  nesuderinama  su  Skorpiono  pavydu  ir savininkiškumo  jausmu.  Gana  lengvabūdiškas,  šaltas  ir  plačiai  bendraujantis Vandenis nemėgsta, kai kas nors varžo jo laisvę, tad poroje su Skorpionu jausis supančiotas. Nors santykių pradžioje miegamajame šėls aistros, atslūgus pirmam susižavėjimui, pastovūs priekaištai ir barniai greičiausiai juos išskirs.</p>`;
    }
    if (pora == "vandenissaulys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vandenis ir Šaulys</h3> Abu Zodiako ženklai myli gyvenimą ir mėgaujasi jo teikiamais malonumais be suvaržymų. Jų požiūriai į meilę ir gyvenimą labai panašūs, juos sieja humaniški idealai  ir  noras  patirti  kuo  daugiau  nuotykių.  Vandenis  supranta Šaulio nepriklausomybę  ir  nesistengia  jo  kontroliuoti.  Jie  su  malonumu  leidžia  laiką vienas kito draugijoje ir supranta vienas kitą iš pusės žodžio. Abu ženklai be galo aistringi.  Vandenis  dievina  naujoves,  o  Šaulys  mėgsta  eksperimentuoti,  tad miegamajame ši pora tikrai neliūdės. Emocinis ryšys gali atsirasti ne iš karto, tačiau jeigu taip nutiks, ši pora gali praleisti kartu visą gyvenimą.</p>`;
    }
    if (pora == "vandenisoziaragis") {
        document.querySelector(".result").innerHTML =
            `<p><h3Vandenis ir Ožiaragis></h3> Šie Zodiako ženklai visiškos priešingybės. Ožiaragis praktiškas, konservatyvus ir gana taupus.  Jam  svarbus  jaukus  namų  židinys.  Santykiuose  jis  nori  jaustis saugus ir vertina ištikimybę. Tuo tarpu Vandenis nei viena iš šių savybių pasigirti negali.  Jis  nepriklausomas,  nenuspėjamas,  amžinai  trokštantis  permainų. Vandenis neapsiriboja namais, jį jaudina globalios problemos, jis nuoširdžiai tiki galįs pakeisti pasaulį. O ir miegamajame Ožiaragio santūrumas Vandeniui nelabai suprantamas. Be to jis linkęs bent kartais nuklysti į šalį. Tokia sąjunga iš abiejų Zodiako ženklų pareikalaus didelių pastangų ir galiausiai vistiek greičiausiai nebus sėkminga.</p>`;
    }
    if (pora == "vandenisvandenis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vandenis ir Vandenis</h3> Tai stabili ir tvirta sąjunga, du panašiai mąstantys, ir daug bendro turintys žmonės. Abu myli gyvenimą ir mėgaujasi jo teikiamais malonumais be suvaržymų. Jų požiūriai į daugelį dalykų labai panašūs, todėl jie bus geri draugai ir kompanjonai, su malonumu leis laiką vienas kito draugijoje, ir sutars beveik dėl visko. Tiesa jų ryšys  nebus  labai  gilus,  bet  nei  vienam  dėl  to  problemų  kilti  neturėtų. Miegamajame  karšta  taip  pat  nebus, tačiau  jie  išreiškš  savo  meilę  per  kitus dalykus ir nevaržys vienas kito laisvės, kas Vandeniui yra labai svarbu. Taigi, ši pora gali praleisti kartu visą gyvenimą.</p>`;
    }
    if (pora == "vandeniszuvys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Vandenis ir Žuvys</h3> Romantiškas  Žuvų  žavesys  intriguoja  Vandenį,  o  Žuvis  žavi  aukšti  Vandeniosiekiai ir idealai. Juos sieja abipusė trauka ir supratimas. Šie žmonės gali būti labai artimi, tačiau kažin ar tai truks ilgai. Santykiams įsibėgėjus jie pradės geriau vienas kitą pažinti. Neryžtingoms, nesavarankiškoms Žuvims reikia tvirto peties, žmogaus  kuris  jomis  pasirūpintų,  suteiktų  joms  saugumo  jausmą.  Tuo  tarpu Vandenis to nesupranta, jis nenori būti kažkieno “ramsčiu”, jam reikia lygiaverčio partnerio. Santykiai pašlys dar labiau jeigu jausmingosios Žuvys pradės reikalauti iš  Vandenio  pastovaus dėmesio  ir  nuolatinių  meilės  prisipažinimų.  Vandenis apskritai  nemėgsta  kai  iš  jo  ko  nors  reikalaujama.  Vos  tik  Vandenis  pasijus supančiotas, jis pasistengs ištrūkti ir pasuks savais keliais.</p>`;
    }
    if (pora == "zuvysavinas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Žuvys ir Avinas</h3> Energingas užkariautojas Avinas ir ramios, švelnios svajoklės Žuvys. Iš pirmo žvilgsnio sudėtingas, tačiau gana dažnas, derinys. Avinas trokšta vadovauti, o Žuvys nieko prieš nusileisti, joms netgi reikia tvirto partnerio peties. Taigi, Avinas suteikia Žuvims saugumo jausmą ir aktyvesni gyvenimą, tuo tarpu Žuvys suteikia Avinui  vidinės  ramybės.  Lyg  ir  visi  patenkinti..,  tik  Avinas  turėtų  pasistengti neužgauti jautrios Žuvų sielos.</p>`;
    }
    if (pora == "zuvysjautis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Žuvys ir Jautis</h3> Jautis ir Žuvys -tai pora, kurioje abu Zodiako ženklai natūraliai vienas kitą traukia ir papildo. Jautis žavisi Žuvų dvasiniu pasauliu ir džiaugiasi galėdamas suteikti joms saugumo jausmą, kurio Žuvims itin reikia. Be to realistas Jautis svajokles Žuvis sugražina į realybę, padrąsina jas siekti užsibrėžto tikslo. Tuo tarpu Žuvys išjudina  ramų  Jautį,  praskaidrinajo  kasdienybę  romantiškomis  akimirkomis, išmoko į viską žvelgti kūrybiškiau. Taigi, šie Zodiako ženklai puikiai sutaria ir gali tapti neišskiriamais.</p>`;
    }
    if (pora == "zuvysdvyniai") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Žuvys ir Dvyniai</h3> Gana sudėtingas derinukas. Tai lyg skirtingų pasaulių atstovai. Vienas aktyvus ir gyvybingas,  be  galo  mėgstantis  bendrauti,  flirtuoti,  kitas  uždaras  vienišius mąstytojas,  trokštantis  meilės,  romantikos  ir  visiško  atsidavimo.  Jų  santykius 
            lydės  įtarimai,  priekaištai  ir  nepasitikėjimas,  todėl  ilgalaikis  ryšys  vargiai įmanomas.</p>`;
    }
    if (pora == "zuvysvezys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Žuvys ir Vėžys</h3> Abu vandens ženklai jautrūs, švelnūs, rūpestingi, jaučiantys vienas kito nuotaikas ir suprantys vienas kitą iš pusės žodžio. Abu emocionalūs, ieškantys gilių jausmų, be to kūrybingi, apdovanoti lakia vaizduote, tik Žuvys –svajoklės, gebančios generuoti naujas idėjas, o Vėžys rūpinasi jų įgyvendinimu realybėje, tad kartu jie gali paversti svajones realybe. Vėžys lepina Žuvis išskirtiniu dėmesiu, o Žuvys praturtina vėžio gyvenimą romantiškomis akimirkomis. Tiesiog ideali pora, kurios bendras gyvenimas žada daug laimingų akimirkų.</p>`;
    }
    if (pora == "zuvysliutas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Žuvys ir Liūtas</h3> Liūtas  aktyvus  ir  valdingas  ženklas.  Žuvys –jautrios,  uždaros,  mažakalbės vienišės, dažnai nepasitikinčios savimi. Jie intriguoja vienas kitą savo skirtumais, tačiau mažai vienas kitą papildo. Liūto karštakošiškumas ir noras būti dėmesio centre  visiškai  nedera  su  su  uždaru  Žuvų  gyvenimo  būdu,  jų  santūrumu  ir svajingumu.  Be  to  abu  nori  gauti,  bet  ne  duoti.  Tikėtinas  trumpalaikis susižavėjimas, bet neužilgo Liūtas ims dairytis kito partnerio.</p>`;
    }
    if (pora == "zuvysmergele") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Žuvys ir Mergelė</h3> Mergelei meilė –tai saugumas ir intelektualinis suderinamumas. Žuvims meilė –tai didingas, visa apimantis jausmas. Iš  pradžių Mergelė jaučia didelę trauką Žuvims. Sentimentalios, į pačią meilę įsimylėjusios Žuvys intriguoja Mergelę, o Žuvis  žavi  aštrus  analitinis  Mergelės  protas.  Tačiau  Žuvų  uždarukas, ekstravagancija  ir  svajingumas  ilgainiui  pradeda  erzinti  pragmatišką  ir disciplinuotą  Mergelę.  Be  to,  kažin  ar  Mergelė  pripras  prie  seksualinių  Žuvų poreikių. Kita vertus abu Zodiako ženklai rūpestingi ir atsidavę, kas gali jiems padėti išlikti kartu.</p>`;
    }
    if (pora == "zuvyssvarstykles") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Žuvys ir Svarstyklės</h3> Jų Romano pradžia nuostabi, tačiau vėliau pradeda lįsti skirtumai kurie griauna jų meilės  iliuziją.  Svarstyklės  neapsiriboja  savo  partnerio  draugija,  jos  mėgsta bendrauti,   leisti   laiką  su  draugas.  Joms  nesvetimas  naktinis  gyvenimas, vakarėliai,  įvairiausios  pramogos.  Tuo  tarpu  Žuvys  gyvena  savo  svajonių pasaulyje.  Nesulaukdamos  pakankamai  dėmesio  iš  partnerio  jos  jaučiasi nevertinamos,  apleistos,  nevengia  priekaištauti,  kaltinti  Svarstyklių,  nuo  ko santykiuose  atsiranda  įtampa.  Žuvys  jaučia,  kad  Svarstyklių  žavesys  ir atsidavimas  labai  paviršutiniški,  tačiau  priversti  Svarstykles  elgtis  kitaip neįmanoma,  kol  jos  pačios  to  nepanorės.  Be  to  Žuvims  reikia  stipraus,  jas globojančio partnerio, o Svarstyklės nelinkusios būti kažkam atrama.</p>`;
    }
    if (pora == "zuvysskorpionas") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Žuvys ir Skorpionas</h3> Skorpiono stiprybė žavi Žuvis, tuo labiau, kad neryžtingoms Žuvims reikalingas partneris į kurį jos galėtų atsiremti. Abu Zodiako ženklai jautrūs ir romantiški, supranta vienas kitą iš pusės žodžio ir jaučiasi be galo artimi. Laki Žuvų vaizduotė 
            pakursto  Skorpiono  kūrybines  galias.  Žuvys  su  malonumu  paklus  valdingam Skorpionui, bus jam atsidavusio, o pastarasis tuo mėgausis. Paprastai šie ženklai jaučia didelę trauką vienas kitam. Skorpionas labai seksualus, o žuvys išradingos, tad  aistra  miegamajame  liepsnos.  Ši  sąjunga  tiesiog  ideali.  Nors  Skorpiono pavydas ir savininkiškumo jausmas gali tapti barnių priežastimi, tačiau ši pora turėtų atlaikyti laiko išbandymus.</p>`;
    }
    if (pora == "zuvyssaulys") {
        document.querySelector(".result").innerHTML =
            `<p><h3Žuvys ir Šaulys></h3> Nors   miegamajame  šie  Zodiako  ženklai  suderinami,  tačiau  kasdieniame gyvenime  jie  neišvengiamai  susidurs  su  nemenkomis  problemomis.  Žuvys sukurtos  meilei,  jos  nepaprastai  jausmingos  ir  švelnios,  vertinančios  ne  tik kūniškus, bet ir dvasinius malonumus, kuriuos suteikia šis jausmas. Tuo tarpu Šaulys į santykius žiūri kaip į nuotykį. Mylėti Šaulys tikrai moka, tačiau savaip. Nepriklausomas Šaulys nesuteiks Žuvims tiek dėmesio, kiek jo tikėsis Žuvys, o tai kankins jautrias ir viską giliai į širdį imančias Žuvis. Be to aštrus Šaulio liežuvis neretai gali užgauti jautruoles Žuvis.</p>`;
    }
    if (pora == "zuvysoziaragis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Žuvys ir Ožiaragis</h3> Šiuodu Zodiako ženklus sieja abipusė trauka ir supratimas. Žuvys nuoširdžiai žavisi Ožiaragio tvirtybe, taip leisdamos jam pasijusti labai reikšmingu. Tuo tarpu praktiškas Ožiaragis suteikia svajoklėms Žuvims stabilumo ir saugumo jausmą, o ir pats Ožiaragis su švelniomis ir jausmingomis Žuvimis jaučiasi saugus. Žinoma šioje poroje Ožiaragis užima vadovaujančią poziciją ir Žuvys tam nesipriešina, joms reikia tvirto peties. Šios dvi labai skirtingos asmenybės viena kitą papildo ir patenkina viena kitos poreikius, todėl ši sąjunga gali būti net labai sėkminga.</p>`;
    }
    if (pora == "zuvysvandenis") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Žuvys ir Vandenis</h3> Romantiškas  Žuvų  žavesys  intriguoja  Vandenį,  o  Žuvis  žavi  aukšti  Vandenio siekiai ir idealai. Juos sieja abipusė trauka ir supratimas. Šie žmonės gali būti labai artimi, tačiau kažin ar tai truks ilgai. Santykiams įsibėgėjus jie pradės geriau vienas kitą pažinti. Neryžtingoms, nesavarankiškoms Žuvims reikia tvirto peties, žmogaus  kuris  jomis  pasirūpintų,  suteiktų  joms  saugumo  jausmą.  Tuo  tarpu Vandenis to nesupranta, jis nenori būti kažkieno “ramsčiu”, jam reikia lygiaverčio partnerio. Santykiai pašlys dar labiau jeigu jausmingosios Žuvys pradės reikalauti iš  Vandenio  pastovaus  dėmesio  ir  nuolatinių  meilės prisipažinimų.  Vandenis apskritai  nemėgsta  kai  iš  jo  ko  nors  reikalaujama.  Vos  tik  Vandenis  pasijus supančiotas, jis pasistengs ištrūkti ir pasuks savais keliais.</p>`;
    }
    if (pora == "zuvyszuvys") {
        document.querySelector(".result").innerHTML =
            `<p><h3>Žuvys ir Žuvys</h3> Jeigu  būtų  galimybė  visas  gyvenimo  problemas  išspręsti  miegamajame,  ši sąjunga būtų tiesiog ideali. Deja, šioje poroje trūksta tvirto peties į kurį abu norėtų atsiremti. Žuvys romantikės, pernelyg nutolusios nuo realybės svajotojos, be to dar ir labai jautrios. Šie žmonės supranta vienas kitą iš pusės žodžio, instinktyviai jaučia giliausius vienas kito jausmus, puikiai leidžia laimą miegamajame, tačiau yra per daug nutolę nuo realybės ir dažnai linkę savęs gailėtis. Kartais jiems net patinka  būti  kankinio  vaidmenyje.  O  jeigu  taip  elgsis  abu,  tai  kas  spręs elementarias gyvenimiškas problemas? Sąjunga galima ir gali būti laiminga, jei vienas iš partnerių prisiims stipresniojo vaidmenį.</p>`;
    }


})