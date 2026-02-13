export default class DakarRali{
    #ev: number;
    #nevOrszag_auto: string;
    #auto_tipus: string
    #nevOrszag_motor: string;
    #motor_tipus: string;
    #nevOrszag_kamion: string;
    #kamion_tipus: string;

    get francia(): string[]{
        const francia: string[] = []; 
        if(this.#nevOrszag_auto[0] == "Franciaország" && this.#nevOrszag_motor[0] == "Franciaország" && this.#nevOrszag_kamion[0] == "Franciaország"){
            francia.push();
        }
        return francia;
    }

    constructor(sor: string){
        const m: string[] = sor.split(";")
        this.#ev = parseInt(m[0])
        this.#nevOrszag_auto = m[1]
        this.#auto_tipus = m[2]
        this.#nevOrszag_motor = m[3]
        this.#motor_tipus = m[4]
        this.#nevOrszag_kamion = m[5]
        this.#kamion_tipus = m[6]
        this.#kamion_tipus = m[7]
    }
}