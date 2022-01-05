export default function addItem(parent, item) {
    let tmp = null;
    const div = document.createElement('div');
    div.classList = 'gallery-item';

    switch (item.type) {
        case 'img':
            tmp = document.createElement('img');
            tmp.classList = 'gallery-item__image';
            tmp.src = item.src;
            div.appendChild(tmp);
            break;
        case 'audio':
            tmp = document.createElement('audio');
            tmp.classList = 'gallery-item__audio';
            tmp.src = item.src;
            tmp.type = "audio/mpeg";
            tmp.controls = true;
            div.appendChild(tmp);
            break;
        case 'video':
            tmp = document.createElement('video');
            tmp.classList = 'gallery-item__audio';
            tmp.src = item.src;
            tmp.type = "video/mp4";
            tmp.controls = true;
            div.appendChild(tmp);
            break;

        default:
            break;
    }

    const text = document.createElement('p');
    text.innerText = item.title;
    text.classList = 'gallery-item__title';
    div.appendChild(text);
    parent.appendChild(div);
}