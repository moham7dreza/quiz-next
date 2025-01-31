import {
    Modal,
    ModalFrame,
} from '../../../../components'

export default function Photo() {
    const src = 'https://fakeimg.pl/350x200/?text=World&font=lobster'

    return (
        <Modal>
            <ModalFrame imageSource={src} />
        </Modal>
    )
}
