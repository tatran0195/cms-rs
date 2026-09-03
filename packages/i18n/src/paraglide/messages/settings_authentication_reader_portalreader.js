import { getLocale } from '../runtime.js';

const translations = {"ar":"قارئ البوابة","bn":"পোর্টাল পাঠক","de":"Portalleser","en":"Portal reader","es":"Lector de portales","fr":"Lecteur de portail","hi":"पोर्टल रीडर","id":"Pembaca portal","pt-BR":"Leitor de portais","ru":"Читатель портала","ur":"پورٹل ریڈر","zh-CN":"门户阅读器"};

export function settings_authentication_reader_portalreader(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
