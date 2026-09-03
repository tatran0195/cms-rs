import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر رسائل البريد الإلكتروني التي يرسلها Nibleaf إلى","bn":"Nibleaf কোন ইমেল পাঠাবে তা বেছে নিন","de":"Wählen Sie aus, an welche E-Mails Nibleaf sendet","en":"Choose which emails Nibleaf sends to","es":"Elija a qué correos electrónicos envía Nibleaf","fr":"Choisissez les e-mails auxquels Nibleaf envoie","hi":"चुनें कि Nibleaf किस ईमेल को भेजता है","id":"Pilih email mana yang akan dikirim oleh Nibleaf","pt-BR":"Escolha para quais e-mails Nibleaf envia","ru":"Выберите, какие электронные письма Nibleaf будет отправлять","ur":"منتخب کریں کہ کن ای میلز کو Nibleaf بھیجتا ہے۔","zh-CN":"选择 Nibleaf 发送到的电子邮件"};

export function settings_notifications_introbefore(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
