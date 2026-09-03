import { getLocale } from '../runtime.js';

const translations = {"ar":"أضف سجل DNS هذا لدى مزوّدك","bn":"আপনার প্রদানকারীতে এই DNS রেকর্ড যোগ করুন","de":"Fügen Sie diesen DNS-Eintrag bei Ihrem Provider hinzu","en":"Add this DNS record at your provider","es":"Agregue este registro DNS en su proveedor","fr":"Ajoutez cet enregistrement DNS chez votre fournisseur","hi":"इस DNS रिकॉर्ड को अपने प्रदाता के पास जोड़ें","id":"Tambahkan catatan DNS ini di penyedia Anda","pt-BR":"Adicione este registro DNS ao seu provedor","ru":"Добавьте эту DNS-запись у своего провайдера","ur":"اپنے فراہم کنندہ پر یہ DNS ریکارڈ شامل کریں۔","zh-CN":"在您的提供商处添加此 DNS 记录"};

export function settings_domain_dns_heading(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
