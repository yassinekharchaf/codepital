// class chat
export class Chat {
    constructor(race) {
        this.race = race;
        // le chat miaule à interval de 2 secondes
        setInterval(() => {
            console.log('miaou');
        }, 2000)
    }
}