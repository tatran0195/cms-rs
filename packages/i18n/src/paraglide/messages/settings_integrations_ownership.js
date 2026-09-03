import { getLocale } from '../runtime.js';

const translations = {"ar":"تديره","bn":"পরিচালনায়","de":"Verwaltet von","en":"Managed by","es":"Administrado por","fr":"Géré par","hi":"द्वारा प्रबंधित","id":"Diatur oleh","pt-BR":"Gerenciado por","ru":"управляемый","ur":"زیر انتظام منجانب","zh-CN":"管理单位"};

export function settings_integrations_ownership(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
