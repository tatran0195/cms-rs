import { getLocale } from '../runtime.js';

const translations = {"ar":"فتح Nibleaf","bn":"খুলুন Nibleaf","de":"Öffnen Sie Nibleaf","en":"Open Nibleaf","es":"Abrir Nibleaf","fr":"Ouvrez Nibleaf","hi":"Nibleaf खोलें","id":"Buka Nibleaf","pt-BR":"Abra Nibleaf","ru":"Открыть Nibleaf","ur":"کھولیں Nibleaf","zh-CN":"打开Nibleaf"};

export function auth_verify_continuetoapp(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
