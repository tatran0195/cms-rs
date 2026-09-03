import { getLocale } from '../runtime.js';

const translations = {"ar":"حذف التكامل؟","bn":"ইন্টিগ্রেশন মুছুন","de":"Integration löschen","en":"Delete integration?","es":"Eliminar integración","fr":"Supprimer l'intégration ?","hi":"एकीकरण हटाएँ?","id":"Hapus integrasi?","pt-BR":"Apagar a integração?","ru":"Удалить интеграцию?","ur":"انضمام حذف کریں ؟","zh-CN":"删除整合吗 ?"};

export function settings_integrations_deletetitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
