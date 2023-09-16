// Import des dépendances et composants nécessaires
import { create } from 'zustand'; // Import de la fonction 'create' de 'zustand' pour créer un store
import { toast } from 'react-hot-toast'; // Import de 'toast' pour afficher des notifications toast
import { persist, createJSONStorage } from "zustand/middleware"; // Import de middleware de 'zustand' pour la persistance des données

import { Product } from '@/types'; // Import du type 'Product' depuis '@/types'
import { AlertTriangle } from 'lucide-react'; // Import de l'icône 'AlertTriangle' de 'lucide-react'

// Définition de l'interface CartStore pour spécifier la structure du store
interface CartStore {
  items: Product[]; // Tableau d'articles de type 'Product' dans le panier
  addItem: (data: Product) => void; // Fonction pour ajouter un article au panier
  removeItem: (id: string) => void; // Fonction pour supprimer un article du panier
  removeAll: () => void; // Fonction pour vider complètement le panier
}

// Création du store 'useCart' en utilisant 'zustand' avec persistance des données
const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [], // Initialise le panier comme un tableau vide
    addItem: (data: Product) => { // Fonction pour ajouter un article au panier
      const currentItems = get().items; // Obtient les articles actuellement présents dans le panier
      const existingItem = currentItems.find((item) => item.id === data.id); // Vérifie si l'article est déjà dans le panier en comparant les identifiants
      
      if (existingItem) { // Si l'article est déjà dans le panier, affiche une notification toast
        return toast('Article déjà dans le panier');
      }

      set({ items: [...get().items, data] }); // Ajoute l'article au panier en copiant le tableau existant et en ajoutant le nouvel article
      toast.success('Article ajouté au panier'); // Affiche une notification toast pour confirmer l'ajout de l'article
    },
    removeItem: (id: string) => { // Fonction pour supprimer un article du panier
      set({ items: [...get().items.filter((item) => item.id !== id)] }); // Filtrage du tableau pour supprimer l'article avec l'identifiant spécifié
      toast.success('Article retiré du panier'); // Affiche une notification toast pour confirmer la suppression de l'article
    },
    removeAll: () => set({ items: [] }), // Fonction pour vider complètement le panier en remplaçant le tableau par un tableau vide
  }), {
    name: 'cart-storage', // Nom du stockage pour la persistance des données
    storage: createJSONStorage(() => localStorage) // Utilisation de 'localStorage' pour stocker les données du panier
  })
);

// Export du hook 'useCart' pour l'utiliser dans d'autres parties de l'application
export default useCart;
