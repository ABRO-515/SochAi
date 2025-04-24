import Image from "next/image";

export default function Header() {
    return (
        <>
            <main className="w-full h-full bg-[#252525] py-3 text-white " >

                <nav className="flex items-center justify-between lg:mx-8 mx-3" >
                    <ul className="text-xs font-thin lg:flex gap-2 hidden" >
                        <li>Our Features</li>
                        <li>Why SochAi</li>
                    </ul>
                    <div className=" flex font-bold  text-xl items-center" >
                        <Image
                            src="/logo.webp"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="h-[3.5rem] lg:mr-4  w-full max-w-[6rem] py-3"
                        />
                        <h3 className="SF-Pro-Display-Regular md:text-2xl text-xl" >Soch<span className="  text-red-500" >Ai</span> </h3>
                    </div>

                    <button className="bg-red-500 hover:bg-red-600 cursor-pointer SF-Pro-Display-Regular font-semibold px-3 py-1 text-sm rounded-full" >Download Now</button>
                </nav>

            </main>
        </>
    )
}
