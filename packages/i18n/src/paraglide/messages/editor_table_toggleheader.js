import { getLocale } from '../runtime.js';

const translations = {"ar":"تبديل صف الترويسة","bn":"হেডার সারি টগল করুন","de":"Kopfzeile umschalten","en":"Toggle header row","es":"Alternar fila de encabezado","fr":"Basculer la ligne d'en-tête","hi":"हेडर पंक्ति टॉगल करें","id":"Alihkan baris header","pt-BR":"Alternar linha do cabeçalho","ru":"Переключить строку заголовка","ur":"ہیڈر قطار کو ٹوگل کریں۔","zh-CN":"切换标题行"};

export function editor_table_toggleheader(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
