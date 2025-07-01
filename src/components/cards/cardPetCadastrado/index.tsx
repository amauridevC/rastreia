import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dot } from 'lucide-react';
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function CardPetCadastrado() {
    return (
        <div>
            <Link href="/carteira">
            <div className="border p-4 rounded-lg shadow-md flex ">
                <div className=" flex justify-center items-center">
                <Avatar className="w-15 h-15 mr-3 border-1 border-[#5A5CFF]">
                    <AvatarImage src="https://github.com/shadcn.png"  />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </div>
                <div className="w-full flex flex-col  justify-center space-y-2 ">
                    <div className="flex justify-between w-full">
                         <p className="font-bold">Thor</p>
                          <Button className="w-10 h-6 text-2xl rounded-sm bg-[#5361FF]"><Dot /><Dot /></Button>
                    </div>
                   
                    <div className="flex flex-wrap gap-2 ">
                        <p className="text-sm text-gray-500 break-words max-w-full">*Gato</p>
                        <p className="text-sm text-gray-500  break-words max-w-full ">*Femea</p>
                        <p className="text-sm text-gray-500  break-words max-w-full ">*Vira lata (SRD)  </p>
                        
                    </div>
                    <div className="flex justify-between w-full">
                        <Button className="w-20 h-6 text-[11px] rounded-sm bg-blue-300 text-blue-600">carteira Pet</Button>
                        <Button className="w-20 h-6 text-[10px] rounded-sm bg-red-300 text-red-600">Perdi meu pet</Button>
                    </div>
                </div>

            </div>
            </Link>
        </div>
    )
}