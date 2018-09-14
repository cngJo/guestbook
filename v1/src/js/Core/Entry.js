export class Entry {

    constructor(id, title, content, createdAt = new Date().toLocaleString()) {
        this.ID = id;
        this.Title = title;
        this.Content = content;
        this.CreatedAt = createdAt
        this.PostElementReady = false;
        this.PostElement = null;
    }


    render() {
        if (this.PostElementReady) {
            return this.PostElement;
        } else {
            this.renderElement();
            return this.PostElement;
        }
    }

    /**
     * Renders the Entry into a HTML Element
     */
    renderElement() {
        let Element = document.createElement('div');
        Element.classList.add('post');
        Element.setAttribute('data-postid', this.ID);

        let fieldset = document.createElement('fieldset');
        let legend = document.createElement('legend');
        let content = document.createElement('p');
        let createdAt = document.createElement('p');

        content.innerHTML = this.Content.replace(/(?:\r\n|\r|\n)/g, '<br>');
        legend.innerHTML = this.Title;
        createdAt.innerHTML = "Created at: " + this.CreatedAt;

        fieldset.appendChild(legend);
        fieldset.appendChild(content);
        fieldset.appendChild(document.createElement('hr'));
        fieldset.appendChild(createdAt);

        Element.appendChild(fieldset);

        this.PostElementReady = true;
        this.PostElement = Element;
    }

}
