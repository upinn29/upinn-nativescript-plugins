import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedUpinnSecrets } from '@demo/shared';
import { } from '@upinn/upinn-secrets';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedUpinnSecrets {
	
}
