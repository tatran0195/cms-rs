import { getLocale } from '../runtime.js';

const translations = {"ar":"رجوع","bn":"ফিরে","de":"Zurück","en":"Back","es":"Atrás","fr":"Retour","hi":"वापस","id":"Kembali","pt-BR":"Voltar","ru":"Назад","ur":"پیچھے","zh-CN":"返回"};

export function settings_import_back(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
