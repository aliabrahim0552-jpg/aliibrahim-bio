// Ali Al Ibrahim — Portfolio i18n (English / Arabic / Turkish)
//
// HTML elements opt in with data-i18n="key" (sets textContent) or
// data-i18n-html="key" (sets innerHTML, only used where a translation
// needs an inline tag, e.g. the hero headline's <br> and accent <span>).
// English text is also baked into the HTML directly as a no-JS fallback.
window.SITE_I18N = (function () {
  "use strict";

  var SUPPORTED = ["en", "ar", "tr"];
  var STORAGE_KEY = "ali-site-lang";

  var STRINGS = {
    en: {
      "meta.title": "Ali Al Ibrahim — Bioengineering Graduate",
      "meta.description": "Ali Al Ibrahim — Bioengineering graduate specializing in bioinformatics, laboratory analysis, machine learning and CAD design.",

      "nav.about": "About", "nav.skills": "Skills", "nav.experience": "Experience",
      "nav.education": "Education", "nav.work": "Work", "nav.contact": "Get in touch",

      "hero.kicker": "Bioengineering Graduate · Bilecik, Turkey",
      "hero.title.html": "Ali Al Ibrahim,<br>engineering <span class=\"accent\">biology</span> into systems that work.",
      "hero.lede": "I work at the intersection of bioengineering, laboratory analysis and data science — running GC‑MS and HPLC instrumentation one day, training machine learning models the next.",
      "hero.cta.work": "View my work", "hero.cta.contact": "Get in touch",
      "hero.meta1": "Deir ez-Zor, Syria — born", "hero.meta2": "Bilecik & Kuwait — based", "hero.meta3": "Arabic · English · Turkish",
      "hero.portrait.tag": "Bilecik Şeyh Edebali University",

      "about.eyebrow": "About", "about.h2": "A scientific mind, kept close to the bench.",
      "about.p1": "I'm a Bioengineering graduate of Bilecik Şeyh Edebali University, where I combined biological sciences with engineering fundamentals — from bioreaction engineering to biomedical electronics. My work spans molecular docking, hands-on laboratory analysis, and applied machine learning.",
      "about.p2": "Born in Deir ez-Zor, Syria, I bring a multicultural perspective shaped by experience across Kuwait, the wider Arab world and Turkey — and I communicate fluently in Arabic, English and Turkish.",
      "about.p3": "Outside the lab, I design with the Adobe suite and model in SolidWorks — always looking for the place where rigorous science meets careful design.",
      "about.k.name": "Full name", "about.v.name": "Ali Al Ibrahim",
      "about.k.dob": "Date of birth", "about.v.dob": "01 January 1999",
      "about.k.pob": "Place of birth", "about.v.pob": "Deir ez-Zor, Syria",
      "about.k.nat": "Nationality", "about.v.nat": "Syrian",
      "about.k.based": "Based in", "about.v.based": "Bilecik, Turkey / Kuwait",
      "about.k.status": "Status", "about.v.status": "Open to opportunities",

      "skills.eyebrow": "What I bring", "skills.h2": "Core competencies",
      "skills.p": "Six areas I move between comfortably — from the bench to the keyboard to the drawing board.",
      "skill1.cat": "Programming & Data Science", "skill1.h3": "Data & Machine Learning",
      "skill1.desc": "End-to-end data analysis and applied ML model development.",
      "skill2.cat": "Laboratory & Research", "skill2.h3": "Analytical Instrumentation",
      "skill2.desc": "Advanced analytical work in professional research environments.",
      "skill3.cat": "Bioinformatics", "skill3.h3": "Computational Biology",
      "skill3.desc": "Computational analysis of biological data and protein–ligand interactions.",
      "skill4.cat": "CAD Design", "skill4.h3": "3D Modeling",
      "skill4.desc": "Part modeling, assembly design and technical engineering drawings.",
      "skill5.cat": "Creative Design", "skill5.h3": "Visual & Publication",
      "skill5.desc": "Professional visual content, branding and publication design.",
      "skill6.cat": "Office & Productivity", "skill6.h3": "Applied Tools",
      "skill6.desc": "Advanced proficiency across the standard office suite.",

      "academic.eyebrow": "Academic competencies", "academic.h2": "Engineering fundamentals",
      "ac1.t": "Bioreaction Engineering", "ac1.d": "Design and control of biotechnological processes; large-scale analysis of cellular systems.",
      "ac2.t": "Bioinformatics", "ac2.d": "Computational analysis of biological data; molecular docking for protein–ligand interaction studies.",
      "ac3.t": "Molecular Biology & Biochemistry", "ac3.d": "Hands-on knowledge of cellular and genetic mechanisms.",
      "ac4.t": "Engineering Fundamentals", "ac4.d": "Thermodynamics, fluid mechanics and differential equations for system analysis.",
      "ac5.t": "Biomedical Electronics & Computing", "ac5.d": "Modeling, simulation and data analysis.",
      "ac6.t": "Occupational Health & Safety", "ac6.d": "Awareness and application of safe working practices.",

      "experience.eyebrow": "Internships & training", "experience.h2": "Experience",

      "exp1.date": "2026 · Apr 23 – Aug 14", "exp1.h3": "Advanced Analytical Laboratory Training",
      "exp1.org": "BSEU BARUM — Central Research Laboratory",
      "exp1.b1": "Continued hands-on training in advanced analytical instrumentation, including GC-MS, HPLC and FT-IR",
      "exp1.b2": "Carried out sample preparation and spectroscopic/chromatographic analysis for laboratory research projects",
      "exp1.b3": "Applied calibration and safety protocols in interpreting analytical results throughout the extended training period",

      "exp2.date": "2025", "exp2.h3": "Advanced Analytical Laboratory Training",
      "exp2.org": "BSEU BARUM — Central Research Laboratory",
      "exp2.b1": "Operated advanced instruments including GC-MS, HPLC and FT-IR",
      "exp2.b2": "Performed sample preparation and spectroscopic/chromatographic analysis",
      "exp2.b3": "Interpreted results following approved calibration and safety protocols",

      "exp3.date": "August 2024", "exp3.h3": "Python & Machine Learning Training",
      "exp3.org": "Isparta University of Applied Sciences",
      "exp3.b1": "Hands-on data analysis and machine learning using Python",
      "exp3.b2": "Applied NumPy, Pandas, Matplotlib and Seaborn for data visualization",
      "exp3.b3": "Implemented fundamental machine learning algorithms on real-world datasets",

      "exp4.date": "Ongoing · Self-study", "exp4.h3": "SolidWorks — 3D CAD Design",
      "exp4.org": "Online courses, books & video tutorials",
      "exp4.b1": "3D part modeling, assembly design and technical drawing",
      "exp4.b2": "Studied through online platforms, reference books and instructional videos",
      "exp4.b3": "Applied SolidWorks in engineering design and simulation exercises",

      "education.eyebrow": "Academic background", "education.h2": "Education",
      "edu1.eyebrow": "Bachelor's degree", "edu1.h3": "B.Sc. in Bioengineering",
      "edu1.org": "Bilecik Şeyh Edebali University — Bilecik, Turkey", "edu1.date": "Oct 2022 – Jul 2026",
      "edu2.eyebrow": "Secondary education", "edu2.h3": "High School Diploma",
      "edu2.org": "Saad Murshed Al-Badhal High School — Kuwait", "edu2.date": "Completed",

      "languages.eyebrow": "Communication", "languages.h2": "Languages",
      "lang.th.language": "Language", "lang.th.reading": "Reading", "lang.th.writing": "Writing", "lang.th.speaking": "Speaking",
      "lang.arabic": "Arabic", "lang.english": "English", "lang.turkish": "Turkish",
      "lang.native": "Native", "lang.good": "Good",

      "work.eyebrow": "Selected work", "work.h2": "Projects & work samples",
      "work.p": "Uploaded and managed directly from the studio dashboard — new work appears here automatically.",
      "work.empty.eyebrow": "Coming soon", "work.empty.h3": "New work is on its way",
      "work.empty.p": "Projects added from the studio dashboard will appear here automatically.",
      "work.link.view": "View link →", "work.link.file": "Open file →",

      "contact.eyebrow": "Let's connect", "contact.h2": "Get in touch",
      "contact.p": "Open to internships, research positions and collaboration — reach out directly or send a message below.",
      "contact.k.email": "Email", "contact.k.phoneTr": "Phone — Turkey", "contact.k.phoneKw": "Phone — Kuwait",
      "contact.k.loc": "Location", "contact.v.locTr": "Bilecik, Turkey", "contact.v.locKw": "Kuwait, Kuwait",
      "form.name": "Your name", "form.email": "Email address", "form.message": "Message",
      "form.submit": "Send message", "form.note": "Sent via a secure Netlify form — no data is stored anywhere else.",

      "footer.copyright": "© {year} Ali Al Ibrahim — Bioengineering Graduate, Bilecik, Turkey",
      "footer.email": "Email", "footer.top": "Back to top", "footer.studio": "Studio"
    },

    ar: {
      "meta.title": "علي الإبراهيم — خريج هندسة حيوية",
      "meta.description": "علي الإبراهيم — خريج هندسة حيوية متخصص في المعلوماتية الحيوية والتحليل المخبري وتعلّم الآلة والتصميم بالحاسوب.",

      "nav.about": "نبذة", "nav.skills": "المهارات", "nav.experience": "الخبرة",
      "nav.education": "التعليم", "nav.work": "الأعمال", "nav.contact": "تواصل معي",

      "hero.kicker": "خريج هندسة حيوية · بيلجيك، تركيا",
      "hero.title.html": "علي الإبراهيم،<br>أُحوّل <span class=\"accent\">علم الأحياء</span> إلى أنظمة عاملة بدقة.",
      "hero.lede": "أعمل عند تقاطع الهندسة الحيوية والتحليل المخبري وعلم البيانات — أُشغّل أجهزة GC-MS وHPLC في يوم، وأُدرّب نماذج تعلّم آلي في اليوم التالي.",
      "hero.cta.work": "اطّلع على أعمالي", "hero.cta.contact": "تواصل معي",
      "hero.meta1": "دير الزور، سوريا — مسقط الرأس", "hero.meta2": "بيلجيك والكويت — الإقامة", "hero.meta3": "العربية · الإنجليزية · التركية",
      "hero.portrait.tag": "جامعة بيلجيك شيخ أديبالي",

      "about.eyebrow": "نبذة", "about.h2": "عقل علمي لا يبتعد عن طاولة المختبر.",
      "about.p1": "أنا خريج هندسة حيوية من جامعة بيلجيك شيخ أديبالي، حيث جمعت بين العلوم البيولوجية وأساسيات الهندسة — من هندسة التفاعلات الحيوية إلى الإلكترونيات الطبية الحيوية. يمتد عملي ليشمل الالتحام الجزيئي، والتحليل المخبري العملي، وتعلّم الآلة التطبيقي.",
      "about.p2": "وُلدت في دير الزور بسوريا، وأحمل منظوراً متعدد الثقافات تشكّل من خلال تجربتي في الكويت والعالم العربي وتركيا — وأتواصل بطلاقة بالعربية والإنجليزية والتركية.",
      "about.p3": "خارج المختبر، أُصمّم باستخدام حزمة Adobe وأُصمّم نماذج ثلاثية الأبعاد عبر SolidWorks — وأبحث دائماً عن نقطة التقاء العلم الدقيق بالتصميم المتأني.",
      "about.k.name": "الاسم الكامل", "about.v.name": "علي الإبراهيم",
      "about.k.dob": "تاريخ الميلاد", "about.v.dob": "1 يناير 1999",
      "about.k.pob": "مكان الميلاد", "about.v.pob": "دير الزور، سوريا",
      "about.k.nat": "الجنسية", "about.v.nat": "سوري",
      "about.k.based": "الإقامة", "about.v.based": "بيلجيك، تركيا / الكويت",
      "about.k.status": "الحالة", "about.v.status": "منفتح على الفرص",

      "skills.eyebrow": "ما أُقدّمه", "skills.h2": "الكفاءات الأساسية",
      "skills.p": "ستة مجالات أتنقّل بينها بارتياح — من طاولة المختبر إلى لوحة المفاتيح إلى لوح الرسم الهندسي.",
      "skill1.cat": "البرمجة وعلوم البيانات", "skill1.h3": "البيانات وتعلّم الآلة",
      "skill1.desc": "تحليل بيانات شامل وتطوير نماذج تعلّم آلي تطبيقية.",
      "skill2.cat": "المختبر والبحث", "skill2.h3": "الأجهزة التحليلية",
      "skill2.desc": "عمل تحليلي متقدّم ضمن بيئات بحثية احترافية.",
      "skill3.cat": "المعلوماتية الحيوية", "skill3.h3": "الأحياء الحاسوبية",
      "skill3.desc": "تحليل حاسوبي للبيانات البيولوجية وتفاعلات البروتين والليجند.",
      "skill4.cat": "التصميم بالحاسوب", "skill4.h3": "النمذجة ثلاثية الأبعاد",
      "skill4.desc": "نمذجة القطع، وتصميم التجميعات، والرسومات الهندسية التقنية.",
      "skill5.cat": "التصميم الإبداعي", "skill5.h3": "التصميم البصري والمطبوعات",
      "skill5.desc": "محتوى بصري احترافي، وهوية بصرية، وتصميم مطبوعات.",
      "skill6.cat": "برامج المكتب والإنتاجية", "skill6.h3": "الأدوات التطبيقية",
      "skill6.desc": "إتقان متقدّم لحزمة برامج المكتب القياسية.",

      "academic.eyebrow": "الكفاءات الأكاديمية", "academic.h2": "أساسيات الهندسة",
      "ac1.t": "هندسة التفاعلات الحيوية", "ac1.d": "تصميم والتحكم بالعمليات التقنية الحيوية؛ تحليل واسع النطاق للأنظمة الخلوية.",
      "ac2.t": "المعلوماتية الحيوية", "ac2.d": "تحليل حاسوبي للبيانات البيولوجية؛ الالتحام الجزيئي لدراسات تفاعل البروتين والليجند.",
      "ac3.t": "الأحياء الجزيئية والكيمياء الحيوية", "ac3.d": "معرفة عملية بالآليات الخلوية والوراثية.",
      "ac4.t": "أساسيات الهندسة", "ac4.d": "الديناميكا الحرارية، وميكانيكا الموائع، والمعادلات التفاضلية لتحليل الأنظمة.",
      "ac5.t": "الإلكترونيات الطبية الحيوية والحوسبة", "ac5.d": "النمذجة، والمحاكاة، وتحليل البيانات.",
      "ac6.t": "الصحة والسلامة المهنية", "ac6.d": "الوعي بممارسات العمل الآمنة وتطبيقها.",

      "experience.eyebrow": "التدريب والتأهيل", "experience.h2": "الخبرة",

      "exp1.date": "2026 · 23 أبريل – 14 أغسطس", "exp1.h3": "تدريب متقدّم في المختبر التحليلي",
      "exp1.org": "BSEU BARUM — مختبر البحث المركزي",
      "exp1.b1": "متابعة التدريب العملي على الأجهزة التحليلية المتقدّمة، بما فيها GC-MS وHPLC وFT-IR",
      "exp1.b2": "إجراء تحضير العيّنات والتحليل الطيفي والكروماتوغرافي لمشاريع بحثية مخبرية",
      "exp1.b3": "تطبيق بروتوكولات المعايرة والسلامة عند تفسير النتائج التحليلية طوال فترة التدريب الممتدة",

      "exp2.date": "2025", "exp2.h3": "تدريب متقدّم في المختبر التحليلي",
      "exp2.org": "BSEU BARUM — مختبر البحث المركزي",
      "exp2.b1": "تشغيل أجهزة متقدّمة تشمل GC-MS وHPLC وFT-IR",
      "exp2.b2": "إجراء تحضير العيّنات والتحليل الطيفي والكروماتوغرافي",
      "exp2.b3": "تفسير النتائج وفق بروتوكولات المعايرة والسلامة المعتمدة",

      "exp3.date": "أغسطس 2024", "exp3.h3": "تدريب بايثون وتعلّم الآلة",
      "exp3.org": "جامعة إسبارطة للعلوم التطبيقية",
      "exp3.b1": "تحليل بيانات عملي وتعلّم آلة باستخدام بايثون",
      "exp3.b2": "استخدام NumPy وPandas وMatplotlib وSeaborn لتصوير البيانات",
      "exp3.b3": "تطبيق خوارزميات تعلّم آلة أساسية على مجموعات بيانات واقعية",

      "exp4.date": "مستمر · دراسة ذاتية", "exp4.h3": "SolidWorks — تصميم ثلاثي الأبعاد",
      "exp4.org": "دورات عبر الإنترنت وكتب ومقاطع تعليمية",
      "exp4.b1": "نمذجة القطع ثلاثية الأبعاد، وتصميم التجميعات، والرسم التقني",
      "exp4.b2": "الدراسة عبر منصات إلكترونية وكتب مرجعية ومقاطع تعليمية",
      "exp4.b3": "تطبيق SolidWorks في تمارين التصميم الهندسي والمحاكاة",

      "education.eyebrow": "الخلفية الأكاديمية", "education.h2": "التعليم",
      "edu1.eyebrow": "شهادة البكالوريوس", "edu1.h3": "بكالوريوس في الهندسة الحيوية",
      "edu1.org": "جامعة بيلجيك شيخ أديبالي — بيلجيك، تركيا", "edu1.date": "أكتوبر 2022 – يوليو 2026",
      "edu2.eyebrow": "التعليم الثانوي", "edu2.h3": "شهادة الثانوية العامة",
      "edu2.org": "مدرسة سعد مرشد البذّال الثانوية — الكويت", "edu2.date": "مكتملة",

      "languages.eyebrow": "التواصل", "languages.h2": "اللغات",
      "lang.th.language": "اللغة", "lang.th.reading": "القراءة", "lang.th.writing": "الكتابة", "lang.th.speaking": "المحادثة",
      "lang.arabic": "العربية", "lang.english": "الإنجليزية", "lang.turkish": "التركية",
      "lang.native": "اللغة الأم", "lang.good": "جيد",

      "work.eyebrow": "أعمال مختارة", "work.h2": "المشاريع ونماذج الأعمال",
      "work.p": "تُرفع وتُدار مباشرة من لوحة تحكم الاستوديو — تظهر الأعمال الجديدة هنا تلقائياً.",
      "work.empty.eyebrow": "قريباً", "work.empty.h3": "أعمال جديدة في الطريق",
      "work.empty.p": "ستظهر هنا تلقائياً المشاريع المُضافة من لوحة تحكم الاستوديو.",
      "work.link.view": "← عرض الرابط", "work.link.file": "← فتح الملف",

      "contact.eyebrow": "لنتواصل", "contact.h2": "تواصل معي",
      "contact.p": "منفتح على التدريب، والمناصب البحثية، والتعاون — تواصل مباشرة أو أرسل رسالة أدناه.",
      "contact.k.email": "البريد الإلكتروني", "contact.k.phoneTr": "الهاتف — تركيا", "contact.k.phoneKw": "الهاتف — الكويت",
      "contact.k.loc": "الموقع", "contact.v.locTr": "بيلجيك، تركيا", "contact.v.locKw": "الكويت، الكويت",
      "form.name": "الاسم", "form.email": "البريد الإلكتروني", "form.message": "الرسالة",
      "form.submit": "إرسال الرسالة", "form.note": "يُرسل عبر نموذج Netlify آمن — لا تُخزَّن البيانات في أي مكان آخر.",

      "footer.copyright": "© {year} علي الإبراهيم — خريج هندسة حيوية، بيلجيك، تركيا",
      "footer.email": "البريد الإلكتروني", "footer.top": "العودة للأعلى", "footer.studio": "الاستوديو"
    },

    tr: {
      "meta.title": "Ali Al Ibrahim — Biyomühendislik Mezunu",
      "meta.description": "Ali Al Ibrahim — biyoinformatik, laboratuvar analizi, makine öğrenmesi ve CAD tasarımında uzmanlaşmış Biyomühendislik mezunu.",

      "nav.about": "Hakkımda", "nav.skills": "Yetenekler", "nav.experience": "Deneyim",
      "nav.education": "Eğitim", "nav.work": "Çalışmalar", "nav.contact": "İletişime Geç",

      "hero.kicker": "Biyomühendislik Mezunu · Bilecik, Türkiye",
      "hero.title.html": "Ali Al Ibrahim,<br><span class=\"accent\">biyolojiyi</span> çalışan sistemlere dönüştürüyorum.",
      "hero.lede": "Biyomühendislik, laboratuvar analizi ve veri biliminin kesişiminde çalışıyorum — bir gün GC-MS ve HPLC cihazlarını çalıştırıyor, ertesi gün makine öğrenmesi modelleri eğitiyorum.",
      "hero.cta.work": "Çalışmalarımı Gör", "hero.cta.contact": "İletişime Geç",
      "hero.meta1": "Deyrizor, Suriye — doğum yeri", "hero.meta2": "Bilecik ve Kuveyt — ikamet", "hero.meta3": "Arapça · İngilizce · Türkçe",
      "hero.portrait.tag": "Bilecik Şeyh Edebali Üniversitesi",

      "about.eyebrow": "Hakkımda", "about.h2": "Laboratuvara yakın duran bilimsel bir zihin.",
      "about.p1": "Bilecik Şeyh Edebali Üniversitesi'nden Biyomühendislik mezunuyum; burada biyolojik bilimleri mühendislik temelleriyle birleştirdim — biyoreaksiyon mühendisliğinden biyomedikal elektroniğe kadar. Çalışmalarım moleküler docking, uygulamalı laboratuvar analizi ve uygulamalı makine öğrenmesini kapsıyor.",
      "about.p2": "Suriye'nin Deyrizor kentinde doğdum; Kuveyt, geniş Arap dünyası ve Türkiye'deki deneyimlerimle şekillenen çok kültürlü bir bakış açısına sahibim — Arapça, İngilizce ve Türkçeyi akıcı biçimde konuşuyorum.",
      "about.p3": "Laboratuvar dışında Adobe paketiyle tasarım yapıyor, SolidWorks ile modelliyorum — titiz bilim ile özenli tasarımın buluştuğu noktayı her zaman arıyorum.",
      "about.k.name": "Ad Soyad", "about.v.name": "Ali Al Ibrahim",
      "about.k.dob": "Doğum tarihi", "about.v.dob": "1 Ocak 1999",
      "about.k.pob": "Doğum yeri", "about.v.pob": "Deyrizor, Suriye",
      "about.k.nat": "Uyruk", "about.v.nat": "Suriyeli",
      "about.k.based": "İkamet", "about.v.based": "Bilecik, Türkiye / Kuveyt",
      "about.k.status": "Durum", "about.v.status": "Fırsatlara açık",

      "skills.eyebrow": "Sunduklarım", "skills.h2": "Temel Yetkinlikler",
      "skills.p": "Rahatlıkla geçiş yaptığım altı alan — laboratuvar tezgâhından klavyeye, çizim masasına.",
      "skill1.cat": "Programlama ve Veri Bilimi", "skill1.h3": "Veri ve Makine Öğrenmesi",
      "skill1.desc": "Uçtan uca veri analizi ve uygulamalı ML model geliştirme.",
      "skill2.cat": "Laboratuvar ve Araştırma", "skill2.h3": "Analitik Enstrümantasyon",
      "skill2.desc": "Profesyonel araştırma ortamlarında ileri düzey analitik çalışma.",
      "skill3.cat": "Biyoinformatik", "skill3.h3": "Hesaplamalı Biyoloji",
      "skill3.desc": "Biyolojik verilerin ve protein–ligand etkileşimlerinin hesaplamalı analizi.",
      "skill4.cat": "CAD Tasarım", "skill4.h3": "3B Modelleme",
      "skill4.desc": "Parça modelleme, montaj tasarımı ve teknik mühendislik çizimleri.",
      "skill5.cat": "Yaratıcı Tasarım", "skill5.h3": "Görsel ve Yayın Tasarımı",
      "skill5.desc": "Profesyonel görsel içerik, marka kimliği ve yayın tasarımı.",
      "skill6.cat": "Ofis ve Verimlilik", "skill6.h3": "Uygulamalı Araçlar",
      "skill6.desc": "Standart ofis paketinde ileri düzey yetkinlik.",

      "academic.eyebrow": "Akademik Yetkinlikler", "academic.h2": "Mühendislik Temelleri",
      "ac1.t": "Biyoreaksiyon Mühendisliği", "ac1.d": "Biyoteknolojik süreçlerin tasarımı ve kontrolü; hücresel sistemlerin büyük ölçekli analizi.",
      "ac2.t": "Biyoinformatik", "ac2.d": "Biyolojik verilerin hesaplamalı analizi; protein–ligand etkileşim çalışmaları için moleküler docking.",
      "ac3.t": "Moleküler Biyoloji ve Biyokimya", "ac3.d": "Hücresel ve genetik mekanizmalara dair uygulamalı bilgi.",
      "ac4.t": "Mühendislik Temelleri", "ac4.d": "Sistem analizi için termodinamik, akışkanlar mekaniği ve diferansiyel denklemler.",
      "ac5.t": "Biyomedikal Elektronik ve Bilgisayar Uygulamaları", "ac5.d": "Modelleme, simülasyon ve veri analizi.",
      "ac6.t": "İş Sağlığı ve Güvenliği", "ac6.d": "Güvenli çalışma uygulamalarının bilinci ve uygulanması.",

      "experience.eyebrow": "Stajlar ve Eğitimler", "experience.h2": "Deneyim",

      "exp1.date": "2026 · 23 Nis – 14 Ağu", "exp1.h3": "İleri Düzey Analitik Laboratuvar Eğitimi",
      "exp1.org": "BSEU BARUM — Merkez Araştırma Laboratuvarı",
      "exp1.b1": "GC-MS, HPLC ve FT-IR dahil ileri analitik cihazlarda uygulamalı eğitime devam edildi",
      "exp1.b2": "Laboratuvar araştırma projeleri için numune hazırlama ve spektroskopik/kromatografik analiz gerçekleştirildi",
      "exp1.b3": "Uzatılmış eğitim süresi boyunca analitik sonuçların yorumlanmasında kalibrasyon ve güvenlik protokolleri uygulandı",

      "exp2.date": "2025", "exp2.h3": "İleri Düzey Analitik Laboratuvar Eğitimi",
      "exp2.org": "BSEU BARUM — Merkez Araştırma Laboratuvarı",
      "exp2.b1": "GC-MS, HPLC ve FT-IR dahil ileri cihazlar çalıştırıldı",
      "exp2.b2": "Numune hazırlama ve spektroskopik/kromatografik analiz yapıldı",
      "exp2.b3": "Onaylı kalibrasyon ve güvenlik protokollerine göre sonuçlar yorumlandı",

      "exp3.date": "Ağustos 2024", "exp3.h3": "Python ve Makine Öğrenmesi Eğitimi",
      "exp3.org": "Isparta Uygulamalı Bilimler Üniversitesi",
      "exp3.b1": "Python kullanarak uygulamalı veri analizi ve makine öğrenmesi",
      "exp3.b2": "Veri görselleştirme için NumPy, Pandas, Matplotlib ve Seaborn kullanıldı",
      "exp3.b3": "Gerçek veri kümeleri üzerinde temel makine öğrenmesi algoritmaları uygulandı",

      "exp4.date": "Devam ediyor · Bireysel çalışma", "exp4.h3": "SolidWorks — 3B CAD Tasarımı",
      "exp4.org": "Çevrimiçi kurslar, kitaplar ve video eğitimler",
      "exp4.b1": "3B parça modelleme, montaj tasarımı ve teknik çizim",
      "exp4.b2": "Çevrimiçi platformlar, referans kitaplar ve eğitim videoları ile çalışıldı",
      "exp4.b3": "SolidWorks, mühendislik tasarımı ve simülasyon alıştırmalarında uygulandı",

      "education.eyebrow": "Akademik Geçmiş", "education.h2": "Eğitim",
      "edu1.eyebrow": "Lisans Derecesi", "edu1.h3": "Biyomühendislik Lisans Derecesi",
      "edu1.org": "Bilecik Şeyh Edebali Üniversitesi — Bilecik, Türkiye", "edu1.date": "Eki 2022 – Tem 2026",
      "edu2.eyebrow": "Ortaöğretim", "edu2.h3": "Lise Diploması",
      "edu2.org": "Saad Murshed Al-Badhal Lisesi — Kuveyt", "edu2.date": "Tamamlandı",

      "languages.eyebrow": "İletişim", "languages.h2": "Diller",
      "lang.th.language": "Dil", "lang.th.reading": "Okuma", "lang.th.writing": "Yazma", "lang.th.speaking": "Konuşma",
      "lang.arabic": "Arapça", "lang.english": "İngilizce", "lang.turkish": "Türkçe",
      "lang.native": "Anadil", "lang.good": "İyi",

      "work.eyebrow": "Seçilmiş Çalışmalar", "work.h2": "Projeler ve Çalışma Örnekleri",
      "work.p": "Stüdyo panelinden doğrudan yüklenir ve yönetilir — yeni çalışmalar burada otomatik olarak görünür.",
      "work.empty.eyebrow": "Yakında", "work.empty.h3": "Yeni çalışmalar yolda",
      "work.empty.p": "Stüdyo panelinden eklenen projeler burada otomatik olarak görünecek.",
      "work.link.view": "Bağlantıyı gör →", "work.link.file": "Dosyayı aç →",

      "contact.eyebrow": "Bağlantı Kuralım", "contact.h2": "İletişime Geç",
      "contact.p": "Stajlara, araştırma pozisyonlarına ve iş birliğine açığım — doğrudan ulaşın veya aşağıdan mesaj gönderin.",
      "contact.k.email": "E-posta", "contact.k.phoneTr": "Telefon — Türkiye", "contact.k.phoneKw": "Telefon — Kuveyt",
      "contact.k.loc": "Konum", "contact.v.locTr": "Bilecik, Türkiye", "contact.v.locKw": "Kuveyt, Kuveyt",
      "form.name": "Adınız", "form.email": "E-posta Adresi", "form.message": "Mesaj",
      "form.submit": "Mesaj Gönder", "form.note": "Güvenli bir Netlify formu ile gönderilir — veriler başka hiçbir yerde saklanmaz.",

      "footer.copyright": "© {year} Ali Al Ibrahim — Biyomühendislik Mezunu, Bilecik, Türkiye",
      "footer.email": "E-posta", "footer.top": "Yukarı Dön", "footer.studio": "Stüdyo"
    }
  };

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) { /* storage unavailable — fall through to detection */ }

    var nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    for (var i = 0; i < SUPPORTED.length; i++) {
      if (nav.indexOf(SUPPORTED[i]) === 0) return SUPPORTED[i];
    }
    return "en";
  }

  function t(key, lang) {
    var dict = STRINGS[lang] || STRINGS.en;
    return dict[key] !== undefined ? dict[key] : (STRINGS.en[key] || "");
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "en";

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    var titleStr = t("meta.title", lang);
    if (titleStr) document.title = titleStr;
    var descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute("content", t("meta.description", lang));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"), lang);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"), lang);
    });

    var yearMatch = t("footer.copyright", lang).replace("{year}", new Date().getFullYear());
    var copyEl = document.querySelector("[data-i18n-copyright]");
    if (copyEl) copyEl.textContent = yearMatch;

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }

    document.dispatchEvent(new CustomEvent("sitelangchange", { detail: { lang: lang } }));
  }

  function init() {
    var lang = detectLang();
    applyLang(lang);

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  }

  return { init: init, applyLang: applyLang, t: t, getCurrent: function () { return document.documentElement.getAttribute("lang") || "en"; } };
})();

document.addEventListener("DOMContentLoaded", function () {
  window.SITE_I18N.init();
});
