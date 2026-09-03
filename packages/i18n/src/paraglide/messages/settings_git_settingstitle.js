import { getLocale } from '../runtime.js';

const translations = {"ar":"إعدادات المستودع","bn":"সংগ্রহস্থল সেটিংস","de":"Repository-Einstellungen","en":"Repository settings","es":"Configuración del repositorio","fr":"Paramètres du référentiel","hi":"रिपॉजिटरी सेटिंग्स","id":"Pengaturan repositori","pt-BR":"Configurações do repositório","ru":"Настройки репозитория","ur":"ذخیرہ کی ترتیبات","zh-CN":"存储库设置"};

export function settings_git_settingstitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
