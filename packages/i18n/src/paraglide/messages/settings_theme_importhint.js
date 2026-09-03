import { getLocale } from '../runtime.js';

const translations = {"ar":"لا يُقبل CSS أو JavaScript أو أي محتوى تنفيذي. الاستيراد محدود ويخضع لمخطط تحقق.","bn":"কোন CSS, JavaScript, বা এক্সিকিউটেবল কন্টেন্ট গ্রহণ করা হয় না। আমদানি সীমাবদ্ধ এবং স্কিমা-প্রমাণিত।","de":"Es werden keine CSS, JavaScript oder ausführbaren Inhalte akzeptiert. Importe sind begrenzt und schemavalidiert.","en":"No CSS, JavaScript, or executable content is accepted. Imports are bounded and schema-validated.","es":"No se acepta CSS, JavaScript ni contenido ejecutable. Las importaciones están limitadas y validadas por esquema.","fr":"Aucun contenu CSS, JavaScript ou exécutable n'est accepté. Les importations sont limitées et validées par le schéma.","hi":"कोई CSS, JavaScript, या निष्पादन योग्य सामग्री स्वीकार नहीं की जाती है। आयात सीमित और स्कीमा-मान्य हैं।","id":"Tidak ada CSS, JavaScript, atau konten yang dapat dieksekusi yang diterima. Impor dibatasi dan divalidasi skema.","pt-BR":"Nenhum conteúdo CSS, JavaScript ou executável é aceito. As importações são limitadas e validadas por esquema.","ru":"Никакие CSS, JavaScript или исполняемый контент не принимаются. Импорт ограничен и проверен по схеме.","ur":"کوئی CSS، JavaScript، یا قابل عمل مواد قبول نہیں کیا جاتا ہے۔ درآمدات پابند اور اسکیما کی توثیق شدہ ہیں۔","zh-CN":"不接受 CSS、JavaScript 或可执行内容。导入是有限制的并且经过模式验证。"};

export function settings_theme_importhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
