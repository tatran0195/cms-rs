import { getLocale } from '../runtime.js';

const translations = {"ar":"بلا حدود خلال البيتا","bn":"বিটা সময় কোন সীমা নেই","de":"Kein Limit während der Beta","en":"No limit during beta","es":"Sin límite durante la beta","fr":"Aucune limite pendant la version bêta","hi":"बीटा के दौरान कोई सीमा नहीं","id":"Tidak ada batasan selama beta","pt-BR":"Sem limite durante a versão beta","ru":"Без ограничений во время бета-тестирования","ur":"بیٹا کے دوران کوئی حد نہیں۔","zh-CN":"测试期间没有限制"};

export function settings_usage_nolimit(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
