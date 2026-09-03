import { getLocale } from '../runtime.js';

const translations = {"ar":"منطقة الخطر","bn":"বিপদ অঞ্চল","de":"Gefahrenzone","en":"Danger zone","es":"Zona de peligro","fr":"Zone dangereuse","hi":"ख़तरे का क्षेत्र","id":"Zona bahaya","pt-BR":"Zona de perigo","ru":"Опасная зона","ur":"خطرہ زون","zh-CN":"危险区域"};

export function settings_danger_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
