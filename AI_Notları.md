# Yapay Zekâ Kullanım Notları

## 1. Prompt Kayıtları ve Kararlar
**Prompt 1 (Planlama):** "Bağımsız Oyun Geliştirme Topluluğu için üç sayfalık bir site tasarlıyorum... Önce dosyaları ve kabul ölçütlerini öner; henüz kod yazma."
* **Kararım:** Copilot ilk aşamada CSS ve JS dosyalarını `css/` ve `js/` alt klasörlerine koymayı önerdi. Yönergedeki düz yapıya uymak için bu öneriyi reddettim ve 2. prompt ile tüm dosyaları kök dizine almasını istedim.

**Prompt 2 (Kod Üretimi):** "Hiçbir alt klasör oluşturma, script.js ve style.css kök dizinde olsun. Etkinlikler sayfasına arama kutusu ve hover detaylı oyun geliştirme kartları ekle..."
* **Kararım:** Çıkan kodları inceleyip onayladım (Koru). Kartların `:hover` ve `:focus-within` durumlarında büyümesi klavye erişilebilirliğini artırdığı için kabul ettim.

**Prompt 3 (Code Review):** "Dosyaları incele. Arama motorunun SADECE h3 başlıklarını filtrelediğinden emin ol, mobil 390px ekran taşmalarını düzelt."
* **Kararım:** Kodlarda optimizasyon yapıldı. Arama fonksiyonunun kart içeriğini değil, sadece başlığı taraması kuralı garanti altına alındı.

## 2. Kod Açıklamaları
* **Event Listener (`'input'`):** Arama kutusuna eklediğimiz `addEventListener('input', ...)` fonksiyonu, kullanıcı klavyeden her harf girdiğinde veya sildiğinde arama fonksiyonunu anında tetikler. Butona basılmasını beklemeden canlı filtreleme yapar.
* **Filtreleme Koşulu (`includes` ve `toLocaleLowerCase`):** JavaScript'teki koşulumuz her kartın içindeki `h3` başlığını seçer, `toLocaleLowerCase('tr-TR')` ile harfleri küçültür ve kullanıcının input'a girdiği değerin bu başlığın içinde (`includes`) olup olmadığını kontrol eder. Eşleşirse kartı `display: block` ile gösterir, eşleşmezse `display: none` ile gizler.