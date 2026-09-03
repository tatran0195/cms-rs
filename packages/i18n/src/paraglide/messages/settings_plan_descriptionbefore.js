import { getLocale } from '../runtime.js';

const translations = {"ar":"يشغّل Nibleaf Cloud هذا الموقع على الخطة الحالية لـ","bn":"Nibleaf ক্লাউড বর্তমান প্ল্যানে এই সাইটটি চালায়","de":"Nibleaf Cloud betreibt diese Site mit dem aktuellen Plan für","en":"Nibleaf Cloud runs this site on the current plan for","es":"Nibleaf Cloud ejecuta este sitio según el plan actual para","fr":"Nibleaf Cloud gère ce site avec le plan actuel pour","hi":"Nibleaf क्लाउड इस साइट को वर्तमान योजना के अनुसार चलाता है","id":"Nibleaf Cloud menjalankan situs ini sesuai rencana saat ini","pt-BR":"Nibleaf A nuvem executa este site no plano atual para","ru":"Nibleaf Облако управляет этим сайтом по текущему плану в течение","ur":"Nibleaf کلاؤڈ اس سائٹ کو موجودہ پلان پر چلاتا ہے۔","zh-CN":"Nibleaf 云按照当前计划运行此站点"};

export function settings_plan_descriptionbefore(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
