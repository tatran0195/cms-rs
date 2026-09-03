import { getLocale } from '../runtime.js';

const translations = {"ar":"أتمت لقطات الأرشفة وسياسة الاحتفاظ","bn":"স্বয়ংক্রিয় সংরক্ষণাগার স্ন্যাপশট এবং ধারণ","de":"Automatisieren Sie Archiv-Snapshots und Aufbewahrung","en":"Automate archival snapshots and retention","es":"Automatizar instantáneas de archivo y retención","fr":"Automatisez les instantanés d'archivage et la conservation","hi":"अभिलेखीय स्नैपशॉट और अवधारण को स्वचालित करें","id":"Otomatiskan snapshot dan retensi arsip","pt-BR":"Automatize snapshots e retenção de arquivamento","ru":"Автоматизируйте архивные снимки и хранение","ur":"محفوظ شدہ دستاویزات کے اسنیپ شاٹس اور برقرار رکھنے کو خودکار بنائیں","zh-CN":"自动归档快照和保留"};

export function settings_exports_workflow_schedulesdesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
