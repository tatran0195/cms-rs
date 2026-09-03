import { getLocale } from '../runtime.js';

const translations = {"ar":"الاتصال بـ GitLab","bn":"GitLab এ সংযোগ করুন","de":"Mit GitLab verbinden","en":"Connect to GitLab","es":"Conéctese a GitLab","fr":"Connectez-vous à GitLab","hi":"GitLab से कनेक्ट करें","id":"Hubungkan ke GitLab","pt-BR":"Conecte-se a GitLab","ru":"Подключитесь к GitLab","ur":"GitLab سے جڑیں","zh-CN":"连接到 GitLab"};

export function settings_git_provider_gitlab_name(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
