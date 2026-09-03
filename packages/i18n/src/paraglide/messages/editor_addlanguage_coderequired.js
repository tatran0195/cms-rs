import { getLocale } from '../runtime.js';

const translations = {"ar":"الرمز مطلوب","bn":"কোড প্রয়োজন","de":"Code ist erforderlich","en":"Code is required","es":"Se requiere código","fr":"Le code est requis","hi":"कोड आवश्यक है","id":"Kode diperlukan","pt-BR":"O código é obrigatório","ru":"Требуется код","ur":"کوڈ درکار ہے۔","zh-CN":"需要代码"};

export function editor_addlanguage_coderequired(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
