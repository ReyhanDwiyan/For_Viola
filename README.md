# For_Viola
I made this only for you

``` js 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>For U</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>DISCLAIMER!!!</h1>
    </header>
    <main>
      <h2>
        Disini gw gada niatan untuk menyalahkan lu, ataupun pihak yang akan gw
        sebutkan di website ini. gw hanya penasaran dengan keadaan yang
        sebenarnya!. Gw pingin lu record waktu lu buka website ini biar gw tau
        jawaban dari pertanyaan pertanyaan gw. oh iya, disini jg gw ada bahas
        tentang hubungan gw ama lu. jJadi mohon dijawab yaaa... Thanks!! :)
      </h2>
      <button onclick="showQuestion()">Question</button>
    </main>

    <div id="popup1" class="popup">
      <div class="popup-content">
        <h3>Pertanyaan</h3>
        <p>Apa lu udah pacaran sama galuh??</p>
        <button onclick="answer('ya', 'popup1')">Ya</button>
        <button onclick="answer('tidak', 'popup1')">Ga</button>
      </div>
    </div>

    <div id="popup2" class="popup">
      <div class="popup-content">
        <h3>Pertanyaan</h3>
        <p>Apa lu gak dimarahin karena re-post postingan dia?</p>
        <button onclick="answer('ya', 'popup2')">Ya</button>
        <button onclick="answer('tidak', 'popup2')">Ga</button>
      </div>
    </div>

    <div id="popup3" class="popup">
      <div class="popup-content">
        <h3>Pertanyaan</h3>
        <p>apa lu ga mau balik deket sama gw lagi?</p>
        <button onclick="answer('ya', 'popup3')">Mau sih..</button>
        <button onclick="answer('tidak', 'popup3')">Gadulu kayanya</button>
      </div>
    </div>

    <div id="popup4" class="popup">
      <div class="popup-content">
        <h3>Pertanyaan</h3>
        <p>Lu gada kepikiran buat balikan ama gw?</p>
        <button onclick="answer('ya', 'popup4')">Ada</button>
        <button onclick="answer('tidak', 'popup4')">Gada</button>
      </div>
    </div>

    <div id="popup5" class="popup">
      <div class="popup-content">
        <h3>Pertanyaan</h3>
        <p>kenapa lu gamau balikan ama gw??</p>
        <button onclick="answer('ya', 'popup5')">sini gw jelasin</button>
        <button onclick="answer('tidak', 'popup5')">ya emang gamau aja</button>
      </div>
    </div>

    <div id="popup6" class="popup">
      <div class="popup-content">
        <h3>Pertanyaan</h3>
        <p>Dulu apa memang lu ga pernah kepikiran buat publish?</p>
        <button onclick="answer('ya', 'popup6')">Ada kepikiran. cuma..</button>
        <button onclick="answer('tidak', 'popup6')">Gada sih kayanya</button>
      </div>
    </div>

    <div id="popup7" class="popup">
      <div class="popup-content">
        <h3>Pertanyaan</h3>
        <p>
          Lu setiap ketemu gapernah tegur sapa gw apa karena takut gw lagi
          keadaan mood jelek??
        </p>
        <button onclick="answer('ya', 'popup7')">iya</button>
        <button onclick="answer('tidak', 'popup7')">enggak si</button>
      </div>
    </div>

    <div id="popup8" class="popup">
      <div class="popup-content">
        <h3>Pertanyaan</h3>
        <p>apa lu bakal ngehubungin gw kalau ada masalah doang??</p>
        <button onclick="answer('ya', 'popup8')">iya kan lu yang minta</button>
        <button onclick="answer('tidak', 'popup8')">enggak juga si</button>
      </div>
    </div>

    <div id="popup-reason" class="popup">
      <div class="popup-content">
        <h3>Kasih Gw alasan</h3>
        <textarea id="reason" rows="4" cols="50"></textarea><br />
        <button onclick="next()">Next</button>
      </div>
    </div>

    <div id="popup-thankyou" class="popup">
      <div class="popup-content">
        <h3>Makasii!!</h3>
        <p>
          Sebenernya masi banyak banget hal yang ingin gw tau dan juga gimana si
          hubungan lu ama galuh, gw nanya kaya gini bukan buat apa apa, cuma
          biar gw sadar diri aja dan bisa mundur memang jikalau lu udah jadian
          ama dia. karena gw ngeliat lu sama dia udah serasa ngeliat kita dulu
          waktu lg PDKT. and that is make me so jealous and sad. BTW Makasii
          udah dijawab pertanyaannya!
        </p>
        <button onclick="backToStart()">Balik</button>
      </div>
    </div>

    <script src="scripts.js"></script>
  </body>
</html>
```