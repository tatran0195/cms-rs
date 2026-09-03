import { getLocale } from '../runtime.js';

const translations = {"ar":"اطلب موافقة زوّار الاتحاد الأوروبي قبل تحميل التحليلات.","bn":"বিশ্লেষণ লোড করার আগে EU দর্শকদের সম্মতির জন্য জিজ্ঞাসা করুন।","de":"Bitten Sie EU-Besucher um ihre Zustimmung, bevor Sie Analysen laden.","en":"Ask EU visitors for consent before loading analytics.","es":"Solicite su consentimiento a los visitantes de la UE antes de cargar análisis.","fr":"Demandez le consentement des visiteurs de l’UE avant de charger des analyses.","hi":"विश्लेषण लोड करने से पहले यूरोपीय संघ के आगंतुकों से सहमति मांगें।","id":"Minta persetujuan pengunjung UE sebelum memuat analisis.","pt-BR":"Peça consentimento aos visitantes da UE antes de carregar as análises.","ru":"Прежде чем загружать аналитику, попросите согласия посетителей из ЕС.","ur":"تجزیات لوڈ کرنے سے پہلے یورپی یونین کے زائرین سے رضامندی کے لیے پوچھیں۔","zh-CN":"在加载分析之前征求欧盟访客的同意。"};

export function settings_analytics_cookieconsent_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
