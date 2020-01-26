const chatContainer = document.getElementById("chatContainer");

const msgInput = document.getElementById("msgInput");
const sendButton = document.getElementById("sendButton");
const chatAnchor = document.getElementById("chatAnchor");

function updateScroll() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

sendButton.addEventListener("click", function(e) {
  //   let newElem = document.createElement("h5");
  //   newElem.append(`Me: ${msgInput.value}`);
  //   chatContainer.appendChild(newElem);
  addNewChatContent("h5", "Me", msgInput.value);
  fetch(`/send?message=` + msgInput.value)
    .then(res => res.json())
    .then(json => addNewChatContent("h5", "Bot", json));
});

function addNewChatContent(element, owner, content) {
  let newElem = document.createElement(element);
  newElem.append(owner, `: `, content);
  chatContainer.insertBefore(newElem, chatAnchor);
  updateScroll();
}
