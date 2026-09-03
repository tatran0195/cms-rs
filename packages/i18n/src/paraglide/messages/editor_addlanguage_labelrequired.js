import { getLocale } from '../runtime.js';

const translations = {"ar":"التسمية مطلوبة","bn":"লেবেল প্রয়োজন","de":"Etikett ist erforderlich","en":"Label is required","es":"Se requiere etiqueta","fr":"L'étiquette est obligatoire","hi":"लेबल आवश्यक है","id":"Label diperlukan","pt-BR":"O rótulo é obrigatório","ru":"Требуется этикетка","ur":"لیبل درکار ہے۔","zh-CN":"需要标签"};

export function editor_addlanguage_labelrequired(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
