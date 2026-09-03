import { getLocale } from '../runtime.js';

const translations = {"ar":"إضافة رابط مدمج لصفحة سجل الإصدارات المولّدة تلقائيًا.","bn":"স্বয়ংক্রিয়ভাবে তৈরি রিলিজ ইতিহাস পৃষ্ঠায় একটি অন্তর্নির্মিত লিঙ্ক যোগ করুন।","de":"Fügen Sie einen integrierten Link zur automatisch generierten Versionsverlaufsseite hinzu.","en":"Add a built-in link to the auto-generated release history page.","es":"Agregue un enlace integrado a la página del historial de versiones generada automáticamente.","fr":"Ajoutez un lien intégré vers la page d'historique des versions générée automatiquement.","hi":"स्वतः-निर्मित रिलीज़ इतिहास पृष्ठ पर एक अंतर्निहित लिंक जोड़ें।","id":"Tambahkan tautan bawaan ke halaman riwayat rilis yang dibuat secara otomatis.","pt-BR":"Adicione um link integrado à página de histórico de lançamentos gerada automaticamente.","ru":"Добавьте встроенную ссылку на автоматически созданную страницу истории выпусков.","ur":"خود کار طریقے سے تیار کردہ ریلیز کی تاریخ کے صفحے پر ایک بلٹ ان لنک شامل کریں۔","zh-CN":"添加指向自动生成的发布历史记录页面的内置链接。"};

export function settings_navbar_changelog_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
