import orders from '../data/orders.json';
import user from './user.js';

const createRow = (i) => {
    var tr = document.createElement('tr');
    tr.setAttribute('id', 'order_' + orders[i].id);

    let transaction_id = document.createElement('td');
    let user_info = document.createElement('td');
    user_info.classList.add('user-data');
    let order_data = document.createElement('td');
    let order_amount = document.createElement('td');
    let card_number = document.createElement('td');
    let card_type = document.createElement('td');
    let location = document.createElement('td');
    
    transaction_id.innerHTML = orders[i].transaction_id;
    order_data.innerHTML = orders[i].created_at;
    order_amount.innerHTML = '$' + orders[i].total;
    card_number.innerHTML = orders[i].card_number;
    card_type.innerHTML = orders[i].card_type;
    location.innerHTML = orders[i].order_country + '(' + orders[i].order_ip + ')';
    
    tr.appendChild(transaction_id);
    tr.appendChild(user_info);
    tr.appendChild(order_data);
    tr.appendChild(order_amount);
    tr.appendChild(card_number);
    tr.appendChild(card_type);
    tr.appendChild(location);
    
    
    
    
    var parent = document.getElementsByTagName('tbody');
    parent[0].appendChild(tr);
    
    user.createUserInfo(orders[i].user_id, i);
}

export default createRow;