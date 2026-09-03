import { getLocale } from '../runtime.js';

const translations = {"ar":"الفروع والـ webhook وقطع الاتصال","bn":"শাখা, ওয়েবহুক এবং সংযোগ বিচ্ছিন্ন করুন","de":"Verzweigungen, Webhook und Trennung","en":"Branches, webhook, and disconnect","es":"Sucursales, webhook y desconexión","fr":"Branches, webhook et déconnexion","hi":"शाखाएँ, वेबहुक, और डिस्कनेक्ट","id":"Cabang, webhook, dan putuskan sambungan","pt-BR":"Ramos, webhook e desconexão","ru":"Ветви, вебхук и отключение","ur":"شاخیں، ویب ہک، اور منقطع","zh-CN":"分支、Webhook 和断开连接"};

export function settings_git_workflow_nav_connectiondesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
