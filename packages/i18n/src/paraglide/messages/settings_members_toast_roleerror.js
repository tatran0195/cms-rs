import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تحديث الدور","bn":"ভূমিকা আপডেট করা যায়নি","de":"Die Rolle konnte nicht aktualisiert werden","en":"Could not update the role","es":"No se pudo actualizar el rol","fr":"Impossible de mettre à jour le rôle","hi":"भूमिका अद्यतन नहीं की जा सकी","id":"Tidak dapat memperbarui peran","pt-BR":"Não foi possível atualizar a função","ru":"Не удалось обновить роль","ur":"کردار کو اپ ڈیٹ نہیں کیا جا سکا","zh-CN":"无法更新角色"};

export function settings_members_toast_roleerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
