import { getLocale } from '../runtime.js';

const translations = {"ar":"تحقّق من مصدر OpenAPI 3.x واحد، وعاين المسار المُعد، ثم أدرجه في عملية النشر الثابتة التالية للموقع.","bn":"একটি OpenAPI 3.x উৎস যাচাই করুন, কনফিগার করা রুটের পূর্বরূপ দেখুন, তারপর এটিকে পরবর্তী অপরিবর্তনীয় সাইট প্রকাশে অন্তর্ভুক্ত করুন।","de":"Validieren Sie eine OpenAPI 3.x-Quelle, zeigen Sie eine Vorschau der konfigurierten Route an und fügen Sie sie dann in die nächste unveränderliche Site-Veröffentlichung ein.","en":"Validate one OpenAPI 3.x source, preview the configured route, then include it in the next immutable site publish.","es":"Valide una fuente OpenAPI 3.x, obtenga una vista previa de la ruta configurada y luego inclúyala en la siguiente publicación del sitio inmutable.","fr":"Validez une source OpenAPI 3.x, prévisualisez la route configurée, puis incluez-la dans la prochaine publication du site immuable.","hi":"एक OpenAPI 3.x स्रोत को मान्य करें, कॉन्फ़िगर किए गए रूट का पूर्वावलोकन करें, फिर इसे अगले अपरिवर्तनीय साइट प्रकाशन में शामिल करें।","id":"Validasi satu sumber OpenAPI 3.x, pratinjau rute yang dikonfigurasi, lalu sertakan dalam publikasi situs abadi berikutnya.","pt-BR":"Valide uma fonte OpenAPI 3.x, visualize a rota configurada e inclua-a na próxima publicação imutável do site.","ru":"Подтвердите один источник OpenAPI 3.x, просмотрите настроенный маршрут, а затем включите его в следующую публикацию неизменяемого сайта.","ur":"ایک OpenAPI 3.x ماخذ کی توثیق کریں، ترتیب شدہ راستے کا پیش منظر دیکھیں، پھر اسے اگلی ناقابل تبدیلی سائٹ کی اشاعت میں شامل کریں۔","zh-CN":"验证一个 OpenAPI 3.x 源，预览配置的路由，然后将其包含在下一个不可变站点发布中。"};

export function settings_openapi_emptydescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
