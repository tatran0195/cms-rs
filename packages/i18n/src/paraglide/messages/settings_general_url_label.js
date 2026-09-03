import { getLocale } from '../runtime.js';

const translations = {"ar":"اسم النشر","bn":"স্থাপনার নাম","de":"Bereitstellungsname","en":"Deployment name","es":"Nombre de implementación","fr":"Nom du déploiement","hi":"परिनियोजन नाम","id":"Nama penerapan","pt-BR":"Nome da implantação","ru":"Имя развертывания","ur":"تعیناتی کا نام","zh-CN":"部署名称"};

export function settings_general_url_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
