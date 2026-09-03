import { getLocale } from '../runtime.js';

const translations = {"ar":"معاينة آمنة للموافقة","bn":"সম্মতি-নিরাপদ পূর্বরূপ","de":"Einwilligungssichere Vorschau","en":"Consent-safe preview","es":"Vista previa respetuosa con el consentimiento","fr":"Aperçu respectueux du consentement","hi":"सहमति-सुरक्षित पूर्वावलोकन","id":"Pratinjau aman-persetujuan","pt-BR":"Pré-visualização segura de consentimento","ru":"Предпросмотр с учетом согласия","ur":"رضامندی کا محفوظ پیش منظر","zh-CN":"同意体验预览"};

export function settings_addons_consent_preview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
