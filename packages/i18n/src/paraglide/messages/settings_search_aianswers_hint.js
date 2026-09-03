import { getLocale } from '../runtime.js';

const translations = {"ar":"اسمح للقراء بطرح أسئلة موثّقة. تُحجب الإجابة عندما لا تدعمها المصادر.","bn":"পাঠকদের উৎসভিত্তিক প্রশ্ন করতে দিন। অসমর্থিত উত্তর দেখানো হয় না।","de":"Leser können belegte Fragen stellen. Nicht unterstützte Antworten werden zurückgehalten.","en":"Allow readers to ask grounded questions. Unsupported answers are withheld.","es":"Permite preguntas fundamentadas. Se omiten las respuestas sin respaldo documental.","fr":"Autorisez les questions étayées. Les réponses non soutenues sont retenues.","hi":"पाठकों को स्रोत-आधारित प्रश्न पूछने दें। असमर्थित उत्तर नहीं दिखाए जाते।","id":"Izinkan pertanyaan berbasis sumber. Jawaban tanpa dukungan dokumentasi tidak ditampilkan.","pt-BR":"Permita perguntas fundamentadas. Respostas sem apoio na documentação não são exibidas.","ru":"Разрешить вопросы с опорой на источники. Неподтверждённые ответы не показываются.","ur":"قارئین کو حوالہ جاتی سوالات کی اجازت دیں۔ غیر ثابت شدہ جواب نہیں دکھایا جاتا۔","zh-CN":"允许读者提出有文档依据的问题。不支持的回答将不会显示。"};

export function settings_search_aianswers_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
