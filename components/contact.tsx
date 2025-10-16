import { Phone, Mail, Facebook, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">OBRIGADO!</h2>
        <p className="text-xl text-muted-foreground mb-12">AGUARDAMOS POR SI</p>

        <div className="space-y-6 mb-12">
          <a
            href="tel:+244949110346"
            className="flex items-center justify-center gap-3 text-2xl font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="w-8 h-8" />
            <span>+ 244 949 110 346</span>
          </a>

          <a
            href="mailto:asr.technology@hotmail.com"
            className="flex items-center justify-center gap-3 text-xl text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
            <span>asr.technology@hotmail.com</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="w-8 h-8" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  )
}
