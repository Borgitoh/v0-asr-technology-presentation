export function About() {
  return (
    <section id="sobre" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">SOBRE NÓS</h2>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-bold text-primary">ASR Technology</span> é uma empresa angolana especializada em
                consultoria tecnológica e fornecimento de equipamentos. Atuamos com foco em qualidade, inovação e
                soluções personalizadas para atender às necessidades de empresas e instituições.
              </p>

              <div className="space-y-4 mt-6">
                <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
                  <h3 className="font-bold text-primary mb-2 text-lg">Missão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Oferecer soluções tecnológicas eficazes, com foco em excelência e inovação, que contribuam para o
                    desenvolvimento sustentável de nossos clientes.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
                  <h3 className="font-bold text-primary mb-2 text-lg">Visão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser reconhecida como uma referência nacional em soluções tecnológicas e fornecimento de
                    equipamentos, apoiando o avanço digital das organizações angolanas.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
                  <h3 className="font-bold text-primary mb-2 text-lg">Valores</h3>
                  <p className="text-muted-foreground leading-relaxed">Qualidade | Inovação | Compromisso | Ética</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HHTLJPgQ8PlJE0jV4AakcBF7rIVqyA.png"
                alt="Professional working on technology"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
