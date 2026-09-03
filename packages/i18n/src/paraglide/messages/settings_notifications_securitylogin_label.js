import { getLocale } from '../runtime.js';

const translations = {"ar":"تسجيل الدخول من جهاز جديد","bn":"নতুন ডিভাইস থেকে লগইন করুন","de":"Melden Sie sich von einem neuen Gerät aus an","en":"Login from new device","es":"Iniciar sesión desde un nuevo dispositivo","fr":"Connectez-vous à partir d'un nouvel appareil","hi":"नए डिवाइस से लॉगिन करें","id":"Masuk dari perangkat baru","pt-BR":"Faça login no novo dispositivo","ru":"Войти с нового устройства","ur":"نئے ڈیوائس سے لاگ ان کریں۔","zh-CN":"从新设备登录"};

export function settings_notifications_securitylogin_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
