import { getLocale } from '../runtime.js';

const translations = {"ar":"اعرض إجراء تعديل ليقترح القراء تغييرات على المحتوى.","bn":"একটি সম্পাদনা ক্রিয়া দেখান যাতে পাঠকরা বিষয়বস্তু পরিবর্তনের পরামর্শ দিতে পারে৷","de":"Zeigen Sie eine Bearbeitungsaktion an, damit Leser Inhaltsänderungen vorschlagen können.","en":"Show an edit action so readers can suggest content changes.","es":"Muestre una acción de edición para que los lectores puedan sugerir cambios de contenido.","fr":"Affichez une action de modification afin que les lecteurs puissent suggérer des modifications de contenu.","hi":"एक संपादन कार्रवाई दिखाएं ताकि पाठक सामग्री में बदलाव का सुझाव दे सकें।","id":"Tampilkan tindakan edit sehingga pembaca dapat menyarankan perubahan konten.","pt-BR":"Mostre uma ação de edição para que os leitores possam sugerir alterações no conteúdo.","ru":"Покажите действие редактирования, чтобы читатели могли предлагать изменения содержания.","ur":"ترمیم کی کارروائی دکھائیں تاکہ قارئین مواد میں تبدیلیوں کی تجویز کر سکیں۔","zh-CN":"显示编辑操作，以便读者可以建议内容更改。"};

export function settings_addons_editsuggestions_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
