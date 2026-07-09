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

const sizes = ["P", "M", "G", "GG", "XGG"];

export const products: Product[] = [
  {
    id: "p1", slug: "brasil-home-2024", name: "Brasil I 2024", club: "Brasil", country: "Brasil",
    league: "Seleção", season: "2024/25", category: "national", price: 449.9, oldPrice: 599.9,
    image: brazil, gallery: [brazil, black, white], sizes, badge: "HOT", rating: 4.9, reviews: 214,
    description: "A camisa amarelinha eterna da Seleção. Tecido leve, respirável e escudo bordado — feita pra vestir a esperança de um país inteiro.",
  },
  {
    id: "p2", slug: "flamengo-home-2425", name: "Flamengo I 24/25", club: "Flamengo", country: "Brasil",
    league: "Brasileirão", season: "2024/25", category: "clubs-br", price: 474.9,
    image: red, gallery: [red, black], sizes, badge: "NEW", rating: 4.8, reviews: 132,
    description: "O manto rubro-negro do Mengão, repaginado pra temporada. Pra quem canta na arquibancada e vibra a cada gol.",
  },
  {
    id: "p3", slug: "argentina-home-2024", name: "Argentina I 2024", club: "Argentina", country: "Argentina",
    league: "Seleção", season: "2024/25", category: "national", price: 449.9,
    image: blue, gallery: [blue, white], sizes, badge: "HOT", rating: 4.9, reviews: 301,
    description: "Celeste y blanco — três estrelas e a lenda que segue viva. A camisa que fez chorar meio mundo em Doha.",
  },
  {
    id: "p4", slug: "real-madrid-black-2425", name: "Real Madrid III 24/25", club: "Real Madrid", country: "Espanha",
    league: "LaLiga", season: "2024/25", category: "clubs-eu", price: 549.9,
    image: black, gallery: [black, white], sizes, badge: "NEW", rating: 4.7, reviews: 89,
    description: "Third kit preto e dourado — pura energia Galáctica. Pra quem entende que noite de Champions é dia santo.",
  },
  {
    id: "p5", slug: "santos-retro-1970", name: "Santos Retrô Pelé 1970", club: "Santos", country: "Brasil",
    league: "Retrô", season: "1970", category: "retro", price: 649.9,
    image: retro, gallery: [retro, white], sizes, badge: "RETRO", rating: 5.0, reviews: 412,
    description: "A camisa imortal do Rei. Corte vintage, algodão premium — vestindo história de verdade.",
  },
  {
    id: "p6", slug: "alemanha-home-2024", name: "Alemanha I 2024", club: "Alemanha", country: "Alemanha",
    league: "Seleção", season: "2024/25", category: "national", price: 449.9,
    image: white, gallery: [white, black], sizes, badge: "-20%", oldPrice: 549.9, rating: 4.6, reviews: 78,
    description: "Die Mannschaft — precisão alemã em cada detalhe. Clássica, limpa, icônica.",
  },
  {
    id: "p7", slug: "palmeiras-home-2425", name: "Palmeiras I 24/25", club: "Palmeiras", country: "Brasil",
    league: "Brasileirão", season: "2024/25", category: "clubs-br", price: 474.9,
    image: blue, gallery: [blue, white], sizes, rating: 4.7, reviews: 156,
    description: "Verdão no peito, alviverde na alma. Pra quem sabe que porco não tem Mundial… mas tem paixão.",
  },
  {
    id: "p8", slug: "manchester-united-home-2425", name: "Man United I 24/25", club: "Manchester United", country: "Inglaterra",
    league: "Premier League", season: "2024/25", category: "clubs-eu", price: 549.9,
    image: red, gallery: [red, black], sizes, badge: "HOT", rating: 4.8, reviews: 245,
    description: "Red Devils no capricho. Old Trafford, sábado à tarde, cerveja gelada — tá tudo aqui.",
  },
  {
    id: "p9", slug: "brasil-retro-1998", name: "Brasil Retrô 1998", club: "Brasil", country: "Brasil",
    league: "Retrô", season: "1998", category: "retro", price: 599.9,
    image: brazil, gallery: [brazil, retro], sizes, badge: "RETRO", rating: 4.9, reviews: 189,
    description: "A camisa do R9 na Copa da França. Nostalgia pura pra quem cresceu vendo craque de verdade.",
  },
  {
    id: "p10", slug: "corinthians-home-2425", name: "Corinthians I 24/25", club: "Corinthians", country: "Brasil",
    league: "Brasileirão", season: "2024/25", category: "clubs-br", price: 474.9,
    image: white, gallery: [white, black], sizes, badge: "NEW", rating: 4.7, reviews: 98,
    description: "Fiel Torcida no peito. A camisa branca clássica do Timão — simples, forte, eterna.",
  },
  {
    id: "p11", slug: "franca-home-2024", name: "França I 2024", club: "França", country: "França",
    league: "Seleção", season: "2024/25", category: "national", price: 449.9,
    image: blue, gallery: [blue, white], sizes, rating: 4.7, reviews: 112,
    description: "Les Bleus — azul profundo e o DNA de campeão do mundo.",
  },
  {
    id: "p12", slug: "barcelona-home-2425", name: "Barcelona I 24/25", club: "Barcelona", country: "Espanha",
    league: "LaLiga", season: "2024/25", category: "clubs-eu", price: 549.9,
    image: red, gallery: [red, blue], sizes, badge: "HOT", rating: 4.8, reviews: 203,
    description: "Blaugrana pra sempre. Més que un club — bem mais que uma camisa.",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const relatedProducts = (p: Product) =>
  products.filter((x) => x.id !== p.id && x.category === p.category).slice(0, 4);
