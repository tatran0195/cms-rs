import { getLocale } from '../runtime.js';

const translations = {"ar":"∅ الملف محذوف","bn":"∅ ফাইল মুছে ফেলা হয়েছে","de":"∅ Datei gelöscht","en":"∅ file deleted","es":"∅ archivo eliminado","fr":"∅ fichier supprimé","hi":"∅ फ़ाइल हटा दी गई","id":"∅ file dihapus","pt-BR":"∅ arquivo excluído","ru":"∅ файл удален","ur":"∅ فائل حذف ہو گئی۔","zh-CN":"∅ 文件已删除"};

export function settings_git_workflow_conflict_deleted(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
