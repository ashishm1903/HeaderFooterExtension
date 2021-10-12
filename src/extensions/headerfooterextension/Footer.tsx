import * as React from "react";
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react';
import { Link } from 'office-ui-fabric-react/lib/Link';  



export class Footer extends React.Component<{}, {}> {
  public getItems = () => {  
    return [  
      {  
        key: 'about us',  
        name: 'About US',  

        iconProps: {  
          iconName: 'Contact'  
          
        },  
        href: 'https://nitoronline.sharepoint.com/sites/AccelareQA/AshishMore',  
        
         
      },
     
      {  
        key: 'contactus',  
        name: 'Contact US - 8888345678', 
       
        iconProps: {  
          iconName: 'phone'  
        },  
       
      },
     
      
    ];  
  }  
  /**
   * Main React Render fuction
   */
 private render(): React.Element{
    return (
      <div >
        <CommandBar
           items={this.getItems()}  
        />
      </div>
    );
  }
}
