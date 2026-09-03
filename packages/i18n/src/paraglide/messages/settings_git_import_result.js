import { getLocale } from '../runtime.js';

const translations = {"ar":"تم استيراد {imported} جديدة وتحديث {updated}.","bn":"আমদানি করা {imported} নতুন, আপডেট করা হয়েছে {updated}।","de":"{imported} neu importiert, {updated} aktualisiert.","en":"Imported {imported} new, updated {updated}.","es":"Importado {imported} nuevo, actualizado {updated}.","fr":"{imported} nouveau importé, {updated} mis à jour.","hi":"आयातित {imported} नया, अद्यतन {updated}।","id":"Impor {imported} baru, diperbarui {updated}.","pt-BR":"{imported} importado novo, {updated} atualizado.","ru":"Импортирован новый {imported}, обновлен {updated}.","ur":"درآمد شدہ {imported} نیا، اپ ڈیٹ کردہ {updated}۔","zh-CN":"导入了新的 {imported}，更新了 {updated}。"};

export function settings_git_import_result(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
