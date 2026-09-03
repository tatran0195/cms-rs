import { getLocale } from '../runtime.js';

const translations = {"ar":"نسخ","bn":"কপি","de":"Kopieren","en":"Copy","es":"Copiar","fr":"Copier","hi":"प्रतिलिपि","id":"Salin","pt-BR":"Copiar","ru":"Копировать","ur":"کاپی","zh-CN":"复制"};

export function settings_apikeys_copy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
