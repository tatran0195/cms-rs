import { getLocale } from '../runtime.js';

const translations = {"ar":"تقليدي","bn":"পুরোনো","de":"Klassisch","en":"Legacy","es":"Heredado","fr":"Hérité","hi":"पुराना","id":"Lama","pt-BR":"Legado","ru":"Устаревший","ur":"سابقہ","zh-CN":"旧版"};

export function settings_integrations_value_runtime_legacy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
