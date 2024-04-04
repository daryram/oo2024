class Calculator{
  private muutuja:string = "";
    pressButton(b:string){
      this.muutuja = b;
    }
    getPanelContents(){
      return this.muutuja;
      }
}

export{
    Calculator
}