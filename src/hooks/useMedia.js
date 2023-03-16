import { useEffect, useState } from "react";



const useMedia= () =>{
    console.log('asdfasd asd d')
    const medaiQueries = ['(max-width: 991.98px)','(max-width:1199.98px)','(min-width:1200px)'];
const mediaList = medaiQueries.map((q) => window.matchMedia(q));

const getValue = () =>{
    const indexValue = mediaList.findIndex(mql => mql.matches)
    return indexValue;
}
const [value,setValue] = useState(getValue);
useEffect(() =>{
    const handler = () =>setValue(getValue);
    try{
        mediaList?.forEach(mql =>{
            if(mql.addEventListener){
                mql.addEventListener('change',handler)
            }
        })
    }
    catch(e1){
        console.log(e1);

    }
},[])
return value

}

export default useMedia