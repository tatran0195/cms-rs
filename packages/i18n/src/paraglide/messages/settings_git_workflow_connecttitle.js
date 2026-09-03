import { getLocale } from '../runtime.js';

const translations = {"ar":"الاتصال بـ GitHub","bn":"সংযোগ করুন GitHub","de":"GitHub verbinden","en":"Connect GitHub","es":"Conectar GitHub","fr":"Connectez GitHub","hi":"कनेक्ट करें GitHub","id":"Hubungkan GitHub","pt-BR":"Conecte GitHub","ru":"Подключите GitHub","ur":"جڑیں GitHub","zh-CN":"连接 GitHub"};

export function settings_git_workflow_connecttitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
