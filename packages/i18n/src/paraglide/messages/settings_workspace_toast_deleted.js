import { getLocale } from '../runtime.js';

const translations = {"ar":"تم حذف مساحة العمل","bn":"ওয়ার্কস্পেস মুছে ফেলা হয়েছে","de":"Arbeitsbereich gelöscht","en":"Workspace deleted","es":"Espacio de trabajo eliminado","fr":"Espace de travail supprimé","hi":"कार्यस्थान हटा दिया गया","id":"Ruang kerja dihapus","pt-BR":"Espaço de trabalho excluído","ru":"Рабочая область удалена.","ur":"ورک اسپیس کو حذف کر دیا گیا۔","zh-CN":"工作区已删除"};

export function settings_workspace_toast_deleted(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
