import { getLocale } from '../runtime.js';

const translations = {"ar":"تحكّم بمن يستطيع قراءة موقع التوثيق المنشور.","bn":"এই প্রকাশিত ডক্স সাইট কে পড়তে পারে তা নিয়ন্ত্রণ করুন।","de":"Steuern Sie, wer diese Website mit veröffentlichten Dokumenten lesen kann.","en":"Control who can read this published docs site.","es":"Controle quién puede leer este sitio de documentos publicados.","fr":"Contrôlez qui peut lire ce site de documentation publiée.","hi":"नियंत्रित करें कि इस प्रकाशित दस्तावेज़ साइट को कौन पढ़ सकता है।","id":"Kontrol siapa yang dapat membaca situs dokumen yang diterbitkan ini.","pt-BR":"Controle quem pode ler este site de documentos publicados.","ru":"Управляйте тем, кто может читать этот сайт опубликованной документации.","ur":"کنٹرول کریں کہ اس شائع شدہ دستاویزات کی سائٹ کو کون پڑھ سکتا ہے۔","zh-CN":"控制谁可以阅读此已发布的文档站点。"};

export function settings_authentication_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
