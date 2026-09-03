import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط Git عام","bn":"পাবলিক গিট ইউআরএল","de":"Öffentliche Git-URL","en":"Public Git URL","es":"URL pública de Git","fr":"URL Git publique","hi":"सार्वजनिक गिट यूआरएल","id":"URL Git Publik","pt-BR":"URL pública do Git","ru":"Публичный URL-адрес Git","ur":"عوامی Git URL","zh-CN":"公共 Git URL"};

export function settings_git_provider_git_name(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
