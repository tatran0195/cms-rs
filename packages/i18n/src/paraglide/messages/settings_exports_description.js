import { getLocale } from '../runtime.js';

const translations = {"ar":"يحافظ Nibleaf على المحتوى قابلًا للتحرير والنقل عبر قاعدة البيانات وتدفق الاستيراد من Git.","bn":"Nibleaf ডাটাবেস এবং গিট আমদানি প্রবাহের মাধ্যমে সামগ্রী সম্পাদনাযোগ্য এবং বহনযোগ্য রাখে।","de":"Nibleaf sorgt dafür, dass Inhalte über die Datenbank und den Git-Importfluss bearbeitbar und portierbar bleiben.","en":"Nibleaf keeps content editable and portable through the database and Git import flow.","es":"Nibleaf mantiene el contenido editable y portátil a través de la base de datos y el flujo de importación de Git.","fr":"Nibleaf conserve le contenu modifiable et portable via la base de données et le flux d'importation Git.","hi":"Nibleaf डेटाबेस और Git आयात प्रवाह के माध्यम से सामग्री को संपादन योग्य और पोर्टेबल रखता है।","id":"Nibleaf membuat konten dapat diedit dan portabel melalui database dan aliran impor Git.","pt-BR":"Nibleaf mantém o conteúdo editável e portátil por meio do banco de dados e do fluxo de importação do Git.","ru":"Nibleaf позволяет редактировать и переносить контент через базу данных и поток импорта Git.","ur":"Nibleaf ڈیٹا بیس اور Git امپورٹ فلو کے ذریعے مواد کو قابل تدوین اور پورٹیبل رکھتا ہے۔","zh-CN":"Nibleaf 通过数据库和 Git 导入流程保持内容可编辑和可移植。"};

export function settings_exports_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
