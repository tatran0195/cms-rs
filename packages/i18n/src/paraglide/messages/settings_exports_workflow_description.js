import { getLocale } from '../runtime.js';

const translations = {"ar":"تُنشأ التصديرات المحمولة في الخلفية من مراجعة منشورة ثابتة واحدة.","bn":"পোর্টেবল রপ্তানি একটি অপরিবর্তনীয় প্রকাশিত সংশোধন থেকে পটভূমিতে রেন্ডার করা হয়।","de":"Portable Exporte werden im Hintergrund aus einer unveränderlichen veröffentlichten Revision gerendert.","en":"Portable exports are rendered in the background from one immutable published revision.","es":"Las exportaciones portátiles se representan en segundo plano a partir de una revisión publicada inmutable.","fr":"Les exportations portables sont rendues en arrière-plan à partir d'une révision publiée immuable.","hi":"पोर्टेबल निर्यात को एक अपरिवर्तनीय प्रकाशित संशोधन से पृष्ठभूमि में प्रस्तुत किया जाता है।","id":"Ekspor portabel ditampilkan di latar belakang dari satu revisi terbitan yang tidak dapat diubah.","pt-BR":"As exportações portáteis são renderizadas em segundo plano a partir de uma revisão publicada imutável.","ru":"Переносимый экспорт отображается в фоновом режиме из одной неизменяемой опубликованной версии.","ur":"پورٹ ایبل برآمدات کو ایک ناقابل تغیر شائع شدہ نظرثانی سے پس منظر میں پیش کیا جاتا ہے۔","zh-CN":"可移植导出是在后台从一个不可变的已发布版本呈现的。"};

export function settings_exports_workflow_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
