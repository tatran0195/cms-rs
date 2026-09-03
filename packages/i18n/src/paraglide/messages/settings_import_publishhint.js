import { getLocale } from '../runtime.js';

const translations = {"ar":"المحتوى المستورد ليس منشورًا بعد — انشره من المحرّر لتحديث موقعك.","bn":"আমদানি করা সামগ্রী এখনও লাইভ নয় — আপনার সাইট আপডেট করতে সম্পাদক থেকে প্রকাশ করুন৷","de":"Importierte Inhalte sind noch nicht online – veröffentlichen Sie sie über den Editor, um Ihre Website zu aktualisieren.","en":"Imported content is not live yet — publish from the editor to update your site.","es":"El contenido importado aún no está disponible: publíquelo desde el editor para actualizar su sitio.","fr":"Le contenu importé n'est pas encore en ligne : publiez-le depuis l'éditeur pour mettre à jour votre site.","hi":"आयातित सामग्री अभी तक लाइव नहीं है - अपनी साइट को अपडेट करने के लिए संपादक से प्रकाशित करें।","id":"Konten yang diimpor belum ditayangkan — publikasikan dari editor untuk memperbarui situs Anda.","pt-BR":"O conteúdo importado ainda não está ativo – publique no editor para atualizar seu site.","ru":"Импортированный контент еще не доступен — опубликуйте его из редактора, чтобы обновить свой сайт.","ur":"درآمد شدہ مواد ابھی لائیو نہیں ہے — اپنی سائٹ کو اپ ڈیٹ کرنے کے لیے ایڈیٹر سے شائع کریں۔","zh-CN":"导入的内容尚未生效 - 从编辑器发布以更新您的网站。"};

export function settings_import_publishhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
