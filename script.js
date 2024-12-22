function moveUp(button) {
    const li = button.parentElement.parentElement;
    const prevLi = li.previousElementSibling;
    if (prevLi) {
        li.parentNode.insertBefore(li, prevLi);
        updateRanks();
    }
}

function moveDown(button) {
    const li = button.parentElement.parentElement;
    const nextLi = li.nextElementSibling;
    if (nextLi) {
        li.parentNode.insertBefore(nextLi, li);
        updateRanks();
    }
}

function updateRanks() {
    const rankings = document.querySelectorAll('.rank-number');
    rankings.forEach((rank, index) => {
        rank.textContent = index + 1;
    });
}
