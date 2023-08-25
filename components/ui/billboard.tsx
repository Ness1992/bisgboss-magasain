import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        {/* Fond d'effet flou avec un flou moins prononcé */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(255, 255, 255, 0.3)", // Couleur de fond gris clair avec opacité
            backdropFilter: "blur(4px)", // Flou moins prononcé
          }}
        />
        
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div
            className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs"
            style={{ color: "black", position: "relative", zIndex: 1 }} // Ajout du style pour la couleur blanche et la superposition au-dessus de l'effet de flou
          >
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
