import { getLocale } from '../runtime.js';

const translations = {"ar":"تم الاتصال بـ {provider}","bn":"{provider} এর সাথে সংযুক্ত","de":"Verbunden mit {provider}","en":"Connected to {provider}","es":"Conectado a {provider}","fr":"Connecté à {provider}","hi":"{provider} से कनेक्ट किया गया","id":"Terhubung ke {provider}","pt-BR":"Conectado a {provider}","ru":"Подключено к {provider}","ur":"{provider} سے منسلک","zh-CN":"连接到 {provider}"};

export function settings_git_connectedtoast(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
