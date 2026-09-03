import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض الصفحة","bn":"পৃষ্ঠার প্রস্থ","de":"Seitenbreite","en":"Page width","es":"Ancho de página","fr":"Largeur de page","hi":"पृष्ठ की चौड़ाई","id":"Lebar halaman","pt-BR":"Largura da página","ru":"Ширина страницы","ur":"صفحہ کی چوڑائی","zh-CN":"页宽"};

export function editor_pagesettings_mode(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
