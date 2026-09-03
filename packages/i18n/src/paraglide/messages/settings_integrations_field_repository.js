import { getLocale } from '../runtime.js';

const translations = {"ar":"المستودع","bn":"রিপোজিটরি","de":"Speicherort","en":"Repository","es":"Repositorio","fr":"Dépôt","hi":"भंडार","id":"Repositori","pt-BR":"Repositório","ru":"Репозиторий","ur":"مخزن","zh-CN":"仓库"};

export function settings_integrations_field_repository(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
