// api.js
const API_URL = "https://script.google.com/macros/s/AKfycbwgwpJCXVnmdwGjmOAAxieYweUEZQUdVXoX-v6eP9R6QYvNb1QJ0hZyxiuMK6EgLbIqlw/exec"; // GANTI

async function getData(params = "") {
  try {
    const res = await fetch(`${API_URL}?${params}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("API ERROR:", err);
    return null;
  }
}
