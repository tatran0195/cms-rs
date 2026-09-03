import { getLocale } from '../runtime.js';

const translations = {"ar":"نماذج ذكاء اصطناعي مُدارة للمسودات وإجابات البحث.","bn":"খসড়া তৈরি ও অনুসন্ধানের উত্তর দেওয়ার জন্য পরিচালিত AI মডেল।","de":"Verwaltete KI-Modelle zum Entwerfen und Suchen von Antworten.","en":"Managed AI models for drafting and search answers.","es":"Modelos de IA gestionados para redactar y buscar respuestas.","fr":"Modèles d'IA gérés pour la rédaction et la recherche de réponses.","hi":"ड्राफ्ट और खोज उत्तरों के लिए प्रबंधित AI मॉडल।","id":"Mengatur model AI untuk menyusun dan mencari jawaban.","pt-BR":"Modelos de IA gerenciados para elaboração e busca de respostas.","ru":"Управляемые модели ИИ для составления и поиска ответов.","ur":"ڈرافٹنگ اور تلاش کے جوابات کے لئے منظم AI ماڈلز ۔","zh-CN":"用于起草内容和生成搜索答案的托管 AI 模型。"};

export function settings_integrations_openrouter_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
