import { getLocale } from '../runtime.js';

const translations = {"ar":"النشر والنطاقات والوصول والملكية والخطة والاستخدام عبر المنصة.","bn":"Publishing, domains, access, ownership, plan metadata, and usage across the instance.","de":"Publishing, domains, access, ownership, plan metadata, and usage across the instance.","en":"Publishing, domains, access, ownership, plan metadata, and usage across the instance.","es":"Publishing, domains, access, ownership, plan metadata, and usage across the instance.","fr":"Publishing, domains, access, ownership, plan metadata, and usage across the instance.","hi":"Publishing, domains, access, ownership, plan metadata, and usage across the instance.","id":"Publishing, domains, access, ownership, plan metadata, and usage across the instance.","pt-BR":"Publishing, domains, access, ownership, plan metadata, and usage across the instance.","ru":"Publishing, domains, access, ownership, plan metadata, and usage across the instance.","ur":"Publishing, domains, access, ownership, plan metadata, and usage across the instance.","zh-CN":"Publishing, domains, access, ownership, plan metadata, and usage across the instance."};

export function admin_sites_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
