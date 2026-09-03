import { getLocale } from '../runtime.js';

const translations = {"ar":"فروع غير محدودة","bn":"সীমাহীন শাখা","de":"Unbegrenzte Filialen","en":"Unlimited branches","es":"Sucursales ilimitadas","fr":"Succursales illimitées","hi":"असीमित शाखाएँ","id":"Cabang tidak terbatas","pt-BR":"Filiais ilimitadas","ru":"Неограниченное количество филиалов","ur":"لامحدود شاخیں۔","zh-CN":"无限分支"};

export function settings_plan_tier_team_feature_branches(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
