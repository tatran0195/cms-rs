import { getLocale } from '../runtime.js';

const translations = {"ar":"اضبط إعدادات المصدر ثم ابدأ الاستيراد عندما تصبح جاهزًا.","bn":"উত্স সেটিংস চয়ন করুন, তারপর প্রস্তুত হলে আমদানি করুন৷","de":"Wählen Sie die Quelleinstellungen und importieren Sie, wenn Sie fertig sind.","en":"Choose the source settings, then import when ready.","es":"Elija la configuración de origen y luego importe cuando esté listo.","fr":"Choisissez les paramètres source, puis importez lorsque vous êtes prêt.","hi":"स्रोत सेटिंग चुनें, फिर तैयार होने पर आयात करें।","id":"Pilih pengaturan sumber, lalu impor jika sudah siap.","pt-BR":"Escolha as configurações de origem e importe quando estiver pronto.","ru":"Выберите исходные настройки, а затем импортируйте их, когда будете готовы.","ur":"ماخذ کی ترتیبات کا انتخاب کریں، پھر تیار ہونے پر درآمد کریں۔","zh-CN":"选择源设置，然后在准备好后导入。"};

export function settings_import_configurehint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
