import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر معالجات مبنية على الرموز للشيفرة والتنبيهات والبطاقات والتبويبات والجداول.","bn":"কোড, কলআউট, কার্ড, ট্যাব এবং টেবিলের জন্য টোকেন-চালিত চিকিত্সা চয়ন করুন।","de":"Wählen Sie tokengesteuerte Behandlungen für Code, Beschriftungen, Karten, Registerkarten und Tabellen.","en":"Choose token-driven treatments for code, callouts, cards, tabs, and tables.","es":"Elija estilos basados en tokens para el código, los avisos, las tarjetas, las pestañas y las tablas.","fr":"Choisissez des styles basés sur des jetons pour le code, les encadrés, les cartes, les onglets et les tableaux.","hi":"कोड, कॉलआउट, कार्ड, टैब और तालिकाओं के लिए टोकन-संचालित उपचार चुनें।","id":"Pilih perlakuan berbasis token untuk kode, info, kartu, tab, dan tabel.","pt-BR":"Escolha tratamentos baseados em tokens para códigos, textos explicativos, cartões, guias e tabelas.","ru":"Выбирайте методы обработки кода, выносок, карточек, вкладок и таблиц на основе токенов.","ur":"کوڈ، کال آؤٹ، کارڈز، ٹیبز اور ٹیبلز کے لیے ٹوکن سے چلنے والے علاج کا انتخاب کریں۔","zh-CN":"为代码、标注、卡片、选项卡和表格选择标记驱动的处理方式。"};

export function settings_theme_componentshint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
