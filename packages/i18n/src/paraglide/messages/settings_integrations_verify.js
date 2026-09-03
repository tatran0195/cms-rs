import { getLocale } from '../runtime.js';

const translations = {"ar":"تحقق","bn":"যাচাই করুন","de":"Verifizieren","en":"Verify","es":"Verificar","fr":"Vérifier","hi":"सत्यापित","id":"Verifikasi","pt-BR":"Verificar","ru":"проверять","ur":"توثیق کریں","zh-CN":"校验"};

export function settings_integrations_verify(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
