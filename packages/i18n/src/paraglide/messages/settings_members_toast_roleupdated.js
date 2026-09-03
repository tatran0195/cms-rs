import { getLocale } from '../runtime.js';

const translations = {"ar":"تم تحديث الدور","bn":"ভূমিকা আপডেট করা হয়েছে","de":"Rolle aktualisiert","en":"Role updated","es":"Rol actualizado","fr":"Rôle mis à jour","hi":"भूमिका अद्यतन की गई","id":"Peran diperbarui","pt-BR":"Função atualizada","ru":"Роль обновлена","ur":"کردار کو اپ ڈیٹ کر دیا گیا۔","zh-CN":"角色更新"};

export function settings_members_toast_roleupdated(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
