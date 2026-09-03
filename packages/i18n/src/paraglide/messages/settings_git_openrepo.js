import { getLocale } from '../runtime.js';

const translations = {"ar":"فتح المستودع","bn":"সংগ্রহস্থল খুলুন","de":"Repository öffnen","en":"Open repository","es":"Repositorio abierto","fr":"Dépôt ouvert","hi":"भंडार खोलें","id":"Buka repositori","pt-BR":"Repositório aberto","ru":"Открыть репозиторий","ur":"ذخیرہ کھولیں۔","zh-CN":"打开存储库"};

export function settings_git_openrepo(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
