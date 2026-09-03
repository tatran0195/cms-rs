import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط خادم GitLab","bn":"GitLab উদাহরণ URL","de":"GitLab Instanz-URL","en":"GitLab instance URL","es":"GitLab URL de instancia","fr":"URL de l'instance GitLab","hi":"GitLab इंस्टेंस URL","id":"GitLab URL contoh","pt-BR":"URL da instância GitLab","ru":"URL экземпляра GitLab","ur":"GitLab مثال URL","zh-CN":"GitLab 实例 URL"};

export function settings_git_instanceurl(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
