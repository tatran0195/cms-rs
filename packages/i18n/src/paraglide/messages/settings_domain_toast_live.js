import { getLocale } from '../runtime.js';

const translations = {"ar":"النطاق نشط مع شهادة TLS صالحة","bn":"ডোমেন বৈধ TLS সহ লাইভ","de":"Die Domain ist mit gültigem TLS aktiv","en":"Domain is live with valid TLS","es":"El dominio está activo con TLS válido","fr":"Le domaine est actif avec un TLS valide","hi":"डोमेन वैध टीएलएस के साथ लाइव है","id":"Domain aktif dengan TLS yang valid","pt-BR":"O domínio está ativo com TLS válido","ru":"Домен активен с действительным TLS","ur":"ڈومین درست TLS کے ساتھ لائیو ہے۔","zh-CN":"域已启用并具有有效的 TLS"};

export function settings_domain_toast_live(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
