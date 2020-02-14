let button = document.getElementById('login-button');
button.addEventListener('click',function (ev) {
    let name = document.forms['form'].elements['login-name'].value;
    let pass = document.forms['form'].elements['login-pass'].value;

    let obj = {
        name:name,
        pass:pass
    };
    fetch('/add', {method: 'POST',body:JSON.stringify(obj),headers:{'content-type': 'application/json'}})
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let us = document.createElement('h2');
                us.innerHTML = data.name;
                let mydiv = document.getElementById('tester');
                mydiv.appendChild(us);
            })
            .catch(alert);
})