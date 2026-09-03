import { getLocale } from '../runtime.js';

const translations = {"ar":"الخصوصية والموافقة","bn":"গোপনীয়তা ও সম্মতি","de":"Datenschutz und Einwilligung","en":"Privacy and consent","es":"Privacidad y consentimiento","fr":"Confidentialité et consentement","hi":"गोपनीयता और सहमति","id":"Privasi dan persetujuan","pt-BR":"Privacidade e consentimento","ru":"Конфиденциальность и согласие","ur":"رازداری اور رضامندی","zh-CN":"隐私与同意"};

export function settings_addons_group_privacy_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
