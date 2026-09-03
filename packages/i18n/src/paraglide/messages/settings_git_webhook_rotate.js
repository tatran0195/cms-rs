import { getLocale } from '../runtime.js';

const translations = {"ar":"تدوير","bn":"ঘোরান","de":"Drehen","en":"Rotate","es":"rotar","fr":"Rotation","hi":"घुमाएँ","id":"Putar","pt-BR":"Girar","ru":"Поворот","ur":"گھمائیں۔","zh-CN":"旋转"};

export function settings_git_webhook_rotate(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
