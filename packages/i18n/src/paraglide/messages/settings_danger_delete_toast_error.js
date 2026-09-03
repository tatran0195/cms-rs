import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر حذف المشروع","bn":"প্রকল্প মুছে ফেলা যায়নি","de":"Das Projekt konnte nicht gelöscht werden","en":"Could not delete the project","es":"No se pudo eliminar el proyecto","fr":"Impossible de supprimer le projet","hi":"प्रोजेक्ट को हटाया नहीं जा सका","id":"Tidak dapat menghapus proyek","pt-BR":"Não foi possível excluir o projeto","ru":"Не удалось удалить проект","ur":"پروجیکٹ کو حذف نہیں کیا جا سکا","zh-CN":"无法删除项目"};

export function settings_danger_delete_toast_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
