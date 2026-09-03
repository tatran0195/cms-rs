import { getLocale } from '../runtime.js';

const translations = {"ar":"أدِر مستنداتك كملفات Markdown في مستودع Git عام، ثم اسحب التحديثات إلى Nibleaf عند الحاجة.","bn":"একটি পাবলিক গিট রিপোজিটরিতে Markdown ফাইল হিসাবে আপনার ডক্স পরিচালনা করুন, তারপর প্রয়োজন হলে আপডেটগুলিকে Nibleaf এ টানুন।","de":"Verwalten Sie Ihre Dokumente als Markdown-Dateien in einem öffentlichen Git-Repository und ziehen Sie bei Bedarf Aktualisierungen in Nibleaf.","en":"Manage your docs as Markdown files in a public Git repository, then pull updates into Nibleaf when needed.","es":"Administre sus documentos como archivos Markdown en un repositorio público de Git y luego extraiga actualizaciones en Nibleaf cuando sea necesario.","fr":"Gérez vos documents en tant que fichiers Markdown dans un référentiel Git public, puis extrayez les mises à jour dans Nibleaf si nécessaire.","hi":"अपने दस्तावेज़ों को सार्वजनिक Git रिपॉजिटरी में Markdown फ़ाइलों के रूप में प्रबंधित करें, फिर आवश्यकता पड़ने पर अपडेट को Nibleaf में खींचें।","id":"Kelola dokumen Anda sebagai file Markdown di repositori Git publik, lalu tarik pembaruan ke Nibleaf bila diperlukan.","pt-BR":"Gerencie seus documentos como arquivos Markdown em um repositório Git público e, em seguida, extraia atualizações para Nibleaf quando necessário.","ru":"Управляйте своими документами как файлами Markdown в общедоступном репозитории Git, а затем при необходимости извлекайте обновления в Nibleaf.","ur":"عوامی Git ذخیرہ میں اپنی دستاویزات کو Markdown فائلوں کے بطور منظم کریں، پھر ضرورت پڑنے پر اپ ڈیٹس کو Nibleaf میں کھینچیں۔","zh-CN":"将您的文档作为公共 Git 存储库中的 Markdown 文件进行管理，然后在需要时将更新拉取到 Nibleaf 中。"};

export function settings_git_access_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
