import { getLocale } from '../runtime.js';

const translations = {"ar":"مساحة العمل هذه نشطة على Nibleaf Cloud. تُدار تغييرات الخطط المدفوعة يدويًا بينما تبقى البيتا مجانية.","bn":"এই কর্মক্ষেত্রটি Nibleaf ক্লাউডে সক্রিয় আছে। বিটা বিনামূল্যে থাকাকালীন প্রদত্ত প্ল্যান পরিবর্তনগুলি ম্যানুয়ালি পরিচালনা করা হয়৷","de":"Dieser Arbeitsbereich ist in der Nibleaf Cloud aktiv. Während die Betaversion kostenlos ist, werden kostenpflichtige Planänderungen manuell vorgenommen.","en":"This workspace is active on Nibleaf Cloud. Paid plan changes are handled manually while the beta is free.","es":"Este espacio de trabajo está activo en Nibleaf Cloud. Los cambios en los planes pagos se manejan manualmente mientras que la versión beta es gratuita.","fr":"Cet espace de travail est actif sur Nibleaf Cloud. Les modifications du forfait payant sont gérées manuellement tandis que la version bêta est gratuite.","hi":"यह कार्यक्षेत्र Nibleaf क्लाउड पर सक्रिय है। बीटा मुफ़्त होने पर सशुल्क योजना परिवर्तन मैन्युअल रूप से नियंत्रित किए जाते हैं।","id":"Ruang kerja ini aktif di Nibleaf Cloud. Perubahan paket berbayar ditangani secara manual sedangkan versi beta gratis.","pt-BR":"Este espaço de trabalho está ativo na nuvem Nibleaf. As alterações no plano pago são tratadas manualmente enquanto a versão beta é gratuita.","ru":"Это рабочее пространство активно в облаке Nibleaf. Изменения платного плана обрабатываются вручную, пока бета-версия бесплатна.","ur":"یہ ورک اسپیس Nibleaf کلاؤڈ پر فعال ہے۔ بامعاوضہ پلان کی تبدیلیاں دستی طور پر سنبھالی جاتی ہیں جبکہ بیٹا مفت ہوتا ہے۔","zh-CN":"此工作区在 Nibleaf 云上处于活动状态。付费计划更改是手动处理的，而测试版是免费的。"};

export function settings_billing_notice_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
