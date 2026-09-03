import { getLocale } from '../runtime.js';

const translations = {"ar":"احذف هذا المشروع وتوثيقه وتحليلاته نهائياً. لا يمكن التراجع عن هذا الإجراء.","bn":"স্থায়ীভাবে এই প্রকল্প, এর ডক্স, এবং বিশ্লেষণ মুছে দিন। এটি পূর্বাবস্থায় ফেরানো যাবে না।","de":"Löschen Sie dieses Projekt, seine Dokumente und Analysen endgültig. Dies kann nicht rückgängig gemacht werden.","en":"Permanently delete this project, its docs, and analytics. This cannot be undone.","es":"Elimina permanentemente este proyecto, sus documentos y análisis. Esto no se puede deshacer.","fr":"Supprimez définitivement ce projet, ses documents et ses analyses. Cela ne peut pas être annulé.","hi":"इस प्रोजेक्ट, इसके दस्तावेज़ और विश्लेषण को स्थायी रूप से हटा दें। इसे असंपादित नहीं किया जा सकता है।","id":"Hapus proyek ini, dokumen, dan analisisnya secara permanen. Hal ini tidak dapat dibatalkan.","pt-BR":"Exclua permanentemente este projeto, seus documentos e análises. Isto não pode ser desfeito.","ru":"Удалите навсегда этот проект, его документацию и аналитику. Это невозможно отменить.","ur":"اس پروجیکٹ، اس کے دستاویزات اور تجزیات کو مستقل طور پر حذف کریں۔ اسے کالعدم نہیں کیا جا سکتا۔","zh-CN":"永久删除该项目、其文档和分析。此操作无法撤消。"};

export function settings_danger_delete_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
