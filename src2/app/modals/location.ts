// "success": true,
// "message": "Location set successfully.",
// "location": {
//     "n": 1,
//     "nModified": 0,
//     "upserted": [
//         {
//             "index": 0,
//             "_id": "5fd9565d810946708f50d2c1"
//         }
//     ],
//     "ok": 1
// }


export interface Location{
    success:boolean,
    message:string,
    location:{
        n:number,
        nModified:number,
        upserted:[
            {
                index:number
                id:string
            }
        ],
        ok:number
    }
}

