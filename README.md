# Farapayamakjs

This is a js module for using farapayamak SMS panel in javascripts project
## Install
yarn add Farapayamakjs
or
npm i --save Farapayamakjs
### Example

    const farapayamak = require('farapayamakjs');
    
    let fr=new farapayamak("username", "password", "number");
    farapayamak.SendSMS("09XXXXXXXXX","hi test")
    .then(resp=>{
        farapayamak.GetDelivery(resp.data.Value)
        .then(resp2=>{
            
            setTimeout(() => {
                console.log(resp2)
            }, 3000);
        })
    })
    
    farapayamak.GetCredit()
        .then(resp2=>{
            console.log(resp2)
        })
    farapayamak.GetUserNumbers()
        .then(resp2=>{
            console.log(resp2)
        })

