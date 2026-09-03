import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ الإرسال…","bn":"পাঠানো হচ্ছে...","de":"Senden…","en":"Sending…","es":"Enviando…","fr":"Envoi…","hi":"भेजा जा रहा है...","id":"Mengirim…","pt-BR":"Enviando…","ru":"Отправка…","ur":"بھیج رہا ہے…","zh-CN":"正在发送..."};

export function settings_members_sending(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
