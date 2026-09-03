import { getLocale } from '../runtime.js';

const translations = {"ar":"الحد الأقصى 5 م.ب. مع المراجع. تُجمع روابط ‎$ref العامة والمطلقة بأمان.","bn":"রেফারেন্স সহ সর্বোচ্চ 5 এমবি। সম্পূর্ণ পাবলিক $ref URLগুলি সুরক্ষিতভাবে বান্ডিল করা হয়৷","de":"Maximal 5 MB inklusive Referenzen. Absolut öffentliche $ref-URLs werden sicher gebündelt.","en":"Maximum 5 MB including references. Absolute public $ref URLs are bundled securely.","es":"Máximo 5 MB incluyendo referencias. Las URL $ref públicas absolutas se agrupan de forma segura.","fr":"Maximum 5 Mo, références comprises. Les URL $ref publiques absolues sont regroupées en toute sécurité.","hi":"संदर्भ सहित अधिकतम 5 एमबी। संपूर्ण सार्वजनिक $ref URL सुरक्षित रूप से बंडल किए गए हैं।","id":"Maksimum 5 MB termasuk referensi. URL $ref publik mutlak dipaketkan dengan aman.","pt-BR":"Máximo de 5 MB incluindo referências. URLs $ref públicos absolutos são agrupados com segurança.","ru":"Максимум 5 МБ, включая ссылки. Абсолютные общедоступные URL-адреса $ref надежно связываются.","ur":"حوالہ جات سمیت زیادہ سے زیادہ 5 MB۔ مطلق عوامی $ref URLs کو محفوظ طریقے سے بنڈل کیا گیا ہے۔","zh-CN":"最多 5 MB，包括参考文献。绝对公共 $ref URL 被安全地捆绑。"};

export function settings_openapi_uploadhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
