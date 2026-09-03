import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر إنشاء الإصدار","bn":"সংস্করণ তৈরি করা যায়নি","de":"Die Version konnte nicht erstellt werden","en":"Could not create the version","es":"No se pudo crear la versión.","fr":"Impossible de créer la version","hi":"संस्करण नहीं बनाया जा सका","id":"Tidak dapat membuat versinya","pt-BR":"Não foi possível criar a versão","ru":"Не удалось создать версию","ur":"ورژن نہیں بنایا جا سکا","zh-CN":"无法创建版本"};

export function editor_branch_createerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
