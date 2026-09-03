import { getLocale } from '../runtime.js';

const translations = {"ar":"التالي","bn":"পরবর্তী","de":"als nächstes","en":"next","es":"siguiente","fr":"suivant","hi":"अगला","id":"selanjutnya","pt-BR":"próximo","ru":"следующий","ur":"اگلا","zh-CN":"下一个"};

export function settings_exports_workflow_next(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
