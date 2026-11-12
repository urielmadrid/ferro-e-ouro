import { Contato } from "@/components/sections/Contato";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Footer } from "@/components/sections/Footer";
import { Galeria } from "@/components/sections/Galeria";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Profissionais } from "@/components/sections/Profissionais";
import { Servicos } from "@/components/sections/Servicos";
import { Sobre } from "@/components/sections/Sobre";

// Seções PROVISÓRIAS: cada uma será substituída pela seção real nas próximas etapas.
const secoes = [
  { id: "agendamento", titulo: "Agendamento" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Servicos />
        <Profissionais />
        <Galeria />
        <Diferenciais />
        {secoes.map((secao, i) => (
          <section
            key={secao.id}
            id={secao.id}
            className={`flex min-h-screen scroll-mt-20 items-center justify-center border-t border-grafite-claro ${
              i % 2 === 0 ? "bg-onix" : "bg-carvao"
            }`}
          >
            <p className="font-display text-sm uppercase tracking-[0.4em] text-aco">
              {secao.titulo} (em construção)
            </p>
          </section>
        ))}
        <Contato />
      </main>
      <Footer />
    </>
  );
}