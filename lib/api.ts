import { Product } from "@/type";

const API_URL = "https://fakestoreapi.com";

const getProducts = async (): Promise<Product[]> => {
    try {
        // appel APi au endpoint products
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) {
            // gestion de l'erreur si la reponse n'est pas ok
            throw new Error('Network response was not ok');
        }
        //conversion du corps de la reponse json en tableau produit
        return await response.json();
        
    } catch (error) {
        console.log('Error fetching products: ', error);
        throw error;
    }
};

const getCategories = async (): Promise<string[]> => {
    try {
        // Fait une requete fetch pour obtenir la liste des catégories
        const response = await fetch(`${API_URL}/products/categories`);
        if (!response.ok) {
            // gestion de l'erreur si la reponse n'est pas ok
            throw new Error('Network response was not ok');
        }
        //conversion du corps de la reponse json en tableau de chaines
        return await response.json();
        
    } catch (error) {
        console.log('Error fetching products: ', error);
        throw error;
    }
};

export {getProducts, getCategories};
