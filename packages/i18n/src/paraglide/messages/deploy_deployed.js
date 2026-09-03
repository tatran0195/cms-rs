import { getLocale } from '../runtime.js';

const translations = {"ar":"تم النشر بنجاح","bn":"সফলভাবে স্থাপন করা হয়েছে","de":"Erfolgreich bereitgestellt","en":"Deployed successfully","es":"Implementado exitosamente","fr":"Déployé avec succès","hi":"सफलतापूर्वक तैनात किया गया","id":"Berhasil diterapkan","pt-BR":"Implantado com sucesso","ru":"Развернуто успешно","ur":"کامیابی سے تعینات","zh-CN":"部署成功"};

export function deploy_deployed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
