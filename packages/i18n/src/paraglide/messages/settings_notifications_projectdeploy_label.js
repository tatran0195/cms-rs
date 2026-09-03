import { getLocale } from '../runtime.js';

const translations = {"ar":"اكتمل النشر","bn":"স্থাপনা সম্পন্ন হয়েছে","de":"Bereitstellung abgeschlossen","en":"Deployment completed","es":"Implementación completada","fr":"Déploiement terminé","hi":"तैनाती पूरी हो गई","id":"Penerapan selesai","pt-BR":"Implantação concluída","ru":"Развертывание завершено","ur":"تعیناتی مکمل ہو گئی۔","zh-CN":"部署完成"};

export function settings_notifications_projectdeploy_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
