import users from '../data/users.json';

const createUserInfo = (user_id, order) => {

    let user_info = document.createElement('a');
    user_info.setAttribute('href', '#');
    user_info.setAttribute('onclick', 'createUserDetails(' + user_id +','+ order  + ')');
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
    user_info.class = 'user-data_link';
    let parent = document.getElementsByClassName('user-data');
    parent[order].appendChild(user_info);
}

const createUserDetails = (user_id, order) => {
    let status = false;
    status 
    let userDetails = document.createElement('div');

    let i;
    for(i = 0; i <= users.length; i++){
        if (user_id == users[i].id)
            break;
    }
    let birthday = document.createElement('p');

    //image
    let image = document.createElement('p');
    
    let imgTag = document.createElement('img');
    imgTag.setAttribute('src', users[order].avatar);
    imgTag.setAttribute('width', '100px');
    image.appendChild(imgTag);

    let company = document.createElement('p');
    let industry = document.createElement('p');

    birthday.innerHTML = users[i].birthday;
    company.innerHTML = users[i].company_id;
    industry.innerHTML = 'industry';

    userDetails.appendChild(birthday);
    userDetails.appendChild(image);
    userDetails.appendChild(company);
    userDetails.appendChild(industry);


    let parent = document.getElementsByClassName('user-data');
    parent[order].appendChild(userDetails);
}

export {createUserDetails, createUserInfo};
