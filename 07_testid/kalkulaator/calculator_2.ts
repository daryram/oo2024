class Calculator{
    protected panelContents:string="";
    pressButton(b:string):void{
        this.panelContents+=b;
    }
    getPanelContents():string{return this.panelContents;}
}

export{
    Calculator
}