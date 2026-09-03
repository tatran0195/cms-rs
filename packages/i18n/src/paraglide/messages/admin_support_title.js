import { getLocale } from '../runtime.js';

const translations = {"ar":"فتح {subject} كعميل؟","bn":"Open {subject} as a customer?","de":"Open {subject} as a customer?","en":"Open {subject} as a customer?","es":"Open {subject} as a customer?","fr":"Open {subject} as a customer?","hi":"Open {subject} as a customer?","id":"Open {subject} as a customer?","pt-BR":"Open {subject} as a customer?","ru":"Open {subject} as a customer?","ur":"Open {subject} as a customer?","zh-CN":"Open {subject} as a customer?"};

export function admin_support_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
