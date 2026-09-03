import { getLocale } from '../runtime.js';

const translations = {"ar":"استخدم تحليلات تراعي الخصوصية في التوثيق المنشور.","bn":"আপনার প্রকাশিত ডকুমেন্টেশনে গোপনীয়তা-বান্ধব বিশ্লেষণ ব্যবহার করুন ।","de":"Verwenden Sie datenschutzfreundliche Analysen für Ihre veröffentlichte Dokumentation.","en":"Use privacy-friendly analytics on your published documentation.","es":"Utiliza análisis respetuosos con la privacidad en tu documentación publicada.","fr":"Utilisez l'analyse de confidentialité sur votre documentation publiée.","hi":"अपने प्रकाशित प्रलेखन पर गोपनीयता के अनुकूल विश्लेषण का उपयोग करें।","id":"Gunakan analitik ramah privasi pada dokumentasi yang diterbitkan.","pt-BR":"Use análises amigáveis à privacidade em sua documentação publicada.","ru":"Используйте аналитику с защитой конфиденциальности в опубликованной документации.","ur":"اپنی شائع شدہ دستاویزات پر رازداری کے موافق تجزیات استعمال کریں ۔","zh-CN":"为已发布文档使用隐私友好的分析服务。"};

export function settings_integrations_plausible_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
