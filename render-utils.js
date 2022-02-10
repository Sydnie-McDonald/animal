export function renderListItem(animal) {
    const div = document.createElement('div');
    div.classList.add('animal');
    div.style.top = animal.top;
    div.style.left = animal.left;

    // create anchor tag
    const a = document.createElement('a');
    a.href = `/animal/?id=${animal.id}`;

    const img = document.createElement('img');
    img.src = `./assets/${animal.type}.svg`;
    
    console.log(animal.type);

    const nameSpan = document.createElement('span');
    nameSpan.textContent = animal.name;
    nameSpan.classList.add('name');

    const span = document.createElement('span');
    span.textContent = animal.says;

    a.append(img, nameSpan, span);
    div.append(a);
    return div;
}
