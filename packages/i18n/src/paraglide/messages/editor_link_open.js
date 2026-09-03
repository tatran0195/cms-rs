import { getLocale } from '../runtime.js';

const translations = {"ar":"فتح في تبويب جديد","bn":"নতুন ট্যাবে খুলুন","de":"In neuem Tab öffnen","en":"Open in new tab","es":"Abrir en nueva pestaña","fr":"Ouvrir dans un nouvel onglet","hi":"नए टैब में खोलें","id":"Buka di tab baru","pt-BR":"Abrir em nova aba","ru":"Открыть в новой вкладке","ur":"نئے ٹیب میں کھولیں۔","zh-CN":"在新选项卡中打开"};

export function editor_link_open(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
