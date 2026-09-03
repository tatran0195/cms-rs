import { getLocale } from '../runtime.js';

const translations = {"ar":"انشر على أي حال","bn":"যাইহোক প্রকাশ করুন","de":"Trotzdem veröffentlichen","en":"Publish anyway","es":"Publicar de todos modos","fr":"Publier quand même","hi":"फिर भी प्रकाशित करें","id":"Tetap publikasikan","pt-BR":"Publique mesmo assim","ru":"Все равно опубликовать","ur":"بہرحال شائع کریں۔","zh-CN":"无论如何都要发布"};

export function overview_publishfailed_publishanyway(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
