import { getLocale } from '../runtime.js';

const translations = {"ar":"تم قطع الاتصال","bn":"সংযোগ বিচ্ছিন্ন","de":"Nicht verbunden","en":"Disconnected","es":"desconectado","fr":"Déconnecté","hi":"विच्छेदित","id":"Terputus","pt-BR":"Desconectado","ru":"Отключено","ur":"منقطع","zh-CN":"已断开连接"};

export function settings_git_disconnectedtoast(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
