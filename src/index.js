import "./styles.css";
import Observable from "./Observer";

const input = document.getElementById("text-input");
const firstSubscriberBtn = document.getElementById("first-subscriber-btn");
const secondSubscriberBtn = document.getElementById("second-subscriber-btn");
const firstUnSubscriberBtn = document.getElementById("first-un-subscriber-btn");
const secondUnSubscriberBtn = document.getElementById(
  "second-un-subscriber-btn"
);
const textFirstSubscriber = document.getElementById("first-subscriber");
const textSecondSubscriber = document.getElementById("second-subscriber");

const firstText = e => (textFirstSubscriber.innerText = `${e}`);
const secondtText = e => (textSecondSubscriber.innerText = `${e}`);

input.addEventListener("input", e => Observable.notify(e.target.value));

firstSubscriberBtn.addEventListener("click", e => {
  e.preventDefault();
  Observable.subscribe(firstText);
});

secondSubscriberBtn.addEventListener("click", e => {
  e.preventDefault();
  Observable.subscribe(secondtText);
});

firstUnSubscriberBtn.addEventListener("click", e => {
  e.preventDefault();
  Observable.unsubscribe(firstText);
});
secondUnSubscriberBtn.addEventListener("click", e => {
  e.preventDefault();
  Observable.unsubscribe(secondtText);
});
