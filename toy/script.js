* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #0b1a2f;
    color: #ffffff;
}

.app {
    max-width: 500px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-bottom: 90px;
}

.header {
    text-align: center;
    padding: 30px 20px 20px;
    border-bottom: 1px solid #122844;
}

.logo {
    width: 70px;
    height: 70px;
    margin: 0 auto 10px;
    border-radius: 50%;
    background: radial-gradient(circle, #00c2ff, #005b8a);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-weight: bold;
}

.header h1 {
    font-size: 36px;
    letter-spacing: 3px;
}

.header p {
    color: #7ddfff;
}

.content {
    padding: 20px;
    flex: 1;
}

.hero {
    background: #10223a;
    border-radius: 18px;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #163455;
}

.hero h2 {
    margin-bottom: 10px;
}

.hero p {
    color: #cfefff;
}

.cards {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.card, .liste-kart {
    background: #10223a;
    border-radius: 16px;
    padding: 18px;
    border: 1px solid #163455;
    margin-bottom: 12px;
}

.card h3, .liste-kart h3 {
    color: #00c2ff;
}

.card p {
    color: #bfe9ff;
}

.menu {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
    padding: 12px;
    background: #081422;
    border-top: 1px solid #122844;
}

.menu button {
    padding: 10px 6px;
    border: none;
    border-radius: 12px;
    background: #122844;
    color: #7ddfff;
    font-weight: bold;
    font-size: 12px;
}

.menu button.active {
    background: #00c2ff;
    color: #001421;
}

.geri-btn {
    margin-bottom: 16px;
    padding: 10px 14px;
    border: none;
    border-radius: 10px;
    background: #00c2ff;
    color: #001421;
    font-weight: bold;
}

.chat-alani {
    background: #10223a;
    border: 1px solid #163455;
    padding: 10px;
    border-radius: 12px;
    height: 300px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
}

.mesaj {
    padding: 10px 12px;
    margin: 6px 0;
    border-radius: 12px;
    max-width: 80%;
    word-wrap: break-word;
}

.ai {
    background: #1b314d;
    color: #eaf8ff;
}

.kullanici {
    background: #00c2ff;
    color: #001421;
    margin-left: auto;
}

.alt-bar {
    display: flex;
    gap: 8px;
    margin-top: 12px;
}

.alt-bar input {
    flex: 1;
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #163455;
    font-size: 16px;
    background: #10223a;
    color: #ffffff;
}

.alt-bar input::placeholder {
    color: #7aa9c7;
}

.alt-bar button {
    padding: 12px 16px;
    border: none;
    border-radius: 10px;
    background: #00c2ff;
    color: #001421;
    font-weight: bold;
    cursor: pointer;
}

.katki-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.katki-form input,
.katki-form textarea {
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #163455;
    background: #10223a;
    color: white;
}

.katki-form button {
    padding: 12px;
    border: none;
    border-radius: 10px;
    background: #44637d;
    color: white;
}
                <div class="card">
                    <h3>Katkı Ekle</h3>
                    <p>Yakında sen de kendi fikrini paylaşabileceksin.</p>
                </div>
            </section>
        `;
    }

    if (sayfa === "dusunceler") {
        icerik.innerHTML = `
            <section class="hero">
                <h2>Fikirler ve Düşünceler</h2>
                <p>Burada düşünce yazıları yer alacak.</p>
            </section>

            <section class="liste">
                <div class="liste-kart tiklanabilir" onclick="detayGoster('toplum')">
                    <h3>Toplum neden dağılır?</h3>
                    <p>
                        Bir toplum önce ortak dilini, sonra güvenini, sonra da ortak anlamını kaybeder.
                    </p>
                </div>

                <div class="liste-kart tiklanabilir" onclick="detayGoster('insan')">
                    <h3>İnsan neden yönsüzleşir?</h3>
                    <p>
                        Hedefini kaybeden insan, zamanla kendi iradesini de başkalarına bırakır.
                    </p>
                </div>

                <div class="liste-kart tiklanabilir" onclick="detayGoster('gurultu')">
                    <h3>Gürültü çağında düşünmek</h3>
                    <p>
                        Sürekli konuşan bir dünyada derin düşünebilmek başlı başına bir dirençtir.
                    </p>
                </div>
            </section>
        `;
    }

    if (sayfa === "kitaplar") {
        icerik.innerHTML = `
            <section class="hero">
                <h2>Kitaplar</h2>
                <p>Burada önerilen kitaplar ve kısa notlar yer alacak.</p>
            </section>

            <section class="liste">
                <div class="liste-kart">
                    <h3>Suç ve Ceza</h3>
                    <p>
                        İnsan vicdanı, suç, kibir ve iç çöküş üzerine sert bir roman.
                    </p>
                </div>

                <div class="liste-kart">
                    <h3>1984</h3>
                    <p>
                        Güç, denetim, dil ve düşüncenin nasıl yönetildiğini gösteren ağır bir eser.
                    </p>
                </div>

                <div class="liste-kart">
                    <h3>Tutunamayanlar</h3>
                    <p>
                        Modern insanın parçalanmış zihnini ve yalnızlığını hissettiren güçlü bir metin.
                    </p>
                </div>
            </section>
        `;
    }

    if (sayfa === "katki") {
        icerik.innerHTML = `
            <section class="hero">
                <h2>Katkı Ekle</h2>
                <p>
                    Bu alan şimdilik hazırlık aşamasında. Yakında kullanıcı katkıları açılacak.
                </p>
            </section>

            <section class="katki-form">
                <label>Başlık</label>
                <input type="text" placeholder="Fikrinin başlığı">

                <label>Düşüncen</label>
                <textarea rows="6" placeholder="Buraya düşünceni yaz..."></textarea>

                <button disabled>Yakında Aktif</button>
            </section>
        `;
    }
}

function detayGoster(konu) {
    let icerik = document.getElementById("icerik");
    aktifButon("dusunceler");

    if (konu === "toplum") {
        icerik.innerHTML = `
            <button class="geri-btn" onclick="sayfaGoster('dusunceler')">← Geri</button>

            <section class="hero">
                <h2 class="detay-baslik">Toplum neden dağılır?</h2>
                <p class="detay-metin">
                    Bir toplum bir günde dağılmaz. Çöküş sessiz başlar.
                    Önce insanlar birbirine güvenmemeye başlar.
                    Sonra ortak dil bozulur; kelimeler anlamını kaybeder.
                    Ardından adalet duygusu zedelenir ve herkes sadece kendi küçük alanını korumaya çalışır.
                    O noktadan sonra toplum, birlikte yaşayan insan topluluğu olmaktan çıkar;
                    aynı yerde duran ama birbirine yabancılaşmış kalabalığa dönüşür.
                </p>
            </section>
        `;
    }

    if (konu === "insan") {
        icerik.innerHTML = `
            <button class="geri-btn" onclick="sayfaGoster('dusunceler')">← Geri</button>

            <section class="hero">
                <h2 class="detay-baslik">İnsan neden yönsüzleşir?</h2>
                <p class="detay-metin">
                    İnsan yönünü kaybettiğinde bunu hemen fark etmez.
                    Önce amaçlarını erteler, sonra kendi kararlarını başkalarının sesine göre şekillendirir.
                    Sürekli tüketen ama üretmeyen zihin zamanla iradesini zayıflatır.
                    Yönsüzlük çoğu zaman tembellik değil, dağılmış dikkat ve amaçsızlıktır.
                    Bu yüzden insan önce neyi reddettiğini değil, neye hizmet ettiğini sormalıdır.
                </p>
            </section>
        `;
    }

    if (konu === "gurultu") {
        icerik.innerHTML = `
            <button class="geri-btn" onclick="sayfaGoster('dusunceler')">← Geri</button>

            <section class="hero">
                <h2 class="detay-baslik">Gürültü çağında düşünmek</h2>
                <p class="detay-metin">
                    Bugünün dünyasında herkes konuşuyor ama çok az insan düşünüyor.
                    Gürültü, sadece ses değildir; sürekli akan içerik, dağılmış dikkat ve tepki bağımlılığıdır.
                    Derin düşünce ise yavaşlık ister, yalnızlık ister, mesafe ister.
                    Bu yüzden gerçekten düşünebilen insan artık sıradan değil, dirençli insandır.
                    Çünkü çağ, insanı anlamaya değil anlık tepkiye zorluyor.
                </p>
            </section>
        `;
    }
}

sayfaGoster("ana");
