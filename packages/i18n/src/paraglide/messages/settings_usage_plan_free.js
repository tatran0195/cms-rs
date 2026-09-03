import { getLocale } from '../runtime.js';

const translations = {"ar":"مجاني خلال البيتا","bn":"বিটা সময় বিনামূল্যে","de":"Kostenlos während der Beta","en":"Free during beta","es":"Gratis durante la beta","fr":"Gratuit pendant la version bêta","hi":"बीटा के दौरान निःशुल्क","id":"Gratis selama versi beta","pt-BR":"Gratuito durante a versão beta","ru":"Бесплатно во время бета-тестирования","ur":"بیٹا کے دوران مفت","zh-CN":"测试期间免费"};

export function settings_usage_plan_free(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
