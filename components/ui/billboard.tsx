import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const BillboardComponent: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${data?.imageUrl})`,
          filter: "brightness(70%)", // Ajuster la luminosité de l'image (par exemple, 70%)
        }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
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

export default BillboardComponent;
