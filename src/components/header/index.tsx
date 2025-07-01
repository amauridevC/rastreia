import Image from "next/image";

export default function Header() {
    return (
        <div>
            <header className=" bg-[#5361FF] rounded-bl-[40px] rounded-br-[40px] flex flex-col items-center justify-center h-80">
                <Image
                    src="/rastreiabranca.png"
                    alt="Rastreia Logo"
                    width={800}
                    height={400}
                    className="flex h-40 w-40 "
                />
                 <Image
                    src="/cachorros.png"
                    alt="Rastreia Logo"
                    width={800}
                    height={400}
                    className="flex h-60 w-60 mb-5 "
                />
               
            </header>
        </div>
    )
}