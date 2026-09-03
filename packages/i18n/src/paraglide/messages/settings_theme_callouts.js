import { getLocale } from '../runtime.js';

const translations = {"ar":"التنبيهات","bn":"কলআউট","de":"Hinweise","en":"Callouts","es":"Avisos","fr":"Encadrés","hi":"कॉलआउट","id":"Info","pt-BR":"Chamadas","ru":"Выноски","ur":"کال آؤٹس","zh-CN":"标注"};

export function settings_theme_callouts(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
