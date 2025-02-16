import Login from "./page";
import {getLang} from "../../dictionary";

export default async function LoginLayout({params}){
    const lang = (await params).lang
    const dictionary = await getLang(lang);

    return (
        <div>
            <Login lang={lang} dictionary={dictionary}/>
        </div>
    );
}