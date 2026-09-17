let form = document.querySelector("form");
let nme = document.querySelector("#nme");
let age = document.querySelector("#age");
let gender = document.querySelector("#gender")
let salary = document.querySelector("#salary")
let tbserial = document.querySelector("#tbserial");
let tbname = document.querySelector("#tbname");
let tbage = document.querySelector("#tbage");
let tbgender = document.querySelector("#tbgender");
let tbgrade = document.querySelector("#tbgrade");
let serialNo = 1;

const sub = () => {
    let result = true;
    let valnme = nme.value.trim() && nme.value.length > 0 && /^[a-zA-Z]+$/.test(nme.value)
    if (!valnme) {
        document.querySelector("#namemessage").textContent = "Name is required"
        document.querySelector("#namemessage").style.color = "red"
        result = false
    }
    let valage = age.value !== "" && age.value >= 18 && /^[0-9]+$/.test(age.value)
    if (!valage) {
        document.querySelector("#agemessage").textContent = "Age is invalid"
        document.querySelector("#agemessage").style.color = "red"
        result = false
    }
    let valsalary = salary.value !== "" && salary.value.length >= 5 && /^[0-9]+$/.test(salary.value)
    if (!valsalary) {
        document.querySelector("#salarymessage").textContent = "Salary is invalid"
        document.querySelector("#salarymessage").style.color = "red"
        result = false
    }
    if (result) {
        let serialLi = document.createElement("li")
        serialLi.classList.add("serialLi");
        tbserial.appendChild(serialLi)

        serialLi.textContent = serialNo;
        serialNo++;

        let nameLi = document.createElement("li")
        nameLi.classList.add("nameLi");
        tbname.appendChild(nameLi)
        nameLi.textContent = nme.value
        nme.value = ""

        let ageLi = document.createElement("li")
        ageLi.classList.add("ageLi");
        tbage.appendChild(ageLi)
        ageLi.textContent = age.value
        age.value = ""

        let genderLi = document.createElement("li")
        genderLi.classList.add("genderLi");
        tbgender.appendChild(genderLi)
        genderLi.textContent = gender.value

        let salaryLi = document.createElement("li")
        salaryLi.classList.add("salaryLi");
        tbgrade.appendChild(salaryLi)
        if (salary.value >= 10000 && salary.value < 20000) {
            salaryLi.textContent = "C"
        }
        else if (salary.value <= 50000) {
            salaryLi.textContent = "B"
        }
        else {
            salaryLi.textContent = "A"
        }
        salary.value = ""
        console.log(gender.value)
    }

}


// let form = document.querySelector("form")
// let length = document.querySelector("#length");
// let body = document.querySelector("body")
// const sub = () => {
//     let vallength = length.valueAsNumber > 0;
//     if (!vallength) {
//         document.querySelector("#messagge").textContent = "number is invalid";
//         return;
//     }

//     let first = document.createElement("h2");
//     form.appendChild(first);
//     first.textContent = "1st Array";

//     for (let i = 0; i < length.valueAsNumber; i++) {
//         let st = document.createElement("input");
//         st.type = "number";
//         st.classList.add("firstELement")
//         form.appendChild(st);
//     }

//     let second = document.createElement("h2");
//     form.appendChild(second);
//     second.textContent = "2nd Array";

//     for (let j = 0; j < length.valueAsNumber; j++) {
//         let st = document.createElement("input");
//         st.type = "number";
//         st.classList.add("secondELement");
//         form.appendChild(st);
//     }

//     let button = document.createElement("button");
//     button.type = "submit"
//     button.textContent = "add"
//     form.appendChild(button)

//     button.addEventListener("click", () => {
//         let firstnum = document.querySelectorAll(".firstELement");
//         let secondnum = document.querySelectorAll(".secondELement");
//         let firstarray = [];
//         let secondarray = [];
//         let total = [];
//         console.log(firstnum)
//         for (let i = 0; i < firstnum.length; i++) {
//             firstarray.push(firstnum[i].valueAsNumber)

//         }
//         for (let i = 0; i < secondnum.length; i++) {
//             secondarray.push(secondnum[i].valueAsNumber)

//         }
//         for (let i = 0; i < secondnum.length; i++) {
//             total.push(firstarray[i] + secondarray[i])

//         }

//         console.log(firstarray)
//         console.log(secondarray)
//         console.log(total)

//         let h2 = document.createElement("h2");
//         form.appendChild(h2);
//         h2.textContent = `Result : ${total}`;
//     })
// };

