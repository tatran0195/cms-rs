import { getLocale } from '../runtime.js';

const translations = {"ar":"جعله أساسيًا","bn":"প্রাথমিক করুন","de":"Machen Sie primär","en":"Make primary","es":"Hacer primario","fr":"Rendre primaire","hi":"प्राथमिक बनाओ","id":"Jadikan yang utama","pt-BR":"Tornar primário","ru":"Сделать основным","ur":"پرائمری بنائیں","zh-CN":"设为主要"};

export function settings_domain_makeprimary(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
