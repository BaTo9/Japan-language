 // ===== DOM-ээс элементүүдийг авах =====
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuOverlay = document.getElementById('menuOverlay');
const themeToggle = document.getElementById('themeToggle');
const themeText = document.getElementById('themeText');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

// ===== 1. ХАМБУРГЕР МЕНЮ ТОГЛОХ =====
function toggleMenu() {
    if (!menuOverlay) return;
    const isActive = menuOverlay.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
    if (hamburgerBtn) {
        const icon = hamburgerBtn.querySelector('i');
        if (icon) {
            icon.className = isActive ? 'fas fa-times' : 'fas fa-bars';
        }
    }
}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMenu);
}

if (menuOverlay) {
    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) toggleMenu();
    });
}

document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
        if (menuOverlay && menuOverlay.classList.contains('active')) {
            toggleMenu();
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay && menuOverlay.classList.contains('active')) {
        toggleMenu();
    }
});

// ===== МЕНЮ ХААХ ТОВЧ =====
const menuCloseBtn = document.getElementById('menuCloseBtn');
if (menuCloseBtn) {
    menuCloseBtn.addEventListener('click', toggleMenu);
}

// ===== 2. DARK MODE =====
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('jp-theme', theme);
    if (themeIcon) {
        const isDark = theme === 'dark';
        themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
    });
}

const savedTheme = localStorage.getItem('jp-theme') || 'light';
setTheme(savedTheme);

// ===== 3. ХЭЛ DROPDOWN =====
const langToggle = document.getElementById('langToggle');
const langMenu = document.getElementById('langMenu');
const currentLangLabel = document.getElementById('currentLangLabel');
const langOptions = document.querySelectorAll('.lang-option');

if (langToggle && langMenu) {
    langToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('open');
        langMenu.classList.toggle('open');
    });
}

document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('langDropdown');
    if (dropdown && !dropdown.contains(e.target)) {
        if (langToggle) langToggle.classList.remove('open');
        if (langMenu) langMenu.classList.remove('open');
    }
});

