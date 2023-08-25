// Import des dépendances et composants nécessaires
import usePreviewModal from "@/hooks/use-preview-modal";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import Modal from "@/components/ui/modal";

// Définition du composant PreviewModal
const PreviewModal = () => {
  // Utilisation du hook usePreviewModal
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  // Si le produit n'est pas disponible, ne rien afficher
  if (!product) {
    return null;
  }

  // Rendu du composant Modal avec contenu adaptatif
  return ( 
    <Modal 
      open={previewModal.isOpen} 
      onClose={previewModal.onClose}
    >
      {/* Utilisation d'une grille responsive */}
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        {/* Colonne pour la galerie d'images, s'adapte sur différentes tailles d'écran */}
        <div className="sm:col-span-4 lg:col-span-5">
          {/* Utilisation du composant Gallery pour afficher les images */}
          <Gallery images={product.images} />
        </div>
        {/* Colonne pour les informations du produit, s'adapte sur différentes tailles d'écran */}
        <div className="sm:col-span-8 lg:col-span-7">
          {/* Utilisation du composant Info pour afficher les informations */}
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
}

// Export du composant PreviewModal
export default PreviewModal;
