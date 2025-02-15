import Quiz from "./page";
import {getLang} from "../../../dictionary";

export default async function Layout({about, params}) {
    const lang = (await params).lang
    const dictionary = await getLang(lang);

    return (
        <div>
            <h1>quiz layout</h1>
            <Quiz dictionary={dictionary} lang={lang}/>
            {about}
        </div>
    )
}