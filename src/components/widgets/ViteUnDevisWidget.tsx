'use client';

import { useEffect, useRef } from 'react';

interface ViteUnDevisWidgetProps {
    keyword?: string;
}

export function ViteUnDevisWidget({ keyword }: ViteUnDevisWidgetProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const boxId = '9043e5d877';
    const divId = `v${boxId}d`;
    const partenaireId = '2353';

    useEffect(() => {
        // Clear previous injection
        if (containerRef.current) {
            containerRef.current.innerHTML = '';
        }

        // Configuration pour ViteUnDevis
        (window as any).vud_partenaire_id = partenaireId;
        const finalKeyword = keyword || document.title;
        (window as any).vud_keyword = encodeURI(finalKeyword);
        (window as any).vud_box_id = boxId;

        // Création du script statique
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `//www.viteundevis.com/marqueblanche/?b=${boxId}&p=${partenaireId}&c=${(window as any).vud_keyword}`;
        script.async = true;

        // Injection dans le DOM
        document.body.appendChild(script);

        return () => {
            // Nettoyage au démontage du composant
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [keyword]);

    return (
        <div className="w-full relative min-h-[600px] flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-100 p-2">
            {/* L'id spécifique requis par viteundevis */}
            <div id={divId} ref={containerRef} className="w-full z-10"></div>

            {/* Loading text (will be covered by the widget once loaded) */}
            <div className="absolute text-slate-400 animate-pulse text-sm font-medium z-0">
                Chargement du formulaire sécurisé...
            </div>
        </div>
    );
}
