import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر المصدر أدناه، وأضف البيانات التي يحتاجها فقط، ثم استورده مباشرة إلى هذا المشروع.","bn":"নীচের একটি উত্স চয়ন করুন, শুধুমাত্র প্রয়োজনীয় বিবরণ যোগ করুন এবং সরাসরি এই প্রকল্পে আমদানি করুন৷","de":"Wählen Sie unten eine Quelle aus, fügen Sie nur die benötigten Details hinzu und importieren Sie sie direkt in dieses Projekt.","en":"Choose a source below, add only the details it needs, and import directly into this project.","es":"Elija una fuente a continuación, agregue solo los detalles que necesita e importe directamente a este proyecto.","fr":"Choisissez une source ci-dessous, ajoutez uniquement les détails dont elle a besoin et importez directement dans ce projet.","hi":"नीचे एक स्रोत चुनें, केवल वही विवरण जोड़ें जिनकी उसे आवश्यकता है, और सीधे इस प्रोजेक्ट में आयात करें।","id":"Pilih sumber di bawah, tambahkan hanya detail yang diperlukan, dan impor langsung ke proyek ini.","pt-BR":"Escolha uma fonte abaixo, adicione apenas os detalhes necessários e importe diretamente para este projeto.","ru":"Выберите источник ниже, добавьте только необходимые детали и импортируйте непосредственно в этот проект.","ur":"ذیل میں ایک ذریعہ منتخب کریں، صرف اس کی ضرورت کی تفصیلات شامل کریں، اور براہ راست اس پروجیکٹ میں درآمد کریں۔","zh-CN":"在下面选择一个源，仅添加所需的详细信息，然后直接导入到该项目中。"};

export function settings_import_workspace_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
