let Input = document.querySelector("input");
let H2 = document.querySelector("h2");
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let label = document.querySelector("label")
let h3Natija = document.querySelector(".natija")
btn1.style.display = "none"
let lang = false

function Changelanguage() {
   if (lang === false) {
      btn1.style.display = "block"
      btn2.style.display = "none"
      lang = true
      label.innerHTML = 'Uzbek tili'
      h3Natija.innerHTML = 'English Language'
      Input.value = ""
      H2.innerHTML = ""
   } else {
      label.innerHTML = 'English Language'
      h3Natija.innerHTML = 'Uzbek tili'

      btn1.style.display = "none"
      btn2.style.display = "block"
      lang = false
      Input.value = ""
      H2.innerHTML = ""


   }
}

function EngToUzb() {
   let value = Input.value.toLowerCase()
   let natija


   switch (value) {
      case "elephant":
         natija = "fil"
         break;
      case "enjoy":
         natija = "rohatlaning"
         break
      case "engine":
         natija = "motor"
         break
      case "apple":
         natija = "olma"
         break
      case "home":
         natija = "uy"
         break
      case "beautiful":
         natija = "chiroyli"
         break
      case "handsome":
         natija = "kelishgan"
         break
      case "relative":
         natija = "qarindosh"
         break
      case "father":
         natija = "ota"
         break
      case "bicycle":
         natija = "velosiped"
         break
      case "magic":
         natija = "sehir"
         break
      case "mansion":
         natija = "dang'illam uy"
         break
      case "running water":
         natija = "oqar suv"
         break
      case "air condition":
         natija = "konditsioner"
         break
      case "carpet":
         natija = "gilam"
         break
      case "below":
         natija = "past tomon"
         break
      case "share":
         natija = "bo'lishmoq"
         break
      case "fabric":
         natija = "mato"
         break
      case "shanty town":
         natija = "qashshoqlar yashaydigan shahar"
         break
      case "homeless":
         natija = "uysiz"
         break
      case "shelter":
         natija = "turar joy"
         break
      case "wet":
         natija = "nam"
         break
      case "climate":
         natija = "iqlim"
         break
      case "mild":
         natija = "mayin"
         break
      case "chimmey":
         natija = "mo'ri"
         break
      case "sloping roof":
         natija = "qiya tom"
         break
      case "chalet":
         natija = "kulba"
         break
      case "avalanche":
         natija = "qor ko'chkisi"
         break
      case "upper":
         natija = "yuqori"
         break
      case "heat":
         natija = "issiqlik"
         break
      case "fall off":
         natija = "qulab tushmoq"
         break
      case "depend on":
         natija = "ga bog'liq bo'lmoq"
         break
      case "circuit":
         natija = "sxema"
         break
      case "beton":
         natija = "concrete"
         break
      case "noodle":
         natija = "lag'mon"
         break
      case "paint":
         natija = "chizmoq"
         break
      case "weather":
         natija = "fasl"
         break
      case "present":
         natija = "sovg'a"
         break
      case "control":
         natija = "boshqarmoq"
         break
      case "store":
         natija = "do'kon"
         break
      case "sew":
         natija = "tikmoq"
         break
      case "page":
         natija = "sahifa"
         break
      case "raqamli":
         natija = "digital"
         break
      case "product":
         natija = "mahsulot"
         break
      case "date":
         natija = "xurmo"
         break
      case "root":
         natija = "ildiz"
         break
      case "pollen":
         natija = "gul changi"
         break
      case "wear":
         natija = "kiymoq"
         break
      case "carry":
         natija = "tashimoq"
         break
      case "wheel":
         natija = "g'ildirak"
         break
      case "steel":
         natija = "po'lat"
         break
      case "fiz":
         natija = "o'rnatmoq"
         break
      case "print":
         natija = "nashr qilmoq"
         break
      case "dough":
         natija = "hamir"
         break
      case "mosque":
         natija = "masjid"
         break
      case "grow":
         natija = "o'smoq"
         break
      case "donut":
         natija = "ponchik"
         break
      case "engine":
         natija = "motor"
         break
      case "together":
         natija = "birga"
         break
      case "decorate":
         natija = "bezatmoq"
         break
      case "cloack":
         natija = "palto"
         break
      case "bark":
         natija = "daraxt po'chog'i"
         break
      case "leaf":
         natija = "barg"
         break
      case "protect":
         natija = "himoya qilmoq"
         break
      case "wind":
         natija = "shamol"
         break
      case "full moon":
         natija = "to'lin oy"
         break
      case "called":
         natija = "deb atalmoq"
         break
      case "shade":
         natija = "soya"
         break
      case "shape":
         natija = "shakl"
         break
      case "crescent moon":
         natija = "yarm oy"
         break
      case "belt":
         natija = "belbog'"
         break
      case "tool":
         natija = "aspob uskuna"
         break
      case "waste":
         natija = "chiqindi"
         break
      case "mould":
         natija = "qolip"
         break
      case "wall":
         natija = "devor"
         break
      case "throw away":
         natija = "tashlab yubormoq"
         break
      case "liquid":
         natija = "suyuqlik"
         break
      case "column":
         natija = "ustun"
         break
      case "floor":
         natija = "qavat"
         break
      case "flour":
         natija = "un"
         break
      case "jewelry":
         natija = "zargarlik buyumlari"
         break
      case " sit":
         natija = "o'rindiq"
         break
      case "lake":
         natija = "masalan"
         break
      case "martial art":
         natija = "jangovor sanat"
         break
      case "candle":
         natija = "sham"
         break
      case "blossom":
         natija = "gullash"
         break
      case "heavy":
         natija = "og'ir"
         break
      case "hug":
         natija = "quchmoq"
         break
      case "striper":
         natija = "yo'l-yo'l cjiziqli"
         break
      case "colorfull":
         natija = "rangbarang"
         break
      case "visit":
         natija = "tashrif buyurmoq"
         break
      case "hammer":
         natija = "bolg'a"
         break
      case "trunk":
         natija = "daraxt tanasi"
         break
      case "waste":
         natija = "chiqindi"
         break
      case "giant":
         natija = "gigant"
         break
      case "hihg":
         natija = "baland"
         break
      case "hill":
         natija = "tepalik"
         break
      case "sauce":
         natija = "sous"
         break
      case "nearly":
         natija = "deyarli"
         break
      case "sell":
         natija = "sotmoq"
         break

      case "car":
         natija = "mashina"
         break;
      case "create":
         natija = "yaratmoq"
         break
      case "cook":
         natija = "pishirmoq"
         break;
      case "cooker":
         natija = "oshpaz"
         break;
      case "cake":
         natija = "to'rt , kremli pishiriq"
         break
      case "carriage":
         natija = "qafas"
         break;
      case "cabbage":
         natija = "karam"
         break;
      case "cat":
         natija = "mushuk"
         break
      case "console":
         natija = "kengash"
         break;
      case "cold":
         natija = "Salqin"
         break;
      case "color":
         natija = "Rang"
         break
      case "cloud":
         natija = "bulut"
         break;
      case "clothe":
         natija = "kiyim"
         break;
      case "cancel":
         natija = "bekor qilmoq"
         break
      case "clean":
         natija = "tozalamoq"
         break;
      case "copy":
         natija = "nusxalamoq"
         break;
      case "cope":
         natija = "yutmoq, g'alaba qozonmoq"
         break
      case "career":
         natija = "ish faoliyati"
         break;
      case "cut":
         natija = "kesmoq"
         break;
      case "close":
         natija = "berk"
         break
      case "clam":
         natija = "tastiqlamoq"
         break;
      case "crop":
         natija = "cho'pak"
         break;
      case "call":
         natija = "qong'irioq qilmoq"
         break
      case "camera":
         natija = "kamera"
         break;
      case "can":
         natija = "bajara olmoq"
         break;
      case "cost":
         natija = "Narx"
         break
      case "cofee":
         natija = "qahva"
         break;
      case "cow":
         natija = "Sigir"
         break;
      case "cap":
         natija = "Kepka"
         break
      case "cause":
         natija = "Sabab bo'lmoq"
         break;
      case "cave":
         natija = "G'or"
         break;
      case "Code":
         natija = "kod"
         break
      case "cede":
         natija = "Bermoq"
         break;
      case "celebrate":
         natija = "Nishonlamoq"
         break;
      case "cell":
         natija = "Xujayra"
         break
      case "cement":
         natija = "Sement"
         break;
      case "center":
         natija = "Markaz"
         break;
      case "centeral":
         natija = "Markaziy"
         break
      case "cartoon":
         natija = "Multfilm"
         break;
      case "carrot":
         natija = "sabzi"
         break;
      case "carefully":
         natija = "Extiyotkorlik"
         break
      case "charm":
         natija = "MAstunkorlik"
         break;
      case "chart":
         natija = "Diagramma"
         break;
      case "chat":
         natija = "chat"
         break
      case "cheer":
         natija = "qichqirmoq"
         break;
      case "cabal":
         natija = "g'or"
         break;
      case "cabbage":
         natija = "karam"
         break
      case "cabinet":
         natija = "kabinet,xona,bolma"
         break;
      case "cable":
         natija = "habel,shnur"
         break
      case "cable car":
         natija = "sim arqonli transport"
         break;
      case "cabman":
         natija = "taksi xaydovchi"
         break
      case "cabsteng":
         natija = "taksi / keb to'xtadigan joy"
         break;
         natija = "kasal"
         break
      case "tall":
         natija = "uzun"
         break
      case "tail":
         natija = "dum"
         break
      case "take":
         natija = "olmoq"
         break
      case "took":
         natija = "olmoq so'zini past simple shakli"
         break
      case "taken":
         natija = "olmoq so'zini  perfect shakli"
         break
      case "talk":
         natija = "gaplashmoq"
         break
      case "the":
         natija = "aniq article"
         break
      case "target":
         natija = "nishon"
         break
      case "text":
         natija = "teks"
         break
      case "time":
         natija = "vaqt , marta"
         break
      case "top":
         natija = "ustgi qism"
         break
      case "type":
         natija = "tur xil"
         break
      case "touch":
         natija = "tegmoq"
         break
      case "tiger":
         natija = "yo'lbars"
         break
      case "throw":
         natija = "irg'itmoq"
         break
      case "threw":
         natija = "irg'itmoq so'zini past shakli"
         break
      case "tool":
         natija = "asbob , buyum"
         break
      case "through":
         natija = "orqali"
         break
      case "try":
         natija = "harakat qilmoq"
         break
      case "thooth":
         natija = "tish"
         break
      case "theeth":
         natija = "tishlar"
         break
      case "true":
         natija = "to'g'ri"
         break
      case "tree":
         natija = "daraxt"
         break
      case "this":
         natija = "bu yaqindagi narsaga"
         break
      case "that":
         natija = "bu uzoqdagi narsaga"
         break
      case "those":
         natija = "bu yaqindagi narsalarga"
         break
      case "these":
         natija = "bu uzoqdagi narsarlarga"
         break
      case "big":
         natija = "katta"
         break;
      case "pen":
         natija = "ruchka"
         break;
      case "case":
         natija = "quti sumka"
         break
      case "mother":
         natija = "Ona," + " " + "mom"
         break
      case "bag":
         natija = "sumka"
         break
      case "basic":
         natija = "asosiy"
         break;
      case "blood":
         natija = "qon"
         break
      case "brother":
         natija = "aka , uka"
         break
      case "black":
         natija = "qora"
         break
      case "bump":
         natija = "urib olmoq"
         break;
      case "break":
         natija = "sindirmoq tanafus"
         break
      case "book":
         natija = "Kitob , buyurtma bermoq"
         break
      case "bar":
         natija = "bar"
         break
      case "bloot":
         natija = "qorayish"
         break;
      case "blouse":
         natija = "bluza"
         break
      case "blazer":
         natija = "kapshonkali kurtka"
         break
      case "broad":
         natija = "keng"
         break
      case "band":
         natija = "musiqachilar guruhi"
         break;
      case "bean":
         natija = "loviya"
         break
      case "bread":
         natija = "non"
         break
      case "ballerian":
         natija = "balerina"
         break
      case "buy":
         natija = "sotib olmoq"
         break
      case "bought":
         natija = "sotib olmoq so'zini 2 va 3 o'tgan zamon shakli"
         break;
      case "become":
         natija = "bo'lmoq"
         break
      case "became":
         natija = "bo'lmoq so'zni 2 o'tgan zamon shakli"
         break
      case "be":
         natija = "To be , bo'lmoq"
         break
      case "bee":
         natija = "ari"
         break
      case "bit":
         natija = "urmoq"
         break;
      case "bitten":
         natija = "urmoq so'zni 3 o'tgan zamon shakli"
         break
      case "blow":
         natija = "esmoq,puflamoq"
         break
      case "body":
         natija = "tana"
         break
      case "button":
         natija = "tugma"
         break
      case "border":
         natija = "chegara"
         break;
      case "bottom":
         natija = "tub tagi"
         break
      case "babble":
         natija = "ming'illamoq g'uldiramoq"
         break
      case "babe":
         natija = "chaqaloq "
         break
      case "baby":
         natija = "chaqaloq"
         break
      case "baccy":
         natija = "tamaki"
         break;
      case "back":
         natija = "orqaga"
         break
      case "baker":
         natija = "novvoy"
         break
      case "background":
         natija = "orqa fon"
         break
      case "backpack":
         natija = "ryukzak"
         break
      case "bacon":
         natija = "cho'chqa go'shti"
         break;
      case "bacterium":
         natija = "bakteriya"
         break
      case "bad":
         natija = "yomon , kravat"
         break
      case "baddy":
         natija = "salbiy obraz"
         break
      case "bee":
         natija = "ari"
         break
      case "bit":
         natija = "urmoq"
         break;
      case "bitten":
         natija = "urmoq so'zni 3 o'tgan zamon shakli"
         break
      case "blow":
         natija = "esmoq,puflamoq"
         break
      case "box":
         natija = "quti"
         break
      case "if":
         natija = "agar"
         break
      case "in":
         natija = "ichida"
         break
      case "image":
         natija = "rasm"
         break
      case "index":
         natija = "indeks"
         break
      case "inline":
         natija = "ichida"
         break
      case "install":
         natija = "o'rnatmoq  "
         break
      case "internet":
         natija = "internet"
         break
      case "design":
         natija = "Dizayn";
         break;
      case "desire":
         natija = "Istak";
         break;
      case "desk":
         natija = "Yozuv stoli";
         break;
      case "desperate":
         natija = "Umidsiz";
         break;
      case "despite":
         natija = "Qaramasdan";
         break;
      case "destory":
         natija = "Halok";
         break;
      case "destruction":
         natija = "Vayron qilish";
         break;
      case "detail":
         natija = "Batafsil";
         break;
      case "determination":
         natija = "Aniqlash";
         break;
      case "determined":
         natija = "Belgilangan";
         break;
      case "develop":
         natija = "Rivojlantirish";
         break;
      case "device":
         natija = "Qurilma";
         break;
      case "devote":
         natija = "Bag / Ishlamoq";
         break;
      case "devoted":
         natija = "Sodiq";
         break;
      case "diagram":
         natija = "Diagrammasi";
         break;
      case "diamond":
         natija = "Olmos";
         break;
      case "diary":
         natija = "Kundalik Daftar";
         break;
      case "dictionary":
         natija = "Lug'at";
         break;
      case "die":
         natija = "Vafot";
         break;
      case "diet":
         natija = "Parhez";
         break;
      case "difference":
         natija = "Farq";
         break;
      case "different":
         natija = "Turli";
         break;
      case "difficult":
         natija = "Murakkab";
         break;
      case "difficulty":
         natija = "Qiyinchilik";
         break;
      case "dig":
         natija = "Chopmoq";
         break;
      case "dinner":
         natija = "Kechki Ovqat";
         break;
      case "direct":
         natija = "To'g'ri";
         break;
      case "direction":
         natija = "Yo'nalish";
         break;
      case "directly":
         natija = "To'g'ridan-To'g'ri";
         break;
      case "director":
         natija = "direktor";
         break;
      case "dirt":
         natija = "Loy";
         break;
      case "dirty":
         natija = "Iflos";
         break;
      case "dog":
         natija = "IT";
         break;
      case "disabled":
         natija = "O'chirilgan";
         break;
      case "disadvantage":
         natija = "Zarar";
         break;
      case "disagree":
         natija = "Kelishmay Qolmoq";
         break;
      case "disagreement":
         natija = "Ziddiyat";
         break;
      case "disappear":
         natija = "Yo'qoladi";
         break;
      case "disappoint":
         natija = "Ko'ngil Qoldirmoq";
         break;
      case "disappointed":
         natija = "Xafa";
         break;
      case "disappointing":
         natija = "Alam Qiladigan";
         break;
      case "disappointment":
         natija = "Afsus";
         break;
      case "disapproval":
         natija = "Ma'qullamaslik";
         break;
      case "disc":
         natija = "Disk";
         break;
      case "discipline":
         natija = "Intizom";
         break;
      case "discount":
         natija = "Chegirma";
         break;
      case "discover":
         natija = "Kashf";
         break;
      case "discovery":
         natija = "Kashfiyot";
         break;
      case "discuss":
         natija = "Muhokama";
         break;
      case "disease":
         natija = "Kasallik";
         break;
      case "disgust":
         natija = "Jirkanish";
         break;
      case "disgusted":
         natija = "Taajublanib";
         break;
      case "dish":
         natija = "Taom";
         break;
      case "dislike":
         natija = "Yoqtirmaslik";
         break;
      case "display":
         natija = "Displey";
         break;
      case "dissolve":
         natija = "Eritmoq";
         break;
      case "distance":
         natija = "Masofa";
         break;
      case "distribute":
         natija = "Tarqatish";
         break;
      case "distribution":
         natija = "Taqsimlash";
         break;
      case "district":
         natija = "Tuman";
         break;
      case "disturb":
         natija = "Tinchsizlantirmoq";
         break;
      case "disturbing":
         natija = "Xavotirli";
         break;
      case "divide":
         natija = "Ajratmoq";
         break;
      case "doctor":
         natija = "Shifokor";
         break;
      case "document":
         natija = "Hujjat";
         break;
      case "dollor":
         natija = "Dollar";
         break;
      case "domestic":
         natija = "Ichki";
         break;
      case "dominate":
         natija = "Hukmronlik Qilmoq";
         break;
      case "door":
         natija = "Eshik";
         break;
      case "double":
         natija = "Ikki Hissa";
         break;
      case "doubt":
         natija = "Shubha";
         break;
      case "down":
         natija = "Pastga";
         break;
      case "draft":
         natija = "Loyihasi";
         break;
      case "drag":
         natija = "Sudramoq";
         break;
      case "drama":
         natija = "Drama";
         break;
      case "draw":
         natija = "Chizish";
         break;
      case "dream":
         natija = "Tush";
         break;
      case "pen":
         natija = "ruchka"
         break;
      case "case":
         natija = "quti sumka"
         break
      case "mother":
         natija = "Ona," + " " + "mom"
         break
      case "live":
         natija = "jonli"
         break;
      case "aback":
         natija = "hayrata qoldirmoq"
         break;
      case "":
         natija = ""
         break;
      case "":
         natija = ""
         break;


      default:
         natija = "not found"
         break;
   }
   H2.innerHTML = " " + natija
   console.log();
}

function UzbToEng() {
   let value = Input.value.toLowerCase()
   let natija
   switch (value) {
      case "fil":
         natija = "elephant"
         break;
      case "olma":
         natija = "Apple"
         break;

      default:
         natija = "hech narsa yo'q"
         break;
   }
   H2.innerHTML = " " + natija
   console.log("EngToUzb");
}