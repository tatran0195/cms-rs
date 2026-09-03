import { getLocale } from '../runtime.js';

const translations = {"ar":"حذف الملف","bn":"ফাইল মুছুন","de":"Datei löschen","en":"Delete file","es":"Eliminar archivo","fr":"Supprimer le fichier","hi":"फ़ाइल हटाएँ","id":"Hapus berkas","pt-BR":"Excluir arquivo","ru":"Удалить файл","ur":"فائل کو حذف کریں۔","zh-CN":"删除文件"};

export function settings_git_workflow_conflict_delete(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
