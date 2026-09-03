import { getLocale } from '../runtime.js';

const translations = {"ar":"تم إلغاء ربط {name}","bn":"{name} সংযোগ বিচ্ছিন্ন","de":"{name} getrennt","en":"{name} disconnected","es":"{name} desconectado","fr":"{name}Déconnecté","hi":"{name}डिस्कनेक्ट","id":"{name}terputus","pt-BR":"{name}desconectado","ru":"{name}отключенный","ur":"{name} غیر منسلک","zh-CN":"{name}已断开"};

export function settings_integrations_disconnectedtoast(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