// ===== 4. ХЭЛ СОЛИХ =====
const translations = {
    mn: {
        hero_title: 'Япон хэлний ертөнцөд тавтай морил',
        hero_desc: 'Өдөр бүр 10 минут, тогтмол дасгал хийж Япон хэлээ сайжруулаарай.',
        hero_btn: 'Эхлэх →',
        
    // ... бусад түлхүүрүүд ...

    // ... бусад түлхүүрүүд ...
    
    // Menu
    menu_home: 'Нүүр',
    menu_hiragana: 'Хирагана',
    menu_katakana: 'Катакана',
    menu_kanji: 'Ханз', // ✅ Канжи → Ханз
    menu_grammar: 'Дүрэм',
    menu_vocabulary: 'Үгсийн сан',
    menu_listening: 'Сонсгол',
    menu_quiz: 'Шалгалт',
    menu_pdf: 'PDF',
    menu_favorites: 'Дуртай',
    menu_progress: 'Ахиц',
    menu_settings: 'Тохиргоо',
    
    // Stats
    stats_hiragana: 'Хирагана',
    stats_katakana: 'Катакана',
    stats_kanji: 'Ханз', // ✅ Канжи → Ханз
    stats_vocabulary: 'Үгсийн сан',
    
    // Showcase картууд
    card_hiragana: 'Хирагана',
    card_hiragana_desc: '46 үндсэн үсэг',
    card_hiragana_level: 'Эхлэгч',
    card_hiragana_link: 'Судлах →',
    card_katakana: 'Катакана',
    card_katakana_desc: '46 үндсэн үсэг',
    card_katakana_level: 'Эхлэгч',
    card_katakana_link: 'Судлах →',
    card_kanji: 'Ханз', // ✅ Канжи → Ханз
    card_kanji_desc: '50+ тэмдэгт',
    card_kanji_level: 'Дунд',
    card_kanji_link: 'Судлах →',

        hiragana_title: '📖 Хирагана үсгүүд',
        hiragana_desc: 'Япон хэлний үндсэн 46 үсгийн хүснэгт — 5 багана, 10 мөр',
        stats_hiragana: 'Хирагана',
        stats_katakana: 'Катакана',
        stats_kanji: 'Ханз',
        stats_vocabulary: 'Үгсийн сан',
        features_title: '🌟 Яагаад биднийг сонгох вэ?',
        features_desc: 'Таныг амжилттай сурахад туслах онцлогууд',
        feature_1_title: 'Өдөрт 10 минут',
        feature_1_desc: 'Богино хугацаанд тогтмол дасгал хийх',
        feature_2_title: 'Ямар ч төхөөрөмж',
        feature_2_desc: 'Компьютер, таблет, ухаалаг гар утас',
        feature_3_title: 'Ахицыг хянах',
        feature_3_desc: 'Өөрийн дэвшлийг бүрэн хянах',
        feature_4_title: 'Дуртай зүйлс',
        feature_4_desc: 'Хамгийн чухал материалнуудаа хадгалах',
        footer_text: '© 2026 JP Learn. Япон хэл сурах апп.',
        footer_settings: 'Тохиргоо',
        footer_progress: 'Ахиц',
        footer_favorites: 'Дуртай',
        showcase_title: '📚 Япон хэл сурах бүх шат',
        showcase_desc: 'Үндсэнээс эхлээд дэвшилтэт түвшин хүртэл',
        card_hiragana: 'Хирагана',
        card_hiragana_desc: '46 үндсэн үсэг',
        card_hiragana_level: 'Эхлэгч',
        card_hiragana_link: 'Судлах →',
        card_katakana: 'Катакана',
        card_katakana_desc: '46 үндсэн үсэг',
        card_katakana_level: 'Эхлэгч',
        card_katakana_link: 'Судлах →',
        card_kanji: 'Ханз',
        card_kanji_desc: '50+ тэмдэгт',
        card_kanji_level: 'Дунд',
        card_kanji_link: 'Судлах →',
        card_grammar: 'Дүрэм',
        card_grammar_desc: '30+ дүрэм',
        card_grammar_level: 'Бүх түвшин',
        card_grammar_link: 'Судлах →',
        card_vocabulary: 'Үгсийн сан',
        card_vocabulary_desc: '100+ үг',
        card_vocabulary_level: 'Эхлэгч',
        card_vocabulary_link: 'Судлах →',
        card_listening: 'Сонсгол',
        card_listening_desc: 'Аудио дасгал',
        card_listening_level: 'Дунд',
        card_listening_link: 'Судлах →',
        card_quiz: 'Шалгалт',
        card_quiz_desc: 'Мэдлэг шалгах',
        card_quiz_level: 'Бүх түвшин',
        card_quiz_link: 'Судлах →',
        card_pdf: 'PDF татах',
        card_pdf_desc: 'Материал татах',
        card_pdf_level: 'Бүх түвшин',
        card_pdf_link: 'Судлах →',
        card_favorites: 'Дуртай зүйлс',
        card_favorites_desc: 'Хадгалах систем',
        card_favorites_level: 'Бүх түвшин',
        card_favorites_link: 'Судлах →',
        card_progress: 'Ахиц',
        card_progress_desc: 'Статистик хянах',
        card_progress_level: 'Бүх түвшин',
        card_progress_link: 'Судлах →',
        card_settings: 'Тохиргоо',
        card_settings_desc: 'Аппын тохиргоо',
        card_settings_level: 'Бүх түвшин',
        card_settings_link: 'Судлах →',
        card_lessons: 'Хичээлүүд',
        card_lessons_desc: 'Өдрийн хичээл',
        card_lessons_level: 'Бүх түвшин',
        card_lessons_link: 'Судлах →',
        quiz_title: '❓ Шалгалт',
        quiz_desc: '20 асуултаас бүрдсэн багц. Хариултаа сонгоод үргэлжлүүлээрэй.',
        // ===== MN (Монгол) =====

        // ... өмнөх түлхүүрүүд ...
        
        // Quiz товчлуурууд
        quiz_next: 'Дараагийн асуулт →',
        quiz_next_batch: '📚 Дараагийн багц →',
        quiz_restart: '🔄 Дахиж эхлэх',
        quiz_finish: '🏁 Бүх багц дууссан!',
        quiz_check: 'Шалгах',
        quiz_submit: 'Хариулах',
        quiz_try_again: 'Дахин оролдох',
        
        // Бусад товчлуурууд
        btn_start: 'Эхлэх →',
        btn_study: 'Судлах →',
        btn_download: 'Татах',
        btn_save: 'Хадгалах',
        btn_delete: 'Устгах',
        btn_cancel: 'Цуцлах',
        btn_confirm: 'Баталгаажуулах',
        btn_close: 'Хаах',
        btn_back: 'Буцах',
        btn_next: 'Дараах',
        btn_prev: 'Өмнөх',
        btn_more: 'Дэлгэрэнгүй',
        btn_show: 'Харах',
        btn_hide: 'Нуух',

        dakuten_title: ' Дакүон ( " ) болон Хандакүон ()',
        dakuten_desc: 'Дууны өөрчлөлттэй үсгүүд',
        

        
        // Kanji page
        kanji_title: '🀄 Ханзны тэмдэгтүүд',
        kanji_desc: 'Япон хэлний ханз тэмдэгтүүдийг түвшингээр судлаарай. Ханзан дээр дарж дэлгэрэнгүй мэдээлэл аваарай.',
        kanji_click_hint: '👆 Ханзан дээр дарж дэлгэрэнгүй мэдээлэл авах',
        
        level_n5: '📘 N5 түвшин — 91 ханз',
        level_n5_desc: 'Япон хэлний үндсэн ханзнууд. Өдөр тутмын хэрэглээний хамгийн чухал тэмдэгтүүд.',
        level_n4: '📗 N4 түвшин — 120 ханз',
        level_n4_desc: 'Өдөр тутмын амьдралд түгээмэл хэрэглэгддэг ханзнууд.',
        level_n3: '📕 N3 түвшин — 100+ ханз',
        level_n3_desc: 'Дунд шатны ханзнууд. Сонин, сэтгүүл уншихад хэрэгтэй.',
        level_n2: '📙 N2 түвшин — 50+ ханз',
        level_n2_desc: 'Дэвшилтэт ханзнууд. Албан бичиг, мэргэжлийн текстэд хэрэглэгдэнэ.',
        level_n1: '📕 N1 түвшин — 30+ ханз',
        level_n1_desc: 'Мэргэжлийн түвшний ханзнууд. Япон хэлний чадварын дээд түвшин.',
        
        scroll_down: 'Товчлуур дээр дар',
        // ... өмнөх түлхүүрүүд ...
        vocabulary_title: '📝 Шинэ үг',
        vocabulary_subtitle: 'N5 түвшний шинэ үгэс',

        kanji_footer_title: '📘 N5 түвшин — 108 ханз',
        kanji_footer_hint: '👆 Ханзан дээр дарж дэлгэрэнгүй хараарай',
        
        // quiz
        quiz_level_n5: '📘 N5 түвшин',
        quiz_level_n4: '📗 N4 түвшин',
        quiz_level_n3: '📕 N3 түвшин',
        quiz_level_n2: '📙 N2 түвшин',
        quiz_level_n1: '📕 N1 түвшин',

vocabulary_title: '📝 Үгсийн сан',
    vocabulary_subtitle: 'Түвшингээр эрэмбэлсэн үгсийн сан',
    vocab_table_japanese: 'Шинэ үг',
    vocab_table_reading: 'Дуудлага',
    vocab_table_meaning: 'Орчуулга',
    vocab_level_n5: '📘 N5 түвшин',
    vocab_level_n4: '📗 N4 түвшин',
    vocab_level_n3: '📕 N3 түвшин',
    vocab_level_n2: '📙 N2 түвшин',
    vocab_level_n1: '📕 N1 түвшин',
    // MN хэсэгт
grammar_title: '📚 Япон хэлний дүрэм',
grammar_subtitle: 'Түвшингээр эрэмбэлсэн дүрмийн тайлбар',
grammar_level_n5: '📘 N5 түвшин',
grammar_level_n4: '📗 N4 түвшин',
grammar_level_n3: '📕 N3 түвшин',
grammar_level_n2: '📙 N2 түвшин',
grammar_level_n1: '📕 N1 түвшин',
// аудио
listening_title: '🎧 Сонсголын дасгал',
    listening_subtitle: 'Түвшингээр эрэмбэлсэн аудио дасгалууд',
    listening_level_n5: '📘 N5 түвшин',
    listening_level_n4: '📗 N4 түвшин',
    listening_level_n3: '📕 N3 түвшин',
    listening_level_n2: '📙 N2 түвшин',
    listening_level_n1: '📕 N1 түвшин',
    pdf_title: '📄 Материал татах',
        pdf_subtitle: 'Түвшингээр эрэмбэлсэн PDF материалууд',
        pdf_level_n5: '📘 N5 түвшин',
        pdf_level_n4: '📗 N4 түвшин',
        pdf_level_n3: '📕 N3 түвшин',
        pdf_level_n2: '📙 N2 түвшин',
        pdf_level_n1: '📕 N1 түвшин',
        btn_download: '📥 Татах', 
        menu_login: 'Нэвтрэх',
        menu_logout: 'Гарах',
        login_title: '🔐 Нэвтрэх',
        login_subtitle: 'Бүртгэлдээ нэвтрэх эсвэл шинээр бүртгүүлэх',
        login_signin_title: 'Нэвтрэх',
        login_register_title: 'Бүртгүүлэх',
        login_name: 'Нэр',
        login_email: 'Имэйл',
        login_password: 'Нууц үг',
        login_err_empty: 'Бүх талбарыг бөглөнө үү.',
        login_err_email: 'Имэйл хаяг буруу байна.',
        login_err_exists: 'Энэ имэйлээр бүртгэл аль хэдийн байна. Нэвтрэнэ үү.',
        login_err_notfound: 'Ийм бүртгэл олдсонгүй. Эхлээд бүртгүүлнэ үү.',
        login_err_wrongpass: 'Нууц үг буруу байна.',
        login_success_register: 'Бүртгэл амжилттай! Тавтай морил.',
        login_success_signin: 'Амжилттай нэвтэрлээ!',
        settings_account: 'Бүртгэл',
        settings_not_signed: 'Нэвтрээгүй байна',

        // ===== Нэмэлт түлхүүрүүд (шинэ хуудсууд) =====
        katakana_title: '📖 Катакана үсгүүд',
        katakana_desc: 'Япон хэлний үндсэн 46 үсгийн хүснэгт — 5 багана, 10 мөр',
        yoon_title: ' Ёон (хосолсон дуудлага)',
        yoon_desc: 'Жижиг や・ゆ・よ-той хосолсон дуудлагууд',
        kanji_on_label: '📖 Он дуудлага (音読み)',
        kanji_kun_label: '📖 Күн дуудлага (訓読み)',
        kanji_meaning_label: '🇲🇳 Орчуулга',
        kanji_desc_label: '📝 Тайлбар',
        kanji_example_label: '📝 Жишээ',
        kanji_translation_label: '🇲🇳 Жишээний орчуулга',
        favorites_add: 'Дуртай руу нэмэх',
        favorites_title: '❤️ Дуртай зүйлс',
        favorites_subtitle: 'Хадгалсан ханз болон үгсийн жагсаалт',
        favorites_empty_title: 'Дуртай зүйл алга',
        favorites_empty_desc: 'Ханз эсвэл үгэн дээрх зүрхний товчийг дарж дуртай жагсаалтандаа нэмээрэй.',
        fav_type_kanji: 'Ханз',
        fav_type_word: 'Үг',
        vocab_search_placeholder: 'Үг хайх...',
        vocab_table_romaji: 'Галиг',
        vocab_no_results: 'Хайлтад тохирох үг олдсонгүй',
        listening_reveal: 'Орчуулгыг харах',
        quiz_question: 'Асуулт',
        quiz_score_label: 'Оноо',
        quiz_correct: '✅ Зөв!',
        quiz_wrong: '❌ Буруу',
        quiz_result_title: 'Үр дүн',
        progress_title: '📊 Миний ахиц',
        progress_subtitle: 'Сурсан зүйлсийн статистик',
        progress_favorites: 'Дуртай зүйлс',
        progress_quiz_best: 'Шалгалтын шилдэг оноо',
        progress_quiz_attempts: 'Шалгалт өгсөн тоо',
        progress_quiz_last: 'Сүүлийн шалгалтын оноо',
        progress_theme: 'Сэдэв',
        progress_language: 'Хэл',
        progress_details: 'Дэлгэрэнгүй',
        theme_light: 'Гэрэл',
        theme_dark: 'Харанхуй',
        settings_title: '⚙️ Тохиргоо',
        settings_subtitle: 'Аппын тохиргоог өөрчлөх',
        settings_language: 'Хэл',
        settings_language_desc: 'Интерфэйсийн хэлийг сонгох',
        settings_theme: 'Сэдэв',
        settings_theme_desc: 'Гэрэл эсвэл харанхуй горим',
        settings_clear: 'Хадгалсан өгөгдлийг устгах',
        settings_clear_desc: 'Дуртай зүйлс болон шалгалтын түүх арилна',
        settings_clear_confirm: 'Бүх хадгалсан өгөгдлийг устгах уу?',
        settings_cleared: 'Өгөгдөл устгагдлаа.',
        pdf_view: 'Харах',
        pdf_coming_soon: 'Удахгүй',
        pdf_hiragana_chart: 'Хирагана хүснэгт',
        pdf_katakana_chart: 'Катакана хүснэгт',
        pdf_kanji_chart: 'Ханзны жагсаалт (N5)',
        pdf_vocab_material: 'Үгсийн сангийн материал (N5)',
        pdf_grammar_material: 'Дүрмийн материал (N5)',

  },
    
    
    
    // ===== EN (Англи) =====
    en: {
        // ... өмнөх түлхүүрүүд ...
        
        quiz_next: 'Next question →',
        quiz_next_batch: '📚 Next batch →',
        quiz_restart: '🔄 Restart',
        quiz_finish: '🏁 All batches done!',
        quiz_check: 'Check',
        quiz_submit: 'Submit',
        quiz_try_again: 'Try again',
        
        btn_start: 'Start →',
        btn_study: 'Study →',
        btn_download: 'Download',
        btn_save: 'Save',
        btn_delete: 'Delete',
        btn_cancel: 'Cancel',
        btn_confirm: 'Confirm',
        btn_close: 'Close',
        btn_back: 'Back',
        btn_next: 'Next',
        btn_prev: 'Previous',
        btn_more: 'More',
        btn_show: 'Show',
        btn_hide: 'Hide',
     hero_title: 'Welcome to the world of Japanese',
        hero_desc: 'Improve your Japanese by practicing consistently for 10 minutes every day.',
        hero_btn: 'Start →',
        menu_home: 'Home',
        menu_hiragana: 'Hiragana',
        menu_katakana: 'Katakana',
        menu_kanji: 'Kanji',
        menu_grammar: 'Grammar',
        menu_vocabulary: 'Vocabulary',
        menu_listening: 'Listening',
        menu_quiz: 'Quiz',
        menu_pdf: 'PDF',
        menu_favorites: 'Favorites',
        menu_progress: 'Progress',
        menu_settings: 'Settings',
        hiragana_title: '📖 Hiragana Characters',
        hiragana_desc: 'Basic 46 characters of Japanese — 5 columns, 10 rows',
        stats_hiragana: 'Hiragana',
        stats_katakana: 'Katakana',
        stats_kanji: 'Kanji',
        stats_vocabulary: 'Vocabulary',
        features_title: '🌟 Why choose us?',
        features_desc: 'Features to help you succeed',
        feature_1_title: '10 minutes a day',
        feature_1_desc: 'Consistent practice in short sessions',
        feature_2_title: 'Any device',
        feature_2_desc: 'Computer, tablet, smartphone',
        feature_3_title: 'Track progress',
        feature_3_desc: 'Full control over your progress',
        feature_4_title: 'Favorites',
        feature_4_desc: 'Save your most important materials',
        footer_text: '© 2026 JP Learn. Japanese learning app.',
        footer_settings: 'Settings',
        footer_progress: 'Progress',
        footer_favorites: 'Favorites',
        showcase_title: '📚 All steps to learn Japanese',
        showcase_desc: 'From beginner to advanced level',
        card_hiragana: 'Hiragana',
        card_hiragana_desc: '46 basic characters',
        card_hiragana_level: 'Beginner',
        card_hiragana_link: 'Study →',
        card_katakana: 'Katakana',
        card_katakana_desc: '46 basic characters',
        card_katakana_level: 'Beginner',
        card_katakana_link: 'Study →',
        card_kanji: 'Kanji',
        card_kanji_desc: '50+ characters',
        card_kanji_level: 'Intermediate',
        card_kanji_link: 'Study →',
        card_grammar: 'Grammar',
        card_grammar_desc: '30+ rules',
        card_grammar_level: 'All levels',
        card_grammar_link: 'Study →',
        card_vocabulary: 'Vocabulary',
        card_vocabulary_desc: '100+ words',
        card_vocabulary_level: 'Beginner',
        card_vocabulary_link: 'Study →',
        card_listening: 'Listening',
        card_listening_desc: 'Audio exercises',
        card_listening_level: 'Intermediate',
        card_listening_link: 'Study →',
        card_quiz: 'Quiz',
        card_quiz_desc: 'Test your knowledge',
        card_quiz_level: 'All levels',
        card_quiz_link: 'Study →',
        card_pdf: 'Download PDF',
        card_pdf_desc: 'Download materials',
        card_pdf_level: 'All levels',
        card_pdf_link: 'Study →',
        card_favorites: 'Favorites',
        card_favorites_desc: 'Save system',
        card_favorites_level: 'All levels',
        card_favorites_link: 'Study →',
        card_progress: 'Progress',
        card_progress_desc: 'Track statistics',
        card_progress_level: 'All levels',
        card_progress_link: 'Study →',
        card_settings: 'Settings',
        card_settings_desc: 'App settings',
        card_settings_level: 'All levels',
        card_settings_link: 'Study →',
        card_lessons: 'Lessons',
        card_lessons_desc: 'Daily lessons',
        card_lessons_level: 'All levels',
        card_lessons_link: 'Study →',
        quiz_title: '❓ Quiz',
        quiz_desc: 'A set of 20 questions. Select your answer and continue.',
        
        
        quiz_level_n5: '📘 N5 Level',
        quiz_level_n4: '📗 N4 Level',
        quiz_level_n3: '📕 N3 Level',
        quiz_level_n2: '📙 N2 Level',
        quiz_level_n1: '📕 N1 Level',
    

        // ... өмнөх түлхүүрүүд ...
        
        dakuten_title: ' Dakuten ( " ) and Handakuten ( ° )',
        dakuten_desc: 'Voiced and semi-voiced characters',
        
         // ... Ханз...
         
         kanji_title: '🀄 Kanji Characters',
         kanji_desc: 'Study Japanese kanji characters by level. Click on a kanji to see detailed information.',
         kanji_click_hint: '👆 Click on a kanji for details',
         
         level_n5: '📘 N5 Level — 91 Kanji',
         level_n5_desc: 'Basic kanji for everyday use. The most important characters for daily life.',
         level_n4: '📗 N4 Level — 120 Kanji',
         level_n4_desc: 'Commonly used kanji in everyday life.',
         level_n3: '📕 N3 Level — 100+ Kanji',
         level_n3_desc: 'Intermediate kanji. Useful for reading newspapers and magazines.',
         level_n2: '📙 N2 Level — 50+ Kanji',
         level_n2_desc: 'Advanced kanji used in official documents and professional texts.',
         level_n1: '📕 N1 Level — 30+ Kanji',
         level_n1_desc: 'Professional level kanji. Highest level of Japanese proficiency.',
          
 scroll_down: 'Press the button',

        vocabulary_title: '📝 New Words',
        vocabulary_subtitle: 'N5 Level New Words',
            
        kanji_footer_title: '📘 N5 Level — 108 Kanji',
        kanji_footer_hint: '👆 Click on a kanji to see details',
    vocabulary_title: '📝 Vocabulary',
    vocabulary_subtitle: 'Vocabulary sorted by level',
    vocab_table_japanese: 'Japanese',
    vocab_table_reading: 'Reading',
    vocab_table_meaning: 'Meaning',
    vocab_level_n5: '📘 N5 Level',
    vocab_level_n4: '📗 N4 Level',
    vocab_level_n3: '📕 N3 Level',
    vocab_level_n2: '📙 N2 Level',
    vocab_level_n1: '📕 N1 Level',
grammar_title: '📚 Japanese Grammar',
grammar_subtitle: 'Grammar explanations sorted by level',
grammar_level_n5: '📘 N5 Level',
grammar_level_n4: '📗 N4 Level',
grammar_level_n3: '📕 N3 Level',
grammar_level_n2: '📙 N2 Level',
grammar_level_n1: '📕 N1 Level',
  
    // EN хэсэгт
    listening_title: '🎧 Listening Practice',
    listening_subtitle: 'Audio exercises sorted by level',
    listening_level_n5: '📘 N5 Level',
    listening_level_n4: '📗 N4 Level',
    listening_level_n3: '📕 N3 Level',
    listening_level_n2: '📙 N2 Level',
    listening_level_n1: '📕 N1 Level',

    pdf_title: '📄 Download Materials',
    pdf_subtitle: 'PDF materials sorted by level',
    pdf_level_n5: '📘 N5 Level',
    pdf_level_n4: '📗 N4 Level',
    pdf_level_n3: '📕 N3 Level',
    pdf_level_n2: '📙 N2 Level',
    pdf_level_n1: '📕 N1 Level',
    btn_download: '📥 Download',
        menu_login: 'Log in',
        menu_logout: 'Log out',
        login_title: '🔐 Log in',
        login_subtitle: 'Sign in to your account or create a new one',
        login_signin_title: 'Sign in',
        login_register_title: 'Register',
        login_name: 'Name',
        login_email: 'Email',
        login_password: 'Password',
        login_err_empty: 'Please fill in all fields.',
        login_err_email: 'Invalid email address.',
        login_err_exists: 'An account with this email already exists. Please sign in.',
        login_err_notfound: 'Account not found. Please register first.',
        login_err_wrongpass: 'Incorrect password.',
        login_success_register: 'Registration successful! Welcome.',
        login_success_signin: 'Signed in successfully!',
        settings_account: 'Account',
        settings_not_signed: 'Not signed in',

        // ===== Extra keys (new pages) =====
        katakana_title: '📖 Katakana Characters',
        katakana_desc: 'Basic 46 characters of Japanese — 5 columns, 10 rows',
        yoon_title: ' Yoon (combined sounds)',
        yoon_desc: 'Combinations with small ya, yu, yo',
        kanji_on_label: '📖 On reading (音読み)',
        kanji_kun_label: '📖 Kun reading (訓読み)',
        kanji_meaning_label: '🇲🇳 Meaning',
        kanji_desc_label: '📝 Description',
        kanji_example_label: '📝 Example',
        kanji_translation_label: '🇲🇳 Example translation',
        favorites_add: 'Add to favorites',
        favorites_title: '❤️ Favorites',
        favorites_subtitle: 'Your saved kanji and words',
        favorites_empty_title: 'No favorites yet',
        favorites_empty_desc: 'Tap the heart button on a kanji or word to add it to your favorites.',
        fav_type_kanji: 'Kanji',
        fav_type_word: 'Word',
        vocab_search_placeholder: 'Search words...',
        vocab_table_romaji: 'Romaji',
        vocab_no_results: 'No words match your search',
        listening_reveal: 'Show translation',
        quiz_question: 'Question',
        quiz_score_label: 'Score',
        quiz_correct: '✅ Correct!',
        quiz_wrong: '❌ Wrong',
        quiz_result_title: 'Result',
        progress_title: '📊 My Progress',
        progress_subtitle: 'Statistics of what you have learned',
        progress_favorites: 'Favorites',
        progress_quiz_best: 'Best quiz score',
        progress_quiz_attempts: 'Quiz attempts',
        progress_quiz_last: 'Last quiz score',
        progress_theme: 'Theme',
        progress_language: 'Language',
        progress_details: 'Details',
        theme_light: 'Light',
        theme_dark: 'Dark',
        settings_title: '⚙️ Settings',
        settings_subtitle: 'Change app preferences',
        settings_language: 'Language',
        settings_language_desc: 'Choose the interface language',
        settings_theme: 'Theme',
        settings_theme_desc: 'Light or dark mode',
        settings_clear: 'Clear saved data',
        settings_clear_desc: 'Favorites and quiz history will be removed',
        settings_clear_confirm: 'Delete all saved data?',
        settings_cleared: 'Data cleared.',
        pdf_view: 'View',
        pdf_coming_soon: 'Coming soon',
        pdf_hiragana_chart: 'Hiragana chart',
        pdf_katakana_chart: 'Katakana chart',
        pdf_kanji_chart: 'Kanji list (N5)',
        pdf_vocab_material: 'Vocabulary material (N5)',
        pdf_grammar_material: 'Grammar material (N5)',

    },
    
    // ===== JP (Япон) =====
   
    
    jp: {
        hero_title: '日本語の世界へようこそ',
        hero_desc: '毎日10分間の継続的な練習で日本語を上達させましょう。',
        hero_btn: '始める →',
        menu_home: 'ホーム',
        menu_hiragana: 'ひらがな',
        menu_katakana: 'カタカナ',
        menu_kanji: '漢字',
        menu_grammar: '文法',
        menu_vocabulary: '語彙',
        menu_listening: 'リスニング',
        menu_quiz: 'クイズ',
        menu_pdf: 'PDF',
        menu_favorites: 'お気に入り',
        menu_progress: '進捗',
        menu_settings: '設定',
        hiragana_title: '📖 ひらがな一覧',
        hiragana_desc: '日本語の基本46文字 — 5列、10行',
        stats_hiragana: 'ひらがな',
        stats_katakana: 'カタカナ',
        stats_kanji: '漢字',
        stats_vocabulary: '語彙',
        features_title: '🌟 選ばれる理由',
        features_desc: 'あなたの学習をサポートする特徴',
        feature_1_title: '1日10分',
        feature_1_desc: '短時間で継続的に練習',
        feature_2_title: 'どんなデバイスでも',
        feature_2_desc: 'パソコン、タブレット、スマートフォン',
        feature_3_title: '進捗管理',
        feature_3_desc: '自分の進捗を完全に把握',
        feature_4_title: 'お気に入り',
        feature_4_desc: '重要な教材を保存',
        footer_text: '© 2026 JP Learn。日本語学習アプリ。',
        footer_settings: '設定',
        footer_progress: '進捗',
        footer_favorites: 'お気に入り',
        showcase_title: '📚 日本語学習のすべてのステップ',
        showcase_desc: '初級から上級レベルまで',
        card_hiragana: 'ひらがな',
        card_hiragana_desc: '46基本文字',
        card_hiragana_level: '初級',
        card_hiragana_link: '学ぶ →',
        card_katakana: 'カタカナ',
        card_katakana_desc: '46基本文字',
        card_katakana_level: '初級',
        card_katakana_link: '学ぶ →',
        card_kanji: '漢字',
        card_kanji_desc: '50+文字',
        card_kanji_level: '中級',
        card_kanji_link: '学ぶ →',
        card_grammar: '文法',
        card_grammar_desc: '30+ルール',
        card_grammar_level: '全レベル',
        card_grammar_link: '学ぶ →',
        card_vocabulary: '語彙',
        card_vocabulary_desc: '100+単語',
        card_vocabulary_level: '初級',
        card_vocabulary_link: '学ぶ →',
        card_listening: 'リスニング',
        card_listening_desc: '音声練習',
        card_listening_level: '中級',
        card_listening_link: '学ぶ →',
        card_quiz: 'クイズ',
        card_quiz_desc: '知識をテスト',
        card_quiz_level: '全レベル',
        card_quiz_link: '学ぶ →',
        card_pdf: 'PDFダウンロード',
        card_pdf_desc: '教材をダウンロード',
        card_pdf_level: '全レベル',
        card_pdf_link: '学ぶ →',
        card_favorites: 'お気に入り',
        card_favorites_desc: '保存システム',
        card_favorites_level: '全レベル',
        card_favorites_link: '学ぶ →',
        card_progress: '進捗',
        card_progress_desc: '統計を追跡',
        card_progress_level: '全レベル',
        card_progress_link: '学ぶ →',
        card_settings: '設定',
        card_settings_desc: 'アプリ設定',
        card_settings_level: '全レベル',
        card_settings_link: '学ぶ →',
        card_lessons: 'レッスン',
        card_lessons_desc: '日々のレッスン',
        card_lessons_level: '全レベル',
        card_lessons_link: '学ぶ →',
        quiz_title: '❓ クイズ',
        quiz_desc: '20問のセット。答えを選んで続けてください。',
           quiz_next: '次の質問 →',
       quiz_next_batch: '📚 次のセット →',
       quiz_restart: '🔄 やり直す',
       quiz_finish: '🏁 すべてのセット完了！',
       quiz_check: '確認',
       quiz_submit: '回答',
       quiz_try_again: 'もう一度',
        quiz_level_n5: '📘 N5レベル',
        quiz_level_n4: '📗 N4レベル',
        quiz_level_n3: '📕 N3レベル',
        quiz_level_n2: '📙 N2レベル',
        quiz_level_n1: '📕 N1レベル',
       
       btn_start: '始める →',
       btn_study: '学ぶ →',
       btn_download: 'ダウンロード',
       btn_save: '保存',
       btn_delete: '削除',
       btn_cancel: 'キャンセル',
       btn_confirm: '確認',
       btn_close: '閉じる',
       btn_back: '戻る',
       btn_next: '次へ',
       btn_prev: '前へ',
       btn_more: 'もっと',
       btn_show: '表示',
       btn_hide: '非表示',
    
     dakuten_title: ' 濁点（ " ）と半濁点（ ° ）',
     dakuten_desc: '濁音と半濁音',
      
          kanji_title: '🀄 漢字一覧',
          kanji_desc: 'レベル別に漢字を学びましょう。漢字をクリックして詳細情報を表示します。',
          kanji_click_hint: '👆 クリックして詳細を表示',
          
          level_n5: '📘 N5レベル — 91漢字',
          level_n5_desc: '日本語の基本漢字。日常生活で最も重要な文字。',
          level_n4: '📗 N4レベル — 120漢字',
          level_n4_desc: '日常生活でよく使われる漢字。',
          level_n3: '📕 N3レベル — 100+漢字',
          level_n3_desc: '中級漢字。新聞や雑誌を読むのに役立つ。',
          level_n2: '📙 N2レベル — 50+漢字',
          level_n2_desc: '上級漢字。公式文書や専門的なテキストで使用。',
          level_n1: '📕 N1レベル — 30+漢字',
          level_n1_desc: '専門レベルの漢字。日本語能力の最高レベル。',
           
     scroll_down: 
     'ボタンを押す',

    vocabulary_title: '📝 新単語',
    vocabulary_subtitle: 'N5レベルの新単語',
    
    
        kanji_footer_title: '📘 N5レベル — 108漢字',
        kanji_footer_hint: '👆 クリックして詳細を表示',
    vocabulary_title: '📝 語彙',
    vocabulary_subtitle: 'レベル別の語彙リスト',
    vocab_table_japanese: '日本語',
    vocab_table_reading: '読み',
    vocab_table_meaning: '意味',
    vocab_level_n5: '📘 N5レベル',
    vocab_level_n4: '📗 N4レベル',
    vocab_level_n3: '📕 N3レベル',
    vocab_level_n2: '📙 N2レベル',
    vocab_level_n1: '📕 N1レベル',

grammar_title: '📚 日本語文法',
grammar_subtitle: 'レベル別の文法解説',
grammar_level_n5: '📘 N5レベル',
grammar_level_n4: '📗 N4レベル',
grammar_level_n3: '📕 N3レベル',
grammar_level_n2: '📙 N2レベル',
grammar_level_n1: '📕 N1レベル',
      // JP хэсэгт
    listening_title: '🎧 リスニング練習',
    listening_subtitle: 'レベル別の音声練習',
    listening_level_n5: '📘 N5レベル',
    listening_level_n4: '📗 N4レベル',
    listening_level_n3: '📕 N3レベル',
    listening_level_n2: '📙 N2レベル',
    listening_level_n1: '📕 N1レベル',

    pdf_title: '📄 教材ダウンロード',
    pdf_subtitle: 'レベル別のPDF教材',
    pdf_level_n5: '📘 N5レベル',
    pdf_level_n4: '📗 N4レベル',
    pdf_level_n3: '📕 N3レベル',
    pdf_level_n2: '📙 N2レベル',
    pdf_level_n1: '📕 N1レベル',
    btn_download: '📥 ダウンロード',
        menu_login: 'ログイン',
        menu_logout: 'ログアウト',
        login_title: '🔐 ログイン',
        login_subtitle: 'アカウントにログイン、または新規登録',
        login_signin_title: 'ログイン',
        login_register_title: '新規登録',
        login_name: '名前',
        login_email: 'メール',
        login_password: 'パスワード',
        login_err_empty: 'すべての項目を入力してください。',
        login_err_email: 'メールアドレスが正しくありません。',
        login_err_exists: 'このメールアドレスは既に登録されています。ログインしてください。',
        login_err_notfound: 'アカウントが見つかりません。先に登録してください。',
        login_err_wrongpass: 'パスワードが違います。',
        login_success_register: '登録が完了しました！ようこそ。',
        login_success_signin: 'ログインしました！',
        settings_account: 'アカウント',
        settings_not_signed: 'ログインしていません',

        // ===== 追加キー（新しいページ） =====
        katakana_title: '📖 カタカナ一覧',
        katakana_desc: '日本語の基本46文字 — 5列、10行',
        yoon_title: ' 拗音',
        yoon_desc: '小さいや・ゆ・よとの組み合わせ',
        kanji_on_label: '📖 音読み',
        kanji_kun_label: '📖 訓読み',
        kanji_meaning_label: '🇲🇳 意味',
        kanji_desc_label: '📝 説明',
        kanji_example_label: '📝 例',
        kanji_translation_label: '🇲🇳 例の翻訳',
        favorites_add: 'お気に入りに追加',
        favorites_title: '❤️ お気に入り',
        favorites_subtitle: '保存した漢字と単語のリスト',
        favorites_empty_title: 'お気に入りはまだありません',
        favorites_empty_desc: '漢字や単語のハートボタンを押してお気に入りに追加しましょう。',
        fav_type_kanji: '漢字',
        fav_type_word: '単語',
        vocab_search_placeholder: '単語を検索...',
        vocab_table_romaji: 'ローマ字',
        vocab_no_results: '検索に一致する単語がありません',
        listening_reveal: '翻訳を表示',
        quiz_question: '質問',
        quiz_score_label: 'スコア',
        quiz_correct: '✅ 正解！',
        quiz_wrong: '❌ 不正解',
        quiz_result_title: '結果',
        progress_title: '📊 私の進捗',
        progress_subtitle: '学習の統計',
        progress_favorites: 'お気に入り',
        progress_quiz_best: 'クイズの最高スコア',
        progress_quiz_attempts: 'クイズの回数',
        progress_quiz_last: '前回のクイズスコア',
        progress_theme: 'テーマ',
        progress_language: '言語',
        progress_details: '詳細',
        theme_light: 'ライト',
        theme_dark: 'ダーク',
        settings_title: '⚙️ 設定',
        settings_subtitle: 'アプリの設定を変更',
        settings_language: '言語',
        settings_language_desc: 'インターフェースの言語を選択',
        settings_theme: 'テーマ',
        settings_theme_desc: 'ライトモードまたはダークモード',
        settings_clear: '保存データを削除',
        settings_clear_desc: 'お気に入りとクイズ履歴が削除されます',
        settings_clear_confirm: '保存したデータをすべて削除しますか？',
        settings_cleared: 'データを削除しました。',
        pdf_view: '表示',
        pdf_coming_soon: '近日公開',
        pdf_hiragana_chart: 'ひらがな表',
        pdf_katakana_chart: 'カタカナ表',
        pdf_kanji_chart: '漢字リスト（N5）',
        pdf_vocab_material: '語彙教材（N5）',
        pdf_grammar_material: '文法教材（N5）',


    }
};

