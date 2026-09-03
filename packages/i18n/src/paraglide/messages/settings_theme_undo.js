import { getLocale } from '../runtime.js';

const translations = {"ar":"تراجع","bn":"পূর্বাবস্থায় ফেরান","de":"Rückgängig machen","en":"Undo","es":"Deshacer","fr":"Annuler","hi":"पूर्ववत करें","id":"Membatalkan","pt-BR":"Desfazer","ru":"Отменить","ur":"کالعدم","zh-CN":"撤消"};

export function settings_theme_undo(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
