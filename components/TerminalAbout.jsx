import { useI18n } from "@/components/LanguageProvider";

const terminalLines = [
    {
        key: 'full_name',
        keyLabelPath: 'terminalAbout.lines1.fullname',
        value: 'Huỳnh Nguyễn Quốc Bảo (Harry)',
        type: 'string',
    },
    {
        key: 'date_of_birth',
        keyLabelPath: 'terminalAbout.lines1.dateofbirth',
        value: '17.07.2004',
        type: 'string',
    },
    {
        key: 'nationality',
      keyLabelPath: 'terminalAbout.lines1.nationality',
      value: 'terminalAbout.lines.nationality',
        type: 'string',
    },
    {
        key: 'home',
      keyLabelPath: 'terminalAbout.lines1.home',
      value: 'terminalAbout.lines.home',
        type: 'string',
    },
    {
        key: 'major',
      keyLabelPath: 'terminalAbout.lines1.major',
      value: 'terminalAbout.lines.major',
        type: 'string',
    },
    {
        key: 'role',
      keyLabelPath: 'terminalAbout.lines1.role',
      value: 'terminalAbout.lines.role',
        type: 'string',
    },
    {
        key: 'foreign_language',
      keyLabelPath: 'terminalAbout.lines1.language',
      value: 'terminalAbout.lines.language',
        type: 'string',
    },
];

const resolvePath = (obj, path) => path.split(".").reduce((acc, key) => acc?.[key], obj);

const renderValue = (line, t) => {
  if (line.type === 'array') {
    return (
      <>
        [
        {line.value.map((item, index) => (
          <span key={item}>
            <span className="text-amber-200">&quot;{item}&quot;</span>
            {index < line.value.length - 1 ? <span className="text-white/55">, </span> : null}
          </span>
        ))}
        ]
      </>
    );
  }

  const translatedValue = line.value.startsWith("terminalAbout.")
    ? resolvePath(t, line.value)
    : line.value;

  return <span className="text-amber-200">&quot;{translatedValue}&quot;</span>;
};

const renderKey = (line, t) => {
  const translatedKey = line.keyLabelPath ? resolvePath(t, line.keyLabelPath) : undefined;
  return translatedKey || line.key;
};

const TerminalAbout = () => {
  const { t } = useI18n();

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-lg">
      <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-accent/10" />
      <div className="absolute -right-16 top-8 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -left-12 bottom-6 h-36 w-36 rounded-full bg-cyan-200/10 blur-3xl" />

      <div className="relative border-b border-white/10 bg-black/20 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500 shadow-sm shadow-red-500/40" />
            <span className="h-3 w-3 rounded-full bg-yellow-400 shadow-sm shadow-yellow-400/40" />
            <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/40" />
          </div>
          <div className="flex-1 text-center font-mono text-[11px] uppercase tracking-[0.28em] text-white/45 sm:text-xs">
            harry@dev: ~/about
          </div>
        </div>
      </div>

      <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div className="space-y-5">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent/80">
              {t.terminalAbout.titleTag}
            </p>
            <h2 className="h2 max-w-lg">
              {t.terminalAbout.title}
            </h2>
          </div>

          <div className="space-y-3 text-white/72">
            <p>
              {t.terminalAbout.paragraph1}
            </p>
            <p>
              {t.terminalAbout.paragraph2}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-md">
              <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">{t.terminalAbout.currentFocus}</p>
              <p className="text-sm leading-relaxed text-white/82">
                {t.terminalAbout.currentFocusDesc}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-md">
              <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">{t.terminalAbout.workStyle}</p>
              <p className="text-sm leading-relaxed text-white/82">
                {t.terminalAbout.workStyleDesc}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gray-900/40 shadow-xl backdrop-blur-md">
          <div className="flex items-center border-b border-white/10 bg-white/5 px-4 py-3">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500 shadow-sm" />
              <div className="h-3 w-3 rounded-full bg-yellow-500 shadow-sm" />
              <div className="h-3 w-3 rounded-full bg-green-500 shadow-sm" />
            </div>
            <div className="flex-1 text-center font-mono text-xs text-gray-400">
              developer@portfolio: ~
            </div>
          </div>

          <div className="space-y-2 p-6 font-mono text-sm text-gray-300 md:text-[15px]">
            <p>
              <span className="text-teal-300">const</span>{' '}
              <span className="text-sky-300">harry_information</span>{' '}
              <span className="text-white/75">=</span>{' '}
              <span className="text-white/85">{'{'}</span>
            </p>

            <div className="space-y-2 pl-5">
              {terminalLines.map((line, index) => (
                <p key={line.key} className="leading-relaxed wrap-break-word">
                  <span className="text-sky-300">&quot;{renderKey(line, t)}&quot;</span>
                  <span className="text-white/65">: </span>
                  {renderValue(line, t)}
                  {index < terminalLines.length - 1 ? <span className="text-white/55">,</span> : null}
                </p>
              ))}
            </div>

            <p className="text-white/85">{'}'}</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalAbout;