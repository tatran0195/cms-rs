import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تحميل بيانات التصدير. تحقّق من الاتصال وأعد فتح الصفحة.","bn":"এক্সপোর্ট ডেটা লোড করা যায়নি। সংযোগ পরীক্ষা করুন এবং এই পৃষ্ঠাটি আবার চেষ্টা করুন।","de":"Exportdaten konnten nicht geladen werden. Überprüfen Sie die Verbindung und versuchen Sie es erneut mit dieser Seite.","en":"Export data could not be loaded. Check the connection and try this page again.","es":"No se pudieron cargar los datos de exportación. Verifique la conexión y vuelva a intentar esta página.","fr":"Les données d'exportation n'ont pas pu être chargées. Vérifiez la connexion et réessayez cette page.","hi":"निर्यात डेटा लोड नहीं किया जा सका. कनेक्शन की जाँच करें और इस पृष्ठ को पुनः प्रयास करें।","id":"Data ekspor tidak dapat dimuat. Periksa koneksi dan coba halaman ini lagi.","pt-BR":"Não foi possível carregar os dados de exportação. Verifique a conexão e tente esta página novamente.","ru":"Не удалось загрузить данные экспорта. Проверьте соединение и попробуйте открыть эту страницу еще раз.","ur":"ایکسپورٹ ڈیٹا لوڈ نہیں ہو سکا۔ کنکشن چیک کریں اور اس صفحہ کو دوبارہ آزمائیں۔","zh-CN":"无法加载导出数据。检查连接并重试此页面。"};

export function settings_exports_workflow_loaderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
