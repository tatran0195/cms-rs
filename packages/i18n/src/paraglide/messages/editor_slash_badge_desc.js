import { getLocale } from '../runtime.js';

const translations = {"ar":"تسمية حالة مضمّنة.","bn":"একটি কমপ্যাক্ট ইনলাইন স্ট্যাটাস লেবেল।","de":"Ein kompaktes Inline-Statusetikett.","en":"A compact inline status label.","es":"Una etiqueta de estado en línea compacta.","fr":"Une étiquette d’état compacte en ligne.","hi":"एक कॉम्पैक्ट इनलाइन स्टेटस लेबल।","id":"Label status sebaris yang ringkas.","pt-BR":"Uma etiqueta de status in-line compacta.","ru":"Компактная встроенная метка состояния.","ur":"ایک کمپیکٹ ان لائن اسٹیٹس لیبل۔","zh-CN":"紧凑的内联状态标签。"};

export function editor_slash_badge_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
