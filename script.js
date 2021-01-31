const button = document.querySelector(".registerbtn");
const userName = document.querySelector("#name");
const password = document.querySelector(".password");
const form = document.querySelector(".form");
const card = document.querySelector(".card");
const info = document.querySelector(".info");
const info2 = document.querySelector(".info2");
const info3 = document.querySelector(".info3");
const birthDate = document.querySelector("#birthDate");
const phone = document.querySelector("#phone");
const logOut = document.querySelector(".logOutBtn");
const deleteAccount = document.querySelector(".deleteBtn");

const chengeLayout = screenType => {
    if (screenType === "form") {
        form.style.display = "block";
        card.style.display = "none";
    } else if (screenType === "card") {
        console.log(screenType);
        form.style.display = "none";
        card.style.display = "block";
    }
}

class User {
    constructor(name, password, phone, birthDate, photo) {
        this.name = name,
            this.password = password,
            this.photo = photo,
            this.birthDate = birthDate,
            this.phone = phone
    }

    static signUp() {
        var patt = new RegExp("(?=^.{8,20}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*");
        // (?=^.{6,}$) - Строкa > 7 символов  и менее 20
        // (?=.* [0 - 9]) - содержит цифру
        // (?=.* [A - Z]) - содержит прописную букву
        // (?=.* [A - Z]) - содержит строчную букву
        // (?=.* [^ A - Za - z0 - 9]) - символ не является буквенно - цифровым.
        if (!patt.test(password.value)) {
            alert("Password must be 8-20 digits long. It must include a BIG letter, small letter, number and special simbol.");
            return false;
        }
        else {
            alert("Valid!");
        }

        let user = new User(userName.value, password.value, phone.value, birthDate.value);
        localStorage.setItem('user', JSON.stringify(user));
        // JSON.parse(localStorage.getItem('user'));



        // функция logout
        logOut.addEventListener('click', function () {
            // window.localStorage.clear(); // очищает localStorage от данных
            window.location.reload();
            window.location.replace('/');
        });

        deleteAccount.addEventListener('click', function () {
            window.localStorage.clear(); // очищает localStorage от данных
            window.location.reload();
            window.location.replace('/');
        });


        function showcard() {
            chengeLayout("card")
            let objectInfo = JSON.parse(localStorage.getItem('user'))
            info.innerHTML = info.innerHTML + JSON.parse(localStorage.getItem('user')).name;
            console.log(objectInfo);
            console.log(user);
            info2.innerHTML = info2.innerHTML + JSON.parse(localStorage.getItem('user')).phone;
            info3.innerHTML = info3.innerHTML + JSON.parse(localStorage.getItem('user')).birthDate;
        }
        showcard()
    }



}



button.addEventListener('click', function () {

    console.log(User.signUp());

});











