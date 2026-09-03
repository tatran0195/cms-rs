import { getLocale } from '../runtime.js';

const translations = {"ar":"إضافة عمود بعد","bn":"পরে কলাম যোগ করুন","de":"Spalte danach hinzufügen","en":"Add column after","es":"Agregar columna después","fr":"Ajouter une colonne après","hi":"बाद में कॉलम जोड़ें","id":"Tambahkan kolom setelahnya","pt-BR":"Adicionar coluna depois","ru":"Добавить столбец после","ur":"اس کے بعد کالم شامل کریں۔","zh-CN":"之后添加列"};

export function editor_table_addcolafter(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
