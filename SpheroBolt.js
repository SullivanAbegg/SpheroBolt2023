//Team: Sullivan Abegg & Dylan Bellinger
//Date: 2.13.2023
//Project: SpheroBolt Labyrinth

/**Hello World Practice Program
 *LED turn to blue
 *Forward for for 2 seconds at a speed of 60
*/
 async function ledSpeak() {
 await scrollMatrixText('Start', { r: 0, g: 0, b: 0 }, 30, true)
 setSpeed(60);
 await delay (2);
 setSpeed(0);

}
async function ninetyDegrees() {
    await roll((getHeading() + 0), 40, 2);
    setMainLed({ r: 0, g: 0, b: 255});
    await delay (2);
    await roll((getHeading() + 90), 40, 2);  
    
}

async function startProgram() {
    await ledSpeak()  
    await ninetyDegrees()
}
