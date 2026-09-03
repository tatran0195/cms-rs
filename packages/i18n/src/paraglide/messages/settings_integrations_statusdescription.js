import { getLocale } from '../runtime.js';

const translations = {"ar":"تظهر هنا فقط الإعدادات الآمنة للخصوصية ومعلومات الحالة.","bn":"শুধুমাত্র গোপনীয়তা-নিরাপদ কনফিগারেশন এবং স্বাস্থ্য সম্পর্কিত তথ্য এখানে দেখানো হয়েছে ।","de":"Hier werden nur datenschutzsichere Konfigurations- und Betriebsinformationen angezeigt.","en":"Only privacy-safe configuration and health information is shown here.","es":"Aquí solo se muestran la configuración segura para la privacidad y el estado operativo.","fr":"Seules les informations de configuration et d’état opérationnel respectueuses de la confidentialité sont affichées ici.","hi":"यहाँ केवल गोपनीयता-सुरक्षित कॉन्फ़िगरेशन और संचालन स्थिति दिखाई जाती है।","id":"Hanya konfigurasi yang aman bagi privasi dan status operasional yang ditampilkan di sini.","pt-BR":"Somente configurações seguras para a privacidade e o estado operacional são exibidos aqui.","ru":"Здесь показаны только безопасные для конфиденциальности настройки и сведения о состоянии.","ur":"صرف رازداری سے محفوظ کنفیگریشن اور صحت کی معلومات یہاں دکھائی گئی ہیں ۔","zh-CN":"此处仅显示隐私安全的配置和运行状态信息。"};

export function settings_integrations_statusdescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
