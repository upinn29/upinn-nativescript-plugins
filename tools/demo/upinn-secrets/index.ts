import { Button, EventData } from '@nativescript/core';
import { DemoSharedBase } from '../utils';
import { UpinnSecrets } from '@upinn/upinn-secrets';

export class DemoSharedUpinnSecrets extends DemoSharedBase {
  secrets:UpinnSecrets;
  texto:string="EMPTY"
  init() {
    this.secrets = new UpinnSecrets(true,"test.bin");
  }

  login(){
    this.secrets.login();
  }

  get_secret(args:EventData){
    const btn:Button=args.object as Button;
    
    const resSecret=this.secrets.get_secret("NEW_SECRET_KEY","1").toString();
    console.log(resSecret);
    this.texto = resSecret
    this.notifyPropertyChange("texto", this.texto);
  }
}