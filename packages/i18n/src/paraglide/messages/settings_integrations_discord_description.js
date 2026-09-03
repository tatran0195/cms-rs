import { getLocale } from '../runtime.js';

const translations = {"ar":"انشر نشاط مساحة العمل إلى Webhook في Discord.","bn":"Discord ওয়েবহুকে ওয়ার্কস্পেসের কার্যকলাপ পোস্ট করুন।","de":"Posten Sie die Workspace-Aktivität in einem Discord-Webhook.","en":"Post workspace activity to a Discord webhook.","es":"Publicar la actividad del espacio de trabajo en un webhook de Discord.","fr":"Postez l'activité de l'espace de travail à un webhook Discord.","hi":"वर्कस्पेस गतिविधि को Discord वेबहुक पर पोस्ट करें।","id":"Pasangkan aktivitas area kerja ke sebuah webhook Discord.","pt-BR":"Pós atividade de espaço de trabalho para um webhook Discord.","ru":"Отправьте деятельность в рабочее пространство на веб-хук Discord.","ur":"کام کی جگہ کی سرگرمی کو Discord ویب ہک پر پوسٹ کریں ۔","zh-CN":"Discord webhook 的工作空间活动后。"};

export function settings_integrations_discord_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
