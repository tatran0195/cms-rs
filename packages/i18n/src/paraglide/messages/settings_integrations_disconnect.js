import { getLocale } from '../runtime.js';

const translations = {"ar":"إلغاء الربط","bn":"সংযোগ বিচ্ছিন্ন","de":"Verbindung trennen","en":"Disconnect","es":"Desconectar","fr":"Déconnecter","hi":"डिस्कनेक्ट","id":"Putuskan","pt-BR":"Desligar","ru":"отключить","ur":"منقطع","zh-CN":"断开连接"};

export function settings_integrations_disconnect(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
