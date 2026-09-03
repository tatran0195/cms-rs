import { getLocale } from '../runtime.js';

const translations = {"ar":"أنشئ تصديرًا لمرة واحدة أو شغّل جدولاً لرؤية الحالة والتنزيلات هنا.","bn":"একটি এককালীন রপ্তানি তৈরি করুন বা এখানে স্থিতি এবং ডাউনলোডগুলি দেখতে একটি সময়সূচী চালান৷","de":"Erstellen Sie hier einen einmaligen Export oder führen Sie einen Zeitplan aus, um den Status und die Downloads anzuzeigen.","en":"Create a one-time export or run a schedule to see status and downloads here.","es":"Cree una exportación única o ejecute una programación para ver el estado y las descargas aquí.","fr":"Créez une exportation unique ou exécutez une planification pour voir l'état et les téléchargements ici.","hi":"यहां स्थिति और डाउनलोड देखने के लिए एक बार का निर्यात बनाएं या शेड्यूल चलाएं।","id":"Buat ekspor satu kali atau jalankan jadwal untuk melihat status dan unduhan di sini.","pt-BR":"Crie uma exportação única ou execute uma programação para ver o status e os downloads aqui.","ru":"Создайте однократный экспорт или запустите расписание, чтобы увидеть здесь статус и загрузки.","ur":"یہاں اسٹیٹس اور ڈاؤن لوڈ دیکھنے کے لیے ایک بار برآمد کریں یا شیڈول چلائیں۔","zh-CN":"创建一次性导出或运行计划以在此处查看状态和下载。"};

export function settings_exports_workflow_norunsdesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
