import { getLocale } from '../runtime.js';

const translations = {"ar":"عناصر تحكم آمنة للموافقة للخدمات الاختيارية للزوار.","bn":"ঐচ্ছিক দর্শক সেবার জন্য সম্মতি-নিরাপদ নিয়ন্ত্রণ।","de":"Einwilligungssichere Steuerelemente für optionale Besucherdienste.","en":"Consent-safe controls for optional visitor services.","es":"Controles de consentimiento seguros para servicios opcionales de visitantes.","fr":"Contrôles respectueux du consentement pour les services facultatifs destinés aux visiteurs.","hi":"वैकल्पिक विज़िटर सेवाओं के लिए सहमति-सुरक्षित नियंत्रण।","id":"Kontrol aman-persetujuan untuk layanan pengunjung opsional.","pt-BR":"Controles seguros de consentimento para serviços opcionais aos visitantes.","ru":"Безопасные элементы управления согласием для дополнительных сервисов посетителей.","ur":"زائرین کی اختیاری خدمات کے لیے رضامندی کے محفوظ کنٹرولز۔","zh-CN":"为可选访客服务提供保障同意选择的控件。"};

export function settings_addons_group_privacy_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
