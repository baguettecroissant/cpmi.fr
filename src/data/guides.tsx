import React from 'react';

export type GuideCategory = 'ascenseur' | 'climatisation' | 'borne';

export interface Guide {
    slug: string;
    title: string;
    h1: string;
    metaDescription: string;
    category: GuideCategory;
    imagePath: string; // Placeholder for now
    readTime: string;
    content: React.ReactNode;
}

export const GUIDES: readonly Guide[] = [
    {
        slug: 'normes-accessibilite-pmr-ascenseur-erp',
        title: "Normes Accessibilité PMR Ascenseurs ERP 2026 | Guide Légal",
        h1: "Normes d'accessibilité PMR pour les ascenseurs en ERP (2026)",
        metaDescription: "Guide complet sur les normes d'accessibilité PMR (Personnes à Mobilité Réduite) pour les ascenseurs en Établissement Recevant du Public (ERP). Réglementation EN 81-70.",
        category: 'ascenseur',
        imagePath: '/guide_ascenseur_pmr.png',
        readTime: '7 min',
        content: (
            <>
                <p className="lead">L'accessibilité des bâtiments tertiaires et commerciaux aux <strong>Personnes à Mobilité Réduite (PMR)</strong> n'est plus une simple recommandation d'usage, c'est une <strong>obligation légale stricte</strong> pour tous les Établissements Recevant du Public (ERP) en France. L'ascenseur constitue la clé de voûte de ce parcours d'accessibilité.</p>
                <p>Que vous gériez un hôtel, un immeuble de bureaux, ou une clinique, la mise aux normes de votre parc d'élévation est scrutée de près par les commissions d'accessibilité et de sécurité.</p>

                <h2>1. Le cadre légal de l'accessibilité dans les ERP</h2>
                <p>Depuis la loi historique du 11 février 2005 pour l'égalité des droits et des chances, l'accessibilité universelle des ERP est imposée. La réglementation stipule que toute personne souffrant d'un handicap (moteur, visuel, auditif ou cognitif) doit pouvoir accéder aux locaux, y circuler, et y recevoir les informations dans les mêmes conditions d'autonomie qu'une personne valide.</p>
                <p>En matière d'appareils de levage et d'ascenseurs, c'est la <strong>norme européenne EN 81-70</strong> (version mise à jour en 2018 et révisée régulièrement) qui dicte les règles techniques de conception, d'interface et d'installation des cabines pour garantir leur parfaite accessibilité.</p>

                <h2>2. Dimensions réglementaires obligatoires (Norme EN 81-70)</h2>
                <p>Les dimensions intérieures de la cabine varient selon le type de bâtiment (neuf, existant, fréquentation), mais pour un ERP classique, les standards minimaux sont non-négociables :</p>
                <ul>
                    <li><strong>Largeur minimale :</strong> 1,10 mètre (pour permettre le passage fluide d'un grand fauteuil roulant électrique).</li>
                    <li><strong>Profondeur minimale :</strong> 1,40 mètre (indispensable pour pouvoir entrer et manœuvrer légèrement avec le fauteuil sans cogner les portes). En cas de double service (portes opposées), d'autres cotes peuvent s'appliquer.</li>
                    <li><strong>Les portes palières et cabine :</strong> La largeur de passage libre (utile) doit être d'au moins <strong>0,90 mètre</strong>. Elles doivent obligatoirement être équipées d'un système d'ouverture automatique coulissante (interdiction des portes battantes manuelles) avec cellules photoélectriques pour empêcher la fermeture sur un usager.</li>
                    <li><strong>Précision d'arrêt au palier :</strong> Le décalage vertical entre le plancher de la cabine et le sol du palier d'étage ne doit pas excéder <strong>1 cm</strong> pour éviter la formation d'une butée (risque de trébuchement ou de blocage du fauteuil).</li>
                </ul>

                <h2>3. Équipements obligatoires à l'intérieur de la cabine</h2>
                <p>La cabine doit comporter plusieurs éléments d'assistance passive et active très spécifiques :</p>
                <ul>
                    <li><strong>Miroir de courtoisie (et de sécurité) :</strong> Placé sur la paroi du fond (lorsque la cabine ne permet pas le demi-tour d'un fauteuil), il permet à un utilisateur en fauteuil roulant de voir les obstacles derrière lui en reculant pour sortir. Le bas du miroir doit être situé à min. 30 cm du sol.</li>
                    <li><strong>Main courante ergonomique :</strong> Installée à une hauteur comprise entre 80 et 90 cm sur au moins l'une des parois latérales, elle aide les personnes âgées ou mal-marchantes à s'équilibrer pendant le trajet.</li>
                    <li><strong>Panneau de commande (boîte à boutons) :</strong> Les boutons de destination doivent fortement contraster avec leur plaque de support, comporter des caractères en relief (et le plus souvent en braille), et être situés à une hauteur accessible : entre 90 cm et 1,20 m du sol.</li>
                    <li><strong>Annonces visuelles et sonores :</strong> Indication de l'étage desservi par une synthèse vocale (ex. "Étage 2, ouverture des portes") pour les personnes malvoyantes, doublée d'un affichage digital lumineux et contrasté pour les personnes malentendantes.</li>
                    <li><strong>Boucle magnétique :</strong> Souvent intégrée au système d'interphonie pour permettre la communication d'urgence aux porteurs d'appareils auditifs.</li>
                </ul>

                <h2>4. Sanctions pénales et administratives en cas de non-conformité</h2>
                <p>Ne pas respecter les règles d'accessibilité PMR lors d'une construction, d'une restructuration, ou ne pas maintenir l'équipement accessible expose l'exploitant de l'ERP à de très lourdes sanctions pénales.</p>
                <p>L'amende peut atteindre <strong>45 000 € (et jusqu'à 225 000 € pour une personne morale)</strong>. Au-delà de l'amende, la commission communale de sécurité et d'accessibilité peut demander l'interdiction pure et simple d'exploiter l'établissement (<strong>fermeture administrative immédiate</strong> du bâtiment).</p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl shadow-sm">
                    <h3 className="text-2xl font-bold text-blue-900 mt-0 mb-3">Mettez votre bâtiment aux normes PMR</h3>
                    <p className="text-blue-800 mb-6 font-medium">Votre bâtiment ERP tertiaire nécessite la mise aux normes PMR de son vieil ascenseur, ou la création d'une nouvelle gaine accessible ? Évitez le risque de fermeture administrative.</p>
                    <a href="/devis" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition shadow-md">Demandez une étude et des devis comparatifs</a>
                </div>
            </>
        )
    },
    {
        slug: 'prix-installation-ascenseur-monte-charge',
        title: "Prix Installation Ascenseur & Monte-Charge 2026 | B2B",
        h1: "Coût d'installation d'un ascenseur ERP ou monte-charge professionnel",
        metaDescription: "Quel est le prix pour installer un ascenseur ou un monte-charge en entreprise / ERP en 2026 ? Détail des tarifs, aides et frais annexes.",
        category: 'ascenseur',
        imagePath: '/guide_ascenseur_prix.png',
        readTime: '6 min',
        content: (
            <>
                <p className="lead">L'installation d'un ascenseur ERP ou d'un monte-charge industriel est un investissement structurel lourd pour une entreprise. Comprendre la décomposition des coûts est essentiel pour bien budgétiser votre projet immobilier.</p>

                <h2>1. Tarif moyen d'un ascenseur ERP</h2>
                <p>Il n'existe pas de "prix catalogue" fixe, car chaque projet est du sur-mesure (nombre d'étages, charge utile, finitions). Cependant, voici les fourchettes tarifaires constatées en 2026 :</p>
                <ul>
                    <li><strong>Ascenseur standard (2 à 3 niveaux) :</strong> Entre 20 000 € et 35 000 € HT.</li>
                    <li><strong>Ascenseur moyen/haut trafic (4 à 8 niveaux) :</strong> Entre 35 000 € et 65 000 € HT.</li>
                    <li><strong>Création de pylône autoportant (extérieur) :</strong> Ajoutez un surcoût de 15 000 € à 25 000 € pour la structure maçonnée ou vitrée.</li>
                </ul>

                <h2>2. Les facteurs qui influencent le devis</h2>
                <p>Le devis de votre ascensoriste variera principalement selon :</p>
                <ul>
                    <li><strong>La technologie :</strong> Hydraulique (idéal pour peu d'étages, machinerie déportée) vs Électrique à traction (sans salle des machines, rapide, idéal pour immeubles hauts).</li>
                    <li><strong>La charge utile :</strong> De 4 à plus de 21 personnes. Un ascenseur brancardier pour milieu médical coûtera mécaniquement plus cher.</li>
                    <li><strong>La conception de la gaine :</strong> En gaine maçonnée (souvent moins cher si intégrée à la construction) ou en pylône métallique autoporteur (parfait pour la rénovation).</li>
                    <li><strong>Les finitions :</strong> Parois vitrées, inox brossé, écrans LCD connectés.</li>
                </ul>

                <h2>3. Le cas des monte-charges industriels</h2>
                <p>Si vous avez besoin de déplacer du matériel lourd entre des niveaux (entrepôt, usine, restaurant), le monte-charge est la solution. Séparons les deux types :</p>
                <ul>
                    <li><strong>Monte-charge non accompagné :</strong> Réservé aux marchandises, interdiction stricte de transport humain. Prix : 8 000 € à 20 000 € HT. (Ex : monte-plat de restaurant).</li>
                    <li><strong>Monte-charge accompagné :</strong> Permet au cariste de monter avec sa marchandise (chariot élévateur, transpalette). Les normes de sécurité s'approchent de celles d'un ascenseur classique. Prix : 25 000 € à 50 000 € HT selon le tonnage.</li>
                </ul>

                <h2>4. Maintenance et frais cachés</h2>
                <p>N'oubliez pas d'inclure les frais de fonctionnement :</p>
                <ul>
                    <li><strong>Contrat de maintenance obligatoire :</strong> Comptez entre 1 500 € et 3 000 € / an.</li>
                    <li><strong>Ligne téléphonique d'urgence :</strong> Abonnement mensuel 4G ou filaire pour la téléalarme en cabine.</li>
                    <li><strong>Contrôle technique quinquennal :</strong> Obligatoire tous les 5 ans, environ 400 € à 800 €.</li>
                </ul>

                <div className="bg-slate-50 border border-slate-200 p-6 my-8 rounded-xl text-center">
                    <h3 className="text-xl font-bold text-slate-800 mt-0">Budgetisez précisément votre projet</h3>
                    <p className="text-slate-600 mb-6">Comparez les tarifs de 3 ascensoristes nationaux et locaux pour votre établissement.</p>
                    <a href="/devis" className="inline-block bg-slate-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition shadow-lg">Demander mes 3 devis gratuits</a>
                </div>
            </>
        )
    },
    {
        slug: 'reglementation-f-gas-fluides-frigorigenes',
        title: "Réglementation F-Gas Climatisation Entreprise | Guide 2026",
        h1: "Réglementation F-Gas et fluides frigorigènes : obligations pour le Tertiaire",
        metaDescription: "Comprendre la réglementation F-Gas (phase down) pour la climatisation tertiaire en 2026. Interdiction fluides, quotas, alternatives R32 et HFO.",
        category: 'climatisation',
        imagePath: '/guide_climatisation_fgas.png',
        readTime: '8 min',
        content: (
            <>
                <p className="lead">La <strong>réglementation européenne F-Gas</strong> (Règlement UE n° 517/2014, révisé en 2024) bouleverse le monde de la climatisation, des pompes à chaleur privées et du froid commercial. Son objectif environnemental est clair : réduire massivement les émissions de gaz à effet de serre fluorés (HFC) en Europe d'ici 2030, puis 2050.</p>
                <p>Pour les entreprises et les gestionnaires de parcs immobiliers, cette transition réglementaire a un impact direct sur le coût d'entretien des équipements existants et dicte les choix technologiques pour les installations neuves.</p>

                <h2>1. Le mécanisme de réduction (Phase Down) et son impact sur les prix</h2>
                <p>Le système F-Gas ne se contente pas d'interdire, il organise une rareté artificielle. Il repose sur un mécanisme de réduction progressive des quotas de fluides mis sur le marché européen, calculé en "Tonnes équivalent CO2" (teq CO2).</p>
                <p>La règle est mathématique : <strong>plus un fluide est polluant (fort Potentiel de Réchauffement Planétaire - PRP), moins les fabricants ont le droit d'en produire et d'en importer</strong>. Conséquence directe sur le terrain : les prix des anciens fluides frigorifiques à fort PRP (comme le R410A) ont explosé, rendant leur entretien et les réparations de fuites financièrement prohibitifs pour de nombreuses entreprises.</p>

                <h2>2. Les fluides condamnés : Calendrier des interdictions</h2>
                <p>Le calendrier européen d'interdiction s'accélère. Voici ce que vous devez retenir pour vos installations tertiaires :</p>
                <ul>
                    <li><strong>R410A (PRP de 2088) :</strong> Historiquement ultra-majoritaire dans les VRV/DRV, les pompes à chaleur et les mini-splits. S'il n'est pas encore totalement interdit pour la <em>réparation</em> des gros systèmes, l'installation d'équipements <em>neufs</em> au R410A est aujourd'hui une erreur stratégique. De plus, il sera strictement interdit de mise sur le marché dans les petits splits domestiques/tertiaires (charge {"<"} 3kg) dès le 1er janvier 2025.</li>
                    <li><strong>R404A / R507 (PRP &gt; 2500) :</strong> Couramment utilisés dans le froid commercial (chambres froides), ils sont totalement interdits pour les équipements neufs depuis 2020. Depuis 2030, l'usage de R404A recyclé pour la maintenance sera également prohibé.</li>
                    <li><strong>R134a (PRP de 1430) :</strong> Autrefois standard dans les groupes d'eau glacée (chillers) et le conditionnement d'air automobile, il cède progressivement sa place aux HFO.</li>
                </ul>

                <h2>3. Les alternatives imposées aux entreprises (Fluides d'avenir)</h2>
                <p>Lors d'un renouvellement de parc CVC (Chauffage, Ventilation, Climatisation) ou d'un projet immobilier neuf, vous êtes tenus d'opter pour un fluide à faible empreinte carbone :</p>
                <ul>
                    <li><strong>Le R32 (PRP de 675) :</strong> C'est la norme actuelle (souvent transitoire) pour les PAC Air/Air et les systèmes multisplits tertiaires. Son impact est trois fois inférieur à celui du R410A et il offre un meilleur rendement énergétique. <em>Attention :</em> il est classé "légèrement inflammable" (catégorie A2L), ce qui impose des normes d'installation strictes en ERP (détecteurs de fuites, volumes de pièces minimum, ventilation renforcée).</li>
                    <li><strong>Les réfrigérants naturels :</strong> La destination finale du marché. Le Propane (R290 - PRP de 3), le CO2 (R744 - PRP de 1) ou l'Ammoniac (R717). Jusqu'ici réservés aux chillers et à l'industrie, on voit le R290 arriver massivement sur les pompes à chaleur monobloc tertiaires extérieures.</li>
                    <li><strong>Les HFO (Hydrofluorooléfines) :</strong> Comme le R1234ze / R1234yf, dont le PRP est quasi nul (inférieur à 1). Ils sont la nouvelle référence d'excellente alternative pour les gros groupes de production d'eau glacée tertiaires.</li>
                </ul>

                <h2>4. Entretien, détection de fuites et obligations pénales</h2>
                <p>En tant qu'exploitant, vous êtes civilement et pénalement responsable des fuites de gaz de votre parc de climatisation, selon le code de l'environnement français :</p>
                <ul>
                    <li>Vous devez faire réaliser un <strong>contrôle d'étanchéité régulier</strong> par une société disposant d'une <strong>Attestation de Capacité</strong> (Catégorie I).</li>
                    <li>La fréquence absolue du contrôle dépend de la charge globale du système, mais elle est calculée en fonction du danger du gaz. Ainsi, pour une charge dépassant 2.4kg de R410A (ce qui correspond à un équivalent de 5 tonnes EqCO2), un <strong>contrôle annuel est obligatoire</strong>. Si le circuit est équipé d'un détecteur automatique de fuite, la fréquence exigée est divisée par deux.</li>
                    <li>Vous êtes dans l'obligation légale de tenir et conserver un <strong>registre d'intervention</strong> ou cahier de chaufferie (Cerfa 15497) attestant des opérations de manipulation, récupération et contrôle fluides.</li>
                </ul>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-xl shadow-sm">
                    <h3 className="text-2xl font-bold text-green-900 mt-0 mb-3">Mettez votre parc CVC en conformité F-Gas</h3>
                    <p className="text-green-800 mb-6 font-medium">Votre installation vieillissante utilise du R410A ou du R404A ? Obtenez un audit technique de vos équipements tertiaires et comparez les devis pour remplacer votre matériel par des systèmes modernes (R32, R290, VRV, groupes d'eau glacée).</p>
                    <a href="/devis" className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-green-700 transition shadow-md">Obtenir un devis d'audit & rénovation Climatisation</a>
                </div>
            </>
        )
    },
    {
        slug: 'loi-lom-obligations-bornes-recharge-parking',
        title: "Loi LOM (2025/2026) : Obligations Bornes de Recharge Entreprise",
        h1: "Comprendre la loi LOM pour les parkings d'entreprise (Obligations 2025)",
        metaDescription: "Guide sur la Loi d'Orientation des Mobilités (LOM). Obligations réglementaires de pré-équipement et d'installation de bornes IRVE dans les parkings B2B.",
        category: 'borne',
        imagePath: '/guide_borne_loi_lom.png',
        readTime: '8 min',
        content: (
            <>
                <p className="lead">La <strong>Loi d'Orientation des Mobilités (LOM)</strong>, promulguée fin 2019, représente un tournant historique pour le verdissement des flottes automobiles en France. Pour les entreprises possédant un parking privatif ou accueillant du public, l'heure est à la mise en conformité : l'installation d'Infrastructures de Recharge pour Véhicules Électriques (IRVE) n'est plus une option, c'est une obligation légale stricte.</p>

                <h2>1. Qui est concerné par l'obligation de la Loi LOM ?</h2>
                <p>La réglementation cible majoritairement les parkings liés à des bâtiments non résidentiels. Sont concernés les secteurs : tertiaire (bureaux), industriel, commercial (supermarchés, centres commerciaux), et les établissements publics.</p>
                <p>Le critère principal de déclenchement de l'obligation est la taille du parking : <strong>tout parking disposant d'au moins 20 places de stationnement est assujetti</strong> à la loi. Les exigences diffèrent cependant selon qu'il s'agisse d'un projet de construction (ou rénovation lourde) ou d'un bâtiment existant.</p>

                <h2>2. Les obligations pour un projet NEUF ou une rénovation lourde</h2>
                <p>Depuis le 11 mars 2021, les règles de <strong>pré-équipement</strong> (pose de fourreaux, chemins de câbles, et dimensionnement du TGBT pour supporter la puissance future) ont été drastiquement renforcées pour anticiper le basculement vers la mobilité électrique.</p>
                <ul>
                    <li><strong>Bâtiment tertiaire et bureaux :</strong> Si le parking compte plus de 10 places, <strong>20 % des places</strong> doivent être pré-équipées. Parmi ces places, <strong>au moins 1 place</strong> doit être équipée d'un point de charge effectif et opérationnel (pour les parkings de moins de 200 places), ou 2 places (si plus de 200 places).</li>
                    <li><strong>Bâtiment commercial ou industriel :</strong> Mêmes quotas de 20 %. Si le parking dépasse les 200 places, au moins 2 places doivent être physiquement équipées de bornes.</li>
                    <li><strong>Accessibilité PMR :</strong> Au moins une place pré-équipée et dimensionnée pour les Personnes à Mobilité Réduite (PMR) doit être prévue, en accord avec les normes d'accessibilité en vigueur (espaces de rotation, hauteur de la borne).</li>
                </ul>

                <h2>3. Les obligations pour un bâtiment EXISTANT (L'échéance du 1er janvier 2025)</h2>
                <p>C'est la date couperet qui mobilise actuellement tous les property managers et gestionnaires de flotte. <strong>Depuis le 1er janvier 2025</strong>, la loi impose de passer de la théorie à la pratique : TOUS les bâtiments non résidentiels possédant un parking de plus de 20 places doivent obligatoirement proposer des bornes de recharge physiques (et non plus de simples fourreaux d'attente).</p>
                <ul>
                    <li>La règle d'or : Il faut équiper <strong>au minimum 1 place par tranche de 20 places</strong>, soit 5 % de la capacité totale du parking.</li>
                    <li><em>Exemple concret :</em> Un parking d'entreprise ou de supermarché de 100 places a l'obligation légale de proposer <strong>au moins 5 points de recharge opérationnels</strong> depuis le 01/01/2025.</li>
                </ul>
                <p>Ne pas se conformer à cette obligation expose l'entreprise à de lourdes sanctions administratives, sans compter le déficit d'image croissant (marque employeur et engagements RSE) face à des collaborateurs ou clients de plus en plus équipés en véhicules électriques.</p>

                <h2>4. Le verdissement obligatoire des flottes d'entreprise</h2>
                <p>La Loi LOM ne s'arrête pas au stationnement. Elle contraint également les entreprises gérant une flotte de plus de 100 véhicules (dont le PTAC est inférieur à 3,5 tonnes) à intégrer des véhicules à faibles émissions (VFE - électriques ou hybrides rechargeables) lors du renouvellement de leur parc :</p>
                <ul>
                    <li><strong>20 %</strong> de VFE depuis le 1er janvier 2024.</li>
                    <li><strong>40 %</strong> de VFE à partir du 1er janvier 2027.</li>
                    <li><strong>70 %</strong> de VFE à l'horizon 2030.</li>
                </ul>
                <p>Cette transition de la flotte roulante rend l'installation de <a href="/borne-de-recharge-pro" className="font-semibold text-blue-600 hover:underline">bornes de recharge haute puissance</a> sur le lieu de travail absolument incontournable pour assurer la continuité de service des équipes commerciales ou techniques.</p>

                <h2>5. Déploiement IRVE : Pourquoi la qualification est-elle obligatoire ?</h2>
                <p>Installer une flotte de bornes de recharge de 11 kW ou 22 kW sollicite énormément le réseau électrique de l'entreprise. C'est pourquoi le décret du 12 janvier 2017 stipule que l'installation de toute borne d'une puissance supérieure à 3,7 kW <strong>doit impérativement être réalisée par un professionnel qualifié IRVE</strong> (délivré par Qualifelec ou l'AFNOR).</p>
                <p>Faire appel à un électricien non qualifié vous expose à trois risques majeurs :</p>
                <ol>
                    <li>L'annulation de la garantie fabricant du matériel en cas de panne.</li>
                    <li>Le refus de couverture par votre assurance responsabilité civile professionnelle (et incendie) en cas de sinistre lié à l'installation électrique.</li>
                    <li>L'impossibilité catégorique de toucher les <strong>primes ADVENIR</strong> (subventions d'État qui financent jusqu'à 50% du projet) ou autres crédits d'impôt.</li>
                </ol>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-xl shadow-sm">
                    <h3 className="text-2xl font-bold text-orange-900 mt-0 mb-3">Mise en conformité Loi LOM : Ne prenez pas de retard</h3>
                    <p className="text-orange-800 mb-6 font-medium">Évitez les sanctions et valorisez votre patrimoine immobilier. Nos partenaires installateurs qualifiés IRVE vous accompagnent du dimensionnement électrique jusqu'à l'obtention des aides de l'État.</p>
                    <a href="/devis" className="inline-block bg-orange-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-orange-700 transition shadow-md">Obtenir un devis d'installation de bornes (100% Gratuit)</a>
                </div>
            </>
        )
    },
    {
        slug: 'aides-subventions-advenir-bornes-entreprise',
        title: "Prime ADVENIR 2026 : Subventions Bornes Recharge Flotte",
        h1: "Subventions et financements pour équiper une flotte d'entreprise (ADVENIR)",
        metaDescription: "Montant, éligibilité et démarches pour bénéficier de la prime ADVENIR lors de l'installation de bornes de recharge (wallbox) pour votre entreprise.",
        category: 'borne',
        imagePath: '/guide_borne_advenir.png',
        readTime: '7 min',
        content: (
            <>
                <p className="lead">L'installation de bornes de recharge sur le parking de votre entreprise représente un investissement initial conséquent. Heureusement, en 2026, des dispositifs d'aides comme le <strong>programme Advenir</strong> et diverses déductions fiscales permettent d'amortir drastiquement le coût global de votre projet IRVE.</p>

                <h2>1. Qu'est-ce que le programme ADVENIR ?</h2>
                <p>Piloté par l'Avere-France et financé par le mécanisme des Certificats d'Économies d'Énergie (CEE), le programme Advenir est la principale aide financière pour l'installation de points de charge pour véhicules électriques en France.</p>
                <p>Son objectif est d'accélérer le maillage territorial en soutenant financièrement les acteurs privés (entreprises, copropriétés) et publics qui déploient de nouvelles <a href="/borne-de-recharge-pro" className="font-semibold text-blue-600 hover:underline">Infrastructures de Recharge pour Véhicules Électriques (IRVE)</a>.</p>

                <h2>2. Les plafonds de subvention B2B (Mise à jour 2026)</h2>
                <p>Attention, les aides ont été significativement restructurées ces dernières années (la prime de base pour un simple "parking privé d'entreprise pour les salariés" a baissé). Néanmoins, voici ce qu'il reste d'ouvert et de très incitatif pour les professionnels :</p>
                <ul>
                    <li><strong>Flotte de véhicules lourds (PL, bus, autocars) :</strong> C'est la cible prioritaire. La prime couvre <strong>50 % du coût H.T.</strong> de fourniture et d'installation. Elle est plafonnée à <strong>2 200 € par point de charge</strong> (pour du courant alternatif 22kW), et peut financer jusqu'à 300 000 € pour la création du raccordement et de l'infrastructure globale.</li>
                    <li><strong>Loueurs de véhicules de courte durée :</strong> Prise en charge de <strong>20 % du coût H.T.</strong> (plafond : 600 € par point de charge).</li>
                    <li><strong>Service automobile (garages et concessions) :</strong> Prime maintenue pour accompagner la réparation des véhicules électriques.</li>
                    <li><strong>Parking ouvert au public (supermarchés, hôtels, retail) :</strong> Jusqu'à 30 % d'aide, plafonnée à 1 000 € par point de charge lente, avec des subventions massives pour les bornes rapides en courant continu (DC {">"} 50kW), très recherchées par les clients de passage.</li>
                </ul>

                <h2>3. Les conditions d'obtention (Le visa Qualifelec / IRVE)</h2>
                <p>Le versement de la prime Advenir n'est pas automatique. Le cahier des charges impose trois règles d'or pour garantir la sécurité et l'interopérabilité du réseau français :</p>
                <ol>
                    <li>L'installateur <strong>DOIT être qualifié IRVE</strong> (délivré par Qualifelec ou l'AFNOR) de niveau 1, 2 ou 3 selon la puissance. C'est pénalement obligatoire depuis le décret de 2017.</li>
                    <li>Le matériel <strong>DOIT disposer d'un système de supervision connecté (protocole OCPP 1.6 ou supérieur)</strong> si la puissance est supérieure à 3,7 kW. Cela permet le pilotage intelligent, le délestage et la remontée des données.</li>
                    <li>L'artisan doit être labellisé <strong>"Installateur Advenir"</strong> et référencé sur la plateforme officielle en ligne.</li>
                </ol>

                <h2>4. Au-delà d'Advenir : Turpe, TVA et Amortissement</h2>
                <p>Si votre entreprise n'entre pas directement dans les cases des primes Advenir (ex: simples bureaux administratifs), rassurez-vous, le coût est tout de même allégé par :</p>
                <ul>
                    <li><strong>La réfaction tarifaire (ROBE) :</strong> Si l'installation nécessite un renforcement ou une extension du réseau électrique géré par Enedis, jusqu'à <strong>40 %</strong> (parfois 60 % localement) du coût des travaux de raccordement est pris en charge par le tarif d'utilisation du réseau public d'électricité (TURPE).</li>
                    <li><strong>Suramortissement et crédit d'impôt :</strong> Bien que les lois de finances évoluent chaque année, le gouvernement maintient la possibilité de déduire fiscalement une partie de l'investissement pour les flottes professionnelles qui font le saut de la transition énergétique.</li>
                    <li><strong>Aides régionales :</strong> De très nombreuses métropoles et régions (ex: Île-de-France, Occitanie) proposent des primes cumulables ("chèque transition", "subvention flotte bas-carbone") pour encourager les acteurs locaux.</li>
                </ul>

                <div className="bg-slate-50 border border-slate-200 p-6 my-8 rounded-xl text-center">
                    <h3 className="text-xl font-bold text-slate-800 mt-0">Déléguez le montage de votre dossier d'aide</h3>
                    <p className="text-slate-600 mb-6">Nos installateurs partenaires qualifiés IRVE s'occupent de tout de A à Z : dimensionnement, pose, et gestion administrative pour déduire directement la prime Advenir de votre facture.</p>
                    <a href="/devis" className="inline-block bg-slate-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition shadow-lg">Demander un devis avec subventions déduites</a>
                </div>
            </>
        )
    },
    {
        slug: 'pompe-a-chaleur-vs-vrv-drv-bureaux',
        title: "PAC Air/Air vs Systèmes VRV/DRV pour Bureaux | Comparatif",
        h1: "Faut-il choisir une pompe à chaleur classique ou système VRV-DRV pour ses bureaux ?",
        metaDescription: "Comparatif technique et prix entre climatisation Multi-split classique et architecture VRV/DRV 3 tubes pour de grands espaces tertiaires et bureaux.",
        category: 'climatisation',
        imagePath: '/guide_climatisation_pac_vs_vrv.png',
        readTime: '6 min',
        content: (
            <>
                <p className="lead">Le choix de l'architecture CVC (Chauffage, Ventilation, Climatisation) d'un plateau de bureaux de plusieurs centaines de mètres carrés se résume souvent à un match technologique : <strong>Multi-splits traditionnels</strong> contre <strong>Volumes de Réfrigérant Variable (VRV / DRV)</strong>. Cette décision structurelle impacte l'investissement de départ (CAPEX), mais surtout les factures énergétiques à long terme (OPEX).</p>

                <h2>1. La Pompe à Chaleur (PAC) Multi-split : La simplicité efficace</h2>
                <p>Le système multi-splits est l'évolution directe de la climatisation réversible classique. Un seul groupe extérieur (le compresseur) vient alimenter plusieurs unités intérieures (jusqu'à 5 ou 6, sous forme de cassettes, muraux ou gainables).</p>
                <ul>
                    <li><strong>Principe de fonctionnement :</strong> Toutes les unités intérieures raccordées au même groupe fonctionnent obligatoirement dans le <strong>même mode</strong> (soit tout le monde en froid, soit tout le monde en chaud).</li>
                    <li><strong>Avantages :</strong>
                        <ul>
                            <li>Coût d'installation (CAPEX) nettement inférieur à un VRV.</li>
                            <li>Maintenance plus simple et moins coûteuse.</li>
                            <li>Parfait pour les petits ou moyens volumes homogènes (petites agences, open-spaces uniques).</li>
                        </ul>
                    </li>
                    <li><strong>Inconvénients :</strong> Impossible de chauffer le bureau du directeur exposé au Nord tout en climatisant l'open-space exposé au Sud. Longueurs de tuyauteries limitées.</li>
                </ul>

                <h2>2. Le système VRV / DRV : L'intelligence au service des grands volumes</h2>
                <p>Le VRV (Volume de Réfrigérant Variable, terme inventé par Daikin) ou DRV (Débit de Réfrigérant Variable, l'appellation générique) est le standard absolu pour les grands immeubles tertiaires et hôtels.</p>
                <p>Un (ou plusieurs) groupe(s) extérieur(s) ultra-puissant(s) peut alimenter <strong>jusqu'à 64 unités intérieures</strong> sur un réseau frigorifique complexe pouvant s'étendre sur des centaines de mètres linéaires.</p>
                <ul>
                    <li><strong>La révolution du DRV 3 tubes (Récupération de chaleur) :</strong> C'est ici que la magie opère. Un système 3 tubes permet le <strong>fonctionnement simultané en chaud et en froid</strong> sur des zones différentes de l'immeuble. La chaleur extraite des pièces climatisées (au Sud) n'est pas jetée dehors, elle est <em>transférée</em> par le fluide pour chauffer les pièces froides (au Nord).</li>
                    <li><strong>Avantages :</strong>
                        <ul>
                            <li>Indépendance totale des zones (Chaud/Froid simultané).</li>
                            <li>Coûts d'exploitation (OPEX) drastiquement réduits grâce à la récupération de chaleur.</li>
                            <li>Flexibilité architecturale (réseaux très longs, compacité des gaines techniques).</li>
                        </ul>
                    </li>
                    <li><strong>Inconvénients :</strong> Investissement initial colossal, complexité de l'installation nécessitant des frigoristes très qualifiés (brasure lourde, gestion des boîtiers de répartition), volume de fluide frigorigène important soumis à la réglementation F-Gas.</li>
                </ul>

                <h2>3. Comparatif financier et ROI : Lequel choisir ?</h2>
                <p>Pour un plateau de bureaux de 500 m² "standard" :</p>
                <ul>
                    <li><strong>Solution Multi-splits (ex: 3 groupes extérieurs pour 12 cassettes) :</strong> Comptez environ 80 € à 120 € HT / m² installé. Une solution pragmatique si le bâtiment n'est pas trop profond et présente une exposition thermique homogène.</li>
                    <li><strong>Solution VRV/DRV 3 tubes (1 groupe centralisé, 12 cassettes + boîtiers de récupération) :</strong> Comptez entre 150 € et 220 € HT / m² installé. L'investissement est doublé, mais justifié par un confort sur-mesure et des économies de chauffage massives à l'usage.</li>
                </ul>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-xl shadow-sm">
                    <h3 className="text-2xl font-bold text-green-900 mt-0 mb-3">Étudiez l'architecture thermique de vos bureaux</h3>
                    <p className="text-green-800 mb-6 font-medium">L'équipement de vos locaux (open-space, bureaux cloisonnés, salles de serveurs) nécessite une étude de dimensionnement frigorifique précise (calcul des charges sensibles et latentes).</p>
                    <a href="/devis" className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-green-700 transition shadow-md">Obtenir une étude technique et des devis</a>
                </div>
            </>
        )
    },
    {
        slug: 'prix-installation-borne-recharge-entreprise',
        title: "Prix d'Installation de Bornes de Recharge en Entreprise",
        h1: "Coût & Prix d'installation d'une borne de recharge IRVE pour sa flotte",
        metaDescription: "Quel budget prévoir pour installer des bornes de recharge privées ou publiques sur le parking de son entreprise en 2026 ? Détail des devis et coûts d'infrastructure.",
        category: 'borne',
        imagePath: '/guide_borne_prix.png',
        readTime: '7 min',
        content: (
            <>
                <p className="lead">Électrifier la flotte de véhicules de son entreprise ou proposer la recharge à ses collaborateurs est un projet stratégique. Cependant, le prix d'une borne de recharge (IRVE) ne se limite pas au simple matériel. Il faut prendre en compte l'infrastructure électrique et la supervision matérielle.</p>

                <h2>1. Prix du matériel : Borne AC vs DC</h2>
                <p>Le premier critère qui impacte le devis est le type de borne (courant alternatif AC ou continu DC) et sa puissance :</p>
                <ul>
                    <li><strong>Borne AC (7,4 kW à 22 kW) :</strong> C'est le standard pour les entreprises (recharge sur la demi-journée). Le prix du matériel seul varie de <strong>600 € à 1 500 € HT</strong> par point de charge.</li>
                    <li><strong>Borne Rapide DC (50 kW à 150 kW) :</strong> Nécessaire uniquement pour les logisticiens, taxis ou si les véhicules restent moins d'une heure. Le prix du matériel s'envole : <strong>15 000 € à 35 000 € HT</strong>.</li>
                </ul>

                <h2>2. Les coûts d'infrastructure et de raccordement (Le plus lourd)</h2>
                <p>Le coût de pose est souvent plus élevé que la borne elle-même. Les éléments suivants font gonfler la facture :</p>
                <ul>
                    <li><strong>Proximité du TGBT :</strong> Si le parking est à 100 mètres de votre local électrique principal, le coût du tirage de gros câbles en cuivre massif sera significatif (jusqu'à 150€/mètre linéaire avec la tranchée).</li>
                    <li><strong>Génie Civil :</strong> Faut-il creuser des tranchées dans l'enrobé du parking ou peut-on passer le cheminement en aérien sur les murs ? La VRD (Voirie et Réseaux Divers) représente souvent 30% du prix total.</li>
                    <li><strong>Mise à jour du TGBT :</strong> L'ajout de dizaines de kW de puissance réclame parfois de changer l'armoire électrique complète ou de poser des différentiels spécifiques très coûteux.</li>
                </ul>

                <h2>3. Budget global moyen estimé (Pose + Matériel)</h2>
                <p>Pour l'installation de bornes AC 22kW sur un parking d'entreprise, les tarifs constatés en 2026 tournent autour de :</p>
                <ul>
                    <li><strong>Installation simple (murale près du tableau) :</strong> 1 200 € à 1 800 € HT / point de charge.</li>
                    <li><strong>Installation complexe (sur pied avec tranchées) :</strong> 2 500 € à 3 500 € HT / point de charge.</li>
                </ul>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-xl shadow-sm">
                    <h3 className="text-2xl font-bold text-orange-900 mt-0 mb-3">Obtenez un chiffrage précis pour votre parking</h3>
                    <p className="text-orange-800 mb-6 font-medium">Le coût de la VRD et du raccordement au TGBT rend chaque projet unique. Nos installateurs certifiés IRVE se déplacent pour étudier votre configuration et vous remettent 3 devis comparatifs.</p>
                    <a href="/devis" className="inline-block bg-orange-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-orange-700 transition shadow-md">Obtenir 3 devis IRVE</a>
                </div>
            </>
        )
    },
    {
        slug: 'aides-remplacement-ascenseur-copropriete',
        title: "Aides & Subventions pour le Remplacement d'Ascenseur",
        h1: "Quelles aides financières pour moderniser ou remplacer un ascenseur ?",
        metaDescription: "Guide des subventions (Anah, CEE, TVA réduite) pour les gestionnaires et copropriétés modernisant un vieil ascenseur.",
        category: 'ascenseur',
        imagePath: '/guide_ascenseur_aides.png',
        readTime: '5 min',
        content: (
            <>
                <p className="lead">Moderniser une machine de traction ancienne, mettre l'ascenseur aux normes de sécurité (loi SAE) ou le remplacer intégralement coûte entre 15 000 € et 40 000 €. Heureusement, plusieurs leviers fiscaux et subventions peuvent amortir cet investissement pour les copropriétés et les bailleurs sociaux.</p>

                <h2>1. Les aides de l'Anah (Agence nationale de l'habitat)</h2>
                <p>L'Anah est le principal pourvoyeur de fonds pour l'adaptation du logement à la perte d'autonomie et la mise en accessibilité.</p>
                <ul>
                    <li><strong>Habiter Facile :</strong> Cette aide peut financer jusqu'à <strong>50% du montant des travaux HT</strong> (dans la limite de 10 000 €) pour l'installation d'un ascenseur ou d'un monte-escalier, sous conditions de ressources des personnes âgées ou en situation de handicap occupant l'immeuble.</li>
                    <li><strong>Copropriété Fragile :</strong> Si la copropriété est en difficulté financière, des subventions exceptionnelles peuvent être votées pour la mise aux normes des équipements de transport vertical.</li>
                </ul>

                <h2>2. La TVA à taux réduit (5,5 % ou 10 %)</h2>
                <p>Le taux de TVA standard en France est de 20%. Réaliser des travaux sur un ascenseur existant permet de bénéficier de réductions fiscales majeures :</p>
                <ul>
                    <li><strong>TVA à 5,5 % :</strong> Elle s'applique spécifiquement aux travaux de mise en accessibilité pour les personnes à mobilité réduite (PMR), ou l'installation d'un ascenseur spécialement conçu pour les handicapés.</li>
                    <li><strong>TVA à 10 % :</strong> S'applique aux travaux d'amélioration, de transformation, d'aménagement et d'entretien sur des ascenseurs dans des locaux d'habitation achevés depuis plus de 2 ans (modernisation, changement de cabine, mise en sécurité). <em>Attention : un remplacement à neuf complet reste souvent à 20% sauf exception.</em></li>
                </ul>

                <h2>3. Les Certificats d'Économies d'Énergie (CEE)</h2>
                <p>Remplacer une vieille machinerie des années 70 par un moteur Gearless (sans réducteur) à aimants permanents avec variation de fréquence (VVVF) divise la consommation électrique par 3.</p>
                <p>Bien que les primes CEE pour les ascenseurs soient moins généreuses que pour les pompes à chaleur, l'optimisation énergétique (mise en veille automatique de la cabine, éclairage LED, récupération d'énergie à la descente) peut ouvrir droit à une Prime Énergie de la part des fournisseurs d'électricité.</p>

                <h2>4. Le Prêt à Taux Zéro (Éco-PTZ Copropriété)</h2>
                <p>Si la modernisation de l'ascenseur s'intègre dans un plan global de rénovation énergétique de l'immeuble (isolation par l'extérieur, changement de chaudière), les travaux d'amélioration de la performance énergétique de l'ascenseur peuvent être intégrés au financement couvert par l'Éco-PTZ, permettant d'emprunter sans payer d'intérêts.</p>

                <div className="bg-slate-50 border-l-4 border-slate-600 p-6 my-8 rounded-r-xl shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-3">Ne passez pas à côté des aides</h3>
                    <p className="text-slate-800 mb-6 font-medium">Les dossiers de subventions (Anah, CEE) sont complexes et doivent souvent être validés <em>avant</em> la signature du devis. Nos partenaires ascensoristes vous accompagnent dans le montage financier.</p>
                    <a href="/devis" className="inline-block bg-slate-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-slate-800 transition shadow-md">Demander une étude Ascenseur & Subventions</a>
                </div>
            </>
        )
    },
    {
        slug: 'contrat-maintenance-ascenseur-obligations',
        title: "Obligations Légales de Maintenance d'Ascenseur ERP",
        h1: "Contrat de maintenance des ascenseurs : Obligations légales et clauses pour les ERP",
        metaDescription: "Droit B2B : Quelles sont vos obligations en tant que propriétaire ou exploitant d'un ERP vis-à-vis de la maintenance ascenseur (loi SAE, rythme des 6 semaines).",
        category: 'ascenseur',
        imagePath: '/guide_ascenseur_maintenance.png',
        readTime: '6 min',
        content: (
            <>
                <p className="lead">Ascenseurs en panne, usagers bloqués, responsabilité pénale du gestionnaire engagée... L'entretien d'un ascenseur dans un Établissement Recevant du Public (ERP) ou un immeuble de bureaux n'est pas qu'une question de confort, c'est une <strong>obligation légale stricte encadrée par le Code de la construction et de l'habitation</strong> (loi SAE de 2003).</p>
                <p>Comprendre vos obligations en matière de contrat de maintenance vous protège juridiquement et vous permet d'optimiser vos coûts d'exploitation.</p>

                <h2>1. L'obligation d'entretien : La règle des 6 semaines</h2>
                <p>La loi est univoque : tout propriétaire d'ascenseur doit souscrire un contrat d'entretien avec une entreprise spécialisée. Ce contrat doit obligatoirement inclure <strong>une visite préventive toutes les 6 semaines minimum</strong>.</p>
                <p>Lors de ces visites obligatoires, le technicien ascensoriste (KONE, Schindler, OTIS, TK Elevator ou indépendant) doit procéder aux opérations suivantes :</p>
                <ul>
                    <li><strong>Vérification complète de la sécurité :</strong> Parachutes, limiteur de vitesse, freins, et dispositifs de verrouillage des portes palières.</li>
                    <li><strong>Nettoyage et lubrification :</strong> Nettoyage de la cuvette, de la gaine, du toit de cabine et du local machinerie. Graissage des guides et organes mobiles.</li>
                    <li><strong>Test de la téléalarme (TA) :</strong> Une obligation vitale pour s'assurer qu'un passager bloqué puisse joindre le centre d'appel 24/7.</li>
                    <li><strong>Rapport d'intervention :</strong> Toutes les opérations doivent être tracées dans le carnet d'entretien de l'ascenseur (physique ou digitalisé), qui doit être tenu à la disposition des autorités.</li>
                </ul>

                <h2>2. Contrat Minimal vs Contrat Étendu (Total)</h2>
                <p>La législation impose deux types de contrats standards. Lequel choisir pour vos bureaux ?</p>
                <ul>
                    <li><strong>Le Contrat Standard (ou Minimal) :</strong> Il couvre la main d'œuvre pour les visites des 6 semaines, le dépannage 7j/7 pour la désincarcération, et le remplacement des "petites" pièces d'usure courante (ampoules, fusibles, balais de moteur). <em>Le risque financier :</em> Si le moteur principal lâche ou si la carte électronique grille, le remplacement (pièce et main d'œuvre) vous sera facturé au prix fort sur devis.</li>
                    <li><strong>Le Contrat Étendu (ou Total) :</strong> C'est la solution de tranquillité préférée des syndics et gestionnaires tertiaires (Property Managers). En plus des garanties du contrat minimal, il inclut le remplacement et la réparation d'une longue liste de pièces maîtresses (câbles de traction, treuil, freins, cartes électroniques majeures, portes). L'abonnement mensuel est plus élevé, mais il lisse les risques financiers sur l'année.</li>
                </ul>

                <h2>3. Le Contrôle Technique Quinquennal (tous les 5 ans)</h2>
                <p>En plus de l'entretien courant, la loi impose un <strong>contrôle technique obligatoire tous les 5 ans</strong>. Attention, une règle primordiale s'applique : <strong>ce contrôle ne peut pas être réalisé par l'entreprise qui s'occupe de la maintenance</strong>.</p>
                <p>Vous devez faire appel à un bureau de contrôle indépendant ou un expert agréé par le ministère (Apave, Bureau Veritas, Socotec...). Son rôle est de réaliser un audit à froid de l'état de l'appareil et de vérifier que l'ascensoriste fait bien son travail de maintenance. À l'issue, un rapport vous est remis, listant les éventuelles non-conformités à corriger (souvent sous 6 mois).</p>

                <h2>4. Comment changer d'ascensoriste ? Clauses de résiliation</h2>
                <p>Historiquement verrouillé, le marché s'est ouvert depuis la loi Chatel. Les contrats de maintenance ascenseur sont signés pour une durée minimale d'un an.</p>
                <p>Vous pouvez résilier votre contrat à l'échéance annuelle, moyennant un <strong>préavis (généralement de 3 mois)</strong> indiqué dans les conditions générales. L'ascensoriste a par ailleurs l'obligation de vous notifier la date limite de préavis pour éviter la reconduction tacite.</p>
                <p><em>Astuce Pro :</em> Si votre ascensoriste actuel réalise de lourds travaux de modernisation sur votre appareil (changement d'armoire, de groupe de traction), la loi vous autorise à résilier le contrat de maintenance anticipativement pour confier l'entretien à l'entreprise qui vient de faire les travaux.</p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl shadow-sm">
                    <h3 className="text-2xl font-bold text-blue-900 mt-0 mb-3">Renégociez vos contrats d'entretien Ascenseur</h3>
                    <p className="text-blue-800 mb-6 font-medium">Vous gérez un parc immobilier et vos charges d'ascenseur explosent ? Le service n'est plus au rendez-vous (pannes à répétition) ? Nos experts vous aident à auditer vos contrats et mettre en concurrence les meilleurs prestataires nationaux et locaux de votre région.</p>
                    <a href="/devis" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition shadow-md">Auditer mon parc & Demander des devis</a>
                </div>
            </>
        )
    },
    {
        slug: 'renovation-energetique-decret-tertiaire',
        title: "Décret Tertiaire 2030 : Obligations CVC Bâtiments B2B",
        h1: "Décret Tertiaire (Éco Énergie Tertiaire) : Tout comprendre des jalons 2030-2050",
        metaDescription: "Analyse des obligations de rénovation énergétique des bâtiments B2B de plus de 1000m2. Réduire la consommation CVC pour atteindre le jalon 2030 du décret tertiaire.",
        category: 'climatisation',
        imagePath: '/guide_climatisation_decret_tertiaire.png',
        readTime: '9 min',
        content: (
            <>
                <p className="lead">Si votre entreprise ou administration occupe plus de 1 000 m² de surface tertiaire (bureaux, commerces, logistique, enseignement...), vous êtes soumis au dispositif <strong>Éco Énergie Tertiaire</strong>, plus connu sous le nom de Décret Tertiaire. Cette obligation légale impose des réductions drastiques de la consommation énergétique des bâtiments d'ici 2050.</p>

                <h2>1. Qui est concerné par le Décret Tertiaire ?</h2>
                <p>La réglementation s'applique de manière très large à tous les bâtiments à usage tertiaire dont la surface de plancher est supérieure ou égale à 1 000 m². Sont notamment visés :</p>
                <ul>
                    <li><strong>Bureaux et sièges sociaux :</strong> Publics comme privés.</li>
                    <li><strong>Commerces et grande distribution :</strong> Boutiques, galeries marchandes, supermarchés.</li>
                    <li><strong>Hôtellerie et restauration :</strong> Hôtels, campings (bâtiments d'accueil), restaurants.</li>
                    <li><strong>Enseignement et santé :</strong> Écoles, universités, hôpitaux, cliniques, EHPAD.</li>
                    <li><strong>Logistique :</strong> Entrepôts, zones de stockage.</li>
                </ul>
                <p>L'obligation repose de manière solidaire sur le <strong>propriétaire</strong> et les <strong>locataires</strong>. Le bail commercial doit préciser les responsabilités de chacun dans l'atteinte des objectifs.</p>

                <h2>2. Les jalons de réduction : 2030, 2040, 2050</h2>
                <p>La loi ELAN fixe une trajectoire très ambitieuse. La baisse de la consommation d'énergie finale peut être calculée de deux manières :</p>

                <h3>L'objectif en valeur relative (le plus fréquent)</h3>
                <p>La réduction se calcule par rapport à une <strong>année de référence</strong> (qui ne peut pas être antérieure à 2010).</p>
                <ul>
                    <li><strong>-40 %</strong> d'ici 2030</li>
                    <li><strong>-50 %</strong> d'ici 2040</li>
                    <li><strong>-60 %</strong> d'ici 2050</li>
                </ul>

                <h3>L'objectif en valeur absolue</h3>
                <p>Fixé par arrêtés par catégorie d'activité (CVC, éclairage, équipements spécifiques). Si le bâtiment est déjà très performant de base, il doit atteindre ce seuil de consommation au mètre carré (exprimé en kWh/m²/an).</p>

                <h2>3. Déclaration sur la plateforme OPERAT</h2>
                <p>Ne pas déclarer est la première infraction. Depuis 2022, tous les assujettis doivent remonter annuellement leurs données de consommation énergétique sur la plateforme numérique <strong>OPERAT</strong> gérée par l'ADEME.</p>
                <p>Cette plateforme génère une "attestation annuelle" avec une note Éco Énergie Tertiaire (allant de la feuille grise "Insuffisant" aux trois feuilles vertes "Excellent"). Cette note devra obligatoirement être affichée dans le bâtiment à la vue du public et des salariés.</p>

                <h2>4. Le levier CVC : Pompe à chaleur et GTC</h2>
                <p>Le chauffage et la climatisation représentent en moyenne <strong>50 % à 60 % de la facture énergétique</strong> d'un bâtiment tertiaire. Il est souvent impossible d'atteindre le jalon de -40 % en 2030 sans refondre totalement les systèmes thermiques.</p>
                <ul>
                    <li><strong>Remplacement des chaudières fossiles :</strong> Le passage au fioul ou au gaz vers des <a href="/climatisation-entreprise" className="font-semibold text-blue-600 hover:underline">systèmes de pompe à chaleur tertiaire (VRV, PAC eau/eau)</a> permet de diviser par 3 ou 4 la consommation énergétique liée au chauffage.</li>
                    <li><strong>Gestion Technique du Bâtiment (GTB) / GTC :</strong> Obligatoire avec le décret BACS. Installer un système de pilotage intelligent permet de réduire la facture de 20 % en optimisant le chauffage et la climatisation selon les plages horaires et l'occupation réelle.</li>
                    <li><strong>Récupération d'énergie (VMC Double Flux) :</strong> Extraire l'air vicié tout en récupérant ses calories pour préchauffer l'air neuf.</li>
                </ul>

                <h2>5. Sanctions "Name & Shame" et amendes</h2>
                <p>En cas de non-respect de transmission des données ou de non-atteinte des objectifs, le préfet peut prononcer des sanctions :</p>
                <ul>
                    <li>Une amende administrative de <strong>1 500 € pour les personnes physiques</strong> et <strong>7 500 € pour les personnes morales</strong>.</li>
                    <li>Le principe du <strong>Name & Shame</strong> : publication sur un site de l'État du nom de l'entreprise ou du bâtiment défaillant, impactant fortement la marque employeur et l'image RSE (Responsabilité Sociétale des Entreprises).</li>
                </ul>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 rounded-r-xl">
                    <h3 className="text-xl font-bold text-emerald-900 mt-0">Audit CVC et Plan de Rénovation</h3>
                    <p className="text-emerald-800">Le jalon de 2030 approche à grands pas. Anticipez la rénovation de vos systèmes de chauffage et de climatisation pour garantir l'atteinte de vos objectifs.</p>
                    <a href="/devis" className="inline-block mt-4 bg-emerald-600 text-white font-bold py-2 px-6 rounded hover:bg-emerald-700 transition">Demander un audit CVC Décret Tertiaire</a>
                </div>
            </>
        )
    }
];

// Helpers
export function getAllGuideSlugs(): string[] {
    return GUIDES.map((g) => g.slug);
}

export function getGuideBySlug(slug: string): Guide | undefined {
    return GUIDES.find((g) => g.slug === slug);
}
