import { getLocale } from '../runtime.js';

const translations = {"ar":"موجز للنشاط عبر مساحة عملك.","bn":"আপনার কর্মক্ষেত্র জুড়ে কার্যকলাপের একটি ডাইজেস্ট।","de":"Eine Zusammenfassung der Aktivitäten in Ihrem Arbeitsbereich.","en":"A digest of activity across your workspace.","es":"Un resumen de la actividad en su espacio de trabajo.","fr":"Un résumé de l'activité dans votre espace de travail.","hi":"आपके कार्यक्षेत्र में गतिविधि का सारांश।","id":"Intisari aktivitas di seluruh ruang kerja Anda.","pt-BR":"Um resumo das atividades em seu espaço de trabalho.","ru":"Дайджест активности в вашем рабочем пространстве.","ur":"آپ کے کام کی جگہ پر سرگرمی کا ایک ڈائجسٹ۔","zh-CN":"整个工作空间的活动摘要。"};

export function settings_notifications_workspaceweekly_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
