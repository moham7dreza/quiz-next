import Image from "next/image";

export const ModalFrame = ({imageSource}) => {
    return (
        <>
            <Image src={imageSource} alt='' height={600} width={600} className='w-full object-cover aspect-square col-span-2'/>
        </>
    )
}