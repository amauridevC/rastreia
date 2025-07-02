import CardAnimalPerdido from "../cards/cardAnimalPerdidos";
import { ArrowLeft } from 'lucide-react';
import { Button } from "../ui/button";
import CardPetCadastrado from "../cards/cardPetCadastrado";
import Link from "next/link";

export default function PainelCadastros() {
    return (
        <div >
            <div className="p-4 grid grid-cols-3 w-full ">
                <Link href="/">
                <Button className="w-15 bg-white shadow hover:bg-white cursor-pointer"><ArrowLeft className="text-black" /></Button>
                </Link>
                <p className="text-center justify-center items-center flex font-bold text-gray-300">MEU PET</p>
            </div>

        
        <div className="p-4">
        <div className="bg-white shadow p-4 rounded-lg">

            <div className="flex flex-col sm:flex-row justify-center  sm:justify-between  items-center mb-4">
            <h1 className="font-bold mb-4">Pets Cadastrados</h1>
            <Link href="/meupet/cadastropet" className="w-full sm:w-40">
            <Button className="bg-[#5361FF] text-white rounded-sm shadow-lg text-[12px] w-full sm:w-40">CADASTRAR NOVO PET</Button>
            </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <CardPetCadastrado/>
              <CardPetCadastrado/>
              <CardPetCadastrado/>
              <CardPetCadastrado/>
            </div>
            </div>
            
        </div>
        </div>
    );
}