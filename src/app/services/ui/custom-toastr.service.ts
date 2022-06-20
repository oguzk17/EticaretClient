import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr:ToastrService) {}
    message(message:string,title:string,messageType:ToastrMessageType){
      this.toastr[messageType](message,title);
    }
   

}

export enum ToastrMessageType{
  Success ="success",
  Info="info",
  Error="error",
  Warning="warning"

}

