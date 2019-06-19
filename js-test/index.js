function convertMeters(){
    let meter = 1514.246;
    let feet = meter * 3.2808;
    feet = Math.floor(feet);
    return feet;
}
    console.log(convertMeters());
