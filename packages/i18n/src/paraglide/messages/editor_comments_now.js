import { getLocale } from '../runtime.js';

const translations = {"ar":"الآن","bn":"এখন","de":"jetzt","en":"now","es":"ahora","fr":"maintenant","hi":"अभी","id":"sekarang","pt-BR":"agora","ru":"сейчас","ur":"اب","zh-CN":"现在"};

export function editor_comments_now(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
