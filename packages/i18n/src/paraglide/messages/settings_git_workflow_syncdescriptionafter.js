import { getLocale } from '../runtime.js';

const translations = {"ar":"وقارنه بآخر أساس مشترك في Nibleaf، ثم راجع التعارضات قبل استبدال أي شيء.","bn":"এটিকে Nibleaf এর শেষ সাধারণ বেসলাইনের সাথে তুলনা করুন এবং কিছু ওভাররাইট করার আগে দ্বন্দ্ব পর্যালোচনা করুন।","de":"Vergleichen Sie es mit der letzten gemeinsamen Baseline von Nibleaf und überprüfen Sie Konflikte, bevor etwas überschrieben wird.","en":"compare it with Nibleaf’s last common baseline, and review conflicts before anything is overwritten.","es":"compárelo con la última línea base común de Nibleaf y revise los conflictos antes de sobrescribir algo.","fr":"comparez-le avec la dernière référence commune de Nibleaf et examinez les conflits avant que quoi que ce soit ne soit écrasé.","hi":"इसकी तुलना Nibleaf की अंतिम सामान्य आधार रेखा से करें, और किसी भी चीज़ को अधिलेखित करने से पहले विवादों की समीक्षा करें।","id":"bandingkan dengan baseline umum terakhir Nibleaf, dan tinjau konflik sebelum ada yang ditimpa.","pt-BR":"compare-o com a última linha de base comum de Nibleaf e revise os conflitos antes que qualquer coisa seja substituída.","ru":"сравните его с последним общим базовым уровнем Nibleaf и просмотрите конфликты, прежде чем что-либо будет перезаписано.","ur":"اس کا موازنہ Nibleaf کی آخری عام بیس لائن سے کریں، اور کسی بھی چیز کو اوور رائٹ کرنے سے پہلے تنازعات کا جائزہ لیں۔","zh-CN":"将其与 Nibleaf 的最后一个公共基线进行比较，并在覆盖任何内容之前检查冲突。"};

export function settings_git_workflow_syncdescriptionafter(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
