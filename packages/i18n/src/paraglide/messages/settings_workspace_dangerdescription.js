import { getLocale } from '../runtime.js';

const translations = {"ar":"حذف مساحة العمل يزيل جميع المشاريع والمستندات والتحليلات للجميع. لا يمكن التراجع عن هذا الإجراء.","bn":"আপনার ওয়ার্কস্পেস মুছে দিলে সকলের জন্য সমস্ত প্রকল্প, ডক্স এবং বিশ্লেষণ মুছে যায়। এটি পূর্বাবস্থায় ফেরানো যাবে না।","de":"Durch das Löschen Ihres Arbeitsbereichs werden alle Projekte, Dokumente und Analysen für alle entfernt. Dies kann nicht rückgängig gemacht werden.","en":"Deleting your workspace removes all projects, docs, and analytics for everyone. This cannot be undone.","es":"Al eliminar su espacio de trabajo, se eliminan todos los proyectos, documentos y análisis para todos. Esto no se puede deshacer.","fr":"La suppression de votre espace de travail supprime tous les projets, documents et analyses pour tout le monde. Cela ne peut pas être annulé.","hi":"आपके कार्यक्षेत्र को हटाने से सभी प्रोजेक्ट, दस्तावेज़ और विश्लेषण सभी के लिए हट जाते हैं। इसे असंपादित नहीं किया जा सकता है।","id":"Menghapus ruang kerja Anda akan menghapus semua proyek, dokumen, dan analitik untuk semua orang. Hal ini tidak dapat dibatalkan.","pt-BR":"Excluir seu espaço de trabalho remove todos os projetos, documentos e análises de todos. Isto não pode ser desfeito.","ru":"Удаление рабочей области приведет к удалению всех проектов, документов и аналитики для всех. Это невозможно отменить.","ur":"آپ کے ورک اسپیس کو حذف کرنے سے سبھی پروجیکٹس، دستاویزات اور تجزیات سبھی کے لیے ہٹ جاتے ہیں۔ اسے کالعدم نہیں کیا جا سکتا۔","zh-CN":"删除工作区会删除每个人的所有项目、文档和分析。此操作无法撤消。"};

export function settings_workspace_dangerdescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
