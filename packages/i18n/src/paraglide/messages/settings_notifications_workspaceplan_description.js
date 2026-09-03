import { getLocale } from '../runtime.js';

const translations = {"ar":"التجديدات والإيصالات وتغييرات الخطة.","bn":"পুনর্নবীকরণ, রসিদ, এবং পরিকল্পনা পরিবর্তন.","de":"Verlängerungen, Quittungen und Planänderungen.","en":"Renewals, receipts, and plan changes.","es":"Renovaciones, recibos y cambios de plan.","fr":"Renouvellements, reçus et modifications de plan.","hi":"नवीनीकरण, प्राप्तियाँ, और योजना परिवर्तन।","id":"Perpanjangan, penerimaan, dan perubahan paket.","pt-BR":"Renovações, recebimentos e alterações de plano.","ru":"Продление, поступления и изменения плана.","ur":"تجدید، رسیدیں، اور منصوبہ میں تبدیلیاں۔","zh-CN":"续订、收据和计划变更。"};

export function settings_notifications_workspaceplan_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
