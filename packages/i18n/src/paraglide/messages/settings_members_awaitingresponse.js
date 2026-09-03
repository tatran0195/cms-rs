import { getLocale } from '../runtime.js';

const translations = {"ar":"مدعوّ · في انتظار الرد","bn":"আমন্ত্রিত · প্রতিক্রিয়ার অপেক্ষায়","de":"Eingeladen · Warte auf Antwort","en":"Invited · awaiting response","es":"Invitado · esperando respuesta","fr":"Invité · en attente de réponse","hi":"आमंत्रित · प्रतिक्रिया की प्रतीक्षा में","id":"Diundang · menunggu tanggapan","pt-BR":"Convidado · aguardando resposta","ru":"Приглашен · ждём ответа","ur":"مدعو کیا گیا · جواب کا انتظار ہے۔","zh-CN":"已邀请·等待回复"};

export function settings_members_awaitingresponse(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
