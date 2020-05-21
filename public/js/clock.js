export default class Clock{
     static clockTime(){
        let currentTime = new Date();
        let hour = currentTime.getHours();
        let minute = currentTime.getMinutes();
        let second = currentTime.getSeconds();

        let dayShift = hour > 12 ? "pm" : "am";
        
         hour = hour > 12 ? (hour-12) : hour ;
        let time = hour + " : " + minute + " : " + second + " " + dayShift;
        console.log(time);
        let d = document.getElementsByClassName("time")[0];
        
        d.textContent= time;
        setInterval(this.clockTime,1000);
        
        }
       
}


