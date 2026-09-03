import { getLocale } from '../runtime.js';

const translations = {"ar":"التصدير مخصص للمؤسسات","bn":"রপ্তানি শুধুমাত্র এন্টারপ্রাইজ","de":"Exporte sind nur für Unternehmen möglich","en":"Exports are Enterprise-only","es":"Las exportaciones son solo para empresas","fr":"Les exportations sont réservées aux entreprises","hi":"निर्यात केवल उद्यम के लिए हैं","id":"Ekspor hanya untuk Perusahaan","pt-BR":"As exportações são apenas empresariais","ru":"Экспорт предназначен только для предприятий","ur":"برآمدات صرف انٹرپرائز ہیں۔","zh-CN":"出口仅限企业"};

export function settings_exports_enterprise_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
