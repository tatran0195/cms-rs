import { getLocale } from '../runtime.js';

const translations = {"ar":"إعدادات جاهزة بنقرة واحدة للحجم وارتفاع السطر والتباعد — ويمكنك الضبط الدقيق أدناه.","bn":"আকার, লাইনের উচ্চতা এবং ব্যবধানের জন্য এক-ক্লিক প্রিসেট — নীচে সূক্ষ্ম সুর করুন।","de":"Ein-Klick-Voreinstellungen für Größe, Zeilenhöhe und Abstand – Feinabstimmung unten.","en":"One-click presets for size, line height, and spacing — fine-tune below.","es":"Ajustes preestablecidos con un solo clic para tamaño, altura de línea y espaciado: ajuste a continuación.","fr":"Préréglages en un clic pour la taille, la hauteur des lignes et l’espacement – affinez ci-dessous.","hi":"आकार, रेखा की ऊंचाई और रिक्ति के लिए एक-क्लिक प्रीसेट - नीचे ठीक करें।","id":"Preset sekali klik untuk ukuran, tinggi garis, dan spasi — sempurnakan di bawah.","pt-BR":"Predefinições de um clique para tamanho, altura da linha e espaçamento – ajuste abaixo.","ru":"Предварительные настройки размера, высоты строки и интервала одним щелчком мыши — точная настройка приведена ниже.","ur":"سائز، لائن کی اونچائی، اور وقفہ کاری کے لیے ایک کلک پرسیٹس — نیچے ٹھیک ٹیون کریں۔","zh-CN":"一键预设尺寸、行高和间距 - 在下面进行微调。"};

export function settings_typography_preset_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
