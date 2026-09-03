import { getLocale } from '../runtime.js';

const translations = {"ar":"آخر استيراد {when}","bn":"সর্বশেষ আমদানি করা {when}","de":"Zuletzt importiert {when}","en":"Last imported {when}","es":"Última importación {when}","fr":"Dernière {when} importée","hi":"अंतिम आयात {when}","id":"Terakhir diimpor {when}","pt-BR":"Última importação {when}","ru":"Последний импортированный {when}","ur":"آخری بار درآمد کیا گیا {when}","zh-CN":"最后导入 {when}"};

export function settings_git_import_lastimported(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
