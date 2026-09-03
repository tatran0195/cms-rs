import { getLocale } from '../runtime.js';

const translations = {"ar":"معاينات النشر معطّلة لهذا الموقع.","bn":"এই সাইটের জন্য পূর্বরূপ স্থাপনা নিষ্ক্রিয় করা হয়েছে৷","de":"Vorschaubereitstellungen sind für diese Site deaktiviert.","en":"Preview deployments are disabled for this site.","es":"Las implementaciones de vista previa están deshabilitadas para este sitio.","fr":"Les déploiements en version préliminaire sont désactivés pour ce site.","hi":"इस साइट के लिए पूर्वावलोकन परिनियोजन अक्षम हैं.","id":"Penerapan pratinjau dinonaktifkan untuk situs ini.","pt-BR":"As implantações de visualização estão desabilitadas para este site.","ru":"Предварительные развертывания отключены для этого сайта.","ur":"اس سائٹ کے لیے پیش منظر کی تعیناتیاں غیر فعال ہیں۔","zh-CN":"此站点禁用预览部署。"};

export function preview_disabled(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
