import { getLocale } from '../runtime.js';

const translations = {"ar":"انشر المسودة بعد اكتمال مراجعتها.","bn":"Publish the reviewed draft when it is ready.","de":"Publish the reviewed draft when it is ready.","en":"Publish the reviewed draft when it is ready.","es":"Publish the reviewed draft when it is ready.","fr":"Publish the reviewed draft when it is ready.","hi":"Publish the reviewed draft when it is ready.","id":"Publish the reviewed draft when it is ready.","pt-BR":"Publish the reviewed draft when it is ready.","ru":"Publish the reviewed draft when it is ready.","ur":"Publish the reviewed draft when it is ready.","zh-CN":"Publish the reviewed draft when it is ready."};

export function settings_theme_preview_publish(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
