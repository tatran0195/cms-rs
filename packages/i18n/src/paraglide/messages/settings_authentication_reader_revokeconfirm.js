import { getLocale } from '../runtime.js';

const translations = {"ar":"إلغاء الوصول والجلسات النشطة لـ {name}؟","bn":"{name} এর জন্য অ্যাক্সেস এবং সক্রিয় সেশন প্রত্যাহার করবেন?","de":"Zugriff und aktive Sitzungen für {name} widerrufen?","en":"Revoke access and active sessions for {name}?","es":"¿Revocar el acceso y las sesiones activas para {name}?","fr":"Révoquer l'accès et les sessions actives pour {name} ?","hi":"{name} के लिए पहुंच और सक्रिय सत्र निरस्त करें?","id":"Cabut akses dan sesi aktif untuk {name}?","pt-BR":"Revogar acesso e sessões ativas para {name}?","ru":"Отозвать доступ и активные сеансы для {name}?","ur":"{name} کے لیے رسائی اور فعال سیشن منسوخ کریں؟","zh-CN":"撤销 {name} 的访问权限和活动会话？"};

export function settings_authentication_reader_revokeconfirm(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
