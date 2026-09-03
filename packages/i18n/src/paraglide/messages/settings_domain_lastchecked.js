import { getLocale } from '../runtime.js';

const translations = {"ar":"آخر فحص {date}","bn":"সর্বশেষ চেক করা হয়েছে {date}","de":"Zuletzt überprüft {date}","en":"Last checked {date}","es":"Última comprobación {date}","fr":"Dernière vérification {date}","hi":"अंतिम बार जाँच की गई {date}","id":"Terakhir diperiksa {date}","pt-BR":"Última verificação {date}","ru":"Последняя проверка {date}","ur":"آخری بار چیک کیا گیا {date}","zh-CN":"最后检查 {date}"};

export function settings_domain_lastchecked(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
