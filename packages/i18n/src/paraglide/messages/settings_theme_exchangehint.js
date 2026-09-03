import { getLocale } from '../runtime.js';

const translations = {"ar":"صدّر JSON قابلًا للفحص أو عاين استيرادًا آمنًا ذا إصدار قبل تطبيقه على المسودة.","bn":"পরিদর্শনযোগ্য JSON রপ্তানি করুন বা এই খসড়াটিতে প্রয়োগ করার আগে একটি নিরাপদ সংস্করণযুক্ত আমদানির পূর্বরূপ দেখুন।","de":"Exportieren Sie überprüfbare JSON oder zeigen Sie eine Vorschau eines sicheren versionierten Imports an, bevor Sie ihn auf diesen Entwurf anwenden.","en":"Export inspectable JSON or preview a safe versioned import before applying it to this draft.","es":"Exporte el JSON inspeccionable o obtenga una vista previa de una importación versionada segura antes de aplicarla a este borrador.","fr":"Exportez le JSON inspectable ou prévisualisez une importation versionnée sécurisée avant de l'appliquer à ce brouillon.","hi":"निरीक्षण योग्य JSON निर्यात करें या इस ड्राफ्ट पर लागू करने से पहले एक सुरक्षित संस्करण वाले आयात का पूर्वावलोकन करें।","id":"Ekspor JSON yang dapat diperiksa atau pratinjau impor berversi aman sebelum menerapkannya ke draf ini.","pt-BR":"Exporte JSON inspecionável ou visualize uma importação com versão segura antes de aplicá-la a este rascunho.","ru":"Экспортируйте проверяемый JSON или просмотрите импорт с безопасной версией, прежде чем применять его к этому черновику.","ur":"قابل معائنہ JSON برآمد کریں یا اس مسودے پر لاگو کرنے سے پہلے محفوظ ورژن والی درآمد کا جائزہ لیں۔","zh-CN":"导出可检查的 JSON 或在将其应用于此草稿之前预览安全版本化导入。"};

export function settings_theme_exchangehint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
