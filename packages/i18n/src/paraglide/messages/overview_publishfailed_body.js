import { getLocale } from '../runtime.js';

const translations = {"ar":"أصلح المشاكل أدناه ثم أعد النشر من المحرر.","bn":"নীচের সমস্যাগুলি সমাধান করুন, তারপর সম্পাদক থেকে আবার প্রকাশ করুন৷","de":"Beheben Sie die folgenden Probleme und veröffentlichen Sie dann erneut über den Editor.","en":"Fix the issues below, then publish again from the editor.","es":"Solucione los problemas a continuación y luego publíquelos nuevamente desde el editor.","fr":"Corrigez les problèmes ci-dessous, puis publiez à nouveau depuis l'éditeur.","hi":"नीचे दी गई समस्याओं को ठीक करें, फिर संपादक से दोबारा प्रकाशित करें।","id":"Perbaiki masalah di bawah, lalu publikasikan lagi dari editor.","pt-BR":"Corrija os problemas abaixo e publique novamente no editor.","ru":"Исправьте указанные ниже проблемы, а затем снова опубликуйте из редактора.","ur":"نیچے دیے گئے مسائل کو ٹھیک کریں، پھر ایڈیٹر سے دوبارہ شائع کریں۔","zh-CN":"修复以下问题，然后从编辑器重新发布。"};

export function overview_publishfailed_body(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
