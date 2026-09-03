import { getLocale } from '../runtime.js';

const translations = {"ar":"نواة مفتوحة المصدر","bn":"ওপেন সোর্স কোর","de":"Open-Source-Kern","en":"open source core","es":"núcleo de código abierto","fr":"noyau open source","hi":"खुला स्रोत कोर","id":"inti sumber terbuka","pt-BR":"núcleo de código aberto","ru":"ядро с открытым исходным кодом","ur":"اوپن سورس کور","zh-CN":"开源核心"};

export function auth_brand_opensource(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
