import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { StoreProvider } from "@/lib/store";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl gold-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Chutou pra fora</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Essa página não existe. Bora voltar pro gramado.
        </p>
        <Link to="/" className="mt-6 inline-flex btn-gold rounded-md px-5 py-2.5 text-sm">
          Voltar pro início
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Alguma coisa deu ruim</h1>
        <p className="mt-2 text-sm text-muted-foreground">Tenta de novo ou volta pro início.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-gold rounded-md px-5 py-2.5 text-sm"
          >
            Tentar de novo
          </button>
          <a href="/" className="rounded-md border border-border px-5 py-2.5 text-sm hover:bg-secondary">
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Imports Arena — Camisas de Futebol pra Quem Torce de Verdade" },
      { name: "description", content: "Camisas de futebol pra torcedor de verdade. Grandes clubes, seleções e retrôs eternas — preço justo e entrega pra todo o Brasil. Frete grátis acima de R$ 500." },
      { property: "og:title", content: "Imports Arena — Camisas de Futebol pra Quem Torce de Verdade" },
      { property: "og:description", content: "Feita por torcedor, pra torcedor. Camisas de grandes clubes, seleções e retrôs eternas — com preço justo e entrega no Brasil todo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Header />
        <main className="min-h-[60vh]"><Outlet /></main>
        <Footer />
        <WhatsAppFab />
        <Toaster theme="dark" position="bottom-center" />
      </StoreProvider>
    </QueryClientProvider>
  );
}
