import { getLocale } from '../runtime.js';

const translations = {"ar":"لا يوجد نشر سابق للتراجع إليه.","bn":"রোল ব্যাক করার জন্য কোনো পূর্ববর্তী স্থাপনা নেই।","de":"Keine vorherige Bereitstellung, auf die ein Rollback durchgeführt werden könnte.","en":"No previous deployment to roll back to.","es":"No hay ninguna implementación anterior a la que retroceder.","fr":"Aucun déploiement précédent vers lequel revenir.","hi":"वापस लाने के लिए कोई पिछली तैनाती नहीं।","id":"Tidak ada penerapan sebelumnya yang dapat digunakan kembali.","pt-BR":"Nenhuma implantação anterior para reverter.","ru":"Нет предыдущего развертывания, к которому можно было бы вернуться.","ur":"واپس جانے کے لیے کوئی پچھلی تعیناتی نہیں ہے۔","zh-CN":"没有可以回滚到的先前部署。"};

export function deploy_rollback_none(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
