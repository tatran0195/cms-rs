import { getLocale } from '../runtime.js';

const translations = {"ar":"{count} جلسات نشطة","bn":"{count} সক্রিয় সেশন","de":"{count} aktive Sitzungen","en":"{count} active sessions","es":"{count} sesiones activas","fr":"{count} sessions actives","hi":"{count} सक्रिय सत्र","id":"{count} sesi aktif","pt-BR":"{count} sessões ativas","ru":"{count} активных сессий","ur":"{count} فعال سیشنز","zh-CN":"{count} 活动会话"};

export function settings_authentication_reader_sessioncount(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
