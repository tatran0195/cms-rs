import { getLocale } from '../runtime.js';

const translations = {"ar":"تخطيط متجاوب من 4 أعمدة.","bn":"একটি প্রতিক্রিয়াশীল চার-কলাম বিন্যাস।","de":"Ein responsives vierspaltiges Layout.","en":"A responsive four-column layout.","es":"Un diseño responsivo de cuatro columnas.","fr":"Une mise en page réactive à quatre colonnes.","hi":"एक प्रतिक्रियाशील चार-स्तंभ लेआउट.","id":"Tata letak empat kolom yang responsif.","pt-BR":"Um layout responsivo de quatro colunas.","ru":"Адаптивный четырехколоночный макет.","ur":"ایک ذمہ دار چار کالم لے آؤٹ۔","zh-CN":"响应式四列布局。"};

export function editor_slash_columns4_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
