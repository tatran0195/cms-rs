import { getLocale } from '../runtime.js';

const translations = {"ar":"استيراد مستودع عام بدلاً من ذلك","bn":"পরিবর্তে একটি পাবলিক সংগ্রহস্থল আমদানি করুন","de":"Importieren Sie stattdessen ein öffentliches Repository","en":"Import a public repository instead","es":"Importe un repositorio público en su lugar","fr":"Importez plutôt un référentiel public","hi":"इसके बजाय एक सार्वजनिक भंडार आयात करें","id":"Impor repositori publik sebagai gantinya","pt-BR":"Importe um repositório público","ru":"Вместо этого импортируйте публичный репозиторий","ur":"اس کے بجائے ایک عوامی ذخیرہ درآمد کریں۔","zh-CN":"改为导入公共存储库"};

export function settings_git_publicimport_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
