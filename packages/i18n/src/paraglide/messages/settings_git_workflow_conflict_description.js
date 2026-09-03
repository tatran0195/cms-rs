import { getLocale } from '../runtime.js';

const translations = {"ar":"راجع الأساس وNibleaf وGit. لن يُستبدل شيء حتى تختار حلاً صريحًا لكل ملف.","bn":"পর্যালোচনা বেস, Nibleaf, এবং গিট। প্রতিটি ফাইলের একটি স্পষ্ট রেজোলিউশন না হওয়া পর্যন্ত কিছুই ওভাররাইট করা হয় না।","de":"Bewertungsbasis, Nibleaf und Git. Es wird nichts überschrieben, bis jede Datei eine explizite Auflösung hat.","en":"Review base, Nibleaf, and Git. Nothing is overwritten until every file has an explicit resolution.","es":"Base de revisión, Nibleaf y Git. No se sobrescribe nada hasta que cada archivo tenga una resolución explícita.","fr":"Base de révision, Nibleaf et Git. Rien n'est écrasé jusqu'à ce que chaque fichier ait une résolution explicite.","hi":"समीक्षा आधार, Nibleaf, और Git। जब तक प्रत्येक फ़ाइल का स्पष्ट रिज़ॉल्यूशन न हो तब तक कुछ भी अधिलेखित नहीं किया जाता है।","id":"Basis ulasan, Nibleaf, dan Git. Tidak ada yang ditimpa sampai setiap file memiliki resolusi eksplisit.","pt-BR":"Revise a base, Nibleaf e Git. Nada é sobrescrito até que cada arquivo tenha uma resolução explícita.","ru":"Просмотрите базу, Nibleaf и Git. Ничто не перезаписывается до тех пор, пока каждый файл не будет иметь явное разрешение.","ur":"جائزہ کی بنیاد، Nibleaf، اور Git۔ جب تک ہر فائل میں واضح ریزولوشن نہ ہو کچھ بھی اوور رائٹ نہیں ہوتا ہے۔","zh-CN":"查看基础、Nibleaf 和 Git。在每个文件都有明确的解决方案之前，不会覆盖任何内容。"};

export function settings_git_workflow_conflict_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
