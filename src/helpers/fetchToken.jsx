

const fetchToken = async(endpoint, data, method='GET')=>{

    const url =`http://localhost:9090/api/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    if(method==='GET'){
        const resp= await fetch(url,{
            headers:{
                'x-token':token,
                'Content-type':'application/json'
            }
        });
        return await resp.json();
    }else{
        const resp=await fetch(url,{
            method,
            headers:{
                'Content-type':'application/json',
                'x-token':token,
            },
            body:JSON.stringify(data)
        })
        return await resp.json();
    }
}

export default fetchToken;