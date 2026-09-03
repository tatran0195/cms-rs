import { getLocale } from '../runtime.js';

const translations = {"ar":"تخطيط متجاوب من 3 أعمدة.","bn":"একটি প্রতিক্রিয়াশীল তিন-কলাম বিন্যাস।","de":"Ein responsives dreispaltiges Layout.","en":"A responsive three-column layout.","es":"Un diseño responsivo de tres columnas.","fr":"Une mise en page réactive à trois colonnes.","hi":"एक प्रतिक्रियाशील तीन-स्तंभ लेआउट.","id":"Tata letak tiga kolom yang responsif.","pt-BR":"Um layout responsivo de três colunas.","ru":"Адаптивный трехколоночный макет.","ur":"ایک ذمہ دار تین کالم لے آؤٹ۔","zh-CN":"响应式三列布局。"};

export function editor_slash_columns3_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
