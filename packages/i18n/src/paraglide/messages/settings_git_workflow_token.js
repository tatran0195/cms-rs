import { getLocale } from '../runtime.js';

const translations = {"ar":"رمز دقيق الصلاحيات","bn":"সূক্ষ্ম দানাদার টোকেন","de":"Feinkörniger Token","en":"Fine-grained token","es":"Ficha detallada","fr":"Jeton à grain fin","hi":"बारीक दाने वाला टोकन","id":"Token berbutir halus","pt-BR":"Token refinado","ru":"Детализированный токен","ur":"باریک ٹوکن","zh-CN":"细粒度令牌"};

export function settings_git_workflow_token(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
