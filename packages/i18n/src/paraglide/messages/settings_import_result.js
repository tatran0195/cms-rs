import { getLocale } from '../runtime.js';

const translations = {"ar":"تم استيراد {imported} جديدة وتحديث {updated} وتخطي {skipped}.","bn":"আমদানি করা {imported} নতুন, আপডেট করা হয়েছে {updated}, এড়িয়ে যাওয়া {skipped}।","de":"{imported} neu importiert, {updated} aktualisiert, {skipped} übersprungen.","en":"Imported {imported} new, updated {updated}, skipped {skipped}.","es":"Importado {imported} nuevo, actualizado {updated}, omitido {skipped}.","fr":"{imported} nouveau importé, {updated} mis à jour, ignoré {skipped}.","hi":"आयातित {imported} नया, अद्यतन {updated}, छोड़ दिया गया {skipped}।","id":"{imported} baru diimpor, {updated} diperbarui, dilewati {skipped}.","pt-BR":"{imported} importado novo, {updated} atualizado, {skipped} ignorado.","ru":"Импортирован новый {imported}, обновлен {updated}, пропущен {skipped}.","ur":"درآمد شدہ {imported} نیا، اپ ڈیٹ کیا گیا {updated}، چھوڑ دیا گیا {skipped}۔","zh-CN":"导入了新的 {imported}，更新了 {updated}，跳过了 {skipped}。"};

export function settings_import_result(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
