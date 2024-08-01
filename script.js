
const form = document.querySelector("form")

const email = document.getElementById("email")
const country = document.getElementById("country")
const zip_code = document.getElementById("zip-code")
const password = document.getElementById("password")
const password_confirmed = document.getElementById("password-confirmed")

const email_error = document.querySelector("#email + .error")
const country_error = document.querySelector("#country + .error")
const zip_code_error = document.querySelector("#zip-code + .error")
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
    else if (!zip_code.validity.valid || !/^\d{5}(-\d{4})?$/.test(zip_code.value)) {
        showZipError()
        event.preventDefault()
    }
    else if (!password.validity.valid || !/[^a-zA-Z0-9]/.test(password.value) || password.length <= 12) {
        showPasswordError()
        event.preventDefault()
    }
    else if (!password_confirmed.validity.valid || password.value !== password_confirmed.value) {
        showPasswordConfError()
        event.preventDefault()
    }
    // else {
    //     submit
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
        country_error.textContent = ""
        country_error.classList.remove("active")
    } else {
        showCountryError()
    }
})

const valid_countries = ["USA", "Canada", "Mexico"]
function showCountryError() {
    if (country.validity.valueMissing) {
        country_error.textContent = "You need to enter a country.";
    } else if (!valid_countries.includes(country.value)) {
        country_error.textContent = "Enter a valid country"
    }
    country_error.classList.add("active")
}

zip_code.addEventListener("input", event => {
    if (zip_code.validity.valid && /^\d{5}(-\d{4})?$/.test(zip_code.value) && [5,10].includes(zip_code.value.length)) {
        zip_code_error.textContent = ""
        zip_code_error.classList.remove("active")
    } else {
        showZipError()
    }
})

function showZipError() {
    if (zip_code.validity.valueMissing) {
        zip_code_error.textContent = "You need to enter a Zipcode.";
    } else if (!/^\d{5}(-\d{4})?$/.test(zip_code.value) || ![5,10].includes(zip_code.value.length)) {
        zip_code_error.textContent = "Enter a valid Zipcode"
    }
    zip_code_error.classList.add("active")
}

password.addEventListener("input", event => {
    if (password.validity.valid && /[^a-zA-Z0-9]/.test(password.value) && password.value.length >= 12) {
        password_error.textContent = ""
        password_error.classList.remove("active")
    } else {
        showPasswordError()
    }
})

function showPasswordError() {
    if (password.validity.valueMissing) {
        password_error.textContent = "You need to enter a Password"
    } else if (password.value.length <= 12) {
        password_error.textContent = "Password Length must be at least 12 characters"
    } else if (!/[^a-zA-Z0-9]/.test(password.value)) {
        password_error.textContent = "You must include special characters"
    }
    password_error.classList.add("active")
}

password_confirmed.addEventListener("input", event => {
    if (password_confirmed.value === password.value) {
        password_confirmed_error.textContent = ""
        password_confirmed_error.classList.remove("active")
    } else {
        showPasswordConfError()
    }
})

function showPasswordConfError() {
    if (password_confirmed.value !== password_confirmed_error.value) {
        password_confirmed_error.textContent = "Passwords do not match"
    }
    password_confirmed_error.classList.add("active")
}
