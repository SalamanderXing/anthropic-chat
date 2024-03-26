// const url = window.location.href
//   .replace("https://", "")
//   .replace("http://", "");
// const url = window.location.href;

// const urlWithoutProtocol = url.replace(/^https?:\/\//, "");
// //.replace("/", "");
// const protocols = ["ws", "wss"]; // Include both ws and wss for secure connections

// for (let protocol of protocols) {
//   //const wsUrl = `${protocol}://${url}`; // + `://${protocol}/`;
//   const wsUrl = `${urlWithoutProtocol}://${url}`; // Add the domain back
//   console.log({ wsUrl });
//   let socket = new WebSocket(wsUrl);
//   socket.onopen = (a) => {
//     socket.send("ciao");
//   };
// }

// setTimeout(() => {
//   const textArea = document.querySelector("#chat-input");
//   //typeIntoTextArea("ciao", textArea);
//   const btn = document.querySelector(
//     "#root > div > div > div > div > div > div.MuiBox-root.css-s4jwr4 > div.MuiBox-root.css-0 > div > div > div > div.MuiBox-root.css-1el3axn > button",
//   );

//   function simulateKeyEvent(element, eventType, keyCode) {
//     const event = new KeyboardEvent(eventType, {
//       key: "Unidentified",
//       keyCode: keyCode,
//       code: "",
//       which: keyCode,
//       shiftKey: false,
//       ctrlKey: false,
//       metaKey: false,
//     });
//     element.dispatchEvent(event);
//   }

//   function simulateTyping(element, text, delay) {
//     let index = 0;
//     const intervalId = setInterval(() => {
//       if (index < text.length) {
//         simulateKeyEvent(element, "keydown", text.charCodeAt(index));
//         element.value += text[index];
//         simulateKeyEvent(element, "keyup", text.charCodeAt(index));
//         const inputEvent = new Event("input", { bubbles: true });
//         element.dispatchEvent(inputEvent);
//         index++;
//       } else {
//         btn.click();
//         clearInterval(intervalId);
//       }
//     }, delay);
//   }
//   textArea.focus();
//   simulateTyping(textArea, "ciao come stai?", 100);

//   // console.log(textArea);
//   // textArea.value = "ciao";
//   // textArea.innerHTML = "ciao";
//   //textArea.innerHTML = "ciao";
//   // textArea.value = "ciao";
//   //btn.disabled = false;
//   //btn.click();
//   //textArea.oninput = undefined;

//   // textArea.oninput = () => {
//   //   console.log(textArea);
//   //   textArea.value = "ciao";
//   //   //textArea.innerHTML = "ciao";
//   //   // textArea.value = "ciao";
//   //   btn.disabled = false;
//   //   btn.click();
//   //   textArea.oninput = undefined;
//   // };
// }, 1000);
