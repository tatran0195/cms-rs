import { getLocale } from '../runtime.js';

const translations = {"ar":"هل تحتاج إلى أرشيف كل المسودات القديم؟","bn":"উত্তরাধিকার অল-ড্রাফ্ট সংরক্ষণাগার প্রয়োজন?","de":"Benötigen Sie das alte Archiv aller Entwürfe?","en":"Need the legacy all-drafts archive?","es":"¿Necesita el archivo heredado de todos los borradores?","fr":"Besoin des anciennes archives de tous les brouillons ?","hi":"लीगेसी ऑल-ड्राफ्ट संग्रह की आवश्यकता है?","id":"Butuh arsip semua draf yang lama?","pt-BR":"Precisa do arquivo herdado de todos os rascunhos?","ru":"Нужен устаревший архив всех черновиков?","ur":"میراثی آل ڈرافٹ آرکائیو کی ضرورت ہے؟","zh-CN":"需要旧版全草稿存档吗？"};

export function settings_exports_workflow_legacyprompt(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
