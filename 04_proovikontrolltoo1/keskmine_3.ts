/*Koosta klass, mille eksemplarile saab vastava käsuga lisada arve.
Teise käsuga saab küsida nende arvude libiseva keskmise massiivi
vastavalt eelmise punkti juhendile.
Koosta kood nõnda, et uue arvu lisamisel eksemplarile
tehtaks uusi arvutusi võimalikult vähe
(st. ei arvutataks kogu tulemust massiivi algusest uuesti)*/

class Libisevaarvutus {
  sisend: number[]=[];
  v2ljund: number[]=[];
  lisa(arv: number){
    this.sisend.push(arv);
    if(this.sisend.length>2){
      let n = this.sisend.length;
      this.v2ljund.push((this.sisend[n-1] + this.sisend[n-2] + this.sisend[n-3])/3);
    }
  }
  kysiV2ljund(){return this.v2ljund;}
}

let arvutaja = new Libisevaarvutus();
arvutaja.lisa(3);
arvutaja.lisa(3);
arvutaja.lisa(4);
arvutaja.lisa(5);
arvutaja.lisa(5);

console.log(arvutaja.kysiV2ljund());