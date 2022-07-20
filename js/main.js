// **BONUS**
// 1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l’assenza dell’immagine profilo con un elemento di 
// fallback che contiene le iniziali dell’utente 
// (es. Luca Formicola > LF).
// 3. Al click su un pulsante “Mi Piace” di un post, 
// se abbiamo già cliccato dobbiamo decrementare il 
// contatore e cambiare il colore del bottone.


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const postsListDom = document.querySelector('.posts-list');

const likesArray = [];

console.log(likesArray);






posts.forEach((postObject, index) => {

    let eDate = postObject.created.split('-').reverse().join('/');

    const post = document.createElement('div');
    post.classList.add('post');

    const postHeader = document.createElement('div');
    postHeader.classList.add('post__header');

    const postMeta = document.createElement('div');
    postMeta.classList.add('post-meta');

    const postMetaIcon = document.createElement('div');
    postMetaIcon.classList.add('post-meta__icon');

    const postImg = document.createElement("IMG");
    
    if (postObject.author.image == null) {
        postImg.classList.add('profile-pic-default');
        postImg.classList.add('span');
    } else {
        postImg.setAttribute("src", postObject.author.image);
        postImg.classList.add('profile-pic');
    }

    const postMetaData = document.createElement('div');
    postMetaData.classList.add('post-meta__data');
    postMetaData.innerHTML = `<div class="post-meta__author">${postObject.author.name}</div>
                                        <div class="post-meta__time">${eDate}</div>`;

    const postText = document.createElement('div');
    postText.classList.add('post__text');
    postText.innerHTML = `${postObject.content}`;

    const postImage = document.createElement('div');
    postImage.classList.add('post__image');
    postImage.innerHTML = `<img src="${postObject.media}">`;

    const postFooter = document.createElement('div');
    postFooter.classList.add('post__footer');

    const postFooterLikes = document.createElement('div');
    postFooterLikes.classList.add('likes', 'js-likes');

    const postFooterLikesCta = document.createElement('div');
    postFooterLikesCta.classList.add('likes__cta');
    postFooterLikesCta.innerHTML =  `<a class="like-button  js-like-button" href="#" data-postid="1">
                                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                        <span class="like-button__label">Mi Piace</span>
                                    </a>`;
    
    const postFooterLikesCounter = document.createElement('div');
    postFooterLikesCounter.classList.add('likes__counter');
    postFooterLikesCounter.innerHTML = `Piace a <b id="${postObject.id}" class="js-likes-counter">${postObject.likes}</b> persone`;

    postFooterLikesCta.addEventListener('click', function (event) {
        event.preventDefault();
        event.target.style.color = 'green';
        likesArray.push(postObject.id);
        postFooterLikesCounter.innerHTML = `Piace a <b id="${postObject.id}" class="js-likes-counter">${postObject.likes + 1}</b> persone`;
    });

    postMetaIcon.append(postImg);
    postMeta.append(postMetaIcon);
    postMeta.append(postMetaData);
    postHeader.append(postMeta);
    post.append(postHeader);
    post.append(postText);
    post.append(postImage);
    postFooterLikes.append(postFooterLikesCta);
    postFooterLikes.append(postFooterLikesCounter);
    postFooter.append(postFooterLikes);
    post.append(postFooter);
    postsListDom.append(post);  
    

    
})
    
