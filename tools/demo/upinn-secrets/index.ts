import { EventData, Button } from '@nativescript/core';
import { DemoSharedBase } from '../utils';
import { UpinnSecrets } from '@upinn/upinn-secrets';

export class DemoSharedUpinnSecrets extends DemoSharedBase {
  secrets: UpinnSecrets;
  texto: string = "EMPTY"
  init() {
    this.secrets = new UpinnSecrets(true, "test.bin");
  }

  login() {
    this.secrets.login();
  }

  async get_secret(args: EventData) {
    const btn: Button = args.object as Button;

    const resSecret = await this.secrets.get_secret("API_MAPBOX", "1");
    console.log(resSecret);
    this.texto = resSecret
    this.notifyPropertyChange("texto", this.texto);
  }
}