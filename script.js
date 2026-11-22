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
