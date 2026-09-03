import { getLocale } from '../runtime.js';

const translations = {"ar":"مدى استدارة البطاقات وحقول الإدخال وكتل التعليمات البرمجية في موقعك.","bn":"আপনার সাইটে কার্ড, ইনপুট এবং কোড ব্লকের রাউন্ডনেস।","de":"Rundheit der Karten, Eingaben und Codeblöcke auf Ihrer Website.","en":"Roundness of cards, inputs, and code blocks on your site.","es":"Redondez de tarjetas, entradas y bloques de código en su sitio.","fr":"Roundness des cartes, des entrées et des blocs de code sur votre site.","hi":"आपकी साइट पर कार्ड, इनपुट और कोड ब्लॉक की गोलाई।","id":"Kebulatan kartu, masukan, dan blok kode di situs Anda.","pt-BR":"Redondeza de cartões, entradas e blocos de código em seu site.","ru":"Округлость карточек, входов и блоков кода на вашем сайте.","ur":"آپ کی سائٹ پر کارڈز، ان پٹ، اور کوڈ بلاکس کی گولائی۔","zh-CN":"站点上的卡片、输入和代码块的圆度。"};

export function settings_styling_radius_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
