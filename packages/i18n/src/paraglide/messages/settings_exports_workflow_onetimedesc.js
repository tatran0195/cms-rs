import { getLocale } from '../runtime.js';

const translations = {"ar":"نزّل أحدث مراجعة منشورة","bn":"সর্বশেষ প্রকাশিত রিভিশন ডাউনলোড করুন","de":"Laden Sie die neueste veröffentlichte Revision herunter","en":"Download the latest published revision","es":"Descargue la última revisión publicada","fr":"Téléchargez la dernière révision publiée","hi":"नवीनतम प्रकाशित संशोधन डाउनलोड करें","id":"Unduh revisi terbaru yang diterbitkan","pt-BR":"Baixe a última revisão publicada","ru":"Загрузите последнюю опубликованную версию","ur":"تازہ ترین شائع شدہ نظرثانی ڈاؤن لوڈ کریں۔","zh-CN":"下载最新发布的修订版"};

export function settings_exports_workflow_onetimedesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
