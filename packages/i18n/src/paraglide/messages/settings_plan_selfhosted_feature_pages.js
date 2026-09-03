import { getLocale } from '../runtime.js';

const translations = {"ar":"حتى {count} صفحة خلال البيتا","bn":"বিটা চলাকালীন {count} পৃষ্ঠা পর্যন্ত","de":"Bis zu {count} Seiten während der Betaphase","en":"Up to {count} pages during beta","es":"Hasta {count} páginas durante la versión beta","fr":"Jusqu'à {count} pages pendant la version bêta","hi":"बीटा के दौरान {count} पृष्ठों तक","id":"Hingga {count} halaman selama versi beta","pt-BR":"Até {count} páginas durante a versão beta","ru":"До {count} страниц во время бета-тестирования","ur":"بیٹا کے دوران {count} صفحات تک","zh-CN":"测试期间最多 {count} 页"};

export function settings_plan_selfhosted_feature_pages(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
