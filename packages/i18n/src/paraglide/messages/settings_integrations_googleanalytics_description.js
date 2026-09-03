import { getLocale } from '../runtime.js';

const translations = {"ar":"قس الزيارات والتفاعل في التوثيق المنشور.","bn":"আপনার প্রকাশিত ডকুমেন্টেশনে ভিজিট এবং সম্পৃক্ততা পরিমাপ করুন ।","de":"Messen Sie Besuche und Engagement in Ihrer veröffentlichten Dokumentation.","en":"Measure visits and engagement on your published documentation.","es":"Mida las visitas y el compromiso en su documentación publicada.","fr":"Mesurez les visites et l'engagement sur votre documentation publiée.","hi":"अपने प्रकाशित दस्तावेज़ों पर विज़िट और सहभागिता मापें।","id":"Mengukur kunjungan dan keterlibatan pada dokumentasi yang diterbitkan.","pt-BR":"Meça visitas e engajamento em sua documentação publicada.","ru":"Измеряйте посещения и вовлечённость в опубликованной документации.","ur":"اپنی شائع شدہ دستاویزات پر دوروں اور مصروفیت کی پیمائش کریں ۔","zh-CN":"衡量已发布文档的访问量和互动情况。"};

export function settings_integrations_googleanalytics_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
