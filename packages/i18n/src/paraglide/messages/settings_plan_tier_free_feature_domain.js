import { getLocale } from '../runtime.js';

const translations = {"ar":"نطاق مخصص","bn":"কাস্টম ডোমেইন","de":"Benutzerdefinierte Domäne","en":"Custom domain","es":"Dominio personalizado","fr":"Domaine personnalisé","hi":"कस्टम डोमेन","id":"Domain khusus","pt-BR":"Domínio personalizado","ru":"Пользовательский домен","ur":"حسب ضرورت ڈومین","zh-CN":"自定义域"};

export function settings_plan_tier_free_feature_domain(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
