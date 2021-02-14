var axios = require('axios');
var qs = require('qs');

type Config= {
  method: 'post'|'get';
  url: string; 
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data:string
} 
class farapayamk{
  private static username:string;private static password:string;private static from:string;
  private static urlStart="https://rest.payamak-panel.com/api/SendSMS/";
  constructor(username: string, password: string,from:string) {
    farapayamk.username=username;
    farapayamk.password=password;
    farapayamk.from=from;
  }
 
  private static setConfig=(url:string,data:string):Config=>{
    return {
      method: 'post',
      url: url,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
  }
  private static setRequest=(data:string,url:string):Promise<any>=>{
    let config=farapayamk.setConfig( url,data)
    return new Promise((resolve, reject) => {
      axios(config)
      .then(function (response) {
          resolve(response.data);
      })
      .catch(function (error) {
          reject(error);
      });       
  });
  }
  static SendSMS:Function=(to:string,text:string):Promise<any>=>{
    const data = qs.stringify({
    username:farapayamk.username,
    password:farapayamk.password,
    to,
    from:farapayamk.from,
    text 
    });
    
    return farapayamk.setRequest(data,`${farapayamk.urlStart}SendSMS`);

  }
  static GetDelivery:Function=(recID:string):Promise<any>=>{
    const data = qs.stringify({
      username:farapayamk.username,
      password:farapayamk.password,
      recID
      });
      
      return farapayamk.setRequest(data,`${farapayamk.urlStart}GetDeliveries2`);
  }
  static GetCredit:Function=():Promise<any>=>{
    const data = qs.stringify({
      username:farapayamk.username,
      password:farapayamk.password
      });
      
      return farapayamk.setRequest(data,`${farapayamk.urlStart}GetCredit`);
  }
  static GetUserNumbers:Function=():Promise<any>=>{
    const data = qs.stringify({
      username:farapayamk.username,
      password:farapayamk.password
      });
      
      return farapayamk.setRequest(data,`${farapayamk.urlStart}GetUserNumbers`);
  }
}

module.exports = farapayamk