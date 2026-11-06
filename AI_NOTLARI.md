# Yapay Zekâ Kullanım Notları

## Prompt Kayıtları ve Kararlar
**Prompt 1 — Planlama:** "Bağımsız Oyun Geliştirme Topluluğu için üç sayfalı bir site planla; önce dosya yapısını ve kabul ölçütlerini öner, henüz kod yazma."

**Amaç:** Kodlamaya başlamadan sayfa kapsamını ve teslim yapısını netleştirmek.

**AI önerisi ve kararım:** AI, CSS ve JavaScript dosyalarını `css/` ve `js/` alt klasörlerine koymayı önerdi. Teslim yönergesindeki düz kök dizin yapısına uymak ve dosyaları kolayca bulmak için bu öneriyi reddettim; HTML, CSS, JavaScript ve rapor dosyalarını kök dizinde tuttum.

**Prompt 2 — Kod üretimi:** "Alt klasör oluşturma; `style.css` ve `script.js` kök dizinde olsun. `etkinlikler.html` sayfasına oyun geliştirme rehber kartları, başlık araması ve klavye odağıyla da çalışan detaylar ekle."

**Amaç:** Dosya yapısını koruyarak sayfaların ilk sürümünü ve etkileşimli rehber listesini oluşturmak.

**Kararım:** Kartların `:hover` ve `:focus-within` durumlarında detay göstermesini korudum; fare kullanmayan ziyaretçiler de klavyeyle kartlara erişebiliyor.

**Prompt 3 — İnceleme ve düzeltme:** "Tüm sayfalardaki bağlantıları denetle; arama yalnızca kartların h3 başlıklarını filtrelesin, sayaç ve boş sonuç mesajı doğru güncellensin, mobil görünümü ve klavye odağını kontrol et."

**Amaç:** Bağlantı, arama ve erişilebilirlik davranışlarını teslim öncesi doğrulamak.

**AI önerisi ve kararım:** Önceki taslakta içerik sayfası bağlantıları `icerikler.html` olarak kalmıştı. Gerçek dosya adımız `etkinlikler.html` olduğundan bu bağlantı önerisini değiştirdim ve menü ile sayfa içi bağlantıları `etkinlikler.html` hedefinde standartlaştırdım.

## Kod Açıklamaları
`script.js`, `#content-search` ve `#clear-search` ID'lerini `searchInput` ve `clearButton` değişkenlerine bağlar. Bu iki öğe varsa `.content-card` elemanlarını `cards` dizisine, `#results-count` öğesini `resultCount` değişkenine ve `#no-results` öğesini `noResults` değişkenine alır.

`searchInput.addEventListener('input', filterCards)` dinleyicisi, arama alanı her değiştiğinde `filterCards` fonksiyonunu çalıştırır. Sorgu `searchInput.value.trim().toLocaleLowerCase('tr-TR')` ile boşluklardan arındırılır ve Türkçe kurallara göre küçültülür; noktasız `ı`/`i` varyantı da ortaklaştırılır. Her kartta yalnızca `card.querySelector('h3').textContent` başlığı okunup aynı biçimde normalleştirilir. `title.includes(query)` koşulunun sonucu `matches` olur; buna göre `card.hidden` ayarlanır. `visibleCount` ile sayaç `6 içerik gösteriliyor`, `1 içerik gösteriliyor` veya `0 içerik gösteriliyor` biçiminde güncellenir; sıfır sonuçta `noResults` mesajı gösterilir.

Temizle düğmesinin `click` dinleyicisi input değerini boşaltır, `filterCards()` fonksiyonunu yeniden çağırır ve odağı `searchInput` alanına taşır.