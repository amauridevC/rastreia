import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import Link from "next/link";

export default function CardInicial() {
    return (
        <div className="flex flex-col items-center justify-center  w-full sm:max-w-100 mx-auto p-4 h-50 ">
            <Link href="meupet" className="flex w-full  justify-center items-center bg-[#FF6D4D] rounded-lg mb-5 shadow "> 
              <div className="gb-black-100 w-full  text-center">
                      <p className="font-bold text-sm text-white">🐱🐶Cadastrar animal de rua</p>
                    </div>
                    <div className="w-3 p-4 bg-[#F2653C] rounded-r-lg flex flex-col items-center justify-center">
                            <ChevronRight size={15} className="text-white" />
                    </div>
            </Link>
             <Link href="meupet" className="flex w-full  justify-center items-center bg-white rounded-lg  shadow">
              <div className="gb-black-100 w-full  text-center">
                      <p className="font-bold text-sm">Cadastrar meu pet</p>
                    </div>
                    <div className="w-3 p-4 bg-[#F5F5F5] rounded-r-lg flex flex-col items-center justify-center">
                            <ChevronRight size={15} />
                    </div>
            </Link>
          
       
        </div>
    )
}