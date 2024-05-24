const itemList = [];

const addItem = () => {
    const itemInput = document.getElementById('itemInput');
    const listItem = {
        id: Date.now(),
        text: itemInput.value,
    }

    if (listItem.text !== '') {
        itemList.push(listItem);
        renderList();
        itemInput.value = '';
    }
};

const deleteItem = (id) => {
    const index = itemList.findIndex(item => item.id === id);
    if (index !== -1) {
        itemList.splice(index, 1);
        renderList();
    }
};

const editItem = (id) => {
    const newText = prompt("new text");
    const index = itemList.findIndex(item => item.id === id);
    if (index !== -1 && newText !== null) {
        itemList[index].text = newText;
        renderList();
    }
};

const renderList = () => {
    const itemListContainer = document.getElementById('itemList');
    itemListContainer.innerHTML = '';
    itemList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.text;

        const butonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const deleteBtn = documnet.createElement('button');
        deleteBtn.text = "delete";
        deleteBtn.addEventListener('click', () => deleteItem(item.id));
        buttonContainer.appendChild(deleteBtn);

        const editBtn = documnet.createElement('button');
        editBtn.text = "delete";
        editBtn.addEventListener('click', () => editItem(item.id));
        buttonContainer.appendChild(editBtn);


        li.appendChild(buttonContainer);
        itemListContainer.appendChild(li);

        setTimeout(() => {
            li.classList.add('fade-in');
        }, 10);
    });
};

const addthingbtn = document.getElementById('addItemBtn');
document.addEventListener('click', function(e) {
    const itemInput = document.getElementById('itemInput');
    const listItem = {
        id: Date.now(),
        text: itemInput.value,
    }

    if (listItem.text !== '') {
        itemList.push(listItem);
        renderList();
        itemInput.value = '';
    }
}
);