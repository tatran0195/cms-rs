import { getLocale } from '../runtime.js';

const translations = {"ar":"معاينات النشر","bn":"পূর্বরূপ স্থাপনা","de":"Vorschau der Bereitstellungen","en":"Preview deployments","es":"Vista previa de implementaciones","fr":"Aperçu des déploiements","hi":"तैनाती का पूर्वावलोकन करें","id":"Pratinjau penerapan","pt-BR":"Pré-visualizar implantações","ru":"Предварительный просмотр развертываний","ur":"پیش نظارہ تعیناتیوں","zh-CN":"预览部署"};

export function settings_addons_previewdeployments_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
