import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر الحفظ","bn":"বাঁচাতে পারেনি","de":"Konnte nicht gespeichert werden","en":"Could not save","es":"No se pudo guardar","fr":"Impossible d'enregistrer","hi":"सहेजा नहीं जा सका","id":"Tidak dapat menyimpan","pt-BR":"Não foi possível salvar","ru":"Не удалось сохранить","ur":"بچا نہیں سکا","zh-CN":"无法保存"};

export function settings_workspace_toast_saveerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
