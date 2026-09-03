import { getLocale } from '../runtime.js';

const translations = {"ar":"حقوق النشر","bn":"কপিরাইট","de":"Urheberrecht","en":"Copyright","es":"Derechos de autor","fr":"Droit d'auteur","hi":"कॉपीराइट","id":"Hak Cipta","pt-BR":"Direitos autorais","ru":"Авторское право","ur":"کاپی رائٹ","zh-CN":"版权"};

export function settings_footer_copyright_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
