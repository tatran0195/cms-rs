import { getLocale } from '../runtime.js';

const translations = {"ar":"كيف ستبدو وثائقك المنشورة بهذه الإعدادات.","bn":"এই সেটিংসের সাথে আপনার প্রকাশিত ডক্স কিভাবে পড়বে।","de":"Wie Ihre veröffentlichten Dokumente mit diesen Einstellungen gelesen werden.","en":"How your published docs will read with these settings.","es":"Cómo se leerán sus documentos publicados con esta configuración.","fr":"Comment vos documents publiés seront lus avec ces paramètres.","hi":"इन सेटिंग्स के साथ आपके प्रकाशित दस्तावेज़ कैसे पढ़ेंगे।","id":"Bagaimana dokumen Anda yang diterbitkan akan terbaca dengan pengaturan ini.","pt-BR":"Qual será a leitura dos seus documentos publicados com essas configurações.","ru":"Как ваши опубликованные документы будут читаться с этими настройками.","ur":"آپ کے شائع شدہ دستاویزات ان ترتیبات کے ساتھ کیسے پڑھیں گے۔","zh-CN":"使用这些设置将如何阅读您发布的文档。"};

export function settings_typography_preview_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
