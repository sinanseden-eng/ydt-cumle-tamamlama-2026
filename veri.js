/* ══════════════════════════════════════════════════════════
   YDT CÜMLE TAMAMLAMA LAB — veri.js (DOSYA 2/2)
   Dersler, Bağlaç Lab kalıpları ve 20 soru.
   Bu dosyada Türkçe karakterler doğrudan (literal) yazılmıştır;
   hiç \u kaçışı yoktur. UTF-8 olarak kaydedin.
   Soru eklerken aynı alanları kullanın:
   id, part('A' baştan | 'B' sondan), cat, stem, clue,
   facts[cümle(ler), boşluk ____], opts[[metin,geribildirim]×5],
   ans(0-4), ev, why, strat
   ══════════════════════════════════════════════════════════ */

window.CATS = {
  log: {no:'01', name:'Mantık İlişkileri', en:'Logic & Connectors', color:'#C13F14'},
  rel: {no:'02', name:'İlgi Cümlecikleri', en:'Relative Clauses', color:'#0E7568'},
  ref: {no:'03', name:'Zamir Gönderimi', en:'Pronoun Reference', color:'#8F6400'},
  zmn: {no:'04', name:'Zaman & Kip Uyumu', en:'Tense & Modal Harmony', color:'#8E2D5A'},
  kal: {no:'05', name:'Yapı Kalıpları', en:'Structural Patterns', color:'#221B14'},
  eym: {no:'06', name:'Anlam Bütünlüğü', en:'Semantic Coherence', color:'#5B3E96'}
};

window.LESSONS = [
  {cat:'log', title:'Mantık İlişkileri: Bağlaç Ailelerini Okuma', en:'Logic & Connector Families',
   roots:[
     ['Karşıtlık ailesi','although / even though / whereas + CÜMLE; despite / in spite of + İSİM ÖBEĞİ. "Despite + cümle" her zaman çeldiricidir; aile doğru olsa da biçim yanlışsa şık düşer.'],
     ['Sebep–sonuç yönü','because / since / as gerekçe kurar; therefore / consequently önceki yargının neticesini getirir. Yönü ters kurmak (sonucu gerekçeyle değiştirmek) en yaygın hatadır.'],
     ['Amaç ≠ sebep','so that + could / might (geçmiş ana fiil) NİYET taşır; insan iradesi olmadan amaç kurulamaz. Doğa olayları because ile açıklanır, so that ile amaçlanamaz.'],
     ['Koşul ailesi','unless = if…not; otherwise önceki cümlenin ihlâlinin sonucudur; provided that = yalnız …-sa. "if + would" biçimi her zaman elenir.'],
     ['Noktalama sinyali','Noktalı virgül (;) sonrası therefore / however / otherwise gibi cümle-başı bağlaçları gelir; bu bağlaçlar iki BAĞIMSIZ cümleyi birleştirir.']
   ],
   steps:[
     'Ana cümleyi oku ve mantık boşluğunu adlandır: engel mi (rağmen), gerekçe mi (because), netice mi (therefore), niyet mi (so that)?',
     'Aileyi seçince FORMU denetle: bağlaç isim öbeği mi cümle mi istiyor? (despite + isim / although + cümle).',
     'Yönü doğrula: şıkkın içeriği ana cümleyi destekliyor mu, çürütüyor mu? Kontrast bağlacı desteklemez, sebep açıklar.',
     'İki aday kalırsa noktalama ve kip uyumuna in: noktalı virgül bağımsız cümle ister, geçmiş ana fiil could/would ister.'
   ],
   trap:{t:'Doğru Aile, Yanlış Yön', d:'1. sorunun E şıkkı (Even though the tickets had sold out) aile olarak doğrudur ama yön olarak yanlıştır: biletlerin tükenmesi konserin yapılmasını DESTEKLER, çelişmez. "Even though" beklenmedik bir direniş ister. Aile + form + yön üçlüsünden biri kırılırsa şık elenir — sırasıyla denetleyin.'}},
  {cat:'rel', title:'İlgi Cümlecikleri: who, whom, which, where, whose', en:'Relative Clauses',
   roots:[
     ['who ↔ whom','Nesne konumunda ya da edattan sonra WHOM: "artists, many of whom…". "many of who" biçimce yanlıştır; edat who’yu düşürür.'],
     ['which ↔ that','Virgülden sonra (non-restrictive) THAT kullanılmaz: "the café, that…" ✗. that yalnız virgülsüz tanımlayıcı cümlecikte yaşar.'],
     ['whose = sahiplik','İnsan ve cansız için: "the café whose walls…". which’in sahiplik biçimi yoktur.'],
     ['where = yer','Yer isimlerini niteler; "in which" eşdeğeridir. "centres which pedestrians are given priority" kurulamaz — which cümlede rol alamamıştır.'],
     ['Cümleyi niteleyen which','"…, which is why …" — which önceki CÜMLENİN TAMAMINA gönderim yapabilir (cümle-tamamlayan ilgi).']
   ],
   steps:[
     'Virgülü işaretle: virgül varsa that elenir (non-restrictive).',
     'Gönderilen ismi etiketle: insan (who/whom/whose), nesne (which), yer (where), zaman (when).',
     'Edat + ilgi zamiri dizilimini denetle: of/in/for + whom (insan) / which (nesne).',
     'Antecedentin sayısını ve cinsiyetini şıkkın fiiline/zamirine taşı: they ↔ çoğul, her ↔ tekil-kadın.'
   ],
   trap:{t:'many of whom Tuzağı', d:'12. sorunun dizilimi "artists, many of ----"tur: which (cansız) ve of who (biçim) elenir; "many of them" kurulursa iki bağımsız cümle virgülle birleşir (comma splice) ve cümle parçalanır. Tek sağlam köprü whom’dur. Edat + ilgi zamiri kombinasyonu, ilgi cümleciği sorularının en verimli eleme süzgecidir.'}},
  {cat:'ref', title:'Zamir Gönderimi: it, they, her, so does', en:'Pronoun Reference',
   roots:[
     ['it / they sayı kilidi','Baştan tamamlamada ana cümledeki zamir şıkkın ismine kilitlenir: it → TEKİL, they → ÇOĞUL. Sayı uymayan şık anında düşer.'],
     ['her / his cinsiyet kilidi','"whose … cost her her life" gibi kuyruklar CİNSİYET de ister: tekil-kadın antecedent. Eril ya da çoğul şıklar gönderimi kırar.'],
     ['Hayalet gönderim','Şıkta zamirin karşılayacağı UYGUN isim yoksa zamir havada kalır: dilbilgisi kusursuz görünse de cümle gönderimsizden çöker (5. soru, B şıkkı).'],
     ['so does / so do','"X releases …, and so does Y" — yardımcı fiil ana fiilin türünü izler: be → is, have → has, diğer → do/does.'],
     ['this / which özet gönderimi','"which is why" ve this, önceki TÜM yargıyı tek kelimeyle karşılayabilir; cümle-tamamlayan zincir kurar.']
   ],
   steps:[
     'Ana cümledeki zamirleri daire içine al; yanlarına sayı + tür + cinsiyet yaz.',
     'Her şıkta bu zamirin ADRESİNİ ara: adresi olmayan şık "hayalet"tir — elenir.',
     'Yardımcı fiil paralelliğinde ana fiilin türünü belirle (be/have/lexikal) ve öznenin sayısına göre biçimle.',
     'İlgi zamirli kuyruklarda (whose/her) cinsiyet ipuçlarını topla; uymayan şıkkı işaretle.'
   ],
   trap:{t:'Hayalet Antecedent', d:'5. sorunun B şıkkında (As soon as the first symptoms were discussed…) "it"in karşılayacağı tekil bir isim YOKTUR: belirtiler çoğul ve dolaylıdır. Zamir daima somut bir adrese ihtiyaç duyar. Baştan tamamlamada ilk iş, ana cümle zamirlerinin şıklardaki adreslerini eşlemektir — adresi olmayan şık, anlamı en güzel kuran şık olsa bile düşer.'}},
  {cat:'zmn', title:'Zaman ve Kip Uyumu', en:'Tense & Modal Harmony',
   roots:[
     ['Zaman bağımlı cümlesinde will yasak','when / until / after / once / by the time + will ✗ — geleceği ana cümle taşır; bağımlı cümle şimdiki ya da şimdiki-perfekt biçimle temsil edilir.'],
     ['by the time → past perfect','"By the time + past simple, … had ALREADY + V3" — referans noktasından önce tamamlanan olay past perfect ister.'],
     ['until + present perfect (gelecek)','"will not … until they HAVE completed" — gelecekteki tamamlanma, present perfect ile gösterilir.'],
     ['so that kipi','Geçmiş ana fiil → so that + could / might / would; "so that + will" yalnızca şimdiki-gelecek ana cümlede yaşar.'],
     ['3. koşul formu','Sonuç kolunda would have + V3; if kolunda past perfect (veya devrik "Had + özne + (not) + V3"). "If + would have" her zaman çeldiricidir.']
   ],
   steps:[
     'Ana cümle fiilinin zamanını işaretle; şıkkın fiilini bu zamana kilitle.',
     'Bağlacın zaman sözlüğünü hatırla: by the time = öncelik, while = eşzamanlılık, as soon as = ani ardışıklık, until = süredurum.',
     'Koşul sorusunda tipi belirle (1/2/3) ve formülden sapan şıkkı anında at.',
     '"already / just" işaretleri past perfect ister; bağımlı cümlede will işareti kırmızı bayraktır.'
   ],
   trap:{t:'will Kaçağı', d:'14. sorunun iki çeldiricisi (until they will complete / after they will have completed) zaman bağımlı cümlesine will sokar. İngilizcede gelecek, ana cümle tarafından taşınır; when/until/after ailesi geleceği ŞİMDİKİ biçimlerle temsil eder. Bağımlı cümlede will gördüğünüz an şık büyük olasılıkla çeldiricidir.'}},
  {cat:'kal', title:'Yapı Kalıpları ve Paralellik', en:'Structural Patterns',
   roots:[
     ['so + sıfat ↔ such + (a) + isim','"so moving that" ✓ / "such a moving speech that" ✓. so asla a/an ile; such tekil sayılabilirde a/an’sız duramaz.'],
     ['Çoğul ve sayılamazda a yok','"such moving speeches that" ✓ / "such patience that" ✓ — çoğul ve sayılamaz isimde a/an atılır.'],
     ['not only A but also B','İki kanat aynı biçimde: fiil+fiil, isim+isim; çatı (aktif/pasif) de eşit olmalı. "not only lends… but also hosts" ✓.'],
     ['Devrik koşul','"Had the team not intervened…" = "If the team had not intervened…" — 3. koşulun resmi ikizi.'],
     ['unlike / like paralelliği','"Unlike her predecessor, the new director…" — kıyas edilen iki özne aynı konumda olmalı; özne kayması paralelliği öldürür.']
   ],
   steps:[
     'so/such ayrımında boşluktan SONRAKİ ilk kelimeye bak: sıfat → so; a/an+isim ya da isim → such.',
     'Correlative çiftlerde iki kanadın biçimini eşleştir; pasif-aktif ve fiil-isim karışımını cezalandır.',
     'Devrik yapıyı normal biçime çevir (Had he not… → If he had not…) ve anlamı doğrula.',
     'unlike/like sonrası ana özneyle aynı türde özne ara; yüklem eksikliğini (fragment) denetle.'
   ],
   trap:{t:'Paralellik Kırıcı', d:'11. sorunun D şıkkı "…but also free workshops ARE HOSTED" ile aktif "lends"i pasifle eşler; 20. sorunun A ve E şıkları özneyi yönetmenden toplantılara kaydırır. Correlative ve karşılaştırma yapılarında biçim bozulduğunda anlam da otomatik bozulur: iki kanat, aynı yönde aynı biçimde yürümek zorundadır.'}},
  {cat:'eym', title:'Anlam Bütünlüğü: Doğru Ama Bağsız Şıklar', en:'Semantic Coherence',
   roots:[
     ['yet / however kontrast sınavı','Kontrast bağlacının işi ZITLIK kurmaktır: şık ana cümleyi destekliyorsa bağlacın nefesi kesilir — gramer kusursuz olsa da şık düşer.'],
     ['on the contrary düzeltmesi','Yalnızca önceki cümledeki BEKLENTİYİ tersine çevirir: aynı yönlü şık bağlacı işsiz bırakır, mutlak zıt şık cümleyi kendi içinde yalanlar.'],
     ['Genel doğrular tuzağı','Dünya hakkında doğru olan her cümle boşluğu doldurmaz; boşluk CÜMLENİN kendi dünyasında doğru olmalı.'],
     ['Kapsam şişirme','Şık verilen yargıdan çok daha fazlasını iddia ediyorsa (always, all, never, completely) genellikle elenir.'],
     ['Bağ kurma testi','Şık ile ana cümleyi tek cümlede oku: "…, YİNE DE …" dediğinde kulak tıkıyorsa bağ yok demektir.']
   ],
   steps:[
     'Bağlacın istediği ilişkiyi tek kelimeyle yaz: zıtlık / ekleme / sonuç / amaç.',
     'Her şıkkı bu ilişkiyle SÖZLE test et ("ücret iki katına çıktı AMA ziyaretçi arttı" ✓).',
     'Gramerce kusursuz iki şık kalırsa anlam yönüne in: ilişkiyi kuran tek şık cevaptır.',
     'Kendi genel bilgini değil, cümlenin kurduğu dünyayı referans al.'
   ],
   trap:{t:'Dört Doğru Şık', d:'9. sorunun A–D şıkları müzenin gelişimini anlatan, gramerce kusursuz cümlelerdir; yalnızca E (giriş ücretinin ikiye katlanması) "yet"in istediği engeli kurar. Cümle tamamlamada son süzgeç her zaman ANLAMDIR: form doğru, yön yanlışsa şık düşer. "Doğru ama bağsız" şıkları avlamak için bağlacın görev cümlesini yazın.'}}
];

