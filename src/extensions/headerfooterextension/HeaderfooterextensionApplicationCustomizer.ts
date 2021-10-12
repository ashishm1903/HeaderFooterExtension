import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'HeaderfooterextensionApplicationCustomizerStrings';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
 
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import { Header } from "./Header";
import{Footer} from "./Footer";
const LOG_SOURCE: string = 'HeaderfooterextensionApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IHeaderfooterextensionApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
  elementId : string;
  elementIdBar:string;
}
/** A Custom Action which can be run during execution of a Client Side Application */
export default class HeaderfooterextensionApplicationCustomizer
  extends BaseApplicationCustomizer<IHeaderfooterextensionApplicationCustomizerProperties> {
  @override
  public onInit(): Promise<void> {
    // if (this.properties.elementId != "") {
    //   const spElement: any = document.getElementById(this.properties.elementId);
    //   Log.info(LOG_SOURCE, `Found Element ${spElement}`);
    //   spElement.style = "display:none";
    // }
    // if (this.properties.elementIdBar != "") {
    //   const spElementBar: any = document.getElementById(this.properties.elementIdBar);
    //   Log.info(LOG_SOURCE, `Found Element ${spElementBar}`);
    //   spElementBar.style = "display:none";
    // }
    const headerData: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top, {});

    if (!headerData) {
      Log.error(LOG_SOURCE, new Error("Could not find Form PageHeader"));
      return;
    }
    const elem: React.ReactElement<{}> = React.createElement(Header, {});
    ReactDOM.render(elem, headerData.domElement); const FooterData: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom, {});
    if (!FooterData) {
      Log.error(LOG_SOURCE, new Error("Could not find Form PageFooter"));
      return;
    }
    const element: React.ReactElement<{}> = React.createElement(Footer, {});
    ReactDOM.render(element, FooterData.domElement);
    return Promise.resolve();
  }
}
