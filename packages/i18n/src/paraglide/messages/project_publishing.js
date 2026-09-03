import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ النشر…","bn":"প্রকাশ করা হচ্ছে...","de":"Veröffentlichung…","en":"Publishing…","es":"Publicando…","fr":"Publication…","hi":"प्रकाशन...","id":"Penerbitan…","pt-BR":"Publicando…","ru":"Публикация…","ur":"شائع ہو رہا ہے…","zh-CN":"出版…"};

export function project_publishing(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
