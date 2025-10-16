import {
  Activity,
  Shield,
  Monitor,
  Database,
  Server,
  Phone,
  Wifi,
  Users,
  Code,
  ShoppingCart,
  Settings,
  Lock,
} from "lucide-react"

const services = [
  {
    icon: Activity,
    title: "DIAGNÓSTICO E OTIMIZAÇÃO DE REDES",
  },
  {
    icon: Shield,
    title: "AVALIAÇÃO E IMPLEMENTAÇÃO DE SEGURANÇA DE REDES",
  },
  {
    icon: Monitor,
    title: "GESTÃO E SUPORTE A SISTEMAS OPERATIVOS",
  },
  {
    icon: Database,
    title: "GESTÃO DE BACKUP E BASES DE DADOS",
  },
  {
    icon: Server,
    title: "INFRAESTRUTURA DE VIRTUALIZAÇÃO",
  },
  {
    icon: Phone,
    title: "SOLUÇÕES DE VOZ SOBRE IP (TELEFONIA VOIP)",
  },
  {
    icon: Wifi,
    title: "PROJETOS DE REDES WIRELESS",
  },
  {
    icon: Lock,
    title: "TRANSFERÊNCIA DE CONHECIMENTOS E CAPACITAÇÃO TÉCNICA",
  },
  {
    icon: Users,
    title: "SUPORTE TÉCNICO EM SISTEMAS LINUX",
  },
  {
    icon: Code,
    title: "DESENVOLVIMENTO DE PÁGINAS WEB",
  },
  {
    icon: ShoppingCart,
    title: "COMERCIALIZAÇÃO DE EQUIPAMENTOS DE REDE E INFRAESTRUTURA",
  },
  {
    icon: Settings,
    title: "ESPECIALISTAS EM OPERAÇÕES DE TI",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/15 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 text-balance">O QUE FAZEMOS</h2>

        <div className="text-center mb-12 space-y-2 max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Atendimento personalizado • Equipa técnica experiente • Parcerias com marcas reconhecidas
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Soluções adaptadas ao mercado angolano • Suporte técnico contínuo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative bg-card border border-border hover:border-primary/50 rounded-2xl px-6 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-sm font-semibold leading-tight text-balance text-foreground">{service.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
