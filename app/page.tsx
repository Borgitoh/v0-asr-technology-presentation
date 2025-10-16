import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { ServiceDetail } from "@/components/service-detail"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <ServiceDetail
        title="DIAGNÓSTICO E OTIMIZAÇÃO DE REDES"
        description="O nosso serviço abrange uma vasta gama de sistemas operativos, incluindo Windows, Linux e Unix, entre outros."
        details="Desde a instalação e configuração inicial até à monitorização contínua e resolução de problemas, a nossa equipa de especialistas certificados garante que os seus sistemas operativos estejam sempre otimizados e alinhados com as melhores práticas do setor."
        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PnoZsEXd3RICTDp3b5AxEru43LwLlI.png"
        imageAlt="Network diagnostics"
      />
      <ServiceDetail
        title="PROJETOS DE REDES WIRELESS"
        description="Essas redes utilizam ondas eletromagnéticas, como radiofrequência, para estabelecer a conexão."
        details="A tecnologia wireless é amplamente utilizada em diversas aplicações, desde redes locais (Wi-Fi) até redes de longa distância (celulares 4G/5G)."
        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4OXkzB43CeZeGIaNPjJpOI075BqRiq.png"
        imageAlt="Wireless networks"
        reverse
      />
      <ServiceDetail
        title="DESENVOLVIMENTO DE PÁGINAS WEB"
        description="O processo de desenvolvimento de sites pode ser dividido em várias etapas, que incluem o passo a passo abaixo, confira."
        details="Um dos seus principais objetivos é facilitar a manipulação dos elementos, possibilitando o desenvolvedor modificar as características dos objetos de forma não intrusiva, fazendo com que isso fique transparente para o usuário final."
        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n9T2MJP9qmhEtyOrdL5lo76gPw1xd9.png"
        imageAlt="Web development"
      />
    </main>
  )
}
