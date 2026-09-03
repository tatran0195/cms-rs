import { getLocale } from '../runtime.js';

const translations = {"ar":"إرسال مُدار لرسائل البريد الإلكتروني التشغيلية.","bn":"পরিচালিত ট্রানজ্যাকশনাল ইমেল ডেলিভারি।","de":"Verwaltete transaktionale E-Mail-Zustellung.","en":"Managed transactional email delivery.","es":"Gestión de la entrega de correos electrónicos transaccionales.","fr":"Livraison de courriels transactionnels gérés.","hi":"प्रबंधित लेनदेन ईमेल वितरण।","id":"Mengelola pengiriman email transaksional.","pt-BR":"Entrega de email transacional gerenciada.","ru":"Управляемая транзакционная доставка электронной почты.","ur":"زیر انتظام ٹرانزیکشنل ای میل ڈیلیوری۔","zh-CN":"托管的事务性电子邮件发送服务。"};

export function settings_integrations_postmark_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
