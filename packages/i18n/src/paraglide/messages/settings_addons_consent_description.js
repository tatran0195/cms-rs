import { getLocale } from '../runtime.js';

const translations = {"ar":"اطلب الموافقة قبل تحميل التحليلات الاختيارية. تعطيل هذه الإضافة يبقي تلك البرامج النصية محجوبة.","bn":"ঐচ্ছিক অ্যানালিটিক্স লোড হওয়ার আগে সম্মতি নিন। এই অ্যাড-অন বন্ধ রাখলে সংশ্লিষ্ট স্ক্রিপ্টগুলো অবরুদ্ধ থাকে।","de":"Bitten Sie vor dem Laden optionaler Analysen um Einwilligung. Wenn Sie dieses Add-on deaktivieren, bleiben die entsprechenden Skripte blockiert.","en":"Ask before optional analytics load. Disabling this add-on keeps those scripts blocked.","es":"Solicita consentimiento antes de cargar las analíticas opcionales. Al desactivar este complemento, esos scripts permanecen bloqueados.","fr":"Demandez le consentement avant de charger les analyses facultatives. La désactivation de ce module complémentaire maintient ces scripts bloqués.","hi":"वैकल्पिक एनालिटिक्स लोड होने से पहले सहमति माँगें। इस ऐड-ऑन को अक्षम करने पर वे स्क्रिप्ट ब्लॉक रहती हैं।","id":"Minta persetujuan sebelum analitik opsional dimuat. Menonaktifkan add-on ini membuat skrip tersebut tetap diblokir.","pt-BR":"Solicite o consentimento antes de carregar análises opcionais. Desativar este complemento mantém esses scripts bloqueados.","ru":"Запрашивайте согласие до загрузки необязательной аналитики. При отключении этого дополнения соответствующие скрипты остаются заблокированными.","ur":"اختیاری تجزیات لوڈ ہونے سے پہلے رضامندی طلب کریں۔ اس ایڈ آن کو غیر فعال رکھنے سے متعلقہ اسکرپٹس بلاک رہتے ہیں۔","zh-CN":"在加载可选分析前请求同意。停用此附加功能后，这些脚本仍会保持阻止状态。"};

export function settings_addons_consent_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
