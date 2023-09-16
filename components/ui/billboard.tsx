// Importe le type Billboard depuis le module externe "@/types"
import { Billboard } from "@/types";

// Définit une interface pour les propriétés attendues par le composant BillboardComponent
interface BillboardProps {
  data: Billboard; // Le composant attend une propriété 'data' de type Billboard
}

// Définit le composant BillboardComponent en tant que fonction React
const BillboardComponent: React.FC<BillboardProps> = ({ data }) => {
  return (
    // Div extérieur pour le conteneur du panneau d'affichage avec des styles CSS
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      {/* Div pour l'image de fond avec styles et filtre de luminosité */}
      <div
        style={{
          backgroundImage: `url(${data?.imageUrl})`,
          filter: "brightness(70%)", // Ajuste la luminosité de l'image à 70%
        }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        {/* Div pour afficher le libellé au centre */}
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          {/* Affiche le libellé avec des styles de texte */}
          <div
            className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs"
            style={{ color: "white" }} // Changer la couleur du texte à blanc
          >
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporte le composant BillboardComponent par défaut
export default BillboardComponent;