function setLanguage(lang) {
    if (currentLangLabel) {
        currentLangLabel.textContent = lang.toUpperCase();
    }
    langOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem('jp-lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    if (langToggle) langToggle.classList.remove('open');
    if (langMenu) langMenu.classList.remove('open');

    // ✅ Хэл солих үйл явдал (quiz-д зориулж)
    document.dispatchEvent(new Event('languageChanged'));
}

langOptions.forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.dataset.lang;
        if (lang) setLanguage(lang);
    });
});

const savedLang = localStorage.getItem('jp-lang') || 'mn';
setLanguage(savedLang);

// ===== 5. ХУУДАСНЫ ИДЭВХТЭЙ ХОЛБООС =====
document.querySelectorAll('.menu-link').forEach(link => {
    if (link.href === window.location.href ||
        (link.href !== window.location.origin + '/' && window.location.href.includes(link.href))) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));
    const homeLink = document.querySelector('.menu-link[href="index.html"]');
    if (homeLink) homeLink.classList.add('active');
}

// ===== 6. FADE-IN =====
const fadeElements = document.querySelectorAll('.fade-in');

function checkFadeIn() {
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight - 100;
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerPoint) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('load', checkFadeIn);
window.addEventListener('scroll', checkFadeIn);

// ===== 7. COUNTER =====
const statNumbers = document.querySelectorAll('.stat-number');

