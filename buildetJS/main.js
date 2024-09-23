"use strict";
document.addEventListener("DOMContentLoaded", () => {
    var modal = document.getElementById('JobModal');
    modal === null || modal === void 0 ? void 0 : modal.addEventListener("shown.bs.modal", (event) => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=1')
            .then(response => response.json())
            .then(data => {
            const modalContent = document.getElementById('modalContent');
            modalContent.innerHTML = '';
            var postDIV = document.createElement('div');
            postDIV.classList.add('mb-3');
            postDIV.innerHTML = `
                <p>${data[0].body}</p>
                <hr>
            `;
            modalContent.appendChild(postDIV);
        })
            .catch(error => console.error('Error fetching posts:', error));
    });
});
document.addEventListener("DOMContentLoaded", () => {
    var modal = document.getElementById('ProfileModal');
    modal === null || modal === void 0 ? void 0 : modal.addEventListener("shown.bs.modal", (event) => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=1')
            .then(response => response.json())
            .then(data => {
            const modalContent = document.getElementById('ProfileContent');
            modalContent.innerHTML = '';
            var postDIV = document.createElement('div');
            postDIV.classList.add('mb-3');
            postDIV.innerHTML = `
                <p>${data[0].body}</p>
                <hr>
            `;
            modalContent.appendChild(postDIV);
        })
            .catch(error => console.error('Error fetching posts:', error));
    });
});
document.addEventListener("DOMContentLoaded", () => {
    var modal = document.getElementById('LawModal');
    modal === null || modal === void 0 ? void 0 : modal.addEventListener("shown.bs.modal", (event) => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=1')
            .then(response => response.json())
            .then(data => {
            const modalContent = document.getElementById('LawContent');
            modalContent.innerHTML = '';
            var postDIV = document.createElement('div');
            postDIV.classList.add('mb-3');
            postDIV.innerHTML = `
                <p>${data[0].body}</p>
                <hr>
            `;
            modalContent.appendChild(postDIV);
        })
            .catch(error => console.error('Error fetching posts:', error));
    });
});
