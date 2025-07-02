import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Dot } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Container } from "@/components/container";

export default function CadastroPet() {
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
        <div className="bg-white shadow p-4 rounded-lg">

            <div className="flex flex-col  justify-center    items-center mb-8">
            <h1 className="font-bold mb-2">Cadastro Pet</h1>
           <p className="text-sm">Favor adicionar duas fotos diferentes do seu pet.</p>
            </div>
            <form action="">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col items-center ">
                    <Avatar className="w-15 h-15 mr-3 border-2 border-[#5A5CFF]">
                       <AvatarImage src="https://github.com/shadcn.png"  />
                       <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Label  htmlFor="foto1" className="mt-2 w-35 h-8 bg-[#5A5CFF] text-white rounded-full justify-center">Adicionar foto</Label>
                   <Input type="file" accept="image/*" className="hidden" id="foto1" />
                </div>
                     <div className="flex flex-col items-center ">
                    <Avatar className="w-15 h-15 mr-3 border-[#5A5CFF] border-2">
                       <AvatarImage src="https://github.com/shadcn.png"  />
                       <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <Label  htmlFor="foto2" className="mt-2 w-35 h-8 bg-[#5A5CFF] text-white rounded-full justify-center ">Adicionar foto</Label>
                   <Input type="file" accept="image/*" className="hidden" id="foto2" />
                    
                </div>

                </div>
                <div className=" space-y-2">
                    <Input type="text" accept="image/*" placeholder="Nome"  className=""  />
                   <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Espécie" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                   </Select>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Raça" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                   </Select>
                   <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Cor Predominante" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                   </Select>
                  
                  
                    <Input type="number" accept="image/*" placeholder="Peso(kg)"  className=""  />
                    <Label htmlFor="" className="">Data de nascimento</Label>
                    <Input type="date" accept="image/*" placeholder="Data de nascimento"   className="w-full"  />
                
                </div>
                <Button className="w-full h-10 bg-[#5A5CFF] text-white rounded-lg mt-4">Cadastrar Pet</Button>

                
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
            </div>
            </div>
            
        </div>
        </Container>
        </div>
    )
}