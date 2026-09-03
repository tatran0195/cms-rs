import { getLocale } from '../runtime.js';

const translations = {"ar":"تم تحديث مساحة العمل","bn":"ওয়ার্কস্পেস আপডেট করা হয়েছে","de":"Arbeitsbereich aktualisiert","en":"Workspace updated","es":"Espacio de trabajo actualizado","fr":"Espace de travail mis à jour","hi":"कार्यस्थान अद्यतन किया गया","id":"Ruang kerja diperbarui","pt-BR":"Espaço de trabalho atualizado","ru":"Рабочая область обновлена","ur":"ورک اسپیس کو اپ ڈیٹ کر دیا گیا۔","zh-CN":"工作区已更新"};

export function settings_workspace_toast_updated(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
