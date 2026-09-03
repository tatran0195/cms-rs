import { getLocale } from '../runtime.js';

const translations = {"ar":"اختصار لوحة المفاتيح","bn":"হটকি","de":"Hotkey","en":"Hotkey","es":"tecla de acceso rápido","fr":"Raccourci clavier","hi":"हॉटकी","id":"Tombol pintas","pt-BR":"Tecla de atalho","ru":"Горячая клавиша","ur":"ہاٹکی","zh-CN":"热键"};

export function settings_search_hotkey_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
