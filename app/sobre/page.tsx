import { About } from "@/components/about"

export default function SobrePage() {
  return (
    <main className="min-h-screen">
      <div className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-balance">Sobre Nós</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça a ASR Technology e nossa jornada de inovação tecnológica
          </p>
        </div>
      </div>

      <About />

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12 text-balance">
            Por Que Escolher a ASR Technology?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-primary">01</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Experiência Comprovada</h3>
              <p className="text-muted-foreground leading-relaxed">
                Anos de experiência no mercado angolano, com projetos bem-sucedidos em diversos setores.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-primary">02</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Equipa Qualificada</h3>
              <p className="text-muted-foreground leading-relaxed">
                Profissionais certificados e especializados nas mais recentes tecnologias do mercado.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-primary">03</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Suporte Contínuo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Acompanhamento e suporte técnico permanente para garantir o sucesso dos seus projetos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
