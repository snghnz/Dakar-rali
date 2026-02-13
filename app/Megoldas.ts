import DakarRali from "@/app/DakarRali";
import fs from "fs"

export default class Megoldas{
    #dakarrali: DakarRali[] = [];

    get bajnokokSzama(): number{
        return this.#dakarrali.length * 3;
    }
    get franciaBajnokokaranya(): number{
        const francia: number = 0;
        for (const e of this.#dakarrali) {
            
        } 
        return francia
    }

    constructor(forras: string){
        const sorok: string[] = fs.readFileSync(forras).toString().split("\n");
        for(const sor of sorok.slice(1)){
            const aktSor: string = sor.trim();
            this.#dakarrali.push(new DakarRali(aktSor))
        }
    }
}