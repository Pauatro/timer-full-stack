enum EMethods{
    'GET',
    'HEAD',
    'POST',
    'PUT',
    'DELETE',
    'CONNECT',
    'OPTIONS',
    'TRACE',
    'PATCH'
}

interface IHeaders{
    [key: string]: any
}

export function call(method: string, url: string, body?: BodyInit, headers?: IHeaders, callback?: ()=>{}) {
    if(!(method in EMethods)) throw new Error(`${method} is an invalid method`)
    return fetch(url, { method, headers, body })
        .then(res=> {
            return res.text()
            .then(body=>{
                return {
                    status: res.status,
                    body
                }
            })
        })
}