import { getLocale } from '../runtime.js';

const translations = {"ar":"لا تظهر بيانات الاعتماد التي يديرها المشغّل ولا تتغير من إعدادات المشروع.","bn":"ইনস্ট্যান্স-পরিচালিত শংসাপত্র কখনও প্রজেক্ট সেটিংসে প্রকাশ বা পরিবর্তন করা হয় না।","de":"Instanzverwaltete Anmeldeinformationen werden niemals in den Projekteinstellungen angezeigt oder geändert.","en":"Instance-managed credentials are never exposed or changed from project settings.","es":"Las credenciales gestionadas por instancias nunca se exponen ni cambian desde la configuración del proyecto.","fr":"Les identifiants gérés par instance ne sont jamais exposés ou modifiés à partir des paramètres du projet.","hi":"इंस्टेंस-प्रबंधित क्रेडेंशियल कभी परियोजना सेटिंग्स से उजागर या परिवर्तित नहीं होते हैं।","id":"Kredensial yang dikelola instans tidak pernah ditampilkan atau diubah dari pengaturan proyek.","pt-BR":"Credenciais gerenciadas pela instância nunca são expostas nem alteradas nas configurações do projeto.","ru":"Управляемые экземпляром учётные данные никогда не отображаются и не изменяются в настройках проекта.","ur":"انسٹنس کے زیر انتظام اسناد کو کبھی بھی پراجیکٹ کی ترتیبات میں ظاہر یا تبدیل نہیں کیا جاتا۔","zh-CN":"由实例管理的凭据绝不会在项目设置中显示或更改。"};

export function settings_integrations_manageddescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
