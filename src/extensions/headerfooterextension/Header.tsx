import * as React from "react";
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react';
import { Link } from 'office-ui-fabric-react/lib/Link';  


export class Header extends React.Component<{}, {}> {
  public getItems = () => {  
    return [  
      {  
        key: 'home',  
        name: 'Home', 
        
        iconProps: {  
          iconName: 'Home'  
        },  
        href: 'https://nitordev.sharepoint.com/sites/HMETest/EnduranceTest',  
         
      },
      {  
        key: 'microsoft',  
        name: 'Microsoft',  
        cacheKey: 'myCacheKey', // changing this key will invalidate this items cache  
        iconProps: {  
          iconName: 'AzureLogo'  
        },  
        href: 'https://www.Microsoft.com'  
      },  
      {  
        key: 'officeUIFabric',  
        name: 'Office UI Fabric',  
        iconProps: {  
          iconName: 'OneDrive'  
        },  
        href: 'https://dev.office.com/fabric',  
        ['data-automation-id']: 'uploadButton'  
      },
      {  
        key: 'list',  
        name: 'Software Catlog',  
        iconProps: {  
          iconName: 'OneDrive'  
        },  
        href: 'https://nitordev.sharepoint.com/sites/HMETest/EnduranceTest/Lists/SoftwareCatalog/AllItems.aspx',  
        ['data-automation-id']: 'uploadButton'  
      },
      {
        key: 'Office',
        name: 'Office',
        iconProps: { iconName: 'OfficeLogo' },
        href: 'https://Office.com',
      },
      { key: 'Share', name: 'Share', iconProps: { iconName: 'Share' }, onClick: () => alert('You click Share Button') },
      { key: 'Download', name: 'Download', iconProps: { iconName: 'Download' }, onClick: () => alert('You click Share Download') }  
    ];  
  }  
  /**
   * Main React Render fuction
   */
 private render(): React.Element{
    return (
      <div>
        <CommandBar
           items={this.getItems()}  
        />
      </div>
    );
  }

}
