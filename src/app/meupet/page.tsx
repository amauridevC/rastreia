import CardAnimalPerdidos from "@/components/cards/cardAnimalPerdidos";
import CardInicial from "@/components/cards/cardInicial";
import { Container } from "@/components/container";
import PainelCadastros from "@/components/painelCadastros";
import PainelPerdidos from "@/components/painelPerdidos";
import Image from "next/image";

export default function Meupet() {
  return (
    <div >
      <main>
        <section>
          <div>
            <Container>
                <PainelCadastros/>
            </Container>
          </div>
        </section>
      </main>
     
    </div>
  );
}
