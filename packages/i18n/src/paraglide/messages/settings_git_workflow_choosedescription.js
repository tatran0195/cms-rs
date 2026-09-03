import { getLocale } from '../runtime.js';

const translations = {"ar":"حدّد من أين يقرأ Nibleaf مستنداتك وأين يكتب التغييرات للمراجعة.","bn":"Nibleaf কোথায় আপনার ডক্স পড়বে এবং যেখানে এটি পর্যালোচনার জন্য পরিবর্তন লিখবে তা নির্বাচন করুন৷","de":"Wählen Sie aus, wo Nibleaf Ihre Dokumente liest und wo Änderungen zur Überprüfung geschrieben werden.","en":"Select where Nibleaf reads your docs and where it writes changes for review.","es":"Seleccione dónde Nibleaf lee sus documentos y dónde escribe los cambios para su revisión.","fr":"Sélectionnez l'endroit où Nibleaf lit vos documents et où il écrit les modifications pour révision.","hi":"चुनें कि Nibleaf आपके दस्तावेज़ कहां पढ़ता है और समीक्षा के लिए परिवर्तन कहां लिखता है।","id":"Pilih tempat Nibleaf membaca dokumen Anda dan tempat menulis perubahan untuk ditinjau.","pt-BR":"Selecione onde Nibleaf lê seus documentos e onde escreve as alterações para revisão.","ru":"Выберите, где Nibleaf читает ваши документы и куда записывает изменения для проверки.","ur":"منتخب کریں کہ کہاں Nibleaf آپ کے دستاویزات کو پڑھتا ہے اور کہاں یہ تبدیلیاں لکھتا ہے نظرثانی کے لیے۔","zh-CN":"选择 Nibleaf 读取文档的位置以及写入更改以供审核的位置。"};

export function settings_git_workflow_choosedescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
