import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر مكان محتواك الحالي","bn":"আপনার সামগ্রী কোথায় থাকে তা চয়ন করুন৷","de":"Wählen Sie, wo Ihre Inhalte gespeichert sind","en":"Choose where your content lives","es":"Elige dónde reside tu contenido","fr":"Choisissez où se trouve votre contenu","hi":"चुनें कि आपकी सामग्री कहाँ रहती है","id":"Pilih di mana konten Anda berada","pt-BR":"Escolha onde seu conteúdo fica","ru":"Выбирайте, где будет храниться ваш контент","ur":"منتخب کریں کہ آپ کا مواد کہاں رہتا ہے۔","zh-CN":"选择您的内容所在的位置"};

export function settings_import_workspace_emptytitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
