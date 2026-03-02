import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mentions Légales & Confidentialité | CPMI.fr',
    description: 'Mentions légales et politique de confidentialité du site CPMI.fr.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function MentionsLegales() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 lg:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                        Mentions Légales & Confidentialité
                    </h1>
                    <p className="text-slate-500">
                        Dernière mise à jour : 26 Février 2026
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
                    <div className="prose prose-slate max-w-none">

                        <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-2 mb-6">
                            1. Éditeur du site
                        </h2>
                        <p>
                            Le site <strong>cpmi.fr</strong> est édité par la société :
                        </p>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-6">
                            <p className="font-bold text-slate-900 mb-2">WADE STUDIO LTD</p>
                            <p className="text-slate-600 mb-1">Société enregistrée auprès du Registrar of Companies de Maurice.</p>
                            <p className="text-slate-600 mb-1">Business Registration Number (BRN) : C25227533</p>
                            <p className="text-slate-600 mb-1">File No : C227533</p>
                            <p className="text-slate-600">Siège social : 432 Ave Bounty, Morcellement Balaclava, MAURITIUS.</p>
                        </div>

                        <p className="mb-2">
                            <strong>Email de contact :</strong> <a href="mailto:contact@cpmi.fr" className="text-blue-600 hover:text-blue-800">contact@cpmi.fr</a>
                        </p>
                        <p className="mb-8">
                            <strong>Directeur de la publication :</strong> Wade Timothy
                        </p>

                        <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-2 mb-6 mt-12">
                            2. Hébergement
                        </h2>
                        <p className="mb-1">
                            Le site est hébergé par la société <strong>Vercel Inc.</strong>
                        </p>
                        <p className="mb-1">
                            Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
                        </p>
                        <p className="mb-8">
                            Le stockage des données est assuré sur des serveurs sécurisés.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-2 mb-6 mt-12">
                            3. Propriété intellectuelle
                        </h2>
                        <p className="mb-4">
                            L'ensemble de ce site relève de la législation internationale sur le droit d'auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés. La marque "WADE STUDIO LTD" et le nom de domaine "cpmi.fr" sont la
                            propriété exclusive de l'éditeur.
                        </p>
                        <p className="mb-8">
                            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site,
                            quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de WADE STUDIO LTD.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-2 mb-6 mt-12">
                            4. Limitation de responsabilité
                        </h2>
                        <p className="mb-4">
                            Le site cpmi.fr agit en tant qu'intermédiaire technique (apporteur d'affaires). Il a pour but de faciliter la mise
                            en relation entre des entreprises/particuliers et des professionnels du bâtiment tertiaire/industriel via des partenaires affiliés.
                        </p>
                        <p className="mb-4">
                            WADE STUDIO LTD ne saurait être tenue pour responsable des dommages directs ou indirects causés au matériel de
                            l'utilisateur, lors de l'accès au site cpmi.fr.
                        </p>
                        <p className="mb-8">
                            WADE STUDIO LTD décline toute responsabilité quant à l'utilisation qui pourrait être faite des informations et
                            contenus présents sur cpmi.fr. Les devis sont établis sous la seule responsabilité des artisans partenaires.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-2 mb-6 mt-12">
                            5. Protection des données personnelles (RGPD)
                        </h2>
                        <p className="mb-4">
                            De manière générale, vous n'êtes pas tenu de nous communiquer vos données personnelles lorsque vous visitez
                            notre site Internet cpmi.fr. Cependant, ce principe comporte certaines exceptions. En effet, pour certains services
                            proposés par notre site, vous pouvez être amenés à nous communiquer certaines données telles que : votre nom, le
                            nom de votre entreprise, votre ville, votre adresse électronique, et votre numéro de téléphone.
                        </p>
                        <p className="mb-4">
                            Tel est le cas lorsque vous remplissez le formulaire qui vous est proposé en ligne, dans la rubrique de demande
                            de devis. Les informations recueillies sur ce formulaire sont transmises directement à nos partenaires spécialisés
                            pour traiter votre demande de devis.
                        </p>
                        <p className="mb-8">
                            Conformément à la réglementation européenne en vigueur, vous disposez d'un droit d'accès, de rectification et
                            d'opposition aux données personnelles vous concernant. Vous pouvez exercer ce droit en nous contactant à
                            l'adresse : contact@cpmi.fr.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
