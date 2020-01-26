const chatContainer = document.getElementById("chatContainer");

const msgInput = document.getElementById("msgInput");
const sendButton = document.getElementById("sendButton");
const chatAnchor = document.getElementById("chatAnchor");

function updateScroll() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

sendButton.addEventListener("click", function(e) {
  addNewChatContent("h4", "user-msg", "Me", msgInput.value);
  fetch(`/send?message=` + msgInput.value)
    .then(res => res.json())
    .then(json => addNewChatContent("h4", "bot-msg", "Bot", json));
});

function addNewChatContent(element, classname, owner, content) {
  let newElem = document.createElement(element);
  newElem.append(owner, `: `, content);
  newElem.className += classname;

  chatContainer.insertBefore(newElem, chatAnchor);
  updateScroll();
}
