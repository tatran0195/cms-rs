import { getLocale } from '../runtime.js';

const translations = {"ar":"شروط الخدمة","bn":"পরিষেবার শর্তাবলী","de":"Nutzungsbedingungen","en":"Terms of Service","es":"Términos de servicio","fr":"Conditions d'utilisation","hi":"सेवा की शर्तें","id":"Ketentuan Layanan","pt-BR":"Termos de Serviço","ru":"Условия использования","ur":"سروس کی شرائط","zh-CN":"服务条款"};

export function auth_legal_terms(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
