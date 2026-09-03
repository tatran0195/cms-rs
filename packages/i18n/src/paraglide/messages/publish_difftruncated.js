import { getLocale } from '../runtime.js';

const translations = {"ar":"تم اختصار الفرق لتحسين الأداء.","bn":"পারফরম্যান্সের জন্য আলাদা করা হয়েছে।","de":"Diff wurde aus Leistungsgründen gekürzt.","en":"Diff truncated for performance.","es":"Diferencia truncada por motivos de rendimiento.","fr":"Diff tronqué pour des raisons de performances.","hi":"प्रदर्शन के लिए अंतर को छोटा किया गया।","id":"Diff dipotong untuk kinerja.","pt-BR":"Diferença truncada para desempenho.","ru":"Дифференциал усечен для производительности.","ur":"کارکردگی کے لیے فرق کاٹ دیا گیا۔","zh-CN":"为了性能而截断差异。"};

export function publish_difftruncated(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
