import { getLocale } from '../runtime.js';

const translations = {"ar":"ادفع المستندات المحفوظة للمراجعة","bn":"পর্যালোচনার জন্য সংরক্ষিত ডক্স পুশ করুন","de":"Gespeicherte Dokumente zur Überprüfung per Push übertragen","en":"Push saved docs for review","es":"Enviar documentos guardados para su revisión","fr":"Envoyer les documents enregistrés pour examen","hi":"समीक्षा के लिए सहेजे गए दस्तावेज़ों को पुश करें","id":"Dorong dokumen yang disimpan untuk ditinjau","pt-BR":"Enviar documentos salvos para revisão","ru":"Отправить сохраненные документы на проверку","ur":"محفوظ شدہ دستاویزات کو جائزہ کے لیے دبائیں","zh-CN":"推送保存的文档以供审阅"};

export function settings_git_workflow_nav_publishdesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
