import { getLocale } from '../runtime.js';

const translations = {"ar":"إزالة شارة Nibleaf","bn":"Nibleaf ব্যাজ সরান","de":"Nibleaf-Abzeichen entfernen","en":"Remove Nibleaf badge","es":"Eliminar la insignia Nibleaf","fr":"Supprimer le badge Nibleaf","hi":"Nibleaf बैज हटाएं","id":"Hapus lencana Nibleaf","pt-BR":"Remover selo Nibleaf","ru":"Удалить значок Nibleaf","ur":"Nibleaf بیج ہٹا دیں۔","zh-CN":"删除 Nibleaf 徽章"};

export function settings_plan_tier_pro_feature_badge(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
