import { getLocale } from '../runtime.js';

const translations = {"ar":"تحديث","bn":"আপডেট","de":"Aktualisieren","en":"Update","es":"Actualizar","fr":"Mise à jour","hi":"अद्यतन करें","id":"Pembaruan","pt-BR":"Atualizar","ru":"Обновить","ur":"اپڈیٹ کریں۔","zh-CN":"更新"};

export function editor_slash_update_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
