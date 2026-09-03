import { getLocale } from '../runtime.js';

const translations = {"ar":"تحليلات تحترم الخصوصية. اتركه فارغاً للتعطيل.","bn":"গোপনীয়তা-বান্ধব বিশ্লেষণ। নিষ্ক্রিয় করতে ফাঁকা ছেড়ে দিন।","de":"Datenschutzfreundliche Analysen. Zum Deaktivieren leer lassen.","en":"Privacy-friendly analytics. Leave blank to disable.","es":"Análisis respetuosos con la privacidad. Déjelo en blanco para desactivarlo.","fr":"Analyses respectueuses de la confidentialité. Laissez vide pour désactiver.","hi":"गोपनीयता-अनुकूल विश्लेषण। अक्षम करने के लिए खाली छोड़ दें.","id":"Analisis ramah privasi. Biarkan kosong untuk menonaktifkan.","pt-BR":"Análise favorável à privacidade. Deixe em branco para desabilitar.","ru":"Аналитика, безопасная для конфиденциальности. Оставьте пустым, чтобы отключить.","ur":"رازداری کے موافق تجزیات۔ غیر فعال کرنے کے لیے خالی چھوڑ دیں۔","zh-CN":"隐私友好的分析。留空以禁用。"};

export function settings_analytics_plausible_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
