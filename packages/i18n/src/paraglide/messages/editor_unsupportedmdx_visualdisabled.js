import { getLocale } from '../runtime.js';

const translations = {"ar":"يتم الحفاظ على كتل MDX غير المدعومة ككتل محلية للقراءة فقط.","bn":"অসমর্থিত MDX ব্লকগুলি স্থানীয় পঠনযোগ্য ব্লক হিসাবে সংরক্ষণ করা হয়েছে৷","de":"Nicht unterstützte MDX-Blöcke bleiben als lokale schreibgeschützte Blöcke erhalten.","en":"Unsupported MDX blocks are preserved as local read-only blocks.","es":"Los bloques MDX no compatibles se conservan como bloques locales de solo lectura.","fr":"Les blocs MDX non pris en charge sont conservés en tant que blocs locaux en lecture seule.","hi":"असमर्थित MDX ब्लॉक स्थानीय रीड-ओनली ब्लॉक के रूप में संरक्षित हैं।","id":"Blok MDX yang tidak didukung dipertahankan sebagai blok lokal hanya-baca.","pt-BR":"Os blocos MDX não suportados são preservados como blocos locais somente leitura.","ru":"Неподдерживаемые блоки MDX сохраняются как локальные блоки, доступные только для чтения.","ur":"غیر تعاون یافتہ MDX بلاکس صرف پڑھنے کے لیے مقامی بلاکس کے طور پر محفوظ ہیں۔","zh-CN":"不支持的 MDX 块将保留为本地只读块。"};

export function editor_unsupportedmdx_visualdisabled(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
