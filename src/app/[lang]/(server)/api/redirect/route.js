// for test in browser link localhost:3000/api according to file system

import {redirect} from "next/navigation";

export async function GET(request) {
    redirect('http://localhost:3000/api/shop/1')
}