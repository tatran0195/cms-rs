import { getLocale } from '../runtime.js';

const translations = {"ar":"تم تحديث الملف الشخصي","bn":"প্রোফাইল আপডেট করা হয়েছে","de":"Profil aktualisiert","en":"Profile updated","es":"Perfil actualizado","fr":"Profil mis à jour","hi":"प्रोफ़ाइल अपडेट की गई","id":"Profil diperbarui","pt-BR":"Perfil atualizado","ru":"Профиль обновлен","ur":"پروفائل اپ ڈیٹ ہو گیا۔","zh-CN":"个人资料已更新"};

export function settings_account_profileupdated(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
