import { getLocale } from '../runtime.js';

const translations = {"ar":"يقترب من حد البيتا","bn":"বিটা সীমার কাছাকাছি","de":"Wir nähern uns dem Beta-Limit","en":"Approaching the beta limit","es":"Acercándose al límite beta","fr":"Approche de la limite bêta","hi":"बीटा सीमा के करीब पहुंच रहा है","id":"Mendekati batas beta","pt-BR":"Aproximando-se do limite beta","ru":"Приближаемся к бета-лимиту","ur":"بیٹا کی حد تک پہنچ رہا ہے۔","zh-CN":"接近贝塔极限"};

export function settings_usage_nearlimit(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