function animateCounters() {
    statNumbers.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const current = parseInt(counter.textContent);
        if (current === target) return;
        const rect = counter.getBoundingClientRect();
        if (rect.top > window.innerHeight) return;
        let start = 0;
        const duration = 2000;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = start;
            }
        }, 16);
    });
}

let counterTriggered = false;
window.addEventListener('scroll', () => {
    if (!counterTriggered) {
        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            const rect = statsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                counterTriggered = true;
                animateCounters();
            }
        }
    }
});

window.addEventListener('load', () => {
    setTimeout(() => {
        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            const rect = statsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                counterTriggered = true;
                animateCounters();
            }
        }
    }, 500);
});

// ===== 8. SCROLL INDICATOR =====
function scrollToShowcase() {
    var target = document.getElementById('showcase');
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
// ===== GO TO TOP ТОВЧ =====
document.addEventListener('DOMContentLoaded', function() {
    const goTopBtn = document.getElementById('goTopBtn');
    if (!goTopBtn) return;
    
    // Дээд хэсэг рүү очих
    goTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Скролл хийх үед товчийг харуулах/нуух
    let isVisible = false;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Зөвхөн дээд хэсэгт (navbar дээр) байвал бүдгэрэн нуух
        if (scrollTop < 250) {
            if (isVisible) {
                goTopBtn.classList.remove('show');
                isVisible = false;
            }
            return;
        }
        
        // Бусад бүх тохиолдолд (дунд, доод хэсэг) бүдгэрэн харагдуулах
        if (!isVisible) {
            goTopBtn.classList.add('show');
            isVisible = true;
        }
    });
    
    // Эхний ачаалалт дээр шалгах
    setTimeout(function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 250) {
            goTopBtn.classList.add('show');
            isVisible = true;
        }
    }, 300);
});


