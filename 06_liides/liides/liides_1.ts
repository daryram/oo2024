interface Adder{
    add(nr: number):void;
    getSum():number;
 }
 
 class CharCounter{
     constructor(protected adder:Adder){}

     addWordCharacters(word:string):void
     {
         this.adder.add(word.length);
     }
     getCharacterCount()
     {
         return this.adder.getSum();
     }
     addSentenceCharacters(sentence:string)
     {
        this.addWordsCharacters(sentence.split(" "));
     }
     addWordsCharacters(words:string[]):void
     {
        for(let word of words)
        {
            this.addWordCharacters(word);
        }
     }
 }
 
 class SimpleAdder implements Adder{
     protected sum:number=0;
     add(nr:number)
     {
        this.sum+=nr;
     }

     getSum(): number 
     {
         return this.sum;
     }
 }
 
 let adder1:Adder=new SimpleAdder();
 let counter1:CharCounter=new CharCounter(adder1);
 counter1.addWordsCharacters(["nimi","nimi"]);
 counter1.addSentenceCharacters("nimi nimi");
 counter1.addWordCharacters("Juku");
 counter1.addWordCharacters("tuli");
 counter1.addWordCharacters("kooli");
 console.log(counter1.getCharacterCount());
