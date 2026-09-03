import { getLocale } from '../runtime.js';

const translations = {"ar":"أضف نطاقك واتبع خطوات DNS، وسيتولى Nibleaf إصدار شهادة TLS وتجديدها تلقائياً.","bn":"আপনার ডোমেন যোগ করুন, DNS পদক্ষেপগুলি অনুসরণ করুন, এবং Nibleaf স্বয়ংক্রিয়ভাবে TLS প্রভিশন এবং রিনিউ করবে৷","de":"Fügen Sie Ihre Domain hinzu, befolgen Sie die DNS-Schritte und Nibleaf stellt TLS automatisch bereit und erneuert es.","en":"Add your domain, follow the DNS steps, and Nibleaf will automatically provision and renew TLS.","es":"Agregue su dominio, siga los pasos de DNS y Nibleaf aprovisionará y renovará TLS automáticamente.","fr":"Ajoutez votre domaine, suivez les étapes DNS et Nibleaf provisionnera et renouvellera automatiquement TLS.","hi":"अपना डोमेन जोड़ें, DNS चरणों का पालन करें, और Nibleaf स्वचालित रूप से TLS का प्रावधान और नवीनीकरण करेगा।","id":"Tambahkan domain Anda, ikuti langkah-langkah DNS, dan Nibleaf akan secara otomatis menyediakan dan memperbarui TLS.","pt-BR":"Adicione seu domínio, siga as etapas do DNS e Nibleaf provisionará e renovará automaticamente o TLS.","ru":"Добавьте свой домен, следуйте инструкциям DNS, и Nibleaf автоматически предоставит и обновит TLS.","ur":"اپنا ڈومین شامل کریں، DNS مراحل پر عمل کریں، اور Nibleaf خود بخود TLS کی فراہمی اور تجدید کرے گا۔","zh-CN":"添加您的域，按照 DNS 步骤操作，Nibleaf 将自动配置和续订 TLS。"};

export function settings_domain_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
