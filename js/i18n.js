const baFlag = $(".ba-flag");
const ukFlag = $(".uk-flag");

const translations = {
    moreEN: "FIND OUT MORE",
    moreBA: "SAZNAJ VIŠE",
    main_titleEN: "THIS IS BOSNIA!",
    main_titleBA: "OVO JE BOSNA!",
    main_subtitleEN: "Places you must visit.",
    main_subtitleBA: "Lokacije koje morate posjetiti.",
    wild_horses_titleEN: "Wild horses in Livno",
    wild_horses_titleBA: "Divlji konji u Livnu",
    wild_horses_contentEN: `You probably didn’t know that apart from Mongolia and Iceland,
     Livno is the only place in the world where you can see herds of wild horses roaming freely across vast fields.
      At the base of the mountain Cincar next to the city itself you can find number of unbelievably beautiful wild horses.
       These horses descend from domestic ones which were let to roam free by their owners sometimes in the 1950s and 
       it’s estimated that there is more than 400 of them nowadays.
        Borova glava is an organization stationed on the Cincar mountain which together with municipality of Livno 
        takes care of these horses.`,
    wild_horses_contentBA: `Pored Mongolije i Islanda, jedino mjesto na svijetu gdje može da se vidi ovoliko divljih konja na samo jednom mjestu. Naime, u samom podnožju planine Cincar kraj grada Livna, već mnogo godina može da se pronađe veliki broj nestvarno lijepih divljih konja.
    To su zapravo potomci pitomih konja koje su vlasnici pustili na slobodu polovinom prošlog vijeka te se procjenuje da ih danas ima više od 400. Ranije su bili prepušteni sami sebi, ali danas za njih brinu planinarsko društvo
    Borova glava i Općina Livno.`,
    pocitelj_titleEN: "Počitelj",
    pocitelj_titleBA: "Počitelj",
    pocitelj_contentEN: `On the left bank of Neretva river, near the regional road Mostar-Čapljina there is a town of Počitelj.
     Built on steep and tall cliffs, buildings in this city are inspired by the oriental architecture, 
     which mixed with Mediterranean style encapsulate this town with specific energy and beauty.
      Poćitelj is mostly famous by it’s “Sahat-kula”, tall fortress which rises above the town.
       It used to be a home for sentinels who were in charge of detecting and thwarting potential enemy attacks through the Neretva valley. 
       It represents one of the most beautiful cultural and historical sights in Bosnia and Herzegovina.`,
    pocitelj_contentBA: `Na lijevoj obali Neretve, pored magistralnog puta Mostar-Čapljina, nalazi se mali grad zvani Počitelj.
     Izgrađenom na strmim i visokim liticama, Počiteljem dominiraju orijentalni građevinski stilovi, koji sa mješavinom mediteranskog stila daju ovom naselju jednu posebnu dimenziju i čar.
      Najzanimljivija građevina u Počitelju je Sahat-kula, visoka tvrđava koja se na vrhu brda izdiže iznad grada.
       Ona je bila dom stražarima koji su pazili da ne bi došlo do moguće neprijateljske invazije kroz neretvansku dolinu.
        Predstavlja jednu od najljepših kulturno-historijskih znamenitosti Bosne i Hercegovine. Teško je odlučiti šta je ljepše: grad na stijeni ili rijeka u dolini.`,
    prenj_titleEN: `Mountain Prenj`,
    prenj_titleBA: `Planina Prenj`,
    prenj_contentEN: `Prenj, also known as Bosnian Hymalai is the most beautiful, most attractive, but also the cruelest mountain in Bosnia and Herzegovina.
     Centered in the heart of Dinaric Alps mountain range, in the northern part of Herzegovina. It is surrounded by lakes and reservoirs, 
     some of which are: Boračko, Jablaničko, Grabovičko, Salakovac  and also rivers: Neretva, Ljuta, Neretvica, Bijela and Drežanka. 
     There are three cities at its base:  Konjic, Jablanica i Mostar. Prenj is among the highest mountains in Bosnia and Herzegovina and its peak is Zelena glava with altitude of 2155 meters.
      The mountain is known for its breath-taking landscapes and views which will dazzle you.`,
    prenj_contentBA: `Prenj, koji mnogi nazivaju i bosanskim Himlajima, najljepša je, najatraktivnija ali vjerovatno i najsurovija planina u Bosni i Hercegovini. 
    Smještena je u srcu dinarskih planina, u sjevernom dijelu Hercegovine. Planinu okružuju prirodna i vještačka jezera: Boračko, Jablaničko, Grabovičko, Salakovac, kao i rijeke Neretva, Ljuta, Neretvica, Bijela i Drežanka.
     U podnožju planine se nalaze tri grada: Konjic, Jablanica i Mostar. Po svojoj visini, Prenj spada i među više planine u zemlji, a njegov najviši vrh Zelena glava visok je čak 2155 metara. 
     Na planini se nalazi još nekoliko vrhova visine preko 2000 metara, poznatih po svojim nevjerovatnim krajolicima, 
     vijugavim zubčastim grebenima, kotlastim cirkovima širokog dna i strmih strana, ali i pogledima od kojih zastaje dah`,
     kravica_titleEN: `Kravica waterfall`,
     kravica_titleBA: `Vodopad Kravica`,
     kravica_contentEN: `Kravica is a waterfall near the city of Mostar and one of the most beautiful waterfalls in Europe as well as one of the most attractive destinations for tourists and locals.
      Over 2000 swimmers visit it almost every summer, it’s especially magnificent when it splits into smaller falls and enables swimmers to use them as showers  and cliffs, 
      which can be as high as 12 meters, as jumping points. Enjoyable moments can also be spent in nearby restaurants which during season work late into the night. 
      This isn’t something you should miss as the amazing ambient will smash any signs of stress into smithereens and make it a distant memory.`,
     kravica_contentBA: `Vodopad Kravica nalazi se nedaleko od Mostara i jedan je od najljepših vodopada na Evropskom kontinentu. 
     Također, jedna je od najatraktivnijih lokacija za turiste pa i lokalne posjetioce. U jednom ljetnom danu zna ga posjetiti više od 2000 kupača. 
     Posebno je atraktivan kada se podijeli tvoreći više manjih slapova, koji kupačima mogu poslužiti kao tuševi, dok im velike sedrene mase, visoke i do 12 metara, 
     služe kao skakaonice. Ugodne trenutke svi posjetioci mogu provesti i u obližnjim restoranima koji u sezoni rade dokasno navečer. Ovakvo nešto ne treba propustiti, 
     jer će vam veličanstveni ambijent stresni ritam svakodnevnog života učiniti tek dalekim sjećanjem.`,
     vjetrenica_titleEN: `Vjetrenica cave`,
     vjetrenica_titleBA: `Pećina Vjetrenica`,
     vjetrenica_contentEN: `Vjetrenica is the largest and most well-known cave in Bosnia and Herzegovina. It’s located in the south-eastern part of Herzegovina, some 300 meters east from Zavala, 
     on the western end of Popovo polje. There have been 6700 underground canals discovered in this cave,with its 4 water flow points it represents one of UNESCO’s heritage monuments of nature since 1952. 
     What’s interesting about Vjetrenica is that the temperature throughout the whole year stays at 11 degrees Celsius and, believe it or not, it represents home to 186 animal species discovered so far. `,
     vjetrenica_contentBA: `Vjetrenica je najveća i najpoznatija pećina u Bosni i Hercegovini i nalazi se u jugoistočnom dijelu Hercegovine. 
     Smještena je 300 metara istočno od Zavale, na zapadnom rubu Popova polja. Ukupno je otkriveno oko 6.700 metara podzemnih kanala. Ovaj speleološki objekt sa čak četiri vodena toka, 
     od 1952. godine predstavlja zaštićeni spomenik prirode, a čini ga više od desetak manjih periodičnih tokova s podzemnim jezerima, smješten je na području južno-dinarskog krša, 
     12km zračne udaljenosti do Jadranskog mora. Ono što je zanimljivo je da je tokom čitave godine, temperatura u pećini oko 11 stepeni, a vjerovali i ili ne, u pećini može da se vidi čak 186 vrsta životinja!`
}

const switchLocale = (locale) => {

    [
        "#wild-horses-title",
         "#wild-horses-content",
          "#pocitelj-title",
           "#pocitelj-content",
            "#prenj-title",
             "#prenj-content",
              "#kravica-title",
               "#kravica-content",
                "#vjetrenica-title",
                 "#vjetrenica-content",
                  "#main-title",
                   "#main-subtitle",
                    "#more"
                ].forEach(t => {
                    $(t)[0].innerText = locale === "EN" ? translations[`${t.substring(1).replaceAll("-", "_")}EN`] : translations[`${t.substring(1).replaceAll("-", "_")}BA`]
                });
}

(() => {
    baFlag.click(() => {
        switchLocale("BA");
        baFlag[0].classList.add("flag-active");
        ukFlag[0].classList.remove("flag-active");
    });
    ukFlag.click(() => {
        switchLocale("EN");
        ukFlag[0].classList.add("flag-active");
        baFlag[0].classList.remove("flag-active");
    });
})();