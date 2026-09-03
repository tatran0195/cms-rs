import { getLocale } from '../runtime.js';

const translations = {"ar":"ترقية «{name}» إلى main؟ سيستبدل هذا صفحات main بصفحات هذا الإصدار ويحذف الإصدار.","bn":"\"{name}\" কে প্রধানে উন্নীত করবেন? এটি প্রধান পৃষ্ঠাগুলিকে এই সংস্করণের পৃষ্ঠাগুলির সাথে প্রতিস্থাপন করে এবং সংস্করণটিকে সরিয়ে দেয়৷","de":"„{name}“ in „main“ hochstufen? Dadurch werden die Hauptseiten durch die Seiten dieser Version ersetzt und die Version entfernt.","en":"Promote “{name}” into main? This replaces main’s pages with this version’s pages and removes the version.","es":"¿Promover “{name}” a principal? Esto reemplaza las páginas principales con las páginas de esta versión y elimina la versión.","fr":"Promouvoir « {name} » dans le menu principal ? Cela remplace les pages principales par les pages de cette version et supprime la version.","hi":"\"{name}\" को मुख्य में प्रचारित करें? यह मुख्य पृष्ठों को इस संस्करण के पृष्ठों से बदल देता है और संस्करण को हटा देता है।","id":"Promosikan “{name}” menjadi utama? Ini menggantikan halaman utama dengan halaman versi ini dan menghapus versi tersebut.","pt-BR":"Promover “{name}” em principal? Isso substitui as páginas principais pelas páginas desta versão e remove a versão.","ru":"Продвигать «{name}» в главную? Это заменяет главные страницы страницами этой версии и удаляет версию.","ur":"\"{name}\" کو مین میں فروغ دیں؟ یہ مین کے صفحات کو اس ورژن کے صفحات سے بدل دیتا ہے اور ورژن کو ہٹا دیتا ہے۔","zh-CN":"将“{name}”提升到主干？这会将主页面替换为该版本的页面并删除该版本。"};

export function editor_branch_mergeconfirm(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
