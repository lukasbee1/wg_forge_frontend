import orders from '../data/orders.json';
import createRow from './row';
import { createUserDetails, createUserInfo } from './user.js';
//import file from './user';


export default (function () {
    var i = 0;
    orders.forEach(() => {
        createRow(i);
        i++;
    });
    window.createUserDetails = createUserDetails;
    document.getElementById("app");
}());
function uclicked() {

  }
  window.uclicked = uclicked;
