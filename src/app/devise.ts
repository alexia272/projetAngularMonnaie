export class Devise {

    to : string;
    date : string;
    rate : string;

    constructor( to: string = '',
                date: string = '',
                rate: string = '')
                 {
                   this.to = to;
                   this.date = date;
                   this.rate = rate;
                 }
}