window.LABTAGS = {
  kar:{name:'Karşıtlık', color:'#C13F14'},
  seb:{name:'Sebep', color:'#0E7568'},
  son:{name:'Sonuç', color:'#8F6400'},
  ama:{name:'Amaç', color:'#8E2D5A'},
  kos:{name:'Koşul', color:'#23608F'},
  ekl:{name:'Ekleme', color:'#221B14'},
  zmn:{name:'Zaman', color:'#5B3E96'},
  ilgi:{name:'İlgi (Relative)', color:'#6E3E75'}
};

window.LABITEMS = [
  {en:'The evidence was overwhelming; therefore, the jury took less than an hour to reach a verdict.', tr:'Kanıtlar eziciydi; bu yüzden jüri karara varmak için bir saatten az süre harcadı.', tag:'son', note:'Noktalı virgül + "therefore": önceki yargının NETİCESİ — ezici kanıt → hızlı mahkûmiyet zinciri.'},
  {en:'Despite the heavy traffic, the ambulance reached the hospital in under ten minutes.', tr:'Yoğun trafiğe rağmen ambulans on dakikadan kısa sürede hastaneye ulaştı.', tag:'kar', note:'"Despite + isim öbeği": beklenen gecikmeye rağmen ulaşma — rağmen ailesinin isimli üyesi. Although olsaydı cümle gelirdi.'},
  {en:'She left a spare key with the neighbours so that they could water the plants while she was away.', tr:'Yokken komşuların bitkileri sulayabilmesi için onlara yedek anahtar bıraktı.', tag:'ama', note:'"so that + could": anahtar bırakma eyleminin NİYETİ — amaç ailesi, kip geçmiş ana fiile kilitli.'},
  {en:'The flight was delayed for two hours because the runway was being resurfaced.', tr:'Pist yeniden kaplandığı için uçuş iki saat ertelendi.', tag:'seb', note:'"because + cümle": gecikmeyi AÇIKLAYAN yan cümle — sebep-sonuç yönü net: pist çalışması → gecikme.'},
  {en:'You will never master a foreign language unless you use it every single day.', tr:'Her gün kullanmadıkça bir yabancı dili asla öğrenemezsin.', tag:'kos', note:'"unless" = if…not: kullanmazsan öğrenemezsin — istisna koşulu, ana cümlede kesinkes olumsuz sonuç.'},
  {en:'The lecture was not only informative but also genuinely entertaining.', tr:'Konferans yalnızca bilgilendirici değil, gerçekten eğlenceliydi de.', tag:'ekl', note:'"not only … but also": iki olumlu yargıyı aynı yönde EKLEYEN çift — correlative ekleme.'},
  {en:'By the time the volunteers finished packing, the first donors were already queuing outside.', tr:'Gönüllüler paketlemeyi bitirdiğinde ilk bağışçılar çoktan dışarıda kuyruktaydı.', tag:'zmn', note:'"By the time + past": referans noktasından ÖNCE başlamış olay — "already" işareti önceliği onaylıyor.'},
  {en:'The café, whose walls are covered with paintings by local artists, has become a neighbourhood landmark.', tr:'Duvarları yerel ressamların tablolarıyla kaplı kafe, mahallenin simgesi hâline geldi.', tag:'ilgi', note:'"whose" = cansız da olsa SAHİPLİK: duvarları … olan kafe — virgüllü, niteleyici ilgi cümleciği.'},
  {en:'Online sales doubled in the second quarter; consequently, the company decided to take on fifty extra staff.', tr:'Çevrimiçi satışlar ikinci çeyrekte ikiye katlandı; sonuç olarak şirket elli ek personel almayı kararlaştırdı.', tag:'son', note:'"; consequently,": satış artışının İŞE ALIM sonucu — sonuç ailesinin resmi üyesi.'},
  {en:'Although he had rehearsed the speech a dozen times, his voice trembled during the first minute.', tr:'Konuşmayı onlarca kez prova etmiş olmasına rağmen ilk dakikada sesi titredi.', tag:'kar', note:'"Although + cümle": bolluk provaya RAĞMEN titreme — beklentinin tersi gerçekleşiyor.'},
  {en:'The city widened the drainage canal so that the floodwater could recede more quickly.', tr:'Şehir, taşkın suyunun daha hızlı çekilebilmesi için drenaj kanalını genişletti.', tag:'ama', note:'"so that + could": genişletme KARARININ niyeti — amaç cümlesi insan iradesiyle kurulur.'},
  {en:'The proposal was rejected since it exceeded the allocated budget.', tr:'Öneri, ayrılan bütçeyi aştığı için reddedildi.', tag:'seb', note:'"since" burada ZAMAN değil GEREKÇE: bütçe aşımı → ret. since/as/because aynı ailedendir.'},
  {en:'Bring your student card to the exam; otherwise, you will not be admitted to the hall.', tr:'Sınava öğrenci kartını getir; aksi hâlde salona alınmayacaksın.', tag:'kos', note:'"; otherwise,": kart yok → alınmama. Önceki cümledeki emre uyulmamasının SONUCU — koşul ailesinin uyarı üyesi.'},
  {en:'The orchestra kept tuning their instruments while the audience was still finding its seats.', tr:'Orkestra, seyirciler hâlâ yerlerini bulurken çalgılarını akort etmeyi sürdürdü.', tag:'zmn', note:'"while": iki SÜREKLİ eylemin eşzamanlılığı — akort sürüyor + yerleşme sürüyor.'},
  {en:'The novelist, who spent her childhood in Istanbul, sets most of her stories in the city.', tr:'Çocukluğunu İstanbul’da geçiren romancı, öykülerinin çoğuna bu şehri sahne yapar.', tag:'ilgi', note:'Virgüllü "who": İNSAN öznesi niteleyen ilgi cümleciği — virgülden sonra that gelemezdi.'},
  {en:'The report is impressively thorough; moreover, it is remarkably easy to read.', tr:'Rapor etkileyici ölçüde kapsamlı; üstelik okunması da şaşırtıcı derecede kolay.', tag:'ekl', note:'"; moreover,": iki olumlu yargı aynı yönde ilerliyor — ekleme ailesi. Zıtlık olsaydı however gelirdi.'}
];

