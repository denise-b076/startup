export function randomizeColor() {
    let randomColor = 'ff';
    while (randomColor.length < 7) {
        randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    return randomColor;
}

export async function savePalette(palette_name, color, location, userName){
    const date = new Date().toLocaleDateString();
    const newPalette = { 
        name: palette_name, 
        user: userName,
        first: color.colorOne, 
        second: color.colorTwo,
        third: color.colorThree, 
        fourth: color.colorFour,
        date: date 
    };
    updateGallery(newPalette, location);
}

function updateGallery(newPalette, location){
    let stored = JSON.parse(localStorage.getItem(location)) || [];
    stored.unshift(newPalette);
    localStorage.setItem(location, JSON.stringify(stored));
}
