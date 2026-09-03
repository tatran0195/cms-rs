import { getLocale } from '../runtime.js';

const translations = {"ar":"نشر السحابة نشط","bn":"ক্লাউড স্থাপনা সক্রিয়","de":"Cloud-Bereitstellung aktiv","en":"Cloud deployment active","es":"Implementación en la nube activa","fr":"Déploiement cloud actif","hi":"क्लाउड परिनियोजन सक्रिय","id":"Penyebaran cloud aktif","pt-BR":"Implantação na nuvem ativa","ru":"Облачное развертывание активно","ur":"کلاؤڈ تعیناتی فعال ہے۔","zh-CN":"云部署活跃"};

export function auth_brand_status(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
