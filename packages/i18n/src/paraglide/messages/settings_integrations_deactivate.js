import { getLocale } from '../runtime.js';

const translations = {"ar":"إيقاف","bn":"নিষ্ক্রিয় করুন","de":"Deaktivieren","en":"Deactivate","es":"Desactivar","fr":"Désactiver","hi":"निष्क्रिय","id":"Nonaktifkan","pt-BR":"Desactivar","ru":"деактивировать","ur":"غیر فعال کریں","zh-CN":"删除"};

export function settings_integrations_deactivate(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
