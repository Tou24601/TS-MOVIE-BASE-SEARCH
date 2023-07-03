import FullList from "../models/FullList";

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void
}

export default class ListTemplate implements DOMList {
    ul: HTMLUListElement

    static instance: ListTemplate = new ListTemplate()

    private constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = ""
    }

    render(fullList: FullList): void {
        this.clear()

        fullList.list.map((item) => {
            const li = document.createElement("li") as HTMLLIElement
            li.className = "item"
            //li.id = item.id
            if (item.active === true) {
                li.className = "activated"
            }

            const poster = document.createElement("img") as HTMLImageElement
            poster.setAttribute("src", item.title)
            li.appendChild(poster)

            const title = document.createElement("h3") as HTMLHeadElement
            title.innerText = item.title
            li.appendChild(title)

            const yearOfRelease = document.createElement("p") as HTMLHeadElement
            title.innerText = item.yearOfRelease
            li.appendChild(yearOfRelease)

            const description = document.createElement("p") as HTMLHeadElement
            description.innerText = item.description
            li.appendChild(description)

            this.ul.appendChild(li)
        })
    }
}