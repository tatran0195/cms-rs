import { getLocale } from '../runtime.js';

const translations = {"ar":"الفِرق الهندسية التي تريد docs-as-code وتحكمًا كاملاً ومستعدة لبناء تجربة التحرير والاستضافة والبحث بنفسها.","bn":"Arabic page content","de":"Arabic page content","en":"الفِرق الهندسية التي تريد docs-as-code وتحكمًا كاملاً ومستعدة لبناء تجربة التحرير والاستضافة والبحث بنفسها.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_platform_docusaurus_bestfor(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
