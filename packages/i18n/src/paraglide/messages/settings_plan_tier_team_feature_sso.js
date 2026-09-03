import { getLocale } from '../runtime.js';

const translations = {"ar":"الدخول الموحّد (مخطط له)","bn":"SSO (পরিকল্পিত)","de":"SSO (geplant)","en":"SSO (planned)","es":"SSO (planificado)","fr":"SSO (prévu)","hi":"एसएसओ (योजनाबद्ध)","id":"SSO (direncanakan)","pt-BR":"SSO (planejado)","ru":"ССО (планируется)","ur":"SSO (منصوبہ بند)","zh-CN":"单点登录（计划）"};

export function settings_plan_tier_team_feature_sso(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
