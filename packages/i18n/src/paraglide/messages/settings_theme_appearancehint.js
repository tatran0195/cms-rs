import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر المظهر الفاتح أو الداكن أو مظهر النظام أولًا. يمكن للقرّاء التبديل محليًا.","bn":"প্রথম আলো, অন্ধকার, বা সিস্টেম চেহারা চয়ন করুন. পাঠকরা এখনও স্থানীয়ভাবে পরিবর্তন করতে পারেন।","de":"Wählen Sie das erste helle, dunkle oder System-Erscheinungsbild. Leser können weiterhin lokal wechseln.","en":"Choose the first light, dark, or system appearance. Readers can still switch locally.","es":"Elija la primera apariencia clara, oscura o del sistema. Los lectores aún pueden cambiar localmente.","fr":"Choisissez la première apparence claire, sombre ou système. Les lecteurs peuvent toujours changer localement.","hi":"पहले प्रकाश, अंधेरा या सिस्टम स्वरूप चुनें। पाठक अभी भी स्थानीय रूप से स्विच कर सकते हैं।","id":"Pilih tampilan terang, gelap, atau sistem pertama. Pembaca masih dapat beralih secara lokal.","pt-BR":"Escolha a primeira aparência clara, escura ou do sistema. Os leitores ainda podem mudar localmente.","ru":"Выберите первый светлый, темный или системный вид. Читатели по-прежнему могут переключаться локально.","ur":"پہلی روشنی، اندھیرے، یا نظام کی ظاہری شکل کا انتخاب کریں۔ قارئین اب بھی مقامی طور پر سوئچ کر سکتے ہیں۔","zh-CN":"选择第一个浅色、深色或系统外观。读者仍然可以在本地切换。"};

export function settings_theme_appearancehint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
