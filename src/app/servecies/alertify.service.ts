import { Injectable } from '@angular/core';
declare let alertify: any ;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(massage: string, okCallback: () => any){
    alertify.confirm(massage, function(e) {
      if (e){
        okCallback();
      } else {}
    });
  }
  successs(massage: string){
    alertify.success(massage);
  }
  error(massage: string){
    alertify.error(massage);
  }
  warming(massage: string){
    alertify.warming(massage);
  }
  massage(massage: string){
    alertify.massage(massage);
  }
}
