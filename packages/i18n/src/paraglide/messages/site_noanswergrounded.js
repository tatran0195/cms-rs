import { getLocale } from '../runtime.js';

const translations = {"ar":"لم أجد معلومات كافية في الوثائق المتاحة للإجابة بثقة.","bn":"I could not find enough information in the available documentation to answer confidently.","de":"I could not find enough information in the available documentation to answer confidently.","en":"I could not find enough information in the available documentation to answer confidently.","es":"I could not find enough information in the available documentation to answer confidently.","fr":"I could not find enough information in the available documentation to answer confidently.","hi":"I could not find enough information in the available documentation to answer confidently.","id":"I could not find enough information in the available documentation to answer confidently.","pt-BR":"I could not find enough information in the available documentation to answer confidently.","ru":"I could not find enough information in the available documentation to answer confidently.","ur":"I could not find enough information in the available documentation to answer confidently.","zh-CN":"I could not find enough information in the available documentation to answer confidently."};

export function site_noanswergrounded(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
