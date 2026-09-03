import { getLocale } from '../runtime.js';

const translations = {"ar":"فشل النشر","bn":"স্থাপনা ব্যর্থ হয়েছে৷","de":"Die Bereitstellung ist fehlgeschlagen","en":"Deployment failed","es":"Error en la implementación","fr":"Le déploiement a échoué","hi":"परिनियोजन विफल रहा","id":"Penerapan gagal","pt-BR":"Falha na implantação","ru":"Развертывание не удалось","ur":"تعیناتی ناکام ہو گئی۔","zh-CN":"部署失败"};

export function settings_notifications_projectdeployfailed_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
