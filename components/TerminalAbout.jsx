const terminalLines = [
    {
        key: 'full_name',
        value: 'Huỳnh Nguyễn Quốc Bảo (Harry)',
        type: 'string',
    },
    {
        key: 'date_of_birth',
        value: '17.07.2004',
        type: 'string',
    },
    {
        key: 'nationality',
        value: 'Vietnamese',
        type: 'string',
    },
    {
        key: 'home',
        value: 'Hồ Chí Minh City',
        type: 'string',
    },
    {
        key: 'major',
        value: 'Information Technology',
        type: 'string',
    },
    {
        key: 'role',
        value: 'Frontend Developer',
        type: 'string',
    },
    {
        key: 'foreign_language',
        value: 'English',
        type: 'string',
    },
];

const renderValue = (line) => {
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

  return <span className="text-amber-200">&quot;{line.value}&quot;</span>;
};

const TerminalAbout = () => {
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
            harry@portfolio: ~/about
          </div>
        </div>
      </div>

      <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div className="space-y-5">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent/80">
              About Me
            </p>
            <h2 className="h2 max-w-lg">
              A quiet builder who likes turning ideas into clean, usable interfaces.
            </h2>
          </div>

          <div className="space-y-3 text-white/72">
            <p>
              I focus on frontend work that feels calm, precise, and easy to navigate.
            </p>
            <p>
              My current direction combines interface craft with research-driven thinking, especially in projects where clarity and structure matter.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-md">
              <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">Current Focus</p>
              <p className="text-sm leading-relaxed text-white/82">
                Advanced React patterns, modern CSS systems, and interface performance.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-md">
              <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">Work Style</p>
              <p className="text-sm leading-relaxed text-white/82">
                Thoughtful execution, careful detail, and smooth user-facing interactions.
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
              <span className="text-sky-300">profile</span>{' '}
              <span className="text-white/75">=</span>{' '}
              <span className="text-white/85">{'{'}</span>
            </p>

            <div className="space-y-2 pl-5">
              {terminalLines.map((line, index) => (
                <p key={line.key} className="leading-relaxed wrap-break-word">
                  <span className="text-sky-300">&quot;{line.key}&quot;</span>
                  <span className="text-white/65">: </span>
                  {renderValue(line)}
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