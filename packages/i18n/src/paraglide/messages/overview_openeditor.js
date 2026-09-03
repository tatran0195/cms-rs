import { getLocale } from '../runtime.js';

const translations = {"ar":"فتح المحرر","bn":"সম্পাদক খুলুন","de":"Editor öffnen","en":"Open editor","es":"editor abierto","fr":"Ouvrir l'éditeur","hi":"संपादक खोलें","id":"Buka editor","pt-BR":"Editor aberto","ru":"Открыть редактор","ur":"ایڈیٹر کھولیں۔","zh-CN":"打开编辑器"};

export function overview_openeditor(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
