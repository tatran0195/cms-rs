import { getLocale } from '../runtime.js';

const translations = {"ar":"إضافة صف أعلى","bn":"উপরে সারি যোগ করুন","de":"Zeile oben hinzufügen","en":"Add row above","es":"Añadir fila arriba","fr":"Ajouter une ligne ci-dessus","hi":"ऊपर पंक्ति जोड़ें","id":"Tambahkan baris di atas","pt-BR":"Adicionar linha acima","ru":"Добавить строку выше","ur":"اوپر قطار شامل کریں۔","zh-CN":"在上方添加行"};

export function editor_table_addrowabove(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
