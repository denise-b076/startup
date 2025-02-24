import React from 'react';
import Button from 'react-bootstrap/Button';
import "./palette_maker.css";
import { useNavigate } from 'react-router-dom';

export function Palette({ color, setColor, userName }) {
    const navigate = useNavigate();
    const [paletteName, setPaletteName] = React.useState('');
    const [lock, setLock] = React.useState({
        lockOne: false,
        lockColorOne: "white",
        lockTwo: false,
        lockColorTwo: "white",
        lockThree: false,
        lockColorThree: "white",
        lockFour: false,
        lockColorFour: "white"
    });

    React.useEffect(() => {
        if (!color.fromTable){
            changeColor('colorOne');
            changeColor('colorTwo');
            changeColor('colorThree');
            changeColor('colorFour');
        }
        else {
            setColor(color => ({...color, fromTable: false}));
        }
      }, []);

    const changeLock = (number, color) => {
        setLock(lock => ({...lock, [number]: !lock[number], [color]: lock[color] === "white" ? "grey" : "white"}));
      };

    function changeColor(color_number) {
        let randomColor = 'ff';
        while (randomColor.length < 6) {
            randomColor = Math.floor(Math.random() * 16777215).toString(16);
        }
        setColor((color) => ({...color, [color_number]: "#" + randomColor}));
    }

    async function savePalette(palette_name, color){
        const date = new Date().toLocaleDateString();
        const newPalette = { 
            name: palette_name, 
            first: color.colorOne, 
            second: color.colorTwo,
            third: color.colorThree, 
            fourth: color.colorFour,
            date: date 
        };
        updateGallery(newPalette);
    }
    
    function updateGallery(newPalette){
        let gallery = JSON.parse(localStorage.getItem('gallery')) || [];
        gallery.unshift(newPalette);
        localStorage.setItem('gallery', JSON.stringify(gallery));
    }

  return (
    <main className="palette_main">
        <div className="users">
            Hello
            <span className="user-name"> {userName.split('@')[0]} </span>
        </div>
        <div className="content">
            <div className="palette_table">
                <div id="color_one" className="colors" style={{background: color.colorOne || '#444444'}}>
                    <div className="color_info">
                        <button id="unlock" className="btn btn-secondary"
                        style={{ background: lock.lockColorOne}} 
                        onClick={() => {
                            changeLock('lockOne', 'lockColorOne');
                        }}>
                            <span>🔓</span>
                        </button>
                        <div className="color_name">
                        <input className="form-control" type="text" value={color.colorOne} onChange={(e) => setColor((color) => ({...color, colorOne: e.target.value}))} placeholder='#444444' />
                        </div>
                    </div>
                </div>
                <div id="color_two" className="colors" style={{background: color.colorTwo || '#444444'}}>
                    <div className="color_info">
                        <button id="unlock" className="btn btn-secondary"
                        style={{ background: lock.lockColorTwo}} 
                        onClick={() => {
                            changeLock('lockTwo', 'lockColorTwo');
                        }}>
                            <span>🔓</span>
                        </button>
                        <div className="color_name">
                        <input className="form-control" type="text" value={color.colorTwo} onChange={(e) => setColor((color) => ({...color, colorTwo: e.target.value}))} placeholder='#444444' />
                        </div>
                    </div>
                </div>
                <div id="color_three" className="colors" style={{background: color.colorThree || '#444444'}}>
                    <div className="color_info">
                        <button id="unlock" className="btn btn-secondary"
                        style={{ background: lock.lockColorThree}} 
                        onClick={() => {
                            changeLock('lockThree', 'lockColorThree');
                        }}>
                            <span>🔓</span>
                        </button>
                        <div className="color_name">
                        <input className="form-control" type="text" value={color.colorThree} onChange={(e) => setColor((color) => ({...color, colorThree: e.target.value}))} placeholder='#444444' />
                        </div>
                    </div>
                </div>
                <div id="color_four" className="colors" style={{background: color.colorFour || '#444444'}}>
                    <div className="color_info">
                        <button id="unlock" className="btn btn-secondary"
                        style={{ background: lock.lockColorFour}} 
                        onClick={() => {
                            changeLock('lockFour', 'lockColorFour');
                        }}>
                            <span>🔓</span>
                        </button>
                        <div className="color_name">
                            {/* <span className="color_hex" >{color.colorFour}</span> */}
                            <input className="form-control" type="text" value={color.colorFour} onChange={(e) => setColor((color) => ({...color, colorFour: e.target.value}))} placeholder='#444444' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="interactive_buttons">
            <button id="reroll" className="btn btn-secondary" onClick={() => {
                {!lock.lockOne && changeColor('colorOne');}
                {!lock.lockTwo && changeColor('colorTwo');}
                {!lock.lockThree && changeColor('colorThree');}
                {!lock.lockFour && changeColor('colorFour');}
            }}>
                <h3>Reroll Colors</h3>
            </button>
            <form method="get">
                <div className="input-group mb-3">
                    <span className="input-group-text">Palette Name</span>
                    <input className="form-control" type="text" onChange={(e) => setPaletteName(e.target.value)} placeholder="type here" />
                </div>
                <Button disabled={!paletteName} onClick={() => {
                    navigate('/gallery')
                    savePalette(paletteName, color);
                }
                }>Save to Gallery
                </Button>
            </form>
            </div>
        </div>
    </main>
  );
}