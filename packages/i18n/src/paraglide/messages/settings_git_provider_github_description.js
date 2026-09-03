import { getLocale } from '../runtime.js';

const translations = {"ar":"اربط مؤسسة واستضِف المحتوى على GitHub","bn":"একটি সংস্থা সংযুক্ত করুন এবং GitHub এ সামগ্রী হোস্ট করুন","de":"Verbinden Sie eine Organisation und hosten Sie Inhalte auf GitHub","en":"Connect an org and host content on GitHub","es":"Conecte una organización y aloje contenido en GitHub","fr":"Connectez une organisation et hébergez du contenu sur GitHub","hi":"GitHub पर एक संगठन और होस्ट सामग्री कनेक्ट करें","id":"Hubungkan organisasi dan host konten di GitHub","pt-BR":"Conecte uma organização e hospede conteúdo em GitHub","ru":"Подключите организацию и разместите контент на GitHub.","ur":"GitHub پر ایک تنظیم کو مربوط کریں اور مواد کی میزبانی کریں","zh-CN":"连接组织并在 GitHub 上托管内容"};

export function settings_git_provider_github_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
