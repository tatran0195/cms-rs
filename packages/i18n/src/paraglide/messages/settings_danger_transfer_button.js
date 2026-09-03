import { getLocale } from '../runtime.js';

const translations = {"ar":"نقل","bn":"স্থানান্তর","de":"Übertragen","en":"Transfer","es":"Transferir","fr":"Transfert","hi":"स्थानांतरण","id":"Pemindahan","pt-BR":"Transferência","ru":"Трансфер","ur":"منتقلی","zh-CN":"转乘"};

export function settings_danger_transfer_button(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
