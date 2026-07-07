import brazil from "@/assets/jersey-brazil.jpg";
import red from "@/assets/jersey-red.jpg";
import blue from "@/assets/jersey-blue.jpg";
import black from "@/assets/jersey-black.jpg";
import retro from "@/assets/jersey-retro.jpg";
import white from "@/assets/jersey-white.jpg";

export type Product = {
  id: string;
  slug: string;
  name: string;
  club: string;
  country: string;
  league: string;
  season: string;
  category: "clubs-br" | "clubs-eu" | "national" | "retro";
  price: number;
  oldPrice?: number;
  image: string;
  gallery: string[];
  sizes: string[];
  badge?: "NEW" | "HOT" | "-20%" | "RETRO";
  rating: number;
  reviews: number;
  description: string;
};

const sizes = ["S", "M", "L", "XL", "XXL"];

export const products: Product[] = [
  {
    id: "p1", slug: "brazil-home-2024", name: "Brazil Home 2024", club: "Brazil", country: "Brazil",
    league: "National Team", season: "2024/25", category: "national", price: 89.9, oldPrice: 119.9,
    image: brazil, gallery: [brazil, black, white], sizes, badge: "HOT", rating: 4.9, reviews: 214,
    description: "The iconic yellow Seleção jersey. Lightweight breathable fabric with authentic crest.",
  },
  {
    id: "p2", slug: "flamengo-home-2425", name: "Flamengo Home 24/25", club: "Flamengo", country: "Brazil",
    league: "Brasileirão", season: "2024/25", category: "clubs-br", price: 94.9,
    image: red, gallery: [red, black], sizes, badge: "NEW", rating: 4.8, reviews: 132,
    description: "Mengão's classic red & black stripes reimagined for the new season.",
  },
  {
    id: "p3", slug: "argentina-home-2024", name: "Argentina Home 2024", club: "Argentina", country: "Argentina",
    league: "National Team", season: "2024/25", category: "national", price: 89.9,
    image: blue, gallery: [blue, white], sizes, badge: "HOT", rating: 4.9, reviews: 301,
    description: "Celeste y blanco — three stars, one legend.",
  },
  {
    id: "p4", slug: "real-madrid-black-2425", name: "Real Madrid Third 24/25", club: "Real Madrid", country: "Spain",
    league: "LaLiga", season: "2024/25", category: "clubs-eu", price: 109.9,
    image: black, gallery: [black, white], sizes, badge: "NEW", rating: 4.7, reviews: 89,
    description: "Black and gold third kit — pure Galáctico energy.",
  },
  {
    id: "p5", slug: "santos-retro-1970", name: "Santos Retro Pelé 1970", club: "Santos", country: "Brazil",
    league: "Retro", season: "1970", category: "retro", price: 129.9,
    image: retro, gallery: [retro, white], sizes, badge: "RETRO", rating: 5.0, reviews: 412,
    description: "The immortal jersey of O Rei. Vintage cut, premium cotton.",
  },
  {
    id: "p6", slug: "germany-home-2024", name: "Germany Home 2024", club: "Germany", country: "Germany",
    league: "National Team", season: "2024/25", category: "national", price: 89.9,
    image: white, gallery: [white, black], sizes, badge: "-20%", oldPrice: 109.9, rating: 4.6, reviews: 78,
    description: "Die Mannschaft — clean, precise, iconic.",
  },
  {
    id: "p7", slug: "palmeiras-home-2425", name: "Palmeiras Home 24/25", club: "Palmeiras", country: "Brazil",
    league: "Brasileirão", season: "2024/25", category: "clubs-br", price: 94.9,
    image: blue, gallery: [blue, white], sizes, rating: 4.7, reviews: 156,
    description: "Verdão pride in every stitch.",
  },
  {
    id: "p8", slug: "manchester-united-home-2425", name: "Man United Home 24/25", club: "Manchester United", country: "England",
    league: "Premier League", season: "2024/25", category: "clubs-eu", price: 109.9,
    image: red, gallery: [red, black], sizes, badge: "HOT", rating: 4.8, reviews: 245,
    description: "Red Devils home kit. Old Trafford ready.",
  },
  {
    id: "p9", slug: "brazil-retro-1998", name: "Brazil Retro 1998", club: "Brazil", country: "Brazil",
    league: "Retro", season: "1998", category: "retro", price: 119.9,
    image: brazil, gallery: [brazil, retro], sizes, badge: "RETRO", rating: 4.9, reviews: 189,
    description: "R9's legendary World Cup jersey. Timeless.",
  },
  {
    id: "p10", slug: "corinthians-home-2425", name: "Corinthians Home 24/25", club: "Corinthians", country: "Brazil",
    league: "Brasileirão", season: "2024/25", category: "clubs-br", price: 94.9,
    image: white, gallery: [white, black], sizes, badge: "NEW", rating: 4.7, reviews: 98,
    description: "Timão faithful — the classic all-white home shirt.",
  },
  {
    id: "p11", slug: "france-home-2024", name: "France Home 2024", club: "France", country: "France",
    league: "National Team", season: "2024/25", category: "national", price: 89.9,
    image: blue, gallery: [blue, white], sizes, rating: 4.7, reviews: 112,
    description: "Les Bleus — deep blue and champion pedigree.",
  },
  {
    id: "p12", slug: "barcelona-home-2425", name: "Barcelona Home 24/25", club: "Barcelona", country: "Spain",
    league: "LaLiga", season: "2024/25", category: "clubs-eu", price: 109.9,
    image: red, gallery: [red, blue], sizes, badge: "HOT", rating: 4.8, reviews: 203,
    description: "Blaugrana forever. Més que un club.",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const relatedProducts = (p: Product) =>
  products.filter((x) => x.id !== p.id && x.category === p.category).slice(0, 4);
