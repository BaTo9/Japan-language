// ===========================
// KANJI DATA - N5 LEVEL (108 Kanji)
// ===========================

const kanjiData = {
  // ===== 日 シリーズ =====
  "日": {
    meaning: "Өдөр, нар",
    kunyomi: "ひ",
    onyomi: "ニチ",
    example: "日本（にほん）",
    translation: "Япон улс",
    description: "Өдөр болон нарыг илэрхийлдэг ханз."
  },
  "月": {
    meaning: "Сар",
    kunyomi: "つき",
    onyomi: "ゲツ",
    example: "月曜日（げつようび）",
    translation: "Даваа гараг",
    description: "Сарыг илэрхийлдэг ханз."
  },
  "火": {
    meaning: "Гал",
    kunyomi: "ひ",
    onyomi: "カ",
    example: "火曜日（かようび）",
    translation: "Мягмар гараг",
    description: "Галыг илэрхийлдэг ханз."
  },
  "水": {
    meaning: "Ус",
    kunyomi: "みず",
    onyomi: "スイ",
    example: "水曜日（すいようび）",
    translation: "Лхагва гараг",
    description: "Усыг илэрхийлдэг ханз."
  },
  "木": {
    meaning: "Мод",
    kunyomi: "き",
    onyomi: "モク",
    example: "木曜日（もくようび）",
    translation: "Пүрэв гараг",
    description: "Модыг илэрхийлдэг ханз."
  },
  "金": {
    meaning: "Алт, мөнгө",
    kunyomi: "かね",
    onyomi: "キン",
    example: "金曜日（きんようび）",
    translation: "Баасан гараг",
    description: "Алт, мөнгийг илэрхийлдэг ханз."
  },
  "土": {
    meaning: "Шороо, газар",
    kunyomi: "つち",
    onyomi: "ド",
    example: "土曜日（どようび）",
    translation: "Бямба гараг",
    description: "Газар, шороог илэрхийлдэг ханз."
  },
  "山": {
    meaning: "Уул",
    kunyomi: "やま",
    onyomi: "サン",
    example: "富士山（ふじさん）",
    translation: "Фүжи уул",
    description: "Уулыг илэрхийлдэг ханз."
  },
  "川": {
    meaning: "Гол",
    kunyomi: "かわ",
    onyomi: "セン",
    example: "川（かわ）",
    translation: "Гол",
    description: "Гол мөрнийг илэрхийлдэг ханз."
  },
  "田": {
    meaning: "Талбай, будааны талбай",
    kunyomi: "た",
    onyomi: "デン",
    example: "田（た）",
    translation: "Талбай",
    description: "Будааны талбайг илэрхийлдэг ханз."
  },
  "人": {
    meaning: "Хүн",
    kunyomi: "ひと",
    onyomi: "ジン",
    example: "人間（にんげん）",
    translation: "Хүн төрөлхтөн",
    description: "Хүнийг илэрхийлдэг ханз."
  },
  "口": {
    meaning: "Ам",
    kunyomi: "くち",
    onyomi: "コウ",
    example: "口（くち）",
    translation: "Ам",
    description: "Амыг илэрхийлдэг ханз."
  },
  "目": {
    meaning: "Нүд",
    kunyomi: "め",
    onyomi: "モク",
    example: "目（め）",
    translation: "Нүд",
    description: "Нүдийг илэрхийлдэг ханз."
  },
  "耳": {
    meaning: "Чих",
    kunyomi: "みみ",
    onyomi: "ジ",
    example: "耳（みみ）",
    translation: "Чих",
    description: "Чихний хэлбэрээс гаралтай ханз."
  },
  "手": {
    meaning: "Гар",
    kunyomi: "て",
    onyomi: "シュ",
    example: "手（て）",
    translation: "Гар",
    description: "Гарыг илэрхийлдэг ханз."
  },
  "足": {
    meaning: "Хөл",
    kunyomi: "あし",
    onyomi: "ソク",
    example: "足（あし）",
    translation: "Хөл",
    description: "Хөлийг илэрхийлдэг ханз."
  },
  "心": {
    meaning: "Зүрх, сэтгэл",
    kunyomi: "こころ",
    onyomi: "シン",
    example: "心（こころ）",
    translation: "Зүрх, сэтгэл",
    description: "Зүрхний хэлбэрээс гаралтай ханз."
  },
  "力": {
    meaning: "Хүч",
    kunyomi: "ちから",
    onyomi: "リョク",
    example: "力（ちから）",
    translation: "Хүч",
    description: "Хүчийг илэрхийлдэг ханз."
  },
  "男": {
    meaning: "Эрэгтэй хүн",
    kunyomi: "おとこ",
    onyomi: "ダン",
    example: "男（おとこ）",
    translation: "Эрэгтэй хүн",
    description: "Талбайд ажилладаг эр хүнийг илэрхийлсэн ханз."
  },
  "女": {
    meaning: "Эмэгтэй хүн",
    kunyomi: "おんな",
    onyomi: "ジョ",
    example: "女（おんな）",
    translation: "Эмэгтэй хүн",
    description: "Эмэгтэй хүнийг илэрхийлдэг ханз."
  },
  "子": {
    meaning: "Хүүхэд",
    kunyomi: "こ",
    onyomi: "シ",
    example: "子供（こども）",
    translation: "Хүүхэд",
    description: "Хүүхдийг илэрхийлдэг ханз."
  },
  "父": {
    meaning: "Аав",
    kunyomi: "ちち",
    onyomi: "フ",
    example: "父（ちち）",
    translation: "Аав",
    description: "Аавыг илэрхийлдэг ханз."
  },
  "母": {
    meaning: "Ээж",
    kunyomi: "はは",
    onyomi: "ボ",
    example: "母（はは）",
    translation: "Ээж",
    description: "Ээжийг илэрхийлдэг ханз."
  },
  "兄": {
    meaning: "Ах",
    kunyomi: "あに",
    onyomi: "ケイ",
    example: "兄（あに）",
    translation: "Ах",
    description: "Ахыг илэрхийлдэг ханз."
  },
  "弟": {
    meaning: "Дүү (эрэгтэй)",
    kunyomi: "おとうと",
    onyomi: "テイ",
    example: "弟（おとうと）",
    translation: "Дүү (эрэгтэй)",
    description: "Эрэгтэй дүүг илэрхийлдэг ханз."
  },
  "姉": {
    meaning: "Эгч",
    kunyomi: "あね",
    onyomi: "シ",
    example: "姉（あね）",
    translation: "Эгч",
    description: "Эгчийг илэрхийлдэг ханз."
  },
  "妹": {
    meaning: "Дүү (эмэгтэй)",
    kunyomi: "いもうと",
    onyomi: "マイ",
    example: "妹（いもうと）",
    translation: "Дүү (эмэгтэй)",
    description: "Эмэгтэй дүүг илэрхийлдэг ханз."
  },
  "友": {
    meaning: "Найз",
    kunyomi: "とも",
    onyomi: "ユウ",
    example: "友達（ともだち）",
    translation: "Найзууд",
    description: "Найзыг илэрхийлдэг ханз."
  },
  "国": {
    meaning: "Улс",
    kunyomi: "くに",
    onyomi: "コク",
    example: "国（くに）",
    translation: "Улс",
    description: "Улс орныг илэрхийлдэг ханз."
  },
  "語": {
    meaning: "Хэл, үг",
    kunyomi: "かたる",
    onyomi: "ゴ",
    example: "日本語（にほんご）",
    translation: "Япон хэл",
    description: "Хэл, үгийг илэрхийлдэг ханз."
  },
  "学": {
    meaning: "Сургууль, сурах",
    kunyomi: "まなぶ",
    onyomi: "ガク",
    example: "学校（がっこう）",
    translation: "Сургууль",
    description: "Сурах, боловсролыг илэрхийлдэг ханз."
  },
  "校": {
    meaning: "Сургууль",
    kunyomi: "",
    onyomi: "コウ",
    example: "学校（がっこう）",
    translation: "Сургууль",
    description: "Сургуулийг илэрхийлдэг ханз."
  },
  "生": {
    meaning: "Амьдрал, төрөх",
    kunyomi: "いきる、うまれる",
    onyomi: "セイ",
    example: "先生（せんせい）",
    translation: "Багш",
    description: "Амьдрал, төрөлтийг илэрхийлдэг ханз."
  },
  "先": {
    meaning: "Өмнө, түрүү",
    kunyomi: "さき",
    onyomi: "セン",
    example: "先生（せんせい）",
    translation: "Багш",
    description: "Өмнө, түрүүг илэрхийлдэг ханз."
  },
  "大": {
    meaning: "Том",
    kunyomi: "おお",
    onyomi: "ダイ",
    example: "大きい（おおきい）",
    translation: "Том",
    description: "Томыг илэрхийлдэг ханз."
  },
  "小": {
    meaning: "Жижиг",
    kunyomi: "ちい",
    onyomi: "ショウ",
    example: "小さい（ちいさい）",
    translation: "Жижиг",
    description: "Жижигийг илэрхийлдэг ханз."
  },
  "高": {
    meaning: "Өндөр, их",
    kunyomi: "たか",
    onyomi: "コウ",
    example: "高い（たかい）",
    translation: "Өндөр",
    description: "Өндөр, ихийг илэрхийлдэг ханз."
  },
  "安": {
    meaning: "Хямд, аюулгүй",
    kunyomi: "やす",
    onyomi: "アン",
    example: "安い（やすい）",
    translation: "Хямд",
    description: "Хямд, аюулгүйг илэрхийлдэг ханз."
  },
  "新": {
    meaning: "Шинэ",
    kunyomi: "あたら",
    onyomi: "シン",
    example: "新しい（あたらしい）",
    translation: "Шинэ",
    description: "Шинийг илэрхийлдэг ханз."
  },
  "古": {
    meaning: "Хуучин",
    kunyomi: "ふる",
    onyomi: "コ",
    example: "古い（ふるい）",
    translation: "Хуучин",
    description: "Хуучныг илэрхийлдэг ханз."
  },
  "白": {
    meaning: "Цагаан",
    kunyomi: "しろ",
    onyomi: "ハク",
    example: "白い（しろい）",
    translation: "Цагаан",
    description: "Цагаан өнгийг илэрхийлдэг ханз."
  },
  "黒": {
    meaning: "Хар",
    kunyomi: "くろ",
    onyomi: "コク",
    example: "黒い（くろい）",
    translation: "Хар",
    description: "Хар өнгийг илэрхийлдэг ханз."
  },
  "赤": {
    meaning: "Улаан",
    kunyomi: "あか",
    onyomi: "セキ",
    example: "赤い（あかい）",
    translation: "Улаан",
    description: "Улаан өнгийг илэрхийлдэг ханз."
  },
  "青": {
    meaning: "Хөх",
    kunyomi: "あお",
    onyomi: "セイ",
    example: "青い（あおい）",
    translation: "Хөх",
    description: "Хөх өнгийг илэрхийлдэг ханз."
  },
  "円": {
    meaning: "Иен (мөнгөний нэгж)",
    kunyomi: "まる",
    onyomi: "エン",
    example: "円（えん）",
    translation: "Иен",
    description: "Японы мөнгөний нэгж."
  },
  "百": {
    meaning: "Зуу",
    kunyomi: "ひゃく",
    onyomi: "ヒャク",
    example: "百（ひゃく）",
    translation: "Зуу",
    description: "100 тоог илэрхийлдэг ханз."
  },
  "千": {
    meaning: "Мянган",
    kunyomi: "せん",
    onyomi: "セン",
    example: "千（せん）",
    translation: "Мянган",
    description: "1000 тоог илэрхийлдэг ханз."
  },
  "万": {
    meaning: "Түмэн",
    kunyomi: "まん",
    onyomi: "マン",
    example: "万（まん）",
    translation: "Түмэн",
    description: "10000 тоог илэрхийлдэг ханз."
  },
  "上": {
    meaning: "Дээш, дээр",
    kunyomi: "うえ",
    onyomi: "ジョウ",
    example: "上（うえ）",
    translation: "Дээр",
    description: "Дээш чиглэлийг илэрхийлдэг ханз."
  },
  "下": {
    meaning: "Доош, доор",
    kunyomi: "した",
    onyomi: "カ",
    example: "下（した）",
    translation: "Доор",
    description: "Доош чиглэлийг илэрхийлдэг ханз."
  },
  "左": {
    meaning: "Зүүн",
    kunyomi: "ひだり",
    onyomi: "サ",
    example: "左（ひだり）",
    translation: "Зүүн",
    description: "Зүүн талыг илэрхийлдэг ханз."
  },
  "右": {
    meaning: "Баруун",
    kunyomi: "みぎ",
    onyomi: "ウ",
    example: "右（みぎ）",
    translation: "Баруун",
    description: "Баруун талыг илэрхийлдэг ханз."
  },
  "中": {
    meaning: "Дунд",
    kunyomi: "なか",
    onyomi: "チュウ",
    example: "中（なか）",
    translation: "Дунд",
    description: "Дундыг илэрхийлдэг ханз."
  },
  "外": {
    meaning: "Гадаад",
    kunyomi: "そと",
    onyomi: "ガイ",
    example: "外（そと）",
    translation: "Гадаа",
    description: "Гадаадыг илэрхийлдэг ханз."
  },
  "前": {
    meaning: "Өмнө, урд",
    kunyomi: "まえ",
    onyomi: "ゼン",
    example: "前（まえ）",
    translation: "Урд",
    description: "Урд талыг илэрхийлдэг ханз."
  },
  "後": {
    meaning: "Хойно, дараа",
    kunyomi: "あと",
    onyomi: "ゴ",
    example: "後（あと）",
    translation: "Дараа",
    description: "Хойно, дарааг илэрхийлдэг ханз."
  },
  "名": {
    meaning: "Нэр",
    kunyomi: "な",
    onyomi: "メイ",
    example: "名前（なまえ）",
    translation: "Нэр",
    description: "Нэрийг илэрхийлдэг ханз."
  },
  "書": {
    meaning: "Бичих",
    kunyomi: "か",
    onyomi: "ショ",
    example: "書く（かく）",
    translation: "Бичих",
    description: "Бичих үйлийг илэрхийлдэг ханз."
  },
  "読": {
    meaning: "Унших",
    kunyomi: "よ",
    onyomi: "ドク",
    example: "読む（よむ）",
    translation: "Унших",
    description: "Унших үйлийг илэрхийлдэг ханз."
  },
  "聞": {
    meaning: "Сонсох",
    kunyomi: "き",
    onyomi: "ブン",
    example: "聞く（きく）",
    translation: "Сонсох",
    description: "Сонсох үйлийг илэрхийлдэг ханз."
  },
  "言": {
    meaning: "Хэлэх",
    kunyomi: "い",
    onyomi: "ゲン",
    example: "言う（いう）",
    translation: "Хэлэх",
    description: "Хэлэх үйлийг илэрхийлдэг ханз."
  },
  "食": {
    meaning: "Идэх",
    kunyomi: "た",
    onyomi: "ショク",
    example: "食べる（たべる）",
    translation: "Идэх",
    description: "Идэх үйлийг илэрхийлдэг ханз."
  },
  "飲": {
    meaning: "Уух",
    kunyomi: "の",
    onyomi: "イン",
    example: "飲む（のむ）",
    translation: "Уух",
    description: "Уух үйлийг илэрхийлдэг ханз."
  },
  "見": {
    meaning: "Харах",
    kunyomi: "み",
    onyomi: "ケン",
    example: "見る（みる）",
    translation: "Харах",
    description: "Харах үйлийг илэрхийлдэг ханз."
  },
  "行": {
    meaning: "Явах",
    kunyomi: "い",
    onyomi: "コウ",
    example: "行く（いく）",
    translation: "Явах",
    description: "Явах үйлийг илэрхийлдэг ханз."
  },
  "来": {
    meaning: "Ирэх",
    kunyomi: "く",
    onyomi: "ライ",
    example: "来る（くる）",
    translation: "Ирэх",
    description: "Ирэх үйлийг илэрхийлдэг ханз."
  },
  "帰": {
    meaning: "Буцах, гэртээ харих",
    kunyomi: "かえ",
    onyomi: "キ",
    example: "帰る（かえる）",
    translation: "Буцах",
    description: "Гэртээ харих үйлийг илэрхийлдэг ханз."
  },
  "入": {
    meaning: "Орох",
    kunyomi: "はい",
    onyomi: "ニュウ",
    example: "入る（はいる）",
    translation: "Орох",
    description: "Орох үйлийг илэрхийлдэг ханз."
  },
  "出": {
    meaning: "Гарах",
    kunyomi: "で",
    onyomi: "シュツ",
    example: "出る（でる）",
    translation: "Гарах",
    description: "Гарах үйлийг илэрхийлдэг ханз."
  },
  "会": {
    meaning: "Уулзах",
    kunyomi: "あ",
    onyomi: "カイ",
    example: "会う（あう）",
    translation: "Уулзах",
    description: "Уулзах үйлийг илэрхийлдэг ханз."
  },
  "休": {
    meaning: "Амрах",
    kunyomi: "やす",
    onyomi: "キュウ",
    example: "休む（やすむ）",
    translation: "Амрах",
    description: "Амрах үйлийг илэрхийлдэг ханз."
  },
  "買": {
    meaning: "Худалдаж авах",
    kunyomi: "か",
    onyomi: "バイ",
    example: "買う（かう）",
    translation: "Худалдаж авах",
    description: "Худалдан авах үйлийг илэрхийлдэг ханз."
  },
  "売": {
    meaning: "Худалдах",
    kunyomi: "う",
    onyomi: "バイ",
    example: "売る（うる）",
    translation: "Худалдах",
    description: "Худалдах үйлийг илэрхийлдэг ханз."
  },
  "作": {
    meaning: "Хийх, бүтээх",
    kunyomi: "つく",
    onyomi: "サク",
    example: "作る（つくる）",
    translation: "Хийх",
    description: "Бүтээх үйлийг илэрхийлдэг ханз."
  },
  "歩": {
    meaning: "Алхах",
    kunyomi: "ある",
    onyomi: "ホ",
    example: "歩く（あるく）",
    translation: "Алхах",
    description: "Алхах үйлийг илэрхийлдэг ханз."
  },
  "話": {
    meaning: "Ярих",
    kunyomi: "はな",
    onyomi: "ワ",
    example: "話す（はなす）",
    translation: "Ярих",
    description: "Ярих үйлийг илэрхийлдэг ханз."
  }
};

// ===========================
// GET ALL KANJI KEYS
// ===========================

const kanjiList = Object.keys(kanjiData);
