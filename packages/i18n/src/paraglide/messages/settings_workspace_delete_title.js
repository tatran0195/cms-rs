import { getLocale } from '../runtime.js';

const translations = {"ar":"حذف مساحة العمل","bn":"কর্মক্ষেত্র মুছুন","de":"Arbeitsbereich löschen","en":"Delete workspace","es":"Eliminar espacio de trabajo","fr":"Supprimer l'espace de travail","hi":"कार्यस्थान हटाएँ","id":"Hapus ruang kerja","pt-BR":"Excluir espaço de trabalho","ru":"Удалить рабочую область","ur":"ورک اسپیس کو حذف کریں۔","zh-CN":"删除工作区"};

export function settings_workspace_delete_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
