import { getLocale } from '../runtime.js';

const translations = {"ar":"خيارات الخصوصية","bn":"Privacy choices","de":"Privacy choices","en":"Privacy choices","es":"Privacy choices","fr":"Privacy choices","hi":"Privacy choices","id":"Privacy choices","pt-BR":"Privacy choices","ru":"Privacy choices","ur":"Privacy choices","zh-CN":"Privacy choices"};

export function site_analyticsconsentmanage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
