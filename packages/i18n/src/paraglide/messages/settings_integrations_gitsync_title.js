import { getLocale } from '../runtime.js';

const translations = {"ar":"مستودع Git","bn":"গিট রিপোজিটরি","de":"Git-Repository","en":"Git repository","es":"Repositorio Git","fr":"Dépôt Git","hi":"गिट भंडार","id":"Repositori Git","pt-BR":"repositório Git","ru":"Репозиторий Git","ur":"Git ریپوزٹری","zh-CN":"Git 仓库"};

export function settings_integrations_gitsync_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
