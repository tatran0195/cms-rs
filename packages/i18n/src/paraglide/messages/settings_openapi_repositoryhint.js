import { getLocale } from '../runtime.js';

const translations = {"ar":"يستخدم مستودع GitHub أو GitLab العام المتصل والفرع وهذا المسار النسبي.","bn":"সংযুক্ত সর্বজনীন GitHub বা GitLab সংগ্রহস্থল, শাখা এবং এই সংগ্রহস্থল-সম্পর্কিত পথ ব্যবহার করে।","de":"Verwendet das verbundene öffentliche GitHub- oder GitLab-Repository, den Branch und diesen Repository-relativen Pfad.","en":"Uses the connected public GitHub or GitLab repository, branch, and this repository-relative path.","es":"Utiliza el repositorio público conectado GitHub o GitLab, la rama y esta ruta relativa al repositorio.","fr":"Utilise le référentiel public connecté GitHub ou GitLab, la branche et ce chemin relatif au référentiel.","hi":"कनेक्टेड सार्वजनिक GitHub या GitLab रिपॉजिटरी, शाखा और इस रिपॉजिटरी-सापेक्ष पथ का उपयोग करता है।","id":"Menggunakan repositori GitHub atau GitLab publik yang terhubung, cabang, dan jalur relatif repositori ini.","pt-BR":"Usa o repositório público conectado GitHub ou GitLab, ramificação e este caminho relativo ao repositório.","ru":"Использует подключенный общедоступный репозиторий GitHub или GitLab, ветвь и этот путь относительно репозитория.","ur":"منسلک عوامی GitHub یا GitLab ریپوزٹری، برانچ، اور اس ریپوزٹری سے متعلق راستے کا استعمال کرتا ہے۔","zh-CN":"使用连接的公共 GitHub 或 GitLab 存储库、分支以及此存储库相对路径。"};

export function settings_openapi_repositoryhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
