import { getLocale } from '../runtime.js';

const translations = {"ar":"حذف المشروع","bn":"প্রকল্প মুছুন","de":"Projekt löschen","en":"Delete project","es":"Eliminar proyecto","fr":"Supprimer le projet","hi":"प्रोजेक्ट हटाएँ","id":"Hapus proyek","pt-BR":"Excluir projeto","ru":"Удалить проект","ur":"پروجیکٹ کو حذف کریں۔","zh-CN":"删除项目"};

export function settings_danger_delete_button(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
