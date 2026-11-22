// ===========================
// KANA → ROMAJI ХӨРВҮҮЛЭГЧ
// Хирагана болон катакана текстийг ромажи (галиг) болгоно.
// Жишээ нь: ニチ → nichi, きょう → kyou, がっこう → gakkou
// ===========================

const romajiMap = {
  'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
  'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
  'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
  'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
  'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
  'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
  'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
  'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
  'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
  'わ': 'wa', 'を': 'wo', 'ん': 'n',
  'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
  'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
  'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do',
  'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
  'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
  'ぁ': 'a', 'ぃ': 'i', 'ぅ': 'u', 'ぇ': 'e', 'ぉ': 'o',
  'ゃ': 'ya', 'ゅ': 'yu', 'ょ': 'yo'
};

// Хосолсон дуудлага (拗音): きゃ = kya гэх мэт
const romajiDigraphs = {
  'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo',
  'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho',
  'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho',
  'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo',
  'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo',
  'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo',
  'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo',
  'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo',
  'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo',
  'ぢゃ': 'ja', 'ぢゅ': 'ju', 'ぢょ': 'jo',
  'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo',
  'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo'
};

// Катакана → хирагана болгох (хөрвүүлэлтийн өмнө)
function katakanaToHiragana(str) {
  return str.replace(/[\u30a1-\u30f6]/g, function(ch) {
    return String.fromCharCode(ch.charCodeAt(0) - 0x60);
  });
}

function kanaToRomaji(input) {
  if (!input) return '';
  let str = katakanaToHiragana(String(input));
  let out = '';
  let i = 0;
  while (i < str.length) {
    const ch = str[i];

    // Хоёр тэмдэгтийн хослол (きゃ гэх мэт)
    const pair = str.substr(i, 2);
    if (romajiDigraphs[pair]) {
      out += romajiDigraphs[pair];
      i += 2;
      continue;
    }

    // Давхар гийгүүлэгч (っ): дараагийн дуудлагын эхний үсгийг давтах
    if (ch === 'っ') {
      const nextPair = str.substr(i + 1, 2);
      const nextSingle = str[i + 1] || '';
      let nextRoma = romajiDigraphs[nextPair] || romajiMap[nextSingle] || '';
      if (nextRoma) {
        // tchi → tchi (ち-ийн өмнө t нэмэх), бусад үед эхний үсгийг давтах
        out += (nextRoma.charAt(0) === 'c') ? 't' : nextRoma.charAt(0);
      }
      i += 1;
      continue;
    }

    // Урт эгшиг (ー): сүүлийн эгшигийг давтах
    if (ch === 'ー') {
      const lastVowel = out.match(/[aiueo](?!.*[aiueo])/);
      if (lastVowel) out += lastVowel[0];
      i += 1;
      continue;
    }

    if (romajiMap[ch]) {
      out += romajiMap[ch];
      i += 1;
      continue;
    }

    // Канын бус тэмдэгтийг (зай, цэг гэх мэт) хэвээр нь үлдээх
    out += ch;
    i += 1;
  }
  return out;
}
