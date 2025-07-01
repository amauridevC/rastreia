import CardAnimalPerdido from "../cards/cardAnimalPerdidos";

export default function PainelPerdidos() {
    return (
        <div className="p-4">
        <div className=" rounded-lg">
            <div className="flex justify-between items-center mb-4">
            <h1 className=" text-gray-600">Animais perdidos</h1>
            <h1 className=" text-[#5361FF]">ver todos</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <CardAnimalPerdido/>
              <CardAnimalPerdido/>
              <CardAnimalPerdido/>
              <CardAnimalPerdido/>
            </div>
            </div>
            
        </div>
    );
}