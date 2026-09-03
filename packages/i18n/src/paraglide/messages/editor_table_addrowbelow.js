import { getLocale } from '../runtime.js';

const translations = {"ar":"إضافة صف أسفل","bn":"নীচে সারি যোগ করুন","de":"Zeile unten hinzufügen","en":"Add row below","es":"Agregar fila a continuación","fr":"Ajouter une ligne ci-dessous","hi":"नीचे पंक्ति जोड़ें","id":"Tambahkan baris di bawah","pt-BR":"Adicionar linha abaixo","ru":"Добавить строку ниже","ur":"نیچے قطار شامل کریں۔","zh-CN":"添加下面的行"};

export function editor_table_addrowbelow(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
