import { getLocale } from '../runtime.js';

const translations = {"ar":"إدراج جدول 3×3.","bn":"একটি 3×3 টেবিল ঢোকান।","de":"Fügen Sie eine 3×3-Tabelle ein.","en":"Insert a 3×3 table.","es":"Inserta una mesa de 3×3.","fr":"Insérez un tableau 3×3.","hi":"एक 3×3 तालिका डालें.","id":"Sisipkan tabel 3×3.","pt-BR":"Insira uma tabela 3×3.","ru":"Вставьте таблицу 3×3.","ur":"3×3 ٹیبل داخل کریں۔","zh-CN":"插入一个 3×3 的表格。"};

export function editor_slash_table_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
