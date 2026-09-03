import { getLocale } from '../runtime.js';

const translations = {"ar":"القناة","bn":"চ্যানেল","de":"Kanal","en":"Channel","es":"Canal","fr":"Chaîne","hi":"चैनल","id":"Kanal","pt-BR":"Canal","ru":"Канал","ur":"چینل","zh-CN":"频道"};

export function settings_integrations_slack_channel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
