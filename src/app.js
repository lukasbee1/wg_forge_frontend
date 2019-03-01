import orders from '../data/orders.json';
import createRow from './row';

export default (function () {
    var i = 0;
    orders.forEach(() => {
        createRow(i);
        i++;
    });
    
    
    document.getElementById("app");
}());

