const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.dropzone');

draggables.forEach((draggable) => {
  draggable.addEventListener('dragstart', (e) => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', (e) => {
    draggable.classList.remove('dragging');
  });
});

dropZones.forEach((dropzone) => {
  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggable = document.querySelector('.dragging');
    dropzone.appendChild(draggable);
  });
});
