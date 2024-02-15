class Isik{
  constructor(protected eesnimi:string, protected synniaasta:number){}
  toString(){return this.eesnimi + " aastast "+ this.synniaasta;}
  kasSarnane(isik:Isik){return this.eesnimi==isik.eesnimi;}
  kysiSynniaasta(){return this.synniaasta;}
}

//console.log(new Isik("juku", 2010).tostring());
console.log("teade: "+new Isik("Juku", 2010));

class Grupp{
  isikud: Isik[]=[];
  lisaIsik(isik: Isik){
    let puudu = true;
    for(let i of this.isikud){
      if(i.kasSarnane(isik)){puudu=false;}
    }
    if(puudu){
      this.isikud.push(isik);
    }
  }
  //lisa käsklus suurima sünniaasta leidmiseks

  kysiSuurimSynniaasta(){
    let suurim:number=-1;
    for (let isik of this.isikud){
      if(isik.kysiSynniaasta()>suurim){suurim=isik.kysiSynniaasta();}
    }
    return suurim;
  }

  kysiIsikud():Isik[]{return this.isikud;}
}

let g1 = new Grupp();
g1.lisaIsik(new Isik("Juku", 2010));
g1.lisaIsik(new Isik("Juku", 2011));
g1.lisaIsik(new Isik("Kati", 2021));
console.log(g1.kysiIsikud());
console.log(g1.kysiSuurimSynniaasta());
