"use strict";


module.exports = function(client){
    return new Promise(function(resolve, reject){

        var body = {
          "settings": {
              "number_of_replicas": 0,
              "number_of_shards": 1
    
            },
          
            "mappings": {

                "iris": {
                    properties : {
                      
                        "boulodromes": {"type" : "float",     "store" : true },
                        "campings": {"type" : "float",    "store" : true },
                        "alcoolisme": {"type" : "float",    "store" : true },
                        "hypermarches": {"type" : "float",    "store" : true },
                        "supermarches": {"type" : "float",    "store" : true },
                        "piscines": {"type" : "float",    "store" : true },
                        "poste":  {"type" : "float",    "store" : true },
                        "geometry": {"type" : "geo_shape", "store" : true },
                        "center": {"type" : "geo_point", "store" : true },
                        "departement": {"type" : "string", "store" : true , "index": "not_analyzed"},
                        "commune": {"type" : "string", "store" : true , "index": "not_analyzed"},
                        "libcom": {"type" : "string", "store" : true , "index": "not_analyzed"},
                        "departement": {"type" : "string", "store" : true , "index": "not_analyzed"},
                        "region": {"type" : "string", "store" : true , "index": "not_analyzed"},
                        "arrondissement": {"type" : "string", "store" : true , "index": "not_analyzed"}
                     }
                }
            }
        };

        client.indices.create(
            {
                index: "iris",
                body: body
            }
            , function (error) {
                if (error) {
                    reject(error);
                }
                else {
                    console.log("Created iris index with mapping.")
                    resolve();
                }
            }
        );

    })
}
                



