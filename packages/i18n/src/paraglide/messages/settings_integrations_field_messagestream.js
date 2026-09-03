import { getLocale } from '../runtime.js';

const translations = {"ar":"مسار الرسائل","bn":"মেসেজ স্ট্রিম","de":"Nachrichtenstrom","en":"Message stream","es":"flujo de bits de información","fr":"Flux de messages","hi":"संदेश स्ट्रीम","id":"Stream pesan","pt-BR":"Transmissão de mensagens","ru":"Поток сообщений","ur":"پیغام کا سلسلہ","zh-CN":"消息流"};

export function settings_integrations_field_messagestream(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
