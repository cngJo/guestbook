export class Time {

    static getTimeString() {

        let time = new Date();
        let hour = time.getHours();
        let minute = time.getMinutes();

        if (hour < 10) {
            hour = '0' + hour;
        }

        if (minute < 10) {
            minute = '0' + minute;
        }

        return `${hour}:${minute}`;

    }

    static getDateString() {

        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

        if (day < 10) {
            day = '0' + day;
        }

        if (month < 10) {
            month = '0' + month;
        }

        return `${day}.${month}.${year}`;

    }

}
