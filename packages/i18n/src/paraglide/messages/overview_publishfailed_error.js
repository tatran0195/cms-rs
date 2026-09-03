import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر النشر.","bn":"প্রকাশ করতে পারেনি।","de":"Konnte nicht veröffentlicht werden.","en":"Could not publish.","es":"No se pudo publicar.","fr":"Impossible de publier.","hi":"प्रकाशित नहीं हो सका.","id":"Tidak dapat dipublikasikan.","pt-BR":"Não foi possível publicar.","ru":"Не удалось опубликовать.","ur":"شائع نہیں ہو سکا۔","zh-CN":"无法发布。"};

export function overview_publishfailed_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
