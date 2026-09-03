import { getLocale } from '../runtime.js';

const translations = {"ar":"تُضاف الصفحات أو تُحدَّث في هذا المشروع — لا يُحذف أي شيء، وإعادة تشغيل الاستيراد آمنة.","bn":"এই প্রকল্পে পৃষ্ঠাগুলি যুক্ত বা আপডেট করা হয়েছে — কিছুই মুছে ফেলা হয় না এবং আমদানি পুনরায় চালানো নিরাপদ।","de":"In diesem Projekt werden Seiten hinzugefügt oder aktualisiert – nichts wird gelöscht und eine erneute Ausführung des Imports ist sicher.","en":"Pages are added or updated in this project — nothing is deleted, and re-running the import is safe.","es":"Se agregan o actualizan páginas en este proyecto: no se elimina nada y volver a ejecutar la importación es seguro.","fr":"Des pages sont ajoutées ou mises à jour dans ce projet : rien n'est supprimé et la réexécution de l'importation est sécurisée.","hi":"इस प्रोजेक्ट में पेज जोड़े या अपडेट किए जाते हैं - कुछ भी हटाया नहीं जाता है, और आयात को फिर से चलाना सुरक्षित है।","id":"Halaman ditambahkan atau diperbarui dalam proyek ini — tidak ada yang dihapus, dan menjalankan kembali impor aman.","pt-BR":"As páginas são adicionadas ou atualizadas neste projeto – nada é excluído e a reexecução da importação é segura.","ru":"Страницы в этом проекте добавляются или обновляются — ничего не удаляется, и повторный запуск импорта безопасен.","ur":"اس پروجیکٹ میں صفحات کو شامل یا اپ ڈیٹ کیا جاتا ہے — کچھ بھی حذف نہیں ہوتا ہے، اور درآمد کو دوبارہ چلانا محفوظ ہے۔","zh-CN":"在此项目中添加或更新页面 - 不会删除任何内容，并且重新运行导入是安全的。"};

export function settings_import_summaryhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
