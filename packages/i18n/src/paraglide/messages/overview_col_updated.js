import { getLocale } from '../runtime.js';

const translations = {"ar":"آخر تحديث","bn":"আপডেট করা হয়েছে","de":"Aktualisiert","en":"Updated","es":"Actualizado","fr":"Mis à jour","hi":"अद्यतन किया गया","id":"Diperbarui","pt-BR":"Atualizado","ru":"Обновлено","ur":"تازہ کاری","zh-CN":"已更新"};

export function overview_col_updated(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
