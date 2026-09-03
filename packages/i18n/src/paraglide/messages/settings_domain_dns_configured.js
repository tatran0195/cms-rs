import { getLocale } from '../runtime.js';

const translations = {"ar":"تم إعداد ملكية DNS والتوجيه بصورة صحيحة.","bn":"DNS মালিকানা এবং রাউটিং সঠিকভাবে কনফিগার করা হয়েছে।","de":"DNS-Besitz und Routing sind korrekt konfiguriert.","en":"DNS ownership and routing are configured correctly.","es":"La propiedad y el enrutamiento de DNS están configurados correctamente.","fr":"La propriété DNS et le routage sont correctement configurés.","hi":"DNS स्वामित्व और रूटिंग सही ढंग से कॉन्फ़िगर की गई हैं।","id":"Kepemilikan dan perutean DNS dikonfigurasi dengan benar.","pt-BR":"A propriedade e o roteamento do DNS estão configurados corretamente.","ru":"Владение DNS и маршрутизация настроены правильно.","ur":"DNS ملکیت اور روٹنگ درست طریقے سے ترتیب دی گئی ہیں۔","zh-CN":"DNS 所有权和路由配置正确。"};

export function settings_domain_dns_configured(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
