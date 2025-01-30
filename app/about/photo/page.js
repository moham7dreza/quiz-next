import {ModalFrame} from "../../components";

export default function Photo() {
    const src = 'https://fakeimg.pl/350x200/?text=World&font=lobster'

    return (
        <div className={'container mx-auto my-10'}>
            <div className={'w-1/2 mx-auto border border-gray-700'}>
                <ModalFrame imageSource={src} />
            </div>
        </div>
    )
}