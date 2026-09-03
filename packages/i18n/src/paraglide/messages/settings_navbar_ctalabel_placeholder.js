import { getLocale } from '../runtime.js';

const translations = {"ar":"احجز عرضًا توضيحيًا","bn":"একটি ডেমো বুক করুন","de":"Buchen Sie eine Demo","en":"Book a demo","es":"Reserva una demostración","fr":"Réservez une démo","hi":"एक डेमो बुक करें","id":"Pesan demo","pt-BR":"Agende uma demonstração","ru":"Забронировать демо","ur":"ایک ڈیمو بک کرو","zh-CN":"预订演示"};

export function settings_navbar_ctalabel_placeholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
