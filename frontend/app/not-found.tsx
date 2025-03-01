import logo from './favicon.ico'
import Image from 'next/image'

export default function page(){
    return(
        <div className="w-screen h-screen flex justify-center bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className="flex justify-center place-items-center gap-5">
                <Image src={logo} alt='Logo' width={100} height={80} className='border-r-2 p-5 border-gray-500'/>
                <span className="text-2xl">Page Not Found</span>
            </div>
        </div>
    );
}