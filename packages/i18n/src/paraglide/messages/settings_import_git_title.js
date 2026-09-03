import { getLocale } from '../runtime.js';

const translations = {"ar":"مستودع Git","bn":"গিট সংগ্রহস্থল","de":"Git-Repository","en":"Git repository","es":"repositorio git","fr":"Dépôt Git","hi":"गिट भंडार","id":"Repositori Git","pt-BR":"Repositório Git","ru":"Git-репозиторий","ur":"گٹ ذخیرہ","zh-CN":"Git 存储库"};

export function settings_import_git_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
