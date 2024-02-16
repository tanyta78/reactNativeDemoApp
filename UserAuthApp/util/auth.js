import axios from "axios";

const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.EXPO_PUBLIC_API_KEY}`;
const SIGNIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.EXPO_PUBLIC_API_KEY}`;

async function authenticate(mode, email, password) {
  const url = mode === "signup" ? SIGNUP_URL : SIGNIN_URL;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  
  console.log(response.data)
}

export async function createUser(email, password) {
  await authenticate("signup", email, password);
}

export async function login(email, password) {
  await authenticate("login", email, password);
}
