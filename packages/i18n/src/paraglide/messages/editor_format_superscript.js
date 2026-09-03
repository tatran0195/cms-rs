import { getLocale } from '../runtime.js';

const translations = {"ar":"نص علوي","bn":"সুপারস্ক্রিপ্ট","de":"Hochgestellt","en":"Superscript","es":"Superíndice","fr":"Exposant","hi":"सुपरस्क्रिप्ट","id":"Superskrip","pt-BR":"Sobrescrito","ru":"Надстрочный индекс","ur":"سپر اسکرپٹ","zh-CN":"上标"};

export function editor_format_superscript(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
