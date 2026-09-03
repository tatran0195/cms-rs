import { getLocale } from '../runtime.js';

const translations = {"ar":"نبّه إلى مشاكل القواعد والصياغة أثناء سير عمل النشر.","bn":"প্রকাশনা কার্যপ্রবাহের সময় ব্যাকরণ এবং অনুলিপি সংক্রান্ত সমস্যাগুলি ফ্ল্যাগ করুন।","de":"Markieren Sie Grammatik- und Kopierprobleme während des Veröffentlichungsworkflows.","en":"Flag grammar and copy issues during the publishing workflow.","es":"Marque problemas gramaticales y de copia durante el flujo de trabajo de publicación.","fr":"Signalez les problèmes de grammaire et de copie pendant le flux de publication.","hi":"प्रकाशन वर्कफ़्लो के दौरान व्याकरण और कॉपी संबंधी मुद्दों को फ़्लैग करें।","id":"Tandai masalah tata bahasa dan penyalinan selama alur kerja penerbitan.","pt-BR":"Sinalize problemas gramaticais e de cópia durante o fluxo de trabalho de publicação.","ru":"Отмечайте проблемы с грамматикой и копированием во время рабочего процесса публикации.","ur":"اشاعت کے ورک فلو کے دوران گرائمر اور کاپی کے مسائل کو جھنڈا لگائیں۔","zh-CN":"在发布工作流程中标记语法和复制问题。"};

export function settings_addons_grammarlinter_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
