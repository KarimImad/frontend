export interface Product{
    id: number;
    title: string;
    price: number;
    descroption: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}