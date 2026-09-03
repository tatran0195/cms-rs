import { getLocale } from '../runtime.js';

const translations = {"ar":"الرسالة","bn":"বার্তা","de":"Nachricht","en":"Message","es":"Mensaje","fr":"Message","hi":"संदेश","id":"Pesan","pt-BR":"Mensagem","ru":"Сообщение","ur":"پیغام","zh-CN":"留言"};

export function settings_banner_message_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
