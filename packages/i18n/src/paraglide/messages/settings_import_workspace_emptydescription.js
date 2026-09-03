import { getLocale } from '../runtime.js';

const translations = {"ar":"استورد مستودع Mintlify أو ملف Ghost هنا، أو افتح إعدادات Git للمستودع المرتبط.","bn":"এখানে একটি Mintlify সংগ্রহস্থল বা ঘোস্ট এক্সপোর্ট আমদানি করুন, অথবা একটি সংযুক্ত সংগ্রহস্থলের জন্য গিট সেটিংস খুলুন।","de":"Importieren Sie hier ein Mintlify-Repository oder einen Ghost-Export oder öffnen Sie die Git-Einstellungen für ein verbundenes Repository.","en":"Import a Mintlify repository or Ghost export here, or open Git settings for a connected repository.","es":"Importe un repositorio Mintlify o una exportación de Ghost aquí, o abra la configuración de Git para un repositorio conectado.","fr":"Importez un référentiel Mintlify ou une exportation Ghost ici, ou ouvrez les paramètres Git pour un référentiel connecté.","hi":"यहां Mintlify रिपॉजिटरी या घोस्ट एक्सपोर्ट आयात करें, या कनेक्टेड रिपॉजिटरी के लिए Git सेटिंग्स खोलें।","id":"Impor repositori Mintlify atau ekspor Ghost di sini, atau buka pengaturan Git untuk repositori yang terhubung.","pt-BR":"Importe um repositório Mintlify ou exporte o Ghost aqui ou abra as configurações do Git para um repositório conectado.","ru":"Импортируйте репозиторий Mintlify или экспортируйте Ghost здесь или откройте настройки Git для подключенного репозитория.","ur":"یہاں ایک Mintlify ذخیرہ درآمد کریں یا گھوسٹ ایکسپورٹ کریں، یا منسلک ریپوزٹری کے لیے Git کی ترتیبات کھولیں۔","zh-CN":"在此处导入 Mintlify 存储库或 Ghost 导出，或打开已连接存储库的 Git 设置。"};

export function settings_import_workspace_emptydescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