window.QUESTIONS = [
  {id:1, part:'A', cat:'log',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'"as planned" = planlandığı gibi yapıldı. Bu kararın ardından bir ENGEL hikâyesi aranıyor: bağlacın isim mi cümle mi istediğini de denetleyin.',
   facts:['____, the open-air concert went ahead as planned.'],
   opts:[
     ['Because the lead singer had completely lost her voice','Sebep mantığı ters: solistin sesini kaybetmesi konserin YAPILMASINI değil, İPTALİNİ gerektirir. "Because X, konser yapıldı" ancak X yapılmayı açıklıyorsa kurulur.'],
     ['Despite the heavy rain that had been forecast all week','DOĞRU. "Despite + isim öbeği" (the heavy rain…): ağır yağmura rağmen konser planlandığı gibi yapıldı — beklenenin tersi, rağmen ailesinin isimli üyesi.'],
     ['So that the audience could get home before midnight','Amaç bağlacı buraya bağlanamaz: "konser yapıldı Kİ seyirci eve varabilsin" — izleyicilerin eve dönmesi konserin NİÇENİ olamaz.'],
     ['In case the organizers needed to refund the tickets','"In case" (olsa diye) önlem amaçlıdır; "went ahead" eylemi buna cevap olarak kurulmamış. "İade gerekirse diye konser yapıldı" anlamsızdır.'],
     ['Even though the tickets had sold out within hours','Aile doğru (karşıtlık) ama yön yanlış: biletlerin saatler içinde tükenmesi konserin yapılmasını DESTEKLER; "even though" çelişki ister. En güçlü çeldirici.']
   ],
   ans:1, ev:['s1-f0'],
   why:'Ana cümle "konser planlandığı gibi yapıldı" diyor; bunun bir engel aşması hikâyesi olması için boşluğun bir ZORLUK bildirmesi gerekir. "Despite + isim öbeği" hem aileyi (rağmen) hem formu (isim) doğru kurar.',
   strat:'Baştan tamamlamada önce ana cümleyi okuyun ve mantık boşluğunu adlandırın (engel mi, gerekçe mi, amaç mı?). Sonra her şıkkı FORM açısından süzün: despite isim ister, although cümle ister. Aile + form + yön üçlüsünün üçü de tutan tek şık cevaptır.'},
  {id:2, part:'A', cat:'log',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'"üç gün dış dünyadan kopuk kaldı" — bu sonucu AÇIKLAYAN bir gerekçe arayın; kopukluğu gideren ya da yalnız zaman söyleyen şıklar elenir.',
   facts:['____, the village was cut off from the outside world for three days.'],
   opts:[
     ['So that the emergency services could reach the valley','Amaç ters kurulmuş: köyün kopması kurtarma ekiplerinin ULAŞMASINI sağlayamaz; tam tersini engeller. so that + could biçimce doğru olsa da anlam çöker.'],
     ['While the engineers were assessing the damage to the main road','"While" yalnız eşzamanlı bir çerçeve kurar; köyün ÜÇ GÜN boyunca kopuk kalmasının NEDENİNİ vermez. Zaman ≠ açıklama.'],
     ['Because the only bridge over the river had collapsed','DOĞRU. Tek köprünün çökmesi, kopukluğun hem nedeni hem süresini (onarılana kadar üç gün) doğal kılıyor: because + cümle, past perfect → past simple zinciri kusursuz.'],
     ['Despite the villagers had stocked up on supplies','Form hatası: despite İSİM ÖBEĞİ alır (despite having stocked up); cümleyle kurulmaz. "Although the villagers had stocked up" olsaydı bile anlam bu cümleyi değil, kapanışı anlatırdı.'],
     ['Unless the army sent helicopters at once','"Unless" koşul bildirir ve ana cümlede koşula bağlı bir sonuç ister: "Hemen helikopter gönderilmezse yardım ulaşamaz." Geçmiş anlatılan "was cut off" ile bu koşul bağı kurulamaz.']
   ],
   ans:2, ev:['s2-f0'],
   why:'Ana cümle bir SONUÇ (üç günlük tecrit) bildiriyor; boşluk onun GEREKÇESİNİ tamamlayacak. Tek köprünün çökmesi bu tecridi hem neden hem süre açısından taşıyor.',
   strat:'Sonuç bildiren ana cümle görürseniz boşluğa önce "NEDEN?" sorusunu sorun. Gerekçe şıkkı somut olmalı; "while/in case/unless" gibi çerçeve veya koşul bağlaçları bu yuvaya oturmaz.'},
  {id:3, part:'A', cat:'log',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'Ana fiil geçmiş ("published"): amaç cümlesinin kipi buna kilitlenir. Beş şıktan dördü FORM hatası taşır — bağlaç-gramer uyumunu teker teker denetleyin.',
   facts:['____, the ministry published the inspection results on its website every month.'],
   opts:[
     ['So that the public can monitor hygiene standards for themselves','Anlam doğru ama KİP yanlış: "can" şimdiki/genel; ana cümle "published" geçmiş. Geçmiş ana fiil → so that + COULD/MIGHT. Klasik zaman tuzağı.'],
     ['Despite the public showed little interest in such reports','Form hatası: despite + CÜMLE kurulamaz (Despite the public’s little interest / Although the public showed… olmalıydı). Ayrıca "ilgi azdı" aylık yayını açıklamaz.'],
     ['Because of the inspectors demanded greater transparency','Form hatası: because of İSİM ÖBEĞİ alır (because of the demand…); cümleyle kurulmaz. Cümle isteyen biçim: because.'],
     ['In order to the public was informed regularly','Form hatası: "in order to + FİİL" gelir (in order to inform); cümle kurulmaz. Cümleli biçim: "in order that the public MIGHT BE informed".'],
     ['So that the public could monitor hygiene standards for themselves','DOĞRU. so that + could: geçmiş ana fiille (published) uyumlu; halkın denetleyebilmesi, aylık yayınlamanın AMAÇSAL gerekçesi.']
   ],
   ans:4, ev:['s3-f0'],
   why:'Bu soru anlamdan çok FORM sınavıdır: "published" geçmiş fiili, amaç cümlesinde could/might zorunlu kılar (E ✓, A ✗). B, C, D ise üç farklı bağlacın yanlış gramerle kurulmuş hâlidir — despite/because of isim ister, in order to fiil ister.',
   strat:'Şıklarda aynı anlamın form varyantlarını görünce soru "yapı" sorusudur: önce her şıkkın bağlacının yuvasını (isim mi cümle mi fiil mi) kontrol edin, sonra kip-zaman uyumunu. Bu iki filtre, beş şıktan dördünü 10 saniyede eler.'},
  {id:4, part:'A', cat:'kal',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'"…that" sonuç cümleciği hazır: boşluk, bu denli abartılı bir tepkiyi AŞIRILIKLA besleyen so/such zincirini kurmalı. Boşluktan sonra ne geliyor? SIFAT (moving).',
   facts:['____ that the audience rose to their feet for a full ten minutes.'],
   opts:[
     ['The pianist’s final performance was so moving','DOĞRU. so + SIFAT + that: "o kadar etkileyiciydi ki seyirci on dakika ayakta alkışladı" — aşırılık-sonuç zinciri tam.'],
     ['The pianist gave such moving','such + sıfat yarıda kesilmiş: isim yok. "such moving music / such moving performances" olmalıydı. En sık rastlanan biçim hatasıdır.'],
     ['The final performance was too moving','"too + sıfat" kendine has sonuç yapısı ister: too moving TO leave (…acak kadar). that-cümleciğiyle (too…that) kurulmaz.'],
     ['It was so a moving performance','so İSİMDEN ÖNCE a/an alamaz: "so moving a performance" ✓ ya da "such a moving performance" ✓ — "so a moving" ✗.'],
     ['The pianist played movingly enough','"enough" sıfattan sonra gelir ve "to + fiil" sonuç ister: movingly enough TO silence the hall. that yapısıyla çalışmaz.']
   ],
   ans:0, ev:['s4-f0'],
   why:'Boşluktan hemen sonra SIFAT + that geliyor: diziliş kilidi "so + sıfat + that"tir. B, C, D, E dört farklı ailenin (such, too, so+a, enough) that ile uyumsuz biçimleridir.',
   strat:'"____ that" gördüğünüz an boşluktan sonraki ilk kelimeye bakın: sıfat → so; (a/an +) isim → such. Ardından a/an var mı diye kontrol edin. Üç satırlık bu kural grubu 4. ve 19. soruları çözer.'},
  {id:5, part:'A', cat:'ref',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'Ana cümledeki "it" bir yere kilitlenmek zorunda: boşluğu dolduran şık, bu "it"in karşılayacağı TEKİL bir isim taşımalı. Zaman ve mantık yönünü de denetleyin.',
   facts:['____, it was withdrawn from pharmacies across the country within days.'],
   opts:[
     ['Because the safety trials had been completed successfully','Mantık ters: BAŞARILI güvenlik testleri bir ilacın çekilmesini değil, piyasada kalmasını gerektirir. Fiil zamanı uyumlu olsa da yön yanlış.'],
     ['As soon as the first symptoms were discussed on television','"it" için adres yok: belirtiler (symptoms) ÇOĞUL ve ilaca değil belirtilere aittir. Zamir, şıkta somut bir TEKİL isim bulamıyor — hayalet gönderim.'],
     ['Despite the authorities acted quickly','Form hatası: despite + cümle kurulmaz (Despite the authorities’ quick response olmalıydı). Ayrıca hızlı müdahale çekilmeyi değil güveni açıklar.'],
     ['So that no further patients will suffer','Kip hatası: "will" gelecek; ana cümle "was withdrawn" geçmiş. Geçmiş ana fiil → so that + would/could/might. Anlam da kurulsaydı kip elerdi.'],
     ['As soon as the first users of the new painkiller reported signs of liver damage','DOĞRU. "the new painkiller" tekil isim olarak "it"i besliyor; "as soon as + past → was withdrawn" zaman zinciri; karaciğer hasarı bildirimleri çekilmenin hem nedeni hem acelesini (within days) açıklıyor.']
   ],
   ans:4, ev:['s5-f0'],
   why:'Baştan tamamlamada ana cümledeki zamirler şıkkın isimlerine kilitlenir: it → tekil adres (the new painkiller ✓). E şıkkı bu adresi verirken zaman ve mantık yönlerini de kapatıyor.',
   strat:'Ana cümledeki her zamiri daire içine alın ve yanına sayı+tür yazın. Sonra her şıkta bu zamirin "adresini" arayın: adresi olmayan şık ne kadar akıcı olursa olsun elenir. Son süzgeç: fiil zamanı ve mantık yönü.'},
  {id:6, part:'A', cat:'kal',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'Ana cümlenin "would have + V3" biçimi 3. koşulu işaret ediyor: if-kolunda past perfect ya da DEVRİK biçim aranır. Her şıkkı normal (devrik olmayan) biçime çevirip denetleyin.',
   facts:['____, the ancient theatre would have collapsed completely.'],
   opts:[
     ['If the restoration team would have intervened in time','if-cümlesinde "would have" yasak: koşul koluna yalnız past perfect gelir. Bu, 3. koşulun en klasik çeldiricisidir.'],
     ['If the restoration team intervened in time','Yanlış koşul tipi: "intervened" (geçmiş) + "would have collapsed" (koşul-3) karışıyor. 3. koşulun if-kolu past perfect ister: had intervened.'],
     ['Unless the restoration team did not intervene in time','unless zaten "if…not" demektir; üzerine bir de "not" eklenince çifte olumsuz doğar: "müdahale etmedi takdirde değil" — anlam allak bullak olur.'],
     ['Had the restoration team not intervened in time','DOĞRU. Devrik 3. koşul: "Had the team not intervened…" = "If the team had not intervened…" — kurtarılmama koşulu, çöküşle doğal olarak eşleşiyor.'],
     ['Provided that the restoration team had intervened in time','Biçim doğru (past perfect) ama anlam ters: "provided that" = ancak …-sa (olumlu koşul). Müdahale EDİLMİŞ olsaydı çökerdi mantığı kurulamaz; çöküş, müdahalenin OLMAMASINA bağlanmalı.']
   ],
   ans:3, ev:['s6-f0'],
   why:'"would have collapsed" 3. koşulun sonuç koludur; if-kolunda "If the team had NOT intervened" gerekiyor. D şıkkı bunun devrik biçimidir: Had + özne + not + V3. A biçim hatası, B yanlış tip, C çifte olumsuz, E ise doğru biçimle ters anlam kurar.',
   strat:'"would have + V3" gördüğünüz an 3. koşul deklanşörüne basın: şıklarda "if + would have" arayın (anında ✗), sonra anlam yönünü kontrol edin. Provided that / so long as gibi "ancak" koşulları olumlu sonuçlarla evlenir.'},
  {id:7, part:'A', cat:'zmn',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'"had ALREADY destroyed" — yıkım, boşluktaki olaydan ÖNCE bitmiş. Bu önceliği taşıyan tek zaman bağlacı hangisi?',
   facts:['____, the fire had already destroyed most of the warehouse.'],
   opts:[
     ['When the fire brigade will arrive on the scene','Zaman bağımlı cümlesinde "will" yasak: geleceği ana cümle taşır. Ayrıca will (gelecek) ile past perfect (geçmiş) bir arada duramaz.'],
     ['By the time the fire brigade arrived on the scene','DOĞRU. "By the time + past simple, past perfect" kalıbı: itfaiye geldiğinde yıkım ÇOKTAN tamamlanmıştı — "already" işaretiyle birebir.'],
     ['As soon as the fire brigade arrived on the scene','"As soon as" ani ardışıklık kurar (gelir gelmez…), oysa "had already" ÖNCELİK bildiriyor: geliş, yıkımın ardından. Sıra ters.'],
     ['While the fire brigade was still battling the flames','"While" eşzamanlılık ister: söndürme sürerken yıkım çoktan olmuş — past perfect’in önceliği ile while’ın eşzamanlılığı çakışır.'],
     ['Until the fire brigade arrived on the scene','"Until" ana eylemin o ana dek SÜRDÜĞÜNÜ söyler; "had already destroyed" tek seferlik, bitmiş bir olay — süredurumuyla uyuşmaz.']
   ],
   ans:1, ev:['s7-f0'],
   why:'Past perfect + already, bir olayın REFERANS NOKTASINDAN önce tamamlandığını bildirir; bu referansı "By the time + past simple" kurar. İngilizcenin en sık test edilen zaman ikilisi: by the time → had already + V3.',
   strat:'Ana cümlede "had already" görürseniz boşluğa önce "ne zamana göre önce?" sorusunu sorun: cevap zaman bağlacıdır (by the time). while/as soon as/until bağlaçlarını kendi zaman sözlükleriyle denetleyin; uyumsuz olan her şık kendini ele verir.'},
  {id:8, part:'A', cat:'rel',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'İki kilit: "whose" bir isme, "her" TEKİL-KADIN bir kişiye bağlanacak. Şıklarda çoğul, eril ya da cansız özneler taşıyanlar anında düşer.',
   facts:['____, whose pioneering work on radioactivity eventually cost her her life.'],
   opts:[
     ['Marie and Pierre Curie shared the 1903 Nobel Prize in Physics','Özne ÇOĞUL (iki kişi): "her life" tekil-kadın gönderimiyle çelişir. whose kurulsa bile "their lives" gerekirdi.'],
     ['Radium and polonium were both discovered in the same year','Özne iki CANSIZ element: whose onlara bağlanabilir ama "her" patlar — elementlerin "kadın hayatı" olmaz.'],
     ['Marie Curie remains the only person to have been honoured in two different sciences','DOĞRU. Tekil-kadın özne (Marie Curie): whose → onun, her → onun. Radyoaktivite çalışmasıyla hayatını kaybetmesi tarihsel olarak da tutarlı.'],
     ['Pierre Curie abandoned his own research to support his wife’s career','Özne ERİL (Pierre): "her life" gönderimi çöker — bu cümlede "his life" gerekirdi. Cinsiyet kilidi şıkkı düşürür.'],
     ['The Curie family produced five Nobel laureates in total','Özne ÇOĞUL-aile: "her" tekil kişi ister. Aile toplamına bağlanan whose, kişisel bir hayatın bedelini anlatamaz.']
   ],
   ans:2, ev:['s8-f0'],
   why:'Virgülden sonraki "whose…her" zinciri çift kriter koyar: antecedent hem TEKİL hem KADIN bir kişi olmalı. Beş şıktan yalnızca Marie Curie bu iki filtreyi birden geçiyor.',
   strat:'İlgi zamirli sorularda önce kuyruktaki ipuçlarını toplayın (whose → sahiplik, her/his → cinsiyet, it/they → sayı). Sonra her şıkkın ÖZNESİNİ etiketleyin: tekil/çoğul, kadın/eril, canlı/cansız. Etiketi uymayan şık, anlamı ne kadar güzel kurarsa kursun elenir.'},
  {id:9, part:'A', cat:'eym',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'"yet" = AMA: ziyaretçi artışının TERSİ bir engel aranıyor. Dört şık müze için İYİ şey söylüyor — "yet"in nefesi hangi şıkta kalıyor?',
   facts:['____, yet the number of visitors has continued to rise.'],
   opts:[
     ['The museum extended its opening hours to include weekends','Hafta sonu da açılmak ziyaretçiyi ARTIRIR: "ama ziyaretçi arttı" derken yet kontrastı doğmaz — aynı yöne koşan iki cümle.'],
     ['A new wing with modern facilities was added last summer','Yeni modern kanat da çekiciliği artırır: yet’in zıtlığı yine beslenmiyor. Grameri kusursuz, yönü yanlış.'],
     ['The council reduced parking fees around the museum','Ucuz park yine kolaylık demek: ziyaretçi artışıyla aynı yön. Klasik çeldirici: doğru ve güzel, ama karşıtsız.'],
     ['The museum’s new director launched an advertising campaign','Reklam kampanyası izleyici ÇEKMEK için yapılır: artışla çelişmez, açıklar. yet burada işsiz kalır.'],
     ['The city council doubled the entrance fee last year','DOĞRU. Giriş ücretinin ikiye katlanması ziyaretçiyi DÜŞÜRMEK için bir engeldir — "ücret iki katına çıktı AMA ziyaretçi artmaya devam etti": yet’in istediği tam bu zıtlık.']
   ],
   ans:4, ev:['s9-f0'],
   why:'Yet’in tek görevi KARŞITLIK kurmaktır. A–D şıkları müzenin çekiciliğini artıran gelişmeler sayıyor (aynı yön); yalnızca E, artışla çelişen bir engel (iki kat ücret) bildiriyor.',
   strat:'yet/however/nevertheless gördüğünüzde boşluğa "ANA CÜMLEYLE ÇELİŞEN NE VAR?" sorusunu sorun. Şık ana cümleyi destekliyorsa grameri kusursuz olsa da elenir — kontrast bağlaçları çelişki olmadan yaşayamaz.'},
  {id:10, part:'A', cat:'eym',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'"on the contrary" ancak önceki cümlede geçen bir BEKLENTİYİ tersine çevirir. Boşluğa yazılacak ilk cümle, "ıslak" gerçekle nasıl bir ilişki kurmalı?',
   facts:['____; on the contrary, it turned out to be the wettest summer on record.'],
   opts:[
     ['The weather forecast had promised a hot, dry summer','DOĞRU. Tahmin (sıcak-kuru) ↔ gerçek (rekor yağışlı): "on the contrary" tam olarak bu düzeltmeyi yapar — beklenti ile gerçek arasındaki çelişki cümleyi kuruyor.'],
     ['The summer was unusually wet and humid','İlk cümle de "ıslak" derse "on the contrary, en yağışlıydı" AYNI yöne devam eder; düzeltme çelişkisi doğmaz. on the contrary zıt yön ister.'],
     ['Meteorologists had warned of floods all spring','Sel uyarıları zaten yağışlı bir tabloya işaret eder: gerçekle çelişmez, onu öngörür. Düzeltme bağlacı yine boşta kalır.'],
     ['Farmers complained endlessly about the rain','Şikâyetler de yağışın SONUCUDUR: aynı yön. "On the contrary"nin çevireceği bir beklenti yok.'],
     ['The region had suffered its worst drought in decades','Kuraklık gerçekten zıt yön verir ama cümle kendi içinde çöker: "on yılların en kurak yazıydı; tam tersine rekor yağışlı çıktı" — aynı yargı hem doğru hem yanlış olamaz.']
   ],
   ans:0, ev:['s10-f0'],
   why:'"On the contrary" önceki cümledeki BEKLENTİYİ (tahmin, öngörü) gerçekle ters yüz eder: tahmin sıcak-kuruydu, gerçek rekor yağışlı. A bu beklenti-gerçek çatışmasını kuruyor; B–D aynı yönde ilerleyip bağlacı işsiz bırakıyor; E ise cümleyi kendi içinde çelişkili hâle getiriyor.',
   strat:'"on the contrary" = "tam tersine": boşluğa yazılacak yargı ile "it turned out…" gerçek arasında BEKLENTİ–GERÇEK ilişkisi kurun. Aynı yönlü her şık bağlacı öldürür; mutlak zıtlık ise cümleyi kendi içinde yalanlar. Doğru cevap hep "beklenti" cümlesidir.'},
  {id:11, part:'B', cat:'kal',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'"not only" görüldü an ikizini arayın: "but also". İki kanadın gramer biçimi de BİRBİRİNE EŞİT olmalı — özne + fiil + nesne zincirini koruyun.',
   facts:['The new library not only lends books to members ____.'],
   opts:[
     ['but it also hosting free workshops on digital literacy','"hosting" bir yüklem biçimi değil: "but it also HOSTS" olmalıydı. Paralellik fiilde kırılıyor.'],
     ['and also hosts free workshops on digital literacy','"not only"nun eşi "and" değil "but also"dur: "not only…and also" kalıbı yok. Çift yarım bırakılmış.'],
     ['but also hosts free workshops on digital literacy','DOĞRU. "not only LENDS… but also HOSTS…" — iki kanat da fiil + nesne; kusursuz paralel.'],
     ['but also free workshops on digital literacy are hosted','İkinci kanat PASİFe döner: aktif "lends" ile pasif "are hosted" paralellik ilkesini bozar. Correlative yapılar biçim eşitliği ister.'],
     ['also hosts free workshops for the general public','"but" düşmüş: "not only… (but) also" çifti eksik kurulmuş. Çiftin taşıyıcısı olan but atılamaz.']
   ],
   ans:2, ev:['s11-f0'],
   why:'"not only lends" aktif ve fiil + nesne zinciri kuruyor; ikinci kanadın aynısını istemesi gerekir: "but also hosts". C biçimi ve yönü koruyor; A yüklemi, D çatıyı, B ve E ise çiftin taşıyıcılarını düşürüyor.',
   strat:'Correlative (eş) yapılarda üç denetim: (1) çift tam mı? (not only…BUT also), (2) iki kanat aynı biçimde mi? (fiil+fiil, isim+isim), (3) çatı (aktif/pasif) eşit mi? Bu üç soru 11. ve 20. soruları doğrudan çözer.'},
  {id:12, part:'B', cat:'rel',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'Virgül + boşluk: ilgi cümleciği TANIMLAYICI DEĞİL (that gelemez). "artists" İNSAN ve "of" edatı devrede — hangi biçim ayakta kalır?',
   facts:['The village has become a haven for artists, ____.'],
   opts:[
     ['many of which have converted old barns into studios','"which" cansızlar içindir; artists insan. "many of which" yapısı doğru olsa bile gönderim türü yanlış.'],
     ['many of who have converted old barns into studios','Edat (of) ardından "who" gelemez: nesne konumu WHOM ister. "many of who" biçimce sakattır.'],
     ['many of them have converted old barns into studios','Virgül splice (bağlaçsız birleşme): "many of them have…" bağımsız bir cümledir; iki bağımsız cümle yalnızca noktalı virgül ya da bağlaçla birleşir.'],
     ['that have converted old barns into studios','Virgülden sonra (non-restrictive) "that" kullanılmaz: "that" yalnız virgülsüz, tanımlayıcı cümleciklerde yaşar.'],
     ['many of whom have converted old barns into studios','DOĞRU. İnsan + edat + nesne konumu: "many of whom" — sanatçıların birçoğu ahırları atölyeye çevirdi. Biçim, gönderim ve anlam üçlüsü tam.']
   ],
   ans:4, ev:['s12-f0'],
   why:'Boşluk bir ilgi cümleciği kuruyor ve gönderilen isim "artists" (insan, çoğul). "of" edatı nesne biçimi istediği için doğru cevap "whom"dur: many of whom. which (cansız), of who (biçimce yanlış), them (virgül splice), that (virgülden sonra yasak) dört klasik tuzağın ta kendisidir.',
   strat:'İlgi zamiri sorusunda üç filtre sırayla: (1) virgül var mı? → that elenir; (2) gönderim insan mı cansız mı? → who/whom ↔ which; (3) edat var mı? → of/in/for + whom/which. Bu üç filtre, beş şıktan dördünü mekanik olarak eler.'},
  {id:13, part:'B', cat:'log',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'NOKTALI VİRGÜL: ikinci kısım BAĞIMSIZ bir cümle olmalı (özne + fiil). On yıllık rekabet → ani birleşme… okur olarak ne hissedersiniz?',
   facts:['The two companies had been fierce competitors for decades; ____.'],
   opts:[
     ['therefore, their sudden merger stunned the entire industry','DOĞRU. On yıllık düşmanlık birleşmeyi BEKLENMEDİK kılar; beklenmediklik şaşkınlığı doğurur: therefore, bu zinciri kuruyor.'],
     ['however, their sudden merger stunned the entire industry','"However" önceki cümlede bir KARŞIT görüş arar; "rekabet" yargısı birleşme haberini destekliyor (rakipler birleşirse şaşılır). Kontrast kaynağı yok — however boşta kalır.'],
     ['nevertheless, their merger took everyone by surprise','B ile aynı kusur: nevertheless de karşıtlık ister; verilen ilk cümlede çürütülecek bir şey yok.'],
     ['because their merger had been expected for years','İki ölümcül kusur: (1) "because" bağımlı cümle kurar → noktalı virgülden sonra FRAGMENT; (2) "yıllardır bekleniyordu" derken "şoke etti" diyemezsiniz — içerik çelişkisi.'],
     ['so that their merger would surprise the industry','Amaç cümleciği hem fragment kurar hem anlamı ters çevirir: şirketler "sektörü şaşırtmak İÇİN" birleşmez. Birleşmenin sonucu şaşkınlıktır, amacı değil.']
   ],
   ans:0, ev:['s13-f0'],
   why:'Noktalı virgül iki bağımsız cümleyi birleştirir: D ve E bağımlı yapılarıyla anında düşer. Kalan üç şıktan "therefore" akıl zincirini kurar: on yıllık rekabet → birleşme beklenmedik → sektör şoke oldu.',
   strat:'Noktalı virgül gördüğünüzde önce FRAGMENT avı yapın: because/so that/although ile başlayan şıklar bağımsız cümle kuramaz. Sonra bağlacın istediği ilişkiyi sorun: sonuç mu (therefore), karşıtlık mı (however)? İlk cümle bir "neden" sunuyorsa cevap çoğu kez therefore’dur.'},
  {id:14, part:'B', cat:'zmn',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'Ana cümlede "will not open" (gelecek). Zaman bağlacı olan bağımlı cümlede GELECEK bildiren yardımcı fiil aranmaz — hangi biçim geleceği şimdikisiyle temsil eder?',
   facts:['The archaeologists will not open the burial chamber ____.'],
   opts:[
     ['after they will have completed a full 3-D scan of the site','"after" bir zaman bağlacıdır: içinde "will" taşınmaz. "After they HAVE completed" olsaydı doğruydu.'],
     ['once they completed a full 3-D scan of the site','"completed" geçmiş; ana cümle gelecek (will not open). Geçmiş bitmiş eylem gelecekteki açılışı bekleyemez — zaman çelişkisi.'],
     ['by the time they are completing the scan','"by the time" belli bir BİTİŞ noktası ister; "are completing" süreklilik biçimi bitişi gösteremez.'],
     ['until they have completed a full 3-D scan of the site','DOĞRU. "will not open… until they HAVE completed": tarama TAMAMLANANA dek açılmayacak — gelecek bekleyiş, present perfect tamamlanmayla ifade edilir.'],
     ['until they will complete a full 3-D scan of the site','"Until" da zaman bağlacıdır: will yasak. E, D’nin tek kusurlu ikizi — yalnızca yardımcı fiil hilesiyle ayrılırlar.']
   ],
   ans:3, ev:['s14-f0'],
   why:'İngilizcede gelecek zamanı ana cümle taşır; when/until/after/once gibi zaman bağlaçları geleceği ŞİMDİKİ ya da ŞİMDİKİ-PERFECT biçimle temsil eder. "Will not open… until they have completed" — tamamlanma vurgusu için present perfect birebir doğru.',
   strat:'Zaman bağımlı cümlesinde "will" gördüğünüz an şık elenir (A, E). Ardından anlam denetimi: tamamlanma noktası gerekiyorsa perfect biçim, süreklilik değil. "Until + present perfect + gelecek ana cümle" üçlüsü YDS’nin sevdiği bir kalıptır.'},
  {id:15, part:'B', cat:'eym',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'Virgülden sonra boşluk: devam ya bu artışın SONUCUNU ya da onunla eş anlamlı bir yargıyı taşımali. Grameri doğru şıklardan hangisi ANLAM kapısını açıyor?',
   facts:['Childhood obesity rates have tripled in the last two decades, ____.'],
   opts:[
     ['which is why many schools have reintroduced compulsory physical education','DOĞRU. "which" önceki TÜM yargıya (obezitenin üç katına çıkması) gönderiyor: "bu yüzden okullar zorunlu beden eğitimine döndü" — artışın sonuçları bütünüyle uyumlu.'],
     ['and compulsory physical education remains a controversial subject','Gramatik olarak kurulur ama iki yarım cümle arasında mantık köprüsü yok: obezite artışıyla beden eğitiminin tartışmalı olması aynı hikâyeye ait değil — bağ kopuk.'],
     ['despite children today take far less exercise than before','Form hatası: despite + cümle kurulmaz (despite the fact that… / Although… olmalıydı). Anlam da tuhaf: az egzersiz, artışın AÇIKLAMASI olurdu, rağmenı değil.'],
     ['so parents have become noticeably less concerned about diet','Yön ters: obezite üçe katlanmışken ebeveynlerin DAHA AZ endişelenmesi beklenemez — "so" sonuç bağlacı olarak ters yönde çalışıyor.'],
     ['because adult obesity rates have also risen','Nedensellik sapması: çocuklardaki artışı yetişkinlerdeki artışla açıklamak mantıksız — ortak neden olabilir ama "because" doğrudan nedensellik iddia eder.']
   ],
   ans:0, ev:['s15-f0'],
   why:'Virgüllü "which" burada önceki cümlenin TAMAMINI karşılayarak bir sonuç zinciri kuruyor: artış → okulların tepkisi. B bağ kurmuyor, C form hatası, D yönü ters çeviriyor, E nedenselliği zorluyor.',
   strat:'"…, which is why" kalıbı cümle-tamamlayan sonuç yapısıdır: önceki yargının DOĞAL SONUCUNU arayın. Grameri kusursuz şıklarda şu testi yapın: bu iki yargı tek bir hikâye mi anlatıyor? Değilse şık "doğru ama bağsız"dır — elenir.'},
  {id:16, part:'B', cat:'ref',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'"and" ile başlayan boşluk PARALEL bir cümle bekliyor. Ana cümlede "releases" var: İKİNCİ öznenin fiili aynı işi "so + yardımcı" ile üstlenmeli — hangi yardımcı?',
   facts:['Deforestation in the Amazon releases enormous quantities of carbon dioxide, and ____.'],
   opts:[
     ['neither does the burning of tropical peatlands','"neither" OLUMSUZ paralellik kurar (…-de değil); ana cümlede olumsuzluk yok. "and" ile de neither gelmez — çelişki.'],
     ['so does the burning of tropical peatlands','DOĞRU. "X releases CO2, and so does Y" — amazon ormansızlaşması CO₂ salıyor, tropik turbalıkların yanması da öyle. so + does (releases’in do’su) + özne: kusursuz paralel.'],
     ['so is the burning of tropical peatlands','Yardımcı yanlış: "releases" bir LEXİKAL fiil; paralelliği "does" taşır, "is" değil. so is, ancak be-fiilli cümlelerde yaşar.'],
     ['so the burning of tropical peatlands does','Söz dizimi ters: kalıp "so + YARDIMCI + ÖZNE"dir. "so does the burning" ✓ — "so the burning does" ✗.'],
     ['so has the burning of tropical peatlands','Yine yanlış yardımcı: "has" perfect gerektirir; ana cümle geniş-zaman (releases). Paralellik yardımcısı zamanda eşit olmalı.']
   ],
   ans:1, ev:['s16-f0'],
   why:'"and so do/does" kalıbı önceki cümleyi özne değişimiyle tekrarlar: release → does. B bu formülü doğru kuruyor; A olumsuz bağlam ister, C/E yanlış yardımcı seçiyor, D dizilimi ters çeviriyor.',
   strat:'"…, and so ____" gördüğünüzde üç soru: (1) ana fiil ne? (be → is/are; have → has/have; diğer → do/does), (2) özne tekil mi çoğul mu? (the burning → does), (3) dizilim: so + yardımcı + özne. İki saniyelik kontrol, üç çeldiriciyi düşürür.'},
  {id:17, part:'B', cat:'log',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'"abandoned midway" — yarı yolda bırakılmış bir sefer. Bu sonucu taşıyacak bağlaç, seferin HAZIRLIĞIYLA sonuç arasına nasıl bir ilişki koyar?',
   facts:['The expedition was abandoned midway, ____.'],
   opts:[
     ['because the team had trained for it for over two years','Mantık ters: İKİ YILLIK titiz hazırlık, seferin yarı yolda bırakılmasını açıklamaz; tam tersini (başarıyı) besler. because bu çukura düşmez.'],
     ['so the team had trained for it for over two years','Sıra ters: "so" önceki durumun SONUCUNU getirir — terk edilme yüzünden mi hazırlanmışlar? Zaman da ters (had trained, terk edilmeden önceydi).'],
     ['although the team had trained for it for over two years','DOĞRU. İki yıllık hazırlığa RAĞMEN sefer yarı yolda bırakıldı: although + cümle, hazırlık ile sonuç arasına tam çelişki köprüsü kuruyor.'],
     ['despite the team had trained for over two years','Form hatası: despite İSİM ÖBEĞİ alır (despite two years of training); cümleyle kurulamaz. Anlam C ile aynı olurdu ama biçim çöker.'],
     ['even though it had never been properly planned','Yön tuzağı: plansız bir seferin bırakılması DOĞALDIR — çelişki yok. "even though" beklenmedik bir direnç ister; burada teslimiyet var.']
   ],
   ans:2, ev:['s17-f0'],
   why:'Ana cümledeki "yarı yolda bırakıldı" sonucu, boşluktaki hazırlık bilgisiyle ÇELİŞMELİ ki cümle bir anlam gerilimi taşısin: uzun hazırlık + erken terk = although’un doğal alanı. A gerekçe kuramaz, B sırayı bozar, D form hatası, E çelişkiyi yanlış tarafa kurar.',
   strat:'"sonuç-istisna" sorularında şıkları şu cümleyle test edin: "…-e RAĞMEN yine de oldu mu?" Oturuyorsa although/even though; oturmuyorsa yön yanlış. despite/although ayrımını da unutmayın: isim mi cümle mi geliyor, ona göre aile üyesi seçilir.'},
  {id:18, part:'B', cat:'rel',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'Boşluk "city centres"i niteleyecek: YER gönderimi. Şıklarda which’in işsiz kalışı, that + them fazlalığı ve whom’un insan dışı kullanımı gibi dört klasik hatayı arayın.',
   facts:['Urban planners are redesigning city centres ____.'],
   opts:[
     ['which pedestrians are given priority','"which" cümlede bir ROL üstlenmiyor (özne de değil nesne de değil): "in which / where" olmalıydı. Boşta duran which gramerce düşer.'],
     ['that pedestrians are given priority in them','İki kusur: "that" burada da rol alamıyor ve "them" fazlalık — ilgi cümleciğinde yer zamiri tekrar edilmez.'],
     ['whom pedestrians trust the most','"whom" İNSAN nesnesi içindir; "city centres" cansız yer. Ayrıca anlam da kayıyor: plancılar "yayaların en çok güvendiği merkezleri" değil, yaya öncelikli merkezleri tasarlıyor.'],
     ['where pedestrians, not cars, are given priority','DOĞRU. "city centres WHERE pedestrians…are given priority" — yer nitelemesi: yaya öncelikli kent merkezleri. where = in which.'],
     ['whose pedestrians are given priority every weekend','"whose" sahiplik kurar: "merkezlerin yayaları" sahiplenme anlamı üretir; öncelik verilen taraf yaya olsa da niteleme ilişkisi kurulmuyor.']
   ],
   ans:3, ev:['s18-f0'],
   why:'Gönderilen isim "city centres" = YER. Yer nitelemesi "where / in which" ile kurulur: D bu kapıyı açıyor. A’daki which cümlede hiçbir gramer rolü üstlenmiyor, B rol + fazlalık (in them) hatası taşıyor, C insan zamirini cansıza basıyor, E sahiplikle nitelemeyi karıştırıyor.',
   strat:'İlgi zamiri seçiminde gönderilen ismin TÜRÜNÜ yazın: insan → who/whom/whose, nesne → which/that, yer → where, zaman → when. Sonra şıktaki ilgi zamirinin cümlede bir ROLÜ var mı diye bakın: rolsüz which, fazlalıklı them, insansız whom her zaman çeldirici imzalarıdır.'},
  {id:19, part:'B', cat:'kal',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'"…that" hazır: boşluğa so/such zinciri gelecek. Boşluktan sonra ne var? "an inspiring lecture" — A/AN + SIFAT + İSİM. Kilidi bu diziliş belirler.',
   facts:['The professor delivered ____ that the audience refused to leave the hall.'],
   opts:[
     ['so an inspiring lecture','"so" sıfatın önüne gelir, a/an’ın değil: "so inspiring a lecture" ✓ (edebi biçim) ama "so an inspiring lecture" ✗. Sıra hatası.'],
     ['such an inspiring lecture','DOĞRU. such + a/an + sıfat + isim + that: "o kadar etkileyici bir konferanstı ki salondan ayrılmak istemediler" — diziliş kusursuz.'],
     ['so inspiring lecture','so + sıfat doğru başlangıç ama isim TEKİL sayılabilir ve a/an’sız kalmış: "so inspiring a lecture" ya da "such an inspiring lecture" gerekirdi.'],
     ['a so inspiring lecture','"a/an" ile "so" bu sırada birleşemez: "so" sıfattan önce gelir; a/an’ın yeri such’tan sonradır. Diziliş kuralları katıdır.'],
     ['such inspiring a lecture','"such" ile "a/an" yer değiştirmiş: kalıp "such A MOVING lecture"tır; "such inspiring a lecture" ✗.']
   ],
   ans:1, ev:['s19-f0'],
   why:'Boşluktan sonra "an + sıfat + isim + that" geliyor: bu diziliş yalnız "such" ile kurulur. so olsaydı sıfatın hemen önünde duracak ve tekil isimden önce a/an’ı ya hiç almayacak ya da sıfattan sonraya koyacaktı. B, kalıbın tek doğru sıralaması.',
   strat:'so/such ayrımında boşluktan sonraki İLK kelimeye bakın: a/an ya da isim → such; yalın sıfat → so. Tekil sayılabilir isimdeki a/an’ın konumu iki aileyi ayıran çizgidir: such a boring film ↔ so boring a film. 4. ve 19. sorular bu tek kuralın iki yüzüdür.'},
  {id:20, part:'B', cat:'eym',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'"Unlike her predecessor" bir KARŞILAŞTIRMA öbeği: karşılaştırılan iki taraf ana cümlenin ÖZNESİYLE AYNI TÜRDE olmalı — karşı taraf "yönetmen", boşluğun öznesi de "yönetmen" olmalı.',
   facts:['Unlike her predecessor, the new director ____.'],
   opts:[
     ['brief, tightly-structured meetings are preferred','Özne "toplantılar" oldu: "Yerine göre, toplantılar tercih ediyor" — yönetmenle toplantı kıyaslanamaz. Karşılaştırma paralelliği kopuyor.'],
     ['and she prefers to keep meetings brief','"Unlike…" öbeğiyle "and" bağlacı çakışır: öbeğin ardından doğrudan özne + fiil gelmelidir. "Unlike X, and she…" biçimi kurulamaz.'],
     ['who prefers brief, tightly-structured meetings','Bağımlı cümlecik: ana yüklem yok — fragment. Cümle askıda kalır.'],
     ['prefers short, tightly-structured meetings to long, open-ended ones','DOĞRU. Özne (the new director) karşılaştırmanın iki tarafında da aynı türde; "prefer X to Y" kalıbı da yerinde: kısa ve derli toplantıları uzun, sonu gelmez toplantılara tercih ediyor.'],
     ['the meetings are kept short and focused','A ile aynı kusur: özne toplantılara kayıyor, "yönetmen ↔ toplantı" kıyası kurulamıyor. Gramer kusursuz, paralellik ölü.']
   ],
   ans:3, ev:['s20-f0'],
   why:'"Unlike her predecessor" boşluğa bir ÖZNE SÖZÜ veriyor: the new director. Karşılaştırma yapılarında iki taraf aynı gramer ve anlam konumunda olmalı: yönetmen ↔ yönetmen. D bu paralelliği kuruyor; ayrıca "prefer X to Y" kalıbını doğru kullanıyor.',
   strat:'Like/unlike/compared with öbeklerinden sonra ilk iş özne kontrolüdür: kıyas öbeğindeki isimle ana cümlenin öznesi aynı kategoride mi? Özne kayması (meetings, the meetings) en yaygın çeldiricidir. İkinci iş: yüklem var mı? (fragment avı).'}
];

window.__VERI_OK = 1;
/* VERI-SONU: Bu satırı görüyorsanız veri.js tamamdır. */
