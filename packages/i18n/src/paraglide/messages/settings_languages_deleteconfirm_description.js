import { getLocale } from '../runtime.js';

const translations = {"ar":"سيؤدي هذا إلى حذف اللغة وجميع صفحاتها نهائيًا. لا يمكن التراجع عن هذا الإجراء.","bn":"এটি স্থায়ীভাবে ভাষা এবং এর সমস্ত পৃষ্ঠা মুছে ফেলে। এটি পূর্বাবস্থায় ফেরানো যাবে না।","de":"Dadurch werden die Sprache und alle ihre Seiten dauerhaft gelöscht. Dies kann nicht rückgängig gemacht werden.","en":"This permanently deletes the language and all of its pages. This can’t be undone.","es":"Esto elimina permanentemente el idioma y todas sus páginas. Esto no se puede deshacer.","fr":"Cela supprime définitivement la langue et toutes ses pages. Cela ne peut pas être annulé.","hi":"इससे भाषा और उसके सभी पृष्ठ स्थायी रूप से हट जाते हैं। इसे पूर्ववत नहीं किया जा सकता.","id":"Tindakan ini akan menghapus bahasa dan semua halamannya secara permanen. Hal ini tidak dapat dibatalkan.","pt-BR":"Isso exclui permanentemente o idioma e todas as suas páginas. Isso não pode ser desfeito.","ru":"При этом язык и все его страницы будут удалены без возможности восстановления. Это невозможно отменить.","ur":"یہ زبان اور اس کے تمام صفحات کو مستقل طور پر حذف کر دیتا ہے۔ اسے کالعدم نہیں کیا جا سکتا۔","zh-CN":"这将永久删除该语言及其所有页面。此操作无法撤消。"};

export function settings_languages_deleteconfirm_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
