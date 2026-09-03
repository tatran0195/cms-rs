import { getLocale } from '../runtime.js';

const translations = {"ar":"التغييرات","bn":"পরিবর্তন","de":"Änderungen","en":"Changes","es":"Cambios","fr":"Changements","hi":"परिवर्तन","id":"Perubahan","pt-BR":"Mudanças","ru":"Изменения","ur":"تبدیلیاں","zh-CN":"变化"};

export function publish_changes(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
