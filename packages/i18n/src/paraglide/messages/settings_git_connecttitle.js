import { getLocale } from '../runtime.js';

const translations = {"ar":"ربط مستودع","bn":"একটি সংগ্রহস্থল সংযুক্ত করুন","de":"Verbinden Sie ein Repository","en":"Connect a repository","es":"Conectar un repositorio","fr":"Connecter un référentiel","hi":"एक भंडार कनेक्ट करें","id":"Hubungkan repositori","pt-BR":"Conecte um repositório","ru":"Подключить репозиторий","ur":"ایک ذخیرہ جوڑیں۔","zh-CN":"连接存储库"};

export function settings_git_connecttitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
