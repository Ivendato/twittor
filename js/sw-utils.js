

//Guardar el el cache dinamico
function actualizaCacheDinamico(dymamicCache, req, res){

    if(res.ok){

        return caches.open(dymamicCache).then(cache=>{

            cache.put(req, res.clone());

            return res.clone();
        });
    }else{
        return res;
    }



}