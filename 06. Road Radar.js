function roadRadar(speed, type) {
    let speedLimit = 0;
    let status = '';
    
    if (type === "motorway") {
        speedLimit = 130;
    } else if (type === "interstate") {
        speedLimit = 90;
    } else if (type === "city") {
        speedLimit = 50;
    } else if (type === "residential") {
        speedLimit = 20;
    }
    
    let diff = speed - speedLimit;
    
    if (speed <= speedLimit) {
        return `Driving ${speed} km/h in a ${speedLimit} zone`;
    } else {
        if (diff <= 20) {
            status = "speeding";
        } else if (diff <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }
        return `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
    }
}
console.log(roadRadar(40, 'city'));
console.log(roadRadar(21, 'residential'));
console.log(roadRadar(120, 'interstate'));
console.log(roadRadar(200, 'motorway'));