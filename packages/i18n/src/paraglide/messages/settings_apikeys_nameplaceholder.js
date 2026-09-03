import { getLocale } from '../runtime.js';

const translations = {"ar":"مفتاح نشر الإنتاج","bn":"উত্পাদন স্থাপন কী","de":"Produktionsbereitstellungsschlüssel","en":"Production deploy key","es":"Clave de implementación de producción","fr":"Clé de déploiement en production","hi":"उत्पादन परिनियोजन कुंजी","id":"Kunci penerapan produksi","pt-BR":"Chave de implantação de produção","ru":"Ключ производственного развертывания","ur":"پیداوار کی تعیناتی کی کلید","zh-CN":"生产部署密钥"};

export function settings_apikeys_nameplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
