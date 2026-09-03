import { getLocale } from '../runtime.js';

const translations = {"ar":"استخدم رمز BCP-47 مثل \"en\" أو \"pt-BR\"","bn":"একটি BCP-47 কোড ব্যবহার করুন যেমন \"en\" বা \"pt-BR\"","de":"Verwenden Sie einen BCP-47-Code wie „en“ oder „pt-BR“.","en":"Use a BCP-47 code like \"en\" or \"pt-BR\"","es":"Utilice un código BCP-47 como \"en\" o \"pt-BR\"","fr":"Utilisez un code BCP-47 comme \"en\" ou \"pt-BR\"","hi":"\"en\" या \"pt-BR\" जैसे BCP-47 कोड का उपयोग करें","id":"Gunakan kode BCP-47 seperti \"en\" atau \"pt-BR\"","pt-BR":"Use um código BCP-47 como \"en\" ou \"pt-BR\"","ru":"Используйте код BCP-47, например «en» или «pt-BR».","ur":"ایک BCP-47 کوڈ استعمال کریں جیسے \"en\" یا \"pt-BR\"","zh-CN":"使用 BCP-47 代码，如“en”或“pt-BR”"};

export function editor_addlanguage_codeinvalid(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
