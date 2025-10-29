export function HomeStats() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">10+</div>
            <p className="text-lg text-muted-foreground">Anos de Experiência</p>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">100+</div>
            <p className="text-lg text-muted-foreground">Projetos Concluídos</p>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">50+</div>
            <p className="text-lg text-muted-foreground">Clientes Satisfeitos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
