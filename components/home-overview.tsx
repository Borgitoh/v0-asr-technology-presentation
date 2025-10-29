import { Server, Shield, Wrench, Users } from "lucide-react"

export function HomeOverview() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a ASR Technology?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Somos especialistas em fornecer soluções tecnológicas completas para empresas em Angola
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Server className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Infraestrutura</h3>
            <p className="text-muted-foreground leading-relaxed">
              Soluções completas de infraestrutura de TI para seu negócio
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Segurança</h3>
            <p className="text-muted-foreground leading-relaxed">
              Proteção avançada para seus dados e sistemas críticos
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Wrench className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Suporte</h3>
            <p className="text-muted-foreground leading-relaxed">
              Assistência técnica especializada disponível quando você precisar
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Consultoria</h3>
            <p className="text-muted-foreground leading-relaxed">Orientação estratégica para transformação digital</p>
          </div>
        </div>
      </div>
    </section>
  )
}
