import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ النشر…","bn":"স্থাপন করা হচ্ছে...","de":"Bereitstellen…","en":"Deploying…","es":"Implementando…","fr":"Déploiement…","hi":"तैनाती...","id":"Menyebarkan…","pt-BR":"Implantando…","ru":"Развертывание…","ur":"تعینات کیا جا رہا ہے…","zh-CN":"正在部署..."};

export function deploy_deploying(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
