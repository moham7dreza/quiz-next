export default function Layout ({children, info}) {
    return (
        <div className={'flex-center'}>
            {children}
            {info}
        </div>
    )
}