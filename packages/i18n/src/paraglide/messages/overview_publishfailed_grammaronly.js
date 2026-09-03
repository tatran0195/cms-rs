import { getLocale } from '../runtime.js';

const translations = {"ar":"اقتراحات لغوية فقط هي ما يمنع النشر — يمكنك النشر متجاوزًا لها.","bn":"শুধুমাত্র ব্যাকরণের পরামর্শগুলি ব্লক করছে — আপনি সেগুলিকে আগে প্রকাশ করতে পারেন৷","de":"Nur Grammatikvorschläge blockieren – Sie können darüber hinaus veröffentlichen.","en":"Only grammar suggestions are blocking — you can publish past them.","es":"Solo se bloquean las sugerencias gramaticales; puedes publicar más allá de ellas.","fr":"Seules les suggestions de grammaire bloquent – vous pouvez les publier au-delà.","hi":"केवल व्याकरण सुझाव अवरुद्ध हो रहे हैं - आप उनके आगे प्रकाशित कर सकते हैं।","id":"Hanya saran tata bahasa yang memblokir — Anda dapat memublikasikannya setelah saran tersebut.","pt-BR":"Apenas sugestões gramaticais estão bloqueando – você pode publicar além delas.","ru":"Блокируются только предложения по грамматике — вы можете публиковать и без них.","ur":"صرف گرامر کی تجاویز مسدود کر رہی ہیں — آپ انہیں ماضی میں شائع کر سکتے ہیں۔","zh-CN":"只有语法建议会被阻止——您可以通过它们进行发布。"};

export function overview_publishfailed_grammaronly(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
