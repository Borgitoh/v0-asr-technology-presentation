interface ServiceDetailProps {
  title: string
  description: string
  details: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}

export function ServiceDetail({
  title,
  description,
  details,
  imageSrc,
  imageAlt,
  reverse = false,
}: ServiceDetailProps) {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-10 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-40 h-40 bg-accent/15 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:grid-flow-dense" : ""}`}>
          <div className={`space-y-6 ${reverse ? "md:col-start-2" : ""}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-balance">{title}</h2>

            <div className="space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed font-medium">{description}</p>

              <p className="text-muted-foreground leading-relaxed">{details}</p>
            </div>

            <div className="pt-4">
              <a
                href="/contato"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
              >
                Saiba Mais
              </a>
            </div>
          </div>

          <div className={`relative ${reverse ? "md:col-start-1 md:row-start-1" : ""}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/10">
              <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="w-full h-full object-cover" />
            </div>
            <div
              className={`absolute -bottom-6 ${reverse ? "-left-6" : "-right-6"} w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
