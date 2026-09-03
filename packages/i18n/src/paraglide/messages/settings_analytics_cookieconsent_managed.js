import { getLocale } from '../runtime.js';

const translations = {"ar":"تُدار طريقة عرض الموافقة في قسم الإضافات. تبقى التحليلات الاختيارية محجوبة عند تعطيل إضافة الموافقة.","bn":"সম্মতির উপস্থাপন অ্যাড-অন বিভাগে পরিচালিত হয়। সম্মতি অ্যাড-অন বন্ধ থাকলে ঐচ্ছিক অ্যানালিটিক্স সবসময় অবরুদ্ধ থাকে।","de":"Die Darstellung der Einwilligung wird unter Add-ons verwaltet. Optionale Analysen bleiben blockiert, wenn das Einwilligungs-Add-on deaktiviert ist.","en":"Consent presentation is managed in Add-ons. Optional analytics stay blocked whenever the consent add-on is disabled.","es":"La presentación del consentimiento se gestiona en Complementos. Las analíticas opcionales permanecen bloqueadas cuando el complemento de consentimiento está desactivado.","fr":"La présentation du consentement est gérée dans Modules complémentaires. Les analyses facultatives restent bloquées lorsque le module de consentement est désactivé.","hi":"सहमति की प्रस्तुति ऐड-ऑन में प्रबंधित होती है। सहमति ऐड-ऑन अक्षम होने पर वैकल्पिक एनालिटिक्स ब्लॉक रहती हैं।","id":"Tampilan persetujuan dikelola di Add-on. Analitik opsional tetap diblokir saat add-on persetujuan dinonaktifkan.","pt-BR":"A apresentação do consentimento é gerenciada em Complementos. As análises opcionais permanecem bloqueadas quando o complemento de consentimento está desativado.","ru":"Отображение согласия настраивается в разделе «Дополнения». Необязательная аналитика остается заблокированной, когда дополнение согласия отключено.","ur":"رضامندی کی پیشکش ایڈ آنز میں منظم ہوتی ہے۔ رضامندی کا ایڈ آن غیر فعال ہو تو اختیاری تجزیات بلاک رہتے ہیں۔","zh-CN":"同意界面在“附加功能”中管理。停用同意附加功能时，可选分析会保持阻止状态。"};

export function settings_analytics_cookieconsent_managed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
