import { getLocale } from '../runtime.js';

const translations = {"ar":"تابع الكتابة، أو أعد الصياغة لمزيد من الوضوح، أو أنشئ محتوى من توجيه — استنادًا إلى هذا المستند.","bn":"লেখা চালিয়ে যান, স্পষ্টতার জন্য রিফ্রেজ করুন, অথবা প্রম্পট থেকে তৈরি করুন — এই ডকটিতে ভিত্তি করে।","de":"Schreiben Sie weiter, formulieren Sie es zur Verdeutlichung um oder generieren Sie aus einer Eingabeaufforderung – basierend auf diesem Dokument.","en":"Continue writing, rephrase for clarity, or generate from a prompt — grounded in this doc.","es":"Continúe escribiendo, reformule para mayor claridad o genere a partir de un mensaje, basado en este documento.","fr":"Continuez à écrire, reformulez pour plus de clarté ou générez à partir d'une invite - ancré dans ce document.","hi":"लिखना जारी रखें, स्पष्टता के लिए दोबारा लिखें, या संकेत से उत्पन्न करें - इस दस्तावेज़ पर आधारित।","id":"Lanjutkan menulis, ulangi kalimatnya untuk kejelasan, atau buat dari perintah — berdasarkan dokumen ini.","pt-BR":"Continue escrevendo, reformule para maior clareza ou gere a partir de um prompt - com base neste documento.","ru":"Продолжайте писать, перефразируйте для ясности или создайте подсказку, основанную на этом документе.","ur":"لکھنا جاری رکھیں، وضاحت کے لیے دوبارہ بیان کریں، یا پرامپٹ سے تخلیق کریں — جو اس دستاویز میں ہے۔","zh-CN":"继续写作，为了清晰起见重新措辞，或者根据提示生成——以本文档为基础。"};

export function editor_ai_intro(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
