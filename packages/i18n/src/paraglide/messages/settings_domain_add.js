import { getLocale } from '../runtime.js';

const translations = {"ar":"إضافة نطاق","bn":"ডোমেইন যোগ করুন","de":"Domäne hinzufügen","en":"Add domain","es":"Agregar dominio","fr":"Ajouter un domaine","hi":"डोमेन जोड़ें","id":"Tambahkan domain","pt-BR":"Adicionar domínio","ru":"Добавить домен","ur":"ڈومین شامل کریں۔","zh-CN":"添加域名"};

export function settings_domain_add(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
