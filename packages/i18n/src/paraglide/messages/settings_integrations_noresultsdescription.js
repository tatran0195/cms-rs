import { getLocale } from '../runtime.js';

const translations = {"ar":"جرّب اسم مزوّد أو فئة أخرى.","bn":"কোনও প্রদানকারীর নাম বা অন্য কোনও বিভাগ ব্যবহার করে দেখুন ।","de":"Versuchen Sie es mit einem Anbieternamen oder einer anderen Kategorie.","en":"Try a provider name or another category.","es":"Pruebe con un nombre de proveedor u otra categoría.","fr":"Essayez un nom de fournisseur ou une autre catégorie.","hi":"प्रदाता नाम या किसी अन्य श्रेणी की कोशिश करें।","id":"Coba nama penyedia atau kategori lain.","pt-BR":"Tente um nome de provedor ou outra categoria.","ru":"Попробуйте название поставщика или другую категорию.","ur":"فراہم کنندہ کا نام یا کوئی اور زمرہ آزمائیں ۔","zh-CN":"尝试一个提供者名称或其他类别 。"};

export function settings_integrations_noresultsdescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
