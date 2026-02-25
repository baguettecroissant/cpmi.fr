export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-xl text-center">
        {/* Logo / Icon */}
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl leading-tight">
          CPMI - Expert en Rénovation et Montage Industriel - Site en maintenance
        </h1>

        <div className="mt-6 h-1 w-16 mx-auto bg-amber-500 rounded-full" />

        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Notre site fait actuellement l&apos;objet d&apos;une refonte technique
          complète. Nous serons de retour très prochainement avec nos nouvelles
          offres de prestations industrielles.
        </p>

        <div className="mt-10 text-sm text-gray-400">
          © {new Date().getFullYear()} CPMI — Tous droits réservés
        </div>
      </div>
    </main>
  );
}
