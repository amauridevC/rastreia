import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft } from 'lucide-react';
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { Container } from "@/components/container";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Share2 } from 'lucide-react';


export default function Carteira() {
    return (
        <div className="">
            <Container>
            <div className="p-4 grid grid-cols-3 w-full ">
                <Link href="/meupet">
                <Button className="w-15 bg-white shadow hover:bg-white cursor-pointer"><ArrowLeft className="text-black" /></Button>
                </Link>
                <p className="text-center justify-center items-center flex font-bold text-gray-300">MEU PET</p>
            </div>

        
        <div className="p-4">
        <div className="bg-white shadow p-4 rounded-lg ">
            <div className="shadow max-w-120 mx-auto">
                <div className="bg-[#5A5CFF] text-white p-4 rounded-t-lg ">
                    <p className="text-center">Carteira de Identificação</p>
                </div>
                <div className="flex justify-center items-center gap-10 bg-[#7A87E5]">
                        <div className=" flex justify-center items-center">
                        <Avatar className="w-15 h-15 mr-3">
                            <AvatarImage src="https://github.com/shadcn.png"  />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        </div>
                <div className="text-white my-5">
                    <div className="flex justify-between w-full">
                        <p className="text-[#5A5CFF] text-2xl">Thor</p>
                        <Button className="w-6 h-6  rounded-full bg-[#FC6847]"><Share2 className="mr-1" /></Button>
                    </div>
                        <p>Gato - Femea</p>
                        <Separator />
                        <p>Vira Lata (SRD)</p>
                        <Separator />
                        <p> 2 anos - (06/8/2022)</p>
                </div>
                </div>
                <div className="p-4">
                    <div className="grid grid-cols-2 gap-4"> 
                        <div>
                                <Label>Microchip</Label>
                                 <Input type="text" placeholder="1234567890" className="mt-2 " readOnly />
                        </div>
                        <div>
                                <Label>castrado</Label>
                                 <Input type="text" placeholder="1234567890" className="mt-2 " readOnly />
                        </div>
                         <div>
                                <Label>n Indetificação</Label>
                                 <Input type="text" placeholder="1234567890" className="mt-2 " readOnly />
                        </div>
                        <div>
                                <Label>Peso</Label>
                                 <Input type="text" placeholder="1234567890" className="mt-2" readOnly />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-4">
                    <Label>Pelagem</Label>
                    <Input type="text" placeholder="1234567890" className="" readOnly />
                    <Label>Nome Tutor</Label>
                    <Input type="text" placeholder="1234567890" className="" readOnly />
                    </div>

                 
                </div>
            </div>

        </div>
            
        </div>
        </Container>
        </div>
    )
}