export default function Layout ({children, info, modal}) {
    return (
        <div className={'flex-center'}>
            <div>
                {children}
            </div>
            {/*{info}*/}
            {modal}
        </div>
    )
}