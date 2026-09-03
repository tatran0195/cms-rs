import { getLocale } from '../runtime.js';

const translations = {"ar":"تم حذف المشروع","bn":"প্রকল্প মুছে ফেলা হয়েছে","de":"Projekt gelöscht","en":"Project deleted","es":"Proyecto eliminado","fr":"Projet supprimé","hi":"प्रोजेक्ट हटा दिया गया","id":"Proyek dihapus","pt-BR":"Projeto excluído","ru":"Проект удален","ur":"پروجیکٹ حذف کر دیا گیا۔","zh-CN":"项目已删除"};

export function settings_danger_delete_toast_deleted(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
