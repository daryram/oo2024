//Koosta klass, milles on üks massiiv kolmnurga x-koordinaatide hoidmiseks
//ning teine massiiv y-koordinaatide hoidmiseks.
//Koosta klassist kaks eksemplari, määra algväärtused ning trüki andmed välja.

/*class Kolmnurk
{
    xkoord:number[]=[];
    ykoord:number[]=[];
    x:number;
    y:number;
    /*constructor(x:number, y:number)
    {
        this.x=x;
        this.y=y;
        this.xkoord.push(x);
        this.ykoord.push(y);
    }*/
    /*//Lisa klassile käsklus punkti koordinaadipaari lisamiseks.
    //Käsklusena väljasta tekkiva hulknurga ümbermõõt (küljepikkuste summa).
    ümbermõõt() :number
    {
        let dx:number=kolmnurk1.x-kolmnurk2.x;
        let dy:number=kolmnurk1.y-kolmnurk2.y;
        let kaugus:number=Math.sqrt(dx*dx+dy*dy);
        let mõõt=dx+dy+kaugus;
        return mõõt;
    }
}

let kolmnurk1=new Kolmnurk(1,2);
let kolmnurk2=new Kolmnurk(2,3);
console.log(kolmnurk1, kolmnurk2);

console.log(ümbermõõt(kolmnurk1, kolmnurk2));*/

//---------------------------

//Koosta klass, milles on üks massiiv kolmnurga x-koordinaatide hoidmiseks
//ning teine massiiv y-koordinaatide hoidmiseks.
//Koosta klassist kaks eksemplari, määra algväärtused ning trüki andmed välja.

class Hulknurk
{
    constructor(protected xid:number[]=[],protected yid:number[]=[]){}
    //Lisa klassile käsklus punkti koordinaadipaari lisamiseks. 
    lisa(x:number, y:number)
    {
        this.xid.push(x);
        this.yid.push(y);
    }
    //Käsklusena väljasta tekkiva hulknurga ümbermõõt (küljepikkuste summa).
    küljepikkus(koht1:number, koht2:number)
    {
        let dx=this.xid[koht1]-this.xid[koht2];
        let dy=this.yid[koht1]-this.yid[koht2];
        return Math.sqrt(dx*dx+dy*dy);
    }

    punktipaarid()
    {
        let v=[];
        for(let i=1;i<this.xid.length;i++)
        {
            v.push([i, i-1]);
        }
        v.push([this.xid.length-1, 0])
        return v;
    }

    ymbermõõt():number
    {
        if(this.xid.length<2){return 0;}
        let summa:number=0;
        let paarid=this.punktipaarid();
        for(let i=0;i<paarid.length;i++)
        {
            summa+=this.küljepikkus(paarid[i][0],paarid[i][1]);
        }
        /*let moot:number=0;
        for (let i = 0; i < this.xid.length - 1; i++) {
            moot += this.küljepikkus(i, i + 1);
        }
        moot += this.küljepikkus(this.xid.length - 1, 0);
        return moot;*/
        return summa;
    }
}

let k1=new Hulknurk([3,6,7],[1,4,3]);
let k2=new Hulknurk([3,5,7],[5,4,8]);
k2.lisa(3,2);
console.log(k1);
console.log(k2);
console.log(k1.küljepikkus(0,1));
console.log(k1.ymbermõõt());

//Kuva tekkiv hulknurk graafiliselt, kirjuta külgede juurde nende pikkused
//ning hulknurga keskele kogu ümbermõõt.

//wat

/*ümbermõõt() :number
    {
        let m=this.xid.length;
        console.log(m);
        let mõõt:number=0;
        for(let i:number=0;i<m;i++)
        {
            if(i==m)
            {
                let dx:number=this.xid[i]-this.xid[0];
                console.log("dx"+dx);
                let dy:number=this.yid[i]-this.yid[0];
                console.log("dy"+dy);
                let kaugus:number=Math.sqrt(dx*dx+dy*dy);
                console.log("kaugus"+kaugus);
                mõõt=mõõt+kaugus;
                console.log("mõõt"+mõõt);
            }
            else
            {
                let dx:number=this.xid[i]-this.xid[i+1];
                console.log("dx"+dx);
                let dy:number=this.yid[i]-this.yid[i+1];
                console.log("dy"+dy);
                let kaugus:number=Math.sqrt(dx*dx+dy*dy);
                console.log("kaugus"+kaugus);
                mõõt=mõõt+kaugus;
                console.log("mõõt"+mõõt);
            }
        }
        return mõõt;
    }*/