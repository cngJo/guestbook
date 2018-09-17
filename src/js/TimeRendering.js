import {Time} from "./Time.js";

export class TimeRendering {

    static render() {

        let timeElements = document.querySelectorAll('.render-time');

        setInterval(() => {
            timeElements.forEach((element) =>{
                element.innerHTML = Time.getTimeString();
            });
        }, 1000);

    }

}
