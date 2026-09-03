import { getLocale } from '../runtime.js';

const translations = {"ar":"بوابة الفوترة مخطط لها","bn":"বিলিং পোর্টাল পরিকল্পিত","de":"Abrechnungsportal geplant","en":"Billing portal planned","es":"Portal de facturación previsto","fr":"Portail de facturation prévu","hi":"बिलिंग पोर्टल की योजना बनाई गई","id":"Portal penagihan direncanakan","pt-BR":"Portal de cobrança planejado","ru":"Планируется создание платежного портала","ur":"بلنگ پورٹل کی منصوبہ بندی کی گئی۔","zh-CN":"计划中的计费门户"};

export function settings_workspace_billingcomingsoon(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
