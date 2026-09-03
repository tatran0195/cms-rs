import { getLocale } from '../runtime.js';

const translations = {"ar":"سجل التغييرات","bn":"চেঞ্জলগ","de":"Änderungsprotokoll","en":"Changelog","es":"Registro de cambios","fr":"Journal des modifications","hi":"चेंजलॉग","id":"log perubahan","pt-BR":"Registro de alterações","ru":"Журнал изменений","ur":"چینج لاگ","zh-CN":"变更日志"};

export function site_changelog(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
