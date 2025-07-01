import { Map } from 'lucide-react';
import Image from "next/image";

export default function CardAnimalPerdido() {
    return (
        <div >
                <div className="p-4 border-1 rounded-lg flex justify-center flex-col items-center bg-white">
                    <Image
                        src="/cachorroPerdido.png"
                        alt="Animal Perdido"
                        width={400}
                        height={200}
                        className="h-50 w-50 flex justify-center items-center rounded 0"
                    />
                    <div>
                    <h2 className="font-semibold">Nome do animal</h2>
                    <p>Nicolas</p>
                    <h2 className="font-semibold">Localizção do desaparecimento</h2>
                    <p>Rua tupi 1788</p>
                    <h2 className="font-semibold">Breve descrição</h2>
                    <p>Fugiu enquanto cozinhava.</p>
                    </div>
                </div>   
        </div>
    );
}