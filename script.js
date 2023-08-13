document.addEventListener("DOMContentLoaded", function () {
    const userMessageInput = document.getElementById("user-message");
    const userChat = document.getElementById("user-chat");
    const sendButton = document.getElementById("send-button");

    const taskNameInput = document.getElementById("task-name");
    const taskList = document.getElementById("task-list");
    const assignTaskButton = document.getElementById("assign-task-button");

    sendButton.addEventListener("click", function () {
        const message = userMessageInput.value;
        if (message.trim() !== "") {
            userChat.innerHTML += `<p>${message}</p>`;
            userMessageInput.value = "";
            userChat.scrollTop = userChat.scrollHeight;
        }
    });

    assignTaskButton.addEventListener("click", function () {
        const taskName = taskNameInput.value;
        if (taskName.trim() !== "") {
            taskList.innerHTML += `<li>${taskName}</li>`;
            taskNameInput.value = "";
        }
    });
});
