import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">ASR</span>
            </div>
            <span className="text-xl font-bold text-primary">Technology</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Início
            </Link>
            <Link
              href="/#servicos"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="/#sobre"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Sobre Nós
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contato
            </Link>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
