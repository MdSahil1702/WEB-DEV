// A Promise in JavaScript is an object that represents the eventual result of an asynchronous operation — something that finishes later, not immediately.

// Think of it like a receipt you get after ordering food 🍔:

// You don’t have the food yet

// The receipt promises you’ll get it later

export function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Waited for 1000ms then this output Promise return and import of q9");
    }, 1000);
  });
}