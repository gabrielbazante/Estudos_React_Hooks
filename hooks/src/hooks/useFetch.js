import { useEffect, useState } from "react"

// fetch('http://files.cod3r.com.br/curso-react/estados.json')
//         .then(resp => resp.json())
//             .then(json => console.log(json))

export const useFetch = (url, method = 'get') => {
    const [response, setResponse] = useState({
        data: null,
        loading: false
    })

    useEffect(function () {
        fetch(url, { method })
            .then(resp => resp.json())
            .then(json => setResponse({
                data: json,
                loading: false
            }))
    }, [url, method])

    return response
}