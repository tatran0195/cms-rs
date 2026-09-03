import { getLocale } from '../runtime.js';

const translations = {"ar":"استخدم {url} أو {path} لتعبئة الصفحة الحالية في نموذج مشكلة خارجي.","bn":"একটি বাহ্যিক সমস্যা ফর্মে বর্তমান পৃষ্ঠাটি প্রিফিল করতে {url} বা {path} ব্যবহার করুন।","de":"Verwenden Sie {url} oder {path}, um die aktuelle Seite in einem externen Problemformular vorab auszufüllen.","en":"Use {url} or {path} to prefill the current page in an external issue form.","es":"Utilice {url} o {path} para completar previamente la página actual en un formulario de problema externo.","fr":"Utilisez {url} ou {path} pour pré-remplir la page actuelle dans un formulaire de problème externe.","hi":"वर्तमान पृष्ठ को बाह्य अंक प्रपत्र में पहले से भरने के लिए {url} या {path} का उपयोग करें।","id":"Gunakan {url} atau {path} untuk mengisi halaman saat ini di formulir penerbitan eksternal.","pt-BR":"Use {url} ou {path} para preencher previamente a página atual em um formulário de problema externo.","ru":"Используйте {url} или {path}, чтобы предварительно заполнить текущую страницу во внешней форме выпуска.","ur":"موجودہ صفحہ کو خارجی شمارے کے فارم میں پہلے سے بھرنے کے لیے {url} یا {path} استعمال کریں۔","zh-CN":"使用 {url} 或 {path} 在外部问题表单中预填充当前页面。"};

export function settings_addons_issueurl_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
