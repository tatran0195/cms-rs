import { getLocale } from '../runtime.js';

const translations = {"ar":"أصلح أزواج التباين المذكورة قبل الحفظ.","bn":"সংরক্ষণ করার আগে রিপোর্ট করা বৈসাদৃশ্য জোড়া ঠিক করুন।","de":"Korrigieren Sie die gemeldeten Kontrastpaare vor dem Speichern.","en":"Fix the reported contrast pairs before saving.","es":"Corrija los pares de contraste informados antes de guardar.","fr":"Corrigez les paires de contraste signalées avant de les enregistrer.","hi":"सहेजने से पहले रिपोर्ट किए गए कंट्रास्ट जोड़े को ठीक करें।","id":"Perbaiki pasangan kontras yang dilaporkan sebelum disimpan.","pt-BR":"Corrija os pares de contraste relatados antes de salvar.","ru":"Перед сохранением исправьте указанные пары контрастов.","ur":"محفوظ کرنے سے پہلے رپورٹ شدہ کنٹراسٹ جوڑوں کو درست کریں۔","zh-CN":"在保存之前修复报告的对比度对。"};

export function settings_theme_contrastblocked(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
