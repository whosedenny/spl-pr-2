import { Post } from "../types/APItype";

export function fetchAndDisplayModalContent(
    modalId: string,
    contentId: string
) {
    const modal = document.getElementById(modalId) as HTMLElement;

    modal?.addEventListener("shown.bs.modal", () => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=1")
            .then((response) => response.json())
            .then((data: Post[]) => {
                const modalContent = document.getElementById(
                    contentId
                ) as HTMLElement;
                modalContent.innerHTML = "";

                const postDIV = document.createElement("div");
                postDIV.classList.add("mb-3");
                postDIV.innerHTML = `
                    <p>${data[0].body}</p>
                    <hr>
                `;
                modalContent.appendChild(postDIV);
            })
            .catch((error) => console.error("Error fetching posts:", error));
    });
}
