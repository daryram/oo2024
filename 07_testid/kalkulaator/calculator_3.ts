class Calculator{
    protected panelContents:string="";
    protected esimeneSisu:string = "";
    pressButton(b:string):void{
        if(b =="C"){
          this.panelContents=""
          }

        else if(b =="X"){
          this.esimeneSisu = this.panelContents;
          this.panelContents=""}
        else if(b== "="){
          this.panelContents = parseInt(this.esimeneSisu) * parseInt(this.panelContents)+"";
        }
        else{
          this.panelContents+=b;}
    }
    getPanelContents():string{
        if(this.panelContents.length>0){
            return this.panelContents;
        }
        return "0";
    }
}

export{
    Calculator
}
