import { AppEvent, AppNotifier } from './appNotifier';

export function randomizeColor() {
    let randomColor = 'ff';
    while (randomColor.length < 7) {
        randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    return randomColor;
}

export async function savePalette(palette_name, color, location, userName){
    const date = new Date().toLocaleDateString();
    const sortingDate = new Date();
    const newPalette = { 
        name: palette_name, 
        user: userName.split('@')[0],
        first: color.colorOne, 
        second: color.colorTwo,
        third: color.colorThree, 
        fourth: color.colorFour,
        date: date,
        sortingDate: sortingDate 
    };

    if (location === 'gallery') {
        await fetch('api/palette/galleryPalettes', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newPalette),
        credentials: 'same-origin',
    });
    }
    else if (location === 'inspire') {
        await fetch('api/palette/inspirePalettes', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newPalette),
        credentials: 'same-origin',
    });
    }

    AppNotifier.broadcastEvent(userName, AppEvent.User, {});
}