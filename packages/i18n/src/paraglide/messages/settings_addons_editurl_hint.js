import { getLocale } from '../runtime.js';

const translations = {"ar":"استخدم {path} لمسار صفحة التوثيق الحالية، مثل رابط تحرير GitHub.","bn":"বর্তমান ডক্স পাথের জন্য {path} ব্যবহার করুন, উদাহরণস্বরূপ একটি GitHub সম্পাদনা URL।","de":"Verwenden Sie {path} für den aktuellen Dokumentpfad, beispielsweise eine Bearbeitungs-URL GitHub.","en":"Use {path} for the current docs path, for example a GitHub edit URL.","es":"Utilice {path} para la ruta de documentos actual, por ejemplo, una URL de edición GitHub.","fr":"Utilisez {path} pour le chemin actuel de la documentation, par exemple une URL de modification GitHub.","hi":"वर्तमान दस्तावेज़ पथ के लिए {path} का उपयोग करें, उदाहरण के लिए GitHub संपादन URL।","id":"Gunakan {path} untuk jalur dokumen saat ini, misalnya URL edit GitHub.","pt-BR":"Use {path} para o caminho dos documentos atuais, por exemplo, um URL de edição GitHub.","ru":"Используйте {path} для текущего пути к документам, например URL-адрес редактирования GitHub.","ur":"موجودہ دستاویزات کے راستے کے لیے {path} استعمال کریں، مثال کے طور پر GitHub ترمیم URL۔","zh-CN":"使用 {path} 作为当前文档路径，例如 GitHub 编辑 URL。"};

export function settings_addons_editurl_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
