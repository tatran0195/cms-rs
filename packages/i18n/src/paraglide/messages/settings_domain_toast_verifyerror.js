import { getLocale } from '../runtime.js';

const translations = {"ar":"فشل فحص النطاق","bn":"ডোমেন চেক ব্যর্থ হয়েছে","de":"Die Domänenprüfung ist fehlgeschlagen","en":"The domain check failed","es":"La verificación del dominio falló","fr":"La vérification du domaine a échoué","hi":"डोमेन जाँच विफल रही","id":"Pemeriksaan domain gagal","pt-BR":"A verificação do domínio falhou","ru":"Проверка домена не удалась","ur":"ڈومین کی جانچ ناکام ہوگئی","zh-CN":"域检查失败"};

export function settings_domain_toast_verifyerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
