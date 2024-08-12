import { Invoice } from './classes/invoice.js';

const invOne = new Invoice('mario', 'work on the levy website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
