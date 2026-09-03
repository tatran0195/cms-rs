import { getLocale } from '../runtime.js';

const translations = {"ar":"كل ما يخص هذا الموقع في مكان واحد.","bn":"এই সাইটের জন্য সবকিছু এক জায়গায়।","de":"Alles für diese Seite an einem Ort.","en":"Everything for this site in one place.","es":"Todo para este sitio en un solo lugar.","fr":"Tout pour ce site en un seul endroit.","hi":"इस साइट के लिए सब कुछ एक ही स्थान पर।","id":"Semuanya untuk situs ini di satu tempat.","pt-BR":"Tudo para este site em um só lugar.","ru":"Все для этого сайта в одном месте.","ur":"اس سائٹ کے لیے سب کچھ ایک جگہ پر۔","zh-CN":"该网站的所有内容都集中在一处。"};

export function overview_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
