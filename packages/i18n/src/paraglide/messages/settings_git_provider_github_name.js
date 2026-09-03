import { getLocale } from '../runtime.js';

const translations = {"ar":"الاتصال بـ GitHub","bn":"GitHub এ সংযোগ করুন","de":"Mit GitHub verbinden","en":"Connect to GitHub","es":"Conéctese a GitHub","fr":"Connectez-vous à GitHub","hi":"GitHub से कनेक्ट करें","id":"Hubungkan ke GitHub","pt-BR":"Conecte-se a GitHub","ru":"Подключитесь к GitHub","ur":"GitHub سے جڑیں","zh-CN":"连接到 GitHub"};

export function settings_git_provider_github_name(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
