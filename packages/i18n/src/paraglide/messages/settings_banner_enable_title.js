import { getLocale } from '../runtime.js';

const translations = {"ar":"تفعيل الشريط الإعلاني","bn":"ব্যানার সক্ষম করুন","de":"Banner aktivieren","en":"Enable banner","es":"Habilitar banner","fr":"Activer la bannière","hi":"बैनर सक्षम करें","id":"Aktifkan spanduk","pt-BR":"Ativar faixa","ru":"Включить баннер","ur":"بینر کو فعال کریں۔","zh-CN":"启用横幅"};

export function settings_banner_enable_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
