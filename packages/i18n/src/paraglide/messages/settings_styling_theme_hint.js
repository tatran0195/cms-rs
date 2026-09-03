import { getLocale } from '../runtime.js';

const translations = {"ar":"السمة التي يراها القرّاء عند أول زيارة. يمكنهم التبديل في أي وقت.","bn":"থিম পাঠকরা প্রথম দর্শনেই দেখতে পান। তারা যেকোনো সময় পরিবর্তন করতে পারে।","de":"Das Thema sieht der Leser beim ersten Besuch. Sie können jederzeit wechseln.","en":"The theme readers see on first visit. They can switch any time.","es":"El tema que los lectores ven en la primera visita. Pueden cambiar en cualquier momento.","fr":"Le thème que les lecteurs voient lors de la première visite. Ils peuvent changer à tout moment.","hi":"थीम पाठक पहली बार देखने पर देखते हैं। वे किसी भी समय स्विच कर सकते हैं.","id":"Tema yang dilihat pembaca pada kunjungan pertama. Mereka dapat beralih kapan saja.","pt-BR":"O tema que os leitores veem na primeira visita. Eles podem mudar a qualquer momento.","ru":"Тема, которую читатели видят при первом посещении. Они могут переключиться в любой момент.","ur":"تھیم قارئین پہلے وزٹ میں دیکھتے ہیں۔ وہ کسی بھی وقت سوئچ کر سکتے ہیں۔","zh-CN":"读者第一次访问时看到的主题。他们可以随时切换。"};

export function settings_styling_theme_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
