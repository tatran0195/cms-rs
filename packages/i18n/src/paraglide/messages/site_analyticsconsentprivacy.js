import { getLocale } from '../runtime.js';

const translations = {"ar":"سياسة الخصوصية","bn":"Privacy policy","de":"Privacy policy","en":"Privacy policy","es":"Privacy policy","fr":"Privacy policy","hi":"Privacy policy","id":"Privacy policy","pt-BR":"Privacy policy","ru":"Privacy policy","ur":"Privacy policy","zh-CN":"Privacy policy"};

export function site_analyticsconsentprivacy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
