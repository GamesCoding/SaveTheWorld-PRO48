class Vi{
    constructor(){
        //this.index = null;
       // this.cases = 0;
        this.name = null;
    }

    update(cas){
        var viIndex = "vi";
        database.ref(viIndex).set({
            name:this.name,
            cases: cas
        });
    }

    static updateVi(){
        database.ref('/').update({
            vi: null
        });
    }
}