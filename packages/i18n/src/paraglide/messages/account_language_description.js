import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر اللغة المستخدمة في التنقل والنماذج والإجراءات.","bn":"নেভিগেশন, ফর্ম, এবং কর্মের জন্য ব্যবহৃত ভাষা চয়ন করুন।","de":"Wählen Sie die Sprache aus, die für Navigation, Formulare und Aktionen verwendet wird.","en":"Choose the language used for navigation, forms, and actions.","es":"Elija el idioma utilizado para la navegación, los formularios y las acciones.","fr":"Choisissez la langue utilisée pour la navigation, les formulaires et les actions.","hi":"नेविगेशन, फ़ॉर्म और कार्यों के लिए उपयोग की जाने वाली भाषा चुनें।","id":"Pilih bahasa yang digunakan untuk navigasi, formulir, dan tindakan.","pt-BR":"Escolha o idioma usado para navegação, formulários e ações.","ru":"Выберите язык, используемый для навигации, форм и действий.","ur":"نیویگیشن، فارمز اور اعمال کے لیے استعمال ہونے والی زبان کا انتخاب کریں۔","zh-CN":"选择用于导航、表单和操作的语言。"};

export function account_language_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
