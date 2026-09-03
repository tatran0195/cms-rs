import { getLocale } from '../runtime.js';

const translations = {"ar":"عند حدوث خطأ في عملية النشر.","bn":"একটি প্রকাশ যখন ত্রুটি রান আউট.","de":"Wenn bei der Veröffentlichung ein Fehler auftritt.","en":"When a publish run errors out.","es":"Cuando se produce un error en la ejecución de una publicación.","fr":"Lorsqu'une publication exécute des erreurs.","hi":"जब कोई प्रकाशन चलता है तो त्रुटियाँ समाप्त हो जाती हैं।","id":"Saat publikasi berjalan, terjadi kesalahan.","pt-BR":"Quando uma publicação é executada com erros.","ru":"При публикации возникают ошибки.","ur":"جب اشاعت کی خرابیاں ختم ہوجاتی ہیں۔","zh-CN":"当发布运行出错时。"};

export function settings_notifications_projectdeployfailed_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
