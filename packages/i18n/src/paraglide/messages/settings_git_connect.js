import { getLocale } from '../runtime.js';

const translations = {"ar":"ربط المستودع","bn":"সংগ্রহস্থল সংযোগ","de":"Repository verbinden","en":"Connect repository","es":"Conectar repositorio","fr":"Connecter le référentiel","hi":"रिपॉजिटरी कनेक्ट करें","id":"Hubungkan repositori","pt-BR":"Conectar repositório","ru":"Подключить репозиторий","ur":"مخزن کو مربوط کریں۔","zh-CN":"连接存储库"};

export function settings_git_connect(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
