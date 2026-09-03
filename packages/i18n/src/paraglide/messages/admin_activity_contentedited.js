import { getLocale } from '../runtime.js';

const translations = {"ar":"تحرير المحتوى","bn":"Content Edited","de":"Content Edited","en":"Content Edited","es":"Content Edited","fr":"Content Edited","hi":"Content Edited","id":"Content Edited","pt-BR":"Content Edited","ru":"Content Edited","ur":"Content Edited","zh-CN":"Content Edited"};

export function admin_activity_contentedited(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
