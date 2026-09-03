import { getLocale } from '../runtime.js';

const translations = {"ar":"فشل الإصدار v{version} — راجع سجل النشر.","bn":"v{version} ব্যর্থ হয়েছে — স্থাপনার লগ চেক করুন।","de":"v{version} fehlgeschlagen – überprüfen Sie das Bereitstellungsprotokoll.","en":"v{version} failed — check the deployment log.","es":"v{version} falló: verifique el registro de implementación.","fr":"v{version} a échoué : vérifiez le journal de déploiement.","hi":"v{version} विफल - परिनियोजन लॉग की जाँच करें।","id":"v{version} gagal — periksa log penerapan.","pt-BR":"v{version} falhou — verifique o log de implantação.","ru":"v{version} не удалось — проверьте журнал развертывания.","ur":"v{version} ناکام — تعیناتی لاگ کو چیک کریں۔","zh-CN":"v{version} 失败 — 检查部署日志。"};

export function settings_git_pipeline_failed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
