import { getLocale } from '../runtime.js';

const translations = {"ar":"تمت إضافة النطاق","bn":"ডোমেন যোগ করা হয়েছে","de":"Domain hinzugefügt","en":"Domain added","es":"Dominio agregado","fr":"Domaine ajouté","hi":"डोमेन जोड़ा गया","id":"Domain ditambahkan","pt-BR":"Domínio adicionado","ru":"Домен добавлен","ur":"ڈومین شامل کیا گیا۔","zh-CN":"已添加域名"};

export function settings_domain_toast_added(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
