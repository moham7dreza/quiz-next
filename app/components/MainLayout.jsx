import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const MainLayout = ({children}) => {
    return (
        <>
            <div className="h-full">
                <div className="dark:bg-slate-900 bg-white flex h-full">
                    <div className="max-w-[80rem] flex flex-col mx-auto w-full h-full">
                        {/*<!-- ========== HEADER ========== -->*/}
                        <Header/>
                        {/*<!-- ========== END HEADER ========== -->*/}

                        {/*<!-- ========== MAIN CONTENT ========== -->*/}
                        <main id="content" role="main">
                            {children}
                        </main>
                        {/*<!-- ========== END MAIN CONTENT ========== -->*/}

                        {/*<!-- ========== FOOTER ========== -->*/}
                        <Footer/>
                        {/*<!-- ========== END FOOTER ========== -->*/}
                    </div>
                </div>
            </div>
        </>
    )
}