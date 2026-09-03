import { getLocale } from '../runtime.js';

const translations = {"ar":"قد يستغرق انتشار سجلات DNS بضع دقائق.","bn":"DNS প্রচার করতে কয়েক মিনিট সময় নিতে পারে।","de":"Die Verbreitung von DNS kann einige Minuten dauern.","en":"DNS can take a few minutes to propagate.","es":"El DNS puede tardar unos minutos en propagarse.","fr":"La propagation du DNS peut prendre quelques minutes.","hi":"DNS को प्रचारित होने में कुछ मिनट लग सकते हैं।","id":"DNS memerlukan waktu beberapa menit untuk disebarkan.","pt-BR":"O DNS pode levar alguns minutos para se propagar.","ru":"Распространение DNS может занять несколько минут.","ur":"DNS کو پھیلانے میں چند منٹ لگ سکتے ہیں۔","zh-CN":"DNS 可能需要几分钟的时间来传播。"};

export function settings_domain_dns_propagation(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
