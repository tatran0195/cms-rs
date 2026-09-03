import { getLocale } from '../runtime.js';

const translations = {"ar":"حفظ إعداد JWT","bn":"JWT কনফিগারেশন সংরক্ষণ করুন","de":"Speichern Sie die JWT-Konfiguration","en":"Save JWT configuration","es":"Guardar la configuración JWT","fr":"Enregistrer la configuration JWT","hi":"JWT कॉन्फ़िगरेशन सहेजें","id":"Simpan konfigurasi JWT","pt-BR":"Salvar configuração JWT","ru":"Сохраните конфигурацию JWT.","ur":"محفوظ کریں JWT کنفیگریشن","zh-CN":"保存 JWT 配置"};

export function settings_authentication_reader_jwtsave(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
