import { getLocale } from '../runtime.js';

const translations = {"ar":"تم حفظ التغييرات","bn":"পরিবর্তনগুলি সেভ করা হয়েছে","de":"Änderungen gespeichert","en":"Changes saved","es":"Cambios guardados","fr":"Modifications enregistrées","hi":"बचाया परिवर्तन","id":"Perubahan disimpan","pt-BR":"Alterações salvas","ru":"Изменения сохранены","ur":"محفوظ شدہ تبدیلیاں!","zh-CN":"已保存的更改"};

export function settings_integrations_changessaved(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
