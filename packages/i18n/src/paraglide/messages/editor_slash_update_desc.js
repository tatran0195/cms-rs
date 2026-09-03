import { getLocale } from '../runtime.js';

const translations = {"ar":"مُدخل سجل تغييرات مع وسم إصدار.","bn":"একটি সংস্করণ লেবেল সহ একটি চেঞ্জলগ এন্ট্রি৷","de":"Ein Changelog-Eintrag mit einer Versionsbezeichnung.","en":"A changelog entry with a version label.","es":"Una entrada del registro de cambios con una etiqueta de versión.","fr":"Une entrée du journal des modifications avec une étiquette de version.","hi":"संस्करण लेबल के साथ एक चेंजलॉग प्रविष्टि।","id":"Entri changelog dengan label versi.","pt-BR":"Uma entrada no changelog com um rótulo de versão.","ru":"Запись журнала изменений с меткой версии.","ur":"ورژن لیبل کے ساتھ ایک چینج لاگ انٹری۔","zh-CN":"带有版本标签的变更日志条目。"};

export function editor_slash_update_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
