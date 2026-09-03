import { getLocale } from '../runtime.js';

const translations = {"ar":"نطاقات مخصصة ونطاقات فرعية مجانية","bn":"কাস্টম ডোমেন এবং বিনামূল্যে সাবডোমেন","de":"Benutzerdefinierte Domains und kostenlose Subdomains","en":"Custom domains and free subdomains","es":"Dominios personalizados y subdominios gratuitos","fr":"Domaines personnalisés et sous-domaines gratuits","hi":"कस्टम डोमेन और मुफ़्त उपडोमेन","id":"Domain khusus dan subdomain gratis","pt-BR":"Domínios personalizados e subdomínios gratuitos","ru":"Пользовательские домены и бесплатные поддомены","ur":"حسب ضرورت ڈومینز اور مفت ذیلی ڈومینز","zh-CN":"自定义域和免费子域"};

export function settings_plan_selfhosted_feature_domains(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
