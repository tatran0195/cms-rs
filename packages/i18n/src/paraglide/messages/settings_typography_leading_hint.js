import { getLocale } from '../runtime.js';

const translations = {"ar":"المسافة الرأسية بين سطور النص.","bn":"বডি টেক্সটের লাইনের মধ্যে উল্লম্ব স্থান।","de":"Vertikaler Abstand zwischen den Zeilen des Textkörpers.","en":"Vertical space between lines of body text.","es":"Espacio vertical entre líneas del cuerpo del texto.","fr":"Espace vertical entre les lignes du corps du texte.","hi":"मुख्य पाठ की पंक्तियों के बीच लंबवत स्थान.","id":"Spasi vertikal antar baris teks isi.","pt-BR":"Espaço vertical entre as linhas do corpo do texto.","ru":"Вертикальное пространство между строками основного текста.","ur":"باڈی ٹیکسٹ کی لائنوں کے درمیان عمودی جگہ۔","zh-CN":"正文行之间的垂直间距。"};

export function settings_typography_leading_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
