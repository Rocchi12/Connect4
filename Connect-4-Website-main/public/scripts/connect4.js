colpos = document.querySelector('.conpos');

disbucket1 = document.querySelector('.conpos .colpos1 ul');
disbucket2 = document.querySelector('.conpos .colpos2 ul');
disbucket3 = document.querySelector('.conpos .colpos3 ul');
disbucket4 = document.querySelector('.conpos .colpos4 ul');
disbucket5 = document.querySelector('.conpos .colpos5 ul');
disbucket6 = document.querySelector('.conpos .colpos6 ul');
disbucket7 = document.querySelector('.conpos .colpos7 ul');
winScreen = document.querySelector('.win');
console.log(disbucket1)
class Connect4 {
    constructor(){
        this.red = true;
        this.bucket = [[],[],[],[],[],[],[]];
        this.won = false;
    }
    /* adds a color to a certain bucket. color added rotates each time clicked, ine fir eeach bucket */
    addBucket1(){
        if (this.bucket[0].length <= 6) {
            if (this.red == true){disbucket1.innerHTML = `<li><div class="red"></div></li> ${disbucket1.innerHTML} `}
            if (this.red != true){disbucket1.innerHTML = `<li><div class="blue"></div></li> ${disbucket1.innerHTML}`}
            this.bucket[0].push(this.red);
            this.check(0);
            this.red = !this.red;
        }
    }
    addBucket2(){
        if (this.bucket[1].length <= 6) {
            if (this.red == true){disbucket2.innerHTML = `<li><div class="red"></div></li> ${disbucket2.innerHTML} `}
            if (this.red != true){disbucket2.innerHTML = `<li><div class="blue"></div></li> ${disbucket2.innerHTML}`}
            this.bucket[1].push(this.red);
            this.check(1);
            this.red = !this.red;
        }
    }
    addBucket3(){
        if (this.bucket[2].length <= 6) {
            if (this.red == true){disbucket3.innerHTML = `<li><div class="red"></div></li> ${disbucket3.innerHTML} `}
            if (this.red != true){disbucket3.innerHTML = `<li><div class="blue"></div></li> ${disbucket3.innerHTML}`}
            this.bucket[2].push(this.red);
            this.check(2);
            this.red = !this.red;
        }
    }
    addBucket4(){
        if (this.bucket[3].length <= 6) {
            if (this.red == true){disbucket4.innerHTML = `<li><div class="red"></div></li> ${disbucket4.innerHTML} `}
            if (this.red != true){disbucket4.innerHTML = `<li><div class="blue"></div></li> ${disbucket4.innerHTML}`}
            this.bucket[3].push(this.red);
            this.check(3);
            this.red = !this.red;
        }
    }
    addBucket5(){
        if (this.bucket[4].length <= 6) {
            if (this.red == true){disbucket5.innerHTML = `<li><div class="red"></div></li> ${disbucket5.innerHTML} `}
            if (this.red != true){disbucket5.innerHTML = `<li><div class="blue"></div></li> ${disbucket5.innerHTML}`}
            this.bucket[4].push(this.red);
            this.check(4);
            this.red = !this.red;
        }
    }
    addBucket6(){
        if (this.bucket[5].length <= 6) {
            if (this.red == true){disbucket6.innerHTML = `<li><div class="red"></div></li> ${disbucket6.innerHTML} `}
            if (this.red != true){disbucket6.innerHTML = `<li><div class="blue"></div></li> ${disbucket6.innerHTML}`}
            this.bucket[5].push(this.red);
            this.check(5);
            this.red = !this.red;
        }
    }
    addBucket7(){
        if (this.bucket[6].length <= 6) {
            if (this.red == true){disbucket7.innerHTML = `<li><div class="red"></div></li> ${disbucket7.innerHTML} `}
            if (this.red != true){disbucket7.innerHTML = `<li><div class="blue"></div></li> ${disbucket7.innerHTML}`}
            this.bucket[6].push(this.red);
            this.check(6);
            this.red = !this.red;
        }
    }
    // resets the board

    reset(){
        location.reload()
    }
    // check if there are 4 in a row for whenever a item is placed

    check(col){
        if (this.checkDiag(col)|| this.checkDiag2(col) || this.checkHor(col) || this.checkVert(col)){
            const winDis = document.querySelector('div.win p');
            this.won = true;
            const winner = this.red;
            if (this.red){winDis.innerText = `Red wins`}
            else{winDis.innerText = `Blue wins`}
            winScreen.style.display = 'block';
            
        }     
    }

    checkVert(col){
        let connect = 0;
        let i = this.bucket[col].length
        while(connect <  4 && this.bucket[col][i - 1] === this.red){
            ++connect;
            --i;
        }
        return(connect == 4);
    }
    checkHor(col){
        let connect = 1
        const i = this.bucket[col].length;
        while (col <= 5 && this.bucket[col+1].length >= i && this.bucket[col+1][i-1] == this.red){
            ++col;
        }
        while(col > 0 && this.bucket[col-1].length >= i && this.bucket[col-1][i-1] == this.red){
            ++connect;
            --col;
        }
        return(connect == 4);

    }
    checkDiag(col){
        let connect = 1
        let i = this.bucket[col].length;
        while (col <= 5 && i <= 7 && this.bucket[col+1].length >= i+1 && this.bucket[col+1][i] == this.red){
            ++col;
            ++i;
        }
        while(col > 0 && i>0 && this.bucket[col-1].length >= i-1 && this.bucket[col-1][i-2] == this.red){
            ++connect;
            --col;
            --i;
        }
        return(connect == 4);
    }

    checkDiag2(col){
        let connect = 1
        let i = this.bucket[col].length;
        while (col > 0 && i <= 5 && this.bucket[col-1].length >= i+1 && this.bucket[col-1][i] == this.red){
            --col;
            ++i;
        }
        while(col <= 5 && i>0 && this.bucket[col+1].length >= i-1 && this.bucket[col+1][i-2] == this.red){
            ++connect;
            ++col;
            --i;
        }
        return(connect == 4);


}
}
const game = new Connect4();