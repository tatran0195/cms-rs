import { getLocale } from '../runtime.js';

const translations = {"ar":"يجب ألا يتجاوز السبب {max} حرفًا (حاليًا {current}).","bn":"Reason must be {max} characters or fewer (currently {current}).","de":"Reason must be {max} characters or fewer (currently {current}).","en":"Reason must be {max} characters or fewer (currently {current}).","es":"Reason must be {max} characters or fewer (currently {current}).","fr":"Reason must be {max} characters or fewer (currently {current}).","hi":"Reason must be {max} characters or fewer (currently {current}).","id":"Reason must be {max} characters or fewer (currently {current}).","pt-BR":"Reason must be {max} characters or fewer (currently {current}).","ru":"Reason must be {max} characters or fewer (currently {current}).","ur":"Reason must be {max} characters or fewer (currently {current}).","zh-CN":"Reason must be {max} characters or fewer (currently {current})."};

export function admin_sites_reasonlength(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
