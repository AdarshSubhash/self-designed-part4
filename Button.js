class Button{

    constructor() {
        this.Fbutton = createButton('Add Fuel');
        this.Hbutton = createButton('Add Health');
       
      }
      hide(){
        this.Fbutton.hide();
        this.Hbutton.hide();
      
      }
      display(){
        
        this.Fbutton.position(displayWidth/10, displayHeight/10);
        this.Hbutton.position(displayWidth/5, displayHeight/10);
        
        this.Fbutton.mousePressed(()=>{
     //   this.Fbutton.hide();
   if(tot>199){
    fuel=fuel+10;
    tot=tot-200;
   }
     
        });
       
        
        this.Hbutton.mousePressed(()=>{
        //  this.Hbutton.hide();
        if(tot>199){
          health=health+1
          tot=tot-200;
        }
          });
        };
        
        
      }
    
    
