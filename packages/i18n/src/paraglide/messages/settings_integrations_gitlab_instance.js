import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط الخادم","bn":"ইনস্ট্যান্স URL","de":"Instanz-URL","en":"Instance URL","es":"URL de instancia","fr":"URL de l'instance","hi":"इंस्टेंस URL","id":"URL instans","pt-BR":"URL da instância","ru":"URL экземпляра","ur":"انسٹنس URL","zh-CN":"实例 URL"};

export function settings_integrations_gitlab_instance(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
