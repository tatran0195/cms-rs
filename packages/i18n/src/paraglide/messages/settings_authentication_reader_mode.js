import { getLocale } from '../runtime.js';

const translations = {"ar":"وضع الوصول","bn":"অ্যাক্সেস মোড","de":"Zugriffsmodus","en":"Access mode","es":"Modo de acceso","fr":"Mode d'accès","hi":"एक्सेस मोड","id":"Modus akses","pt-BR":"Modo de acesso","ru":"Режим доступа","ur":"رسائی موڈ","zh-CN":"接入方式"};

export function settings_authentication_reader_mode(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
