# Test Notları

Arama sonuç sayacı kart adedini `N içerik gösteriliyor` biçiminde gösterir. Boş sonuç uyarısı: `Bu başlıkla eşleşen içerik bulunamadı. Başka bir kelime deneyebilirsin.`

| # | İşlem / test girdisi | Beklenen sonuç | Gerçekleşen sonuç | Durum |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Etkinlikler sayfasını boş aramayla açtım. | Altı kart görünür; sayaç `6 içerik gösteriliyor` olur. | Altı rehber kartı ve doğru başlangıç sayacı görüntülendi. | Geçti |
| 2 | Arama alanına `pixel` yazdım. | Yalnızca **Pixel Art ve Sprite Animasyon Rehberi** görünür; sayaç `1 içerik gösteriliyor` olur. | Başlık eşleşti; diğer kartlar gizlendi ve sayaç doğru güncellendi. | Geçti |
| 3 | Arama alanına `c+` yazdım. | Kart eşleşmesi olmaz; sayaç `0 içerik gösteriliyor` olur ve yukarıdaki boş sonuç mesajı görünür. | Tüm kartlar gizlendi, sayaç sıfırlandı ve boş sonuç mesajı göründü. Görüntü: `ekran_görüntüleri/bos-sonuc.png`. | Geçti |
| 4 | `Temizle` düğmesine bastım; ardından arama alanına yalnızca boşluk girdim. | Her iki durumda da altı kart görünür ve sayaç `6 içerik gösteriliyor` olur. | Input temizlendi, kartlar geri geldi ve sayaç altıya döndü. | Geçti |
| 5 | Ana sayfa, etkinlikler ve hakkında sayfalarındaki menü bağlantılarını izledim. | `index.html`, `etkinlikler.html` ve `hakkinda.html` bağlantıları ilgili sayfaları sorunsuz açar. | Üç sayfanın menü hedefleri doğru dosya adlarıyla eşleşti ve geçişler çalıştı. | Geçti |
| 6 | Görünümü 390 px genişliğe getirip Tab ile sayfada gezindim. | Yatay taşma olmaz; arama, düğme ve kartlara klavyeyle erişilir. | Mobil görünümde taşma olmadı; Tab ile odak göstergeleri görüldü. | Geçti |

Etkinlikler sayfasındaki kart başlıkları: **Pixel Art ve Sprite Animasyon Rehberi**; **JavaScript ile 2D Clicker Oyun Mekanikleri**; **Oyun Dünyası Tasarımı ve Hikâye Anlatımı**; **48 Saatlik Kampüs Game Jam Hazırlık Kılavuzu**; **Bağımsız Oyunlarda Ses Efektleri ve Müzik Üretimi**; **Indie Oyunlar İçin Playtest ve Hata Ayıklama**.