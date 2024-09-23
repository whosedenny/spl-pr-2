document.addEventListener("DOMContentLoaded", () => {
    var modal = document.getElementById('JobModal') as HTMLElement; 
    
    modal?.addEventListener("shown.bs.modal", (event) => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=1')
        .then(response => response.json())
        .then(data => {
            const modalContent = document.getElementById('modalContent') as HTMLElement;
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
    var modal = document.getElementById('ProfileModal') as HTMLElement; 
    
    modal?.addEventListener("shown.bs.modal", (event) => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=1')
        .then(response => response.json())
        .then(data => {
            const modalContent = document.getElementById('ProfileContent') as HTMLElement;
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
    var modal = document.getElementById('LawModal') as HTMLElement; 
    
    modal?.addEventListener("shown.bs.modal", (event) => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=1')
        .then(response => response.json())
        .then(data => {
            const modalContent = document.getElementById('LawContent') as HTMLElement;
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
