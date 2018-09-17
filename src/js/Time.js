export class Time {

    /**
     *
     * @param clockMode (12 | 24)h clock
     * @param preset
     */
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

}
