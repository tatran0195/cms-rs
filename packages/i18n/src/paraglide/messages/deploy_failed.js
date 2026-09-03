import { getLocale } from '../runtime.js';

const translations = {"ar":"فشل النشر","bn":"স্থাপন ব্যর্থ হয়েছে","de":"Die Bereitstellung ist fehlgeschlagen","en":"Deploy failed","es":"Error en la implementación","fr":"Échec du déploiement","hi":"परिनियोजन विफल","id":"Penerapan gagal","pt-BR":"Falha na implantação","ru":"Развертывание не удалось","ur":"تعیناتی ناکام ہو گئی۔","zh-CN":"部署失败"};

export function deploy_failed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
