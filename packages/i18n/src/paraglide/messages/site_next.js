import { getLocale } from '../runtime.js';

const translations = {"ar":"التالي","bn":"পরবর্তী","de":"Als nächstes","en":"Next","es":"Siguiente","fr":"Suivant","hi":"अगला","id":"Selanjutnya","pt-BR":"Próximo","ru":"Далее","ur":"اگلا","zh-CN":"下一页"};

export function site_next(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
