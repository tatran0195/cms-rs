import { getLocale } from '../runtime.js';

const translations = {"ar":"صفحات غير محدودة","bn":"সীমাহীন পৃষ্ঠা","de":"Unbegrenzte Seiten","en":"Unlimited pages","es":"Páginas ilimitadas","fr":"Pages illimitées","hi":"असीमित पन्ने","id":"Halaman tidak terbatas","pt-BR":"Páginas ilimitadas","ru":"Неограниченное количество страниц","ur":"لامحدود صفحات","zh-CN":"无限页数"};

export function settings_plan_tier_free_feature_pages(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
