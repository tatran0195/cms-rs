import { getLocale } from '../runtime.js';

const translations = {"ar":"أغلق هذه النافذة وحاول مرة أخرى. سيبقى النشر معطلاً حتى يتم التحقق من الإعدادات الحالية.","bn":"এই ডায়ালগটি বন্ধ করুন এবং আবার চেষ্টা করুন৷ বর্তমান কনফিগারেশন চেক করা না হওয়া পর্যন্ত প্রকাশনা অক্ষম থাকে।","de":"Schließen Sie dieses Dialogfeld und versuchen Sie es erneut. Die Veröffentlichung bleibt deaktiviert, bis die aktuelle Konfiguration überprüft werden kann.","en":"Close this dialog and try again. Publishing stays disabled until the current configuration can be checked.","es":"Cierre este cuadro de diálogo e inténtelo de nuevo. La publicación permanece deshabilitada hasta que se pueda verificar la configuración actual.","fr":"Fermez cette boîte de dialogue et réessayez. La publication reste désactivée jusqu'à ce que la configuration actuelle puisse être vérifiée.","hi":"इस संवाद को बंद करें और पुनः प्रयास करें। जब तक वर्तमान कॉन्फ़िगरेशन की जाँच नहीं हो जाती तब तक प्रकाशन अक्षम रहता है।","id":"Tutup dialog ini dan coba lagi. Penerbitan tetap dinonaktifkan hingga konfigurasi saat ini dapat diperiksa.","pt-BR":"Feche esta caixa de diálogo e tente novamente. A publicação permanece desabilitada até que a configuração atual possa ser verificada.","ru":"Закройте это диалоговое окно и повторите попытку. Публикация остается отключенной до тех пор, пока не будет проверена текущая конфигурация.","ur":"اس ڈائیلاگ کو بند کریں اور دوبارہ کوشش کریں۔ اشاعت اس وقت تک غیر فعال رہتی ہے جب تک کہ موجودہ کنفیگریشن کو چیک نہ کیا جائے۔","zh-CN":"关闭此对话框并重试。在检查当前配置之前，发布将保持禁用状态。"};

export function publish_preflightfailedhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
