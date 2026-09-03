import { getLocale } from '../runtime.js';

const translations = {"ar":"عمال التكاملات الخاصة غير مفعّلين بعد. استخدم تبويب إعدادات Git لاستيراد المستودعات العامة.","bn":"প্রাইভেট ইন্টিগ্রেশন ওয়ার্কার এখনও সক্রিয় নয়। পাবলিক রিপোজিটরি আমদানির জন্য Git সেটিংস ট্যাব ব্যবহার করুন।","de":"Private Integrationshelfer sind noch nicht freigeschaltet. Verwenden Sie die Registerkarte Git-Einstellungen für öffentliche Repository-Importe.","en":"Private integration workers are not enabled yet. Use the Git settings tab for public repository imports.","es":"Los trabajadores de integración privados aún no están habilitados. Utilice la pestaña de configuración de Git para importar repositorios públicos.","fr":"Les travailleurs de l'intégration privée ne sont pas encore autorisés. Utilisez l'onglet Paramètres Git pour les importations de dépôts publics.","hi":"निजी इंटीग्रेशन वर्कर अभी सक्रिय नहीं हैं। सार्वजनिक रिपोजिटरी आयात के लिए Git सेटिंग्स टैब का उपयोग करें।","id":"Worker integrasi privat belum diaktifkan. Gunakan tab pengaturan Git untuk mengimpor repositori publik.","pt-BR":"Os workers de integração privada ainda não estão habilitados. Use a aba de configurações do Git para importar repositórios públicos.","ru":"Приватные обработчики интеграций пока не включены. Используйте вкладку настроек Git для импорта из публичных репозиториев.","ur":"نجی انضمام کے کارکنان ابھی تک فعال نہیں ہیں ۔ عوامی ذخیرہ کی درآمدات کے لیے Git ترتیبات ٹیب استعمال کریں ۔","zh-CN":"私有集成工作进程尚未启用。请使用 Git 设置选项卡导入公共仓库。"};

export function settings_integrations_selfhostedunavailable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
