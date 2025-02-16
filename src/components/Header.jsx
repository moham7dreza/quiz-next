import Link from "next/link";

export const Header = ({lang, dictionary}) => {
    return (
        <>
            {/*<!-- ========== HEADER ========== -->*/}
            <header
                className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 dark:bg-gray-900">
                <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
                    <div className="relative md:flex md:items-center md:justify-between">
                        <div className="flex items-center justify-between">
                            <Link href={`/${lang}/`}
                                  className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                  aria-label="Brand">
                                {dictionary['main'].appName}
                            </Link>
                            <div className="md:hidden">
                                <button type="button"
                                        className="hs-collapse-toggle flex justify-center items-center w-9 h-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        data-hs-collapse="#navbar-collapse-with-animation"
                                        aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                                    <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round">
                                        <line x1="3" x2="21" y1="6" y2="6"/>
                                        <line x1="3" x2="21" y1="12" y2="12"/>
                                        <line x1="3" x2="21" y1="18" y2="18"/>
                                    </svg>
                                    <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round">
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div id="navbar-collapse-with-animation"
                             className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                            <div
                                className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
                                <div
                                    className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                                    <a className="font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                       href="#" aria-current="page">ارتباط با ما</a>

                                    <a className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                       href="#">
                                        قوانین و شرایط
                                    </a>

                                    <div
                                        className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                                        <button type="button"
                                                className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                            دسته بندی ها
                                            <svg className="flex-shrink-0 ms-2 w-4 h-4"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round">
                                                <path d="m6 9 6 6 6-6"/>
                                            </svg>
                                        </button>

                                        <div
                                            className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full start-0 min-w-[15rem] bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                                            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                <div className="flex flex-col mx-1 md:mx-0">
                                                    <Link className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                       href="/shop">
                                                        <svg className="flex-shrink-0 w-5 h-5 mt-1"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round">
                                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                                        </svg>
                                                        <div className="grow">
                                                            <p className="font-medium text-gray-800 dark:text-gray-200">آیتم هام</p>
                                                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">از تاپ ریت</p>
                                                        </div>
                                                    </Link>

                                                </div>

                                                <div className="flex flex-col pt-4 md:pt-0 mx-1 md:mx-0">
                                                    <span
                                                        className="text-sm font-semibold uppercase text-gray-800 dark:text-gray-200">تست</span>

                                                    {/*<!-- Link -->*/}
                                                    <a className="group mt-2 p-3 flex gap-x-5 items-center rounded-xl hover:bg-gray-100 dark:hover:bg-slate-500/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600"
                                                       href="#">
                                                        <div className="grow">
                                                            <p className="text-sm text-gray-800 dark:text-slate-400">
                                                                تست
                                                            </p>
                                                            <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600">
                                                                تست
                                                                <svg
                                                                    className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
                                                                    xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24" fill="none"
                                                                    stroke="currentColor" strokeWidth="2"
                                                                    strokeLinecap="round" strokeLinejoin="round">
                                                                    <path d="m9 18 6-6-6-6"/>
                                                                </svg>
                                                            </p>
                                                        </div>
                                                    </a>
                                                    {/*<!-- End Link -->*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <a className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                       href="#">
                                        تعرفه ها <span
                                        className="py-0.5 px-1.5 rounded-full text-xs font-medium bg-blue-50 border border-blue-200 text-blue-600">4</span>
                                    </a>

                                    <div className="pt-3 md:pt-0">
                                        <Link href={`/${lang}/auth/login`}
                                              className="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                 strokeLinejoin="round">
                                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                                <circle cx="12" cy="7" r="4"/>
                                            </svg>
                                            {dictionary['auth'].loginRegister}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            {/*<!-- ========== END HEADER ========== -->*/}
        </>
    )
}