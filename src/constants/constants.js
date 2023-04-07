export const BASE_URL = "http://localhost:3003"

export const validateEmail = email => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)
export const validatePassword = password => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,20}$/g.test(password)
//"'password' deve possuir entre 6 e 20 caracteres, com letras maiúsculas e minúsculas e no mínimo um número e um caractere especial"
export const validateText = text => /.{2,}/.test(text)