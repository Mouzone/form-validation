
const form = document.querySelector("form")

const email = document.getElementById("email")
const country = document.getElementById("country")
const zip_code = document.getElementById("zip-code")
const password = document.getElementById("password")
const password_confirmed = document.getElementById("password-confirmed")

const email_error = document.querySelector("#email + .error")
const country_error = document.querySelector("#country + .error")
const zip_code_error = document.querySelector("#zip_code + .error")
const password_error = document.querySelector("#password + .error")
const password_confirmed_error = document.querySelector("#password-confirmed + .error")


form.addEventListener("submit", event => {
    if (!email.validity.valid) {
        showEmailError()
        event.preventDefault()
    } else if (!country.validity.valid || !valid_countries.includes(country.value)) {
        showCountryError()
        event.preventDefault()
    }
    else if (!zip_code.validity.valid) {
        // validate for digits
        // validate for length
        showZipError()
        event.preventDefault()
    }
    // else if (!password.validity.valid) {
    //     showPasswordError()
    //     event.preventDefault()
    // }
    // else if (!password_confirmed.validity.valid) {
    //     showPasswordConfError()
    //     event.preventDefault()
    // }
    // else if () {
    // compare passwords
    // } else {
    // //     submit
    // }
})

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        email_error.textContent = "";
        email_error.classList.remove("active")
    } else {
        showEmailError();
    }
})

function showEmailError() {
    if (email.validity.valueMissing) {
        email_error.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
        email_error.textContent = "Entered value needs to be an email address.";
    }
    email_error.classList.add("active")
}

// todo: code country input as a dropdown menu
country.addEventListener("input", event => {
    if (country.validity.valid && valid_countries.includes(country.value)) {
        country_error.textContent = "";
        country_error.classList.remove("active")
    } else {
        showCountryError()
    }
})

const valid_countries = ["USA", "Canada", "Mexico"]
function showCountryError() {
    if (country.validity.valueMissing) {
        country_error.textContent = "You need to enter a country.";
    } else if (!(valid_countries.includes(country.value))) {
        console.log(country.value)
        console.log(valid_countries)
        country_error.textContent = "Enter a valid country";
    }
    country_error.classList.add("active")
}