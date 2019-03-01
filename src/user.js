import users from '../data/users.json';

const createUserInfo = (user_id, order) => {

    let user_info = document.createElement('a');
    user_info.setAttribute('href', '#');
    
    let i;
    for(i = 0; i <= users.length; i++){
        if (user_id == users[i].id)
            break;
    }

    if (users[i].gender == 'Male')
    user_info.innerHTML = 'Mr. ';
    else if (users[i].gender == 'Female')
    user_info.innerHTML = 'Ms. ';
    else user_info.innerHTML = 'undefined';
    
    user_info.appendChild(document.createTextNode(users[i].first_name + users[i].last_name));
    
    let parent = document.getElementsByClassName('user-data');
    parent[order].appendChild(user_info);
}
const createUserDetails = () => {

}
export {createUserDetails, createUserInfo};
