import { getLocale } from '../runtime.js';

const translations = {"ar":"امنح وثائقك اسمًا. يمكنك تغيير كل شيء لاحقًا.","bn":"আপনার ডক্স একটি নাম দিন. আপনি পরে সবকিছু পরিবর্তন করতে পারেন।","de":"Geben Sie Ihren Dokumenten einen Namen. Sie können später alles ändern.","en":"Give your docs a name. You can change everything later.","es":"Dale un nombre a tus documentos. Puedes cambiar todo más tarde.","fr":"Donnez un nom à vos documents. Vous pourrez tout changer plus tard.","hi":"अपने दस्तावेज़ों को एक नाम दें. आप बाद में सब कुछ बदल सकते हैं.","id":"Beri nama pada dokumen Anda. Anda bisa mengubah semuanya nanti.","pt-BR":"Dê um nome aos seus documentos. Você pode mudar tudo mais tarde.","ru":"Дайте своим документам имя. Вы можете изменить все позже.","ur":"اپنے دستاویزات کو ایک نام دیں۔ آپ بعد میں سب کچھ بدل سکتے ہیں۔","zh-CN":"为您的文档命名。您可以稍后更改一切。"};

export function newsite_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
