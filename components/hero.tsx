export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-primary-foreground/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-primary-foreground/5 rounded-full blur-2xl" />

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6">
          <span className="text-sm font-medium">Soluções Tecnológicas Profissionais</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">ASR Technology</h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
          Transformando negócios através da tecnologia em Angola
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-primary-foreground text-primary px-8 py-3 text-base font-semibold hover:bg-primary-foreground/90 transition-all hover:scale-105 shadow-lg"
          >
            Fale Conosco
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/30 bg-primary-foreground/5 backdrop-blur-sm text-primary-foreground px-8 py-3 text-base font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            Nossos Serviços
          </a>
        </div>
      </div>
    </section>
  )
}
