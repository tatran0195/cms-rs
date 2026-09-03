import { getLocale } from '../runtime.js';

const translations = {"ar":"إرسال البريد عبر SMTP بإدارة مشغّل المنصة.","bn":"ইনস্ট্যান্স-পরিচালিত SMTP ইমেল ডেলিভারি।","de":"Instanzverwaltete SMTP-E-Mail-Zustellung.","en":"Instance-managed SMTP email delivery.","es":"Entrega de correo electrónico SMTP gestionado por instancias.","fr":"Envoi de courriels SMTP géré par instance.","hi":"इंस्टेंस-प्रबंधित SMTP ईमेल डिलीवरी।","id":"Pengiriman email SMTP yang dikelola instans.","pt-BR":"Entrega de email SMTP gerenciada por instância.","ru":"Управляемая экземпляром доставка электронной почты через SMTP.","ur":"انسٹنس کے زیر انتظام SMTP ای میل ڈیلیوری۔","zh-CN":"由实例管理的 SMTP 电子邮件发送服务。"};

export function settings_integrations_smtp_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
