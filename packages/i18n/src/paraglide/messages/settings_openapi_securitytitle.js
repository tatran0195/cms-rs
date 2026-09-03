import { getLocale } from '../runtime.js';

const translations = {"ar":"أمان التجربة التفاعلية","bn":"এটি নিরাপত্তা চেষ্টা করুন","de":"Sicherheit zum Ausprobieren","en":"Try-it security","es":"Pruébalo de seguridad","fr":"Essayez-le en matière de sécurité","hi":"सुरक्षा का प्रयास करें","id":"Cobalah keamanannya","pt-BR":"Experimente a segurança","ru":"Пробная безопасность","ur":"اس کی سیکیورٹی کو آزمائیں۔","zh-CN":"尝试安全性"};

export function settings_openapi_securitytitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
