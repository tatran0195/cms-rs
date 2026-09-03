import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء الالتزام وتحديث مسودة طلب السحب","bn":"প্রতিশ্রুতিবদ্ধ করুন এবং খসড়া পিআর আপডেট করুন","de":"PR-Entwurf festlegen und aktualisieren","en":"Commit and update draft PR","es":"Confirmar y actualizar el borrador de PR","fr":"Valider et mettre à jour le projet de PR","hi":"ड्राफ्ट पीआर प्रतिबद्ध करें और अद्यतन करें","id":"Komit dan perbarui draf PR","pt-BR":"Confirmar e atualizar o rascunho de PR","ru":"Подтвердить и обновить проект PR","ur":"ڈرافٹ پی آر کو کمٹ اور اپ ڈیٹ کریں۔","zh-CN":"提交并更新 PR 草案"};

export function settings_git_workflow_updatepr(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
