import { getLocale } from '../runtime.js';

const translations = {"ar":"تخطيط متجاوب من عمودين.","bn":"একটি প্রতিক্রিয়াশীল দুই-কলাম বিন্যাস।","de":"Ein responsives zweispaltiges Layout.","en":"A responsive two-column layout.","es":"Un diseño responsivo de dos columnas.","fr":"Une mise en page réactive à deux colonnes.","hi":"एक प्रतिक्रियाशील दो-स्तंभ लेआउट.","id":"Tata letak dua kolom yang responsif.","pt-BR":"Um layout responsivo de duas colunas.","ru":"Адаптивный двухколоночный макет.","ur":"ایک ذمہ دار دو کالم لے آؤٹ۔","zh-CN":"响应式两列布局。"};

export function editor_slash_columns2_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
