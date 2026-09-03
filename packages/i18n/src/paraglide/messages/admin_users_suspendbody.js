import { getLocale } from '../runtime.js';

const translations = {"ar":"سيُسجل خروج العميل من كل مكان ويُمنع من الدخول حتى رفع الإيقاف. تبقى مواقعه متاحة.","bn":"They are signed out everywhere and blocked from signing in until the suspension is lifted. Their sites stay online.","de":"They are signed out everywhere and blocked from signing in until the suspension is lifted. Their sites stay online.","en":"They are signed out everywhere and blocked from signing in until the suspension is lifted. Their sites stay online.","es":"They are signed out everywhere and blocked from signing in until the suspension is lifted. Their sites stay online.","fr":"They are signed out everywhere and blocked from signing in until the suspension is lifted. Their sites stay online.","hi":"They are signed out everywhere and blocked from signing in until the suspension is lifted. Their sites stay online.","id":"They are signed out everywhere and blocked from signing in until the suspension is lifted. Their sites stay online.","pt-BR":"They are signed out everywhere and blocked from signing in until the suspension is lifted. Their sites stay online.","ru":"They are signed out everywhere and blocked from signing in until the suspension is lifted. Their sites stay online.","ur":"They are signed out everywhere and blocked from signing in until the suspension is lifted. Their sites stay online.","zh-CN":"They are signed out everywhere and blocked from signing in until the suspension is lifted. Their sites stay online."};

export function admin_users_suspendbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
