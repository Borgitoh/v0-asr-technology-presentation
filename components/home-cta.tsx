import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HomeCTA() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/90 p-12 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para transformar seu negócio?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Entre em contato conosco hoje e descubra como podemos ajudar sua empresa a alcançar novos patamares com
            tecnologia de ponta
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground text-primary px-8 py-3 text-base font-semibold hover:bg-primary-foreground/90 transition-all hover:scale-105 shadow-lg"
          >
            Solicitar Orçamento
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
