let base_url="http://localhost:4000/v1/"

exports.get= async (url)=>{
    let res_data=await fetch(base_url+`${url}`)
    let res=await res_data.json()
    return res
}

exports.post= async (url,body)=>{
    let res_data=await fetch(base_url+`${url}`,{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    // console.log(res_data);
    let res=await res_data.json()
    return res
}