// ===== 9. ACCORDION (түвшний хэсгүүдийг нээх/хаах) =====
document.addEventListener('click', function(e) {
    const header = e.target.closest('.vocab-level-header, .grammar-level-header, .listening-level-header, .pdf-level-header, .fav-level-header, .progress-level-header');
    if (!header) return;
    const body = header.parentElement.querySelector(':scope > [class*="level-body"]');
    if (body) body.classList.toggle('open');
    const icon = header.querySelector('.fa-chevron-down, .fa-chevron-up');
    if (icon) {
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    }
});


// ===== 10. НЭВТРЭХ (локал бүртгэл — demo) =====
// Хэрэглэгчид localStorage 'jp_users'-д хадгалагдана: {name, email, passHash}
// Нууц үгийг хэш болгож хадгална (энгийн demo хэш — бодит хамгаалалт биш).
function jpHash(str) {
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) {
        const ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (h2 >>> 0).toString(16) + (h1 >>> 0).toString(16);
}

function jpGetUsers() {
    try { return JSON.parse(localStorage.getItem('jp_users') || '[]'); } catch (e) { return []; }
}

function jpSaveUsers(users) {
    localStorage.setItem('jp_users', JSON.stringify(users));
}

function jpCurrentUser() {
    const email = localStorage.getItem('jp_session');
    if (!email) return null;
    return jpGetUsers().find(function(u) { return u.email === email; }) || null;
}

function jpLogout() {
    localStorage.removeItem('jp_session');
    window.location.reload();
}

// Меню дэх "Нэвтрэх" холбоосыг нэвтэрсэн үед хэрэглэгчийн нэр + Гарах болгох
function jpApplyAuthMenu() {
    const link = document.getElementById('menuLoginLink');
    if (!link) return;
    const user = jpCurrentUser();
    if (!user) return;
    const lang = localStorage.getItem('jp-lang') || 'mn';
    const logoutText = (typeof translations !== 'undefined' && translations[lang] && translations[lang].menu_logout) || 'Гарах';
    link.removeAttribute('data-i18n');
    link.href = '#';
    link.innerHTML = '<i class="fas fa-user"></i> ' + user.name + ' — ' + logoutText;
    link.onclick = function(e) {
        e.preventDefault();
        jpLogout();
    };
}

document.addEventListener('languageChanged', jpApplyAuthMenu);
jpApplyAuthMenu();
