import CardAnimalPerdidos from "@/components/cards/cardAnimalPerdidos";
import CardInicial from "@/components/cards/cardInicial";
import { Container } from "@/components/container";
import Header from "@/components/header";
import PainelPerdidos from "@/components/painelPerdidos";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <header>
        <Header/>
      </header>
      <main>
        <section>
          <div>
            <Container>
              <CardInicial/>
              <PainelPerdidos/>
            </Container>
          </div>
        </section>
      </main>
     
    </div>
  );
}
