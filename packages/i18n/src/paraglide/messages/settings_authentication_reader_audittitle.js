import { getLocale } from '../runtime.js';

const translations = {"ar":"التدقيق والإلغاء الطارئ","bn":"অডিট এবং জরুরী প্রত্যাহার","de":"Prüfung und Notfallwiderruf","en":"Audit and emergency revocation","es":"Auditoría y revocación de emergencia","fr":"Audit et révocation d’urgence","hi":"लेखापरीक्षा और आपातकालीन निरसन","id":"Audit dan pencabutan darurat","pt-BR":"Auditoria e revogação de emergência","ru":"Аудит и экстренный отзыв","ur":"آڈٹ اور ہنگامی تنسیخ","zh-CN":"审计和紧急撤销"};

export function settings_authentication_reader_audittitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
