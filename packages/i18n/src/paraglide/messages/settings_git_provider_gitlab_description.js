import { getLocale } from '../runtime.js';

const translations = {"ar":"اضبط مستودع GitLab الخاص بك","bn":"আপনার GitLab সংগ্রহস্থল কনফিগার করুন","de":"Konfigurieren Sie Ihr GitLab-Repository","en":"Configure your GitLab repository","es":"Configure su repositorio GitLab","fr":"Configurez votre référentiel GitLab","hi":"अपना GitLab रिपॉजिटरी कॉन्फ़िगर करें","id":"Konfigurasikan repositori GitLab Anda","pt-BR":"Configure seu repositório GitLab","ru":"Настройте свой репозиторий GitLab","ur":"اپنا GitLab ذخیرہ کنفیگر کریں۔","zh-CN":"配置您的 GitLab 存储库"};

export function settings_git_provider_gitlab_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
