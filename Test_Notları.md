# Test Notları

| İşlem (Test Girdisi) | Beklenen Sonuç | Gerçekleşen Sonuç | Karar |
| :--- | :--- | :--- | :--- |
| 1. Arama kutusuna "pixel" yazdım. | Yalnızca ilgili kart görünür; sayaç 1 olur. | Kart başarıyla filtrelendi, sayaç 1 olarak güncellendi. | Geçti |
| 2. Arama kutusuna " PIXEL " yazdım (boşluklu ve büyük harf). | toLocaleLowerCase ve trim sayesinde aynı başlık eşleşir, 1 kart görünür. | Boşluklar temizlendi, büyük/küçük harf duyarlılığı çalıştı, 1 kart göründü. | Geçti |
| 3. Arama kutusuna "xyz" yazdım. | Sayaç 0 olur ve "Aramanıza uygun içerik bulunamadı" mesajı görünür. | Tüm kartlar gizlendi, sayaç 0 oldu ve boş sonuç uyarı mesajı ekrana geldi. | Geçti |
| 4. Temizle düğmesine bastım; ardından sadece boşluk karakteri girdim. | Her iki durumda da tüm kartlar ekranda geri görünür. | Temizle butonu input'u boşalttı, boşluk girince de arama sıfırlandı ve kartlar geri geldi. | Geçti |
| 5. Üç sayfadaki menü bağlantılarına tıkladım. | Ana Sayfa, Etkinlikler ve Hakkında bağlantıları doğru HTML dosyalarını açar. | Tüm menü geçişleri (etkinlikler.html dahil) sayfa yenilenerek sorunsuz çalıştı. | Geçti |
| 6. Ekranı 390 px genişliğe getirdim ve klavyede Tab ile gezindim. | Yatay taşma olmaz; input, düğme ve kartlara klavye odağı (focus) ile ulaşılır. | Ekran taşmadı, kartlar alt alta dizildi. Tab ile kartlara gelindiğinde focus efekti tetiklendi. | Geçti |