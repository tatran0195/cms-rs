import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض محايد عن مزود الفوترة للاستخدام القابل للقياس والحدود. تبقى القياسات المفقودة غير معروفة بدل عرضها كصفر.","bn":"এই সাইটটি ক্লাউড বিটা সীমার বিরুদ্ধে কী ব্যবহার করে। সীমাগুলি উদার এবং বিটা চলাকালীন প্রয়োগ করা হয় না।","de":"Was diese Website im Vergleich zu den Cloud Beta-Limits verwendet. Die Limits sind großzügig und werden während der Beta nicht durchgesetzt.","en":"A provider-neutral view of measurable product usage and limits. Missing measurements stay unknown instead of being shown as zero.","es":"Qué utiliza este sitio frente a los límites de Cloud Beta. Los límites son generosos y no se aplican durante la versión beta.","fr":"Ce que ce site utilise par rapport aux limites de Cloud Beta. Les limites sont généreuses et ne sont pas appliquées pendant la version bêta.","hi":"यह साइट क्लाउड बीटा सीमाओं के विरुद्ध क्या उपयोग करती है। सीमाएं उदार हैं और बीटा के दौरान लागू नहीं की जाती हैं।","id":"Apa yang digunakan situs ini terhadap batasan Cloud Beta. Batasan sangat besar dan tidak diterapkan selama versi beta.","pt-BR":"O que este site usa em relação aos limites do Cloud Beta. Os limites são generosos e não aplicados durante a versão beta.","ru":"Что этот сайт использует в рамках ограничений Cloud Beta. Ограничения являются щедрыми и не применяются во время бета-тестирования.","ur":"یہ سائٹ کلاؤڈ بیٹا کی حدود کے خلاف کیا استعمال کرتی ہے۔ حدود فراخ ہیں اور بیٹا کے دوران نافذ نہیں کی جاتی ہیں۔","zh-CN":"此网站使用的内容不受 Cloud Beta 限制。限制很慷慨，并且在测试期间不会强制执行。"};

export function settings_usage_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
