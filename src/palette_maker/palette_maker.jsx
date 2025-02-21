import React from 'react';
import Button from 'react-bootstrap/Button';
import "./palette_maker.css";

export function Palette({ color, setColor, userName}) {
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
        changeColor('colorOne');
        changeColor('colorTwo');
        changeColor('colorThree');
        changeColor('colorFour');
      }, []);

    const changeLock = (number, color) => {
        setLock(lock => ({...lock, [number]: !lock[number], [color]: lock[color] === "white" ? "grey" : "white"}));
      };

    function changeColor(color_number) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setColor(color => ({...color, [color_number]: "#" + randomColor}));
    }

  return (
    <main className="palette_main">
        <div className="users">
            Hello
            <span className="user-name"> {userName.split('@')[0]} </span>
        </div>
        <div className="content">
            <div className="palette_table">
                <div id="color_one" className="colors" style={{background: color.colorOne}}>
                    <div className="color_info">
                        <button id="unlock" className="btn btn-secondary"
                        style={{ background: lock.lockColorOne}} 
                        onClick={() => {
                            changeLock('lockOne', 'lockColorOne');
                        }}>
                            <span>🔓</span>
                        </button>
                        <div className="color_name">
                            <span className="color_hex">{color.colorOne}</span>
                        </div>
                    </div>
                </div>
                <div id="color_two" className="colors" style={{background: color.colorTwo}}>
                    <div className="color_info">
                        <button id="unlock" className="btn btn-secondary"
                        style={{ background: lock.lockColorTwo}} 
                        onClick={() => {
                            changeLock('lockTwo', 'lockColorTwo');
                        }}>
                            <span>🔓</span>
                        </button>
                        <div className="color_name">
                            <span className="color_hex">{color.colorTwo}</span>
                        </div>
                    </div>
                </div>
                <div id="color_three" className="colors" style={{background: color.colorThree}}>
                    <div className="color_info">
                        <button id="unlock" className="btn btn-secondary"
                        style={{ background: lock.lockColorThree}} 
                        onClick={() => {
                            changeLock('lockThree', 'lockColorThree');
                        }}>
                            <span>🔓</span>
                        </button>
                        <div className="color_name">
                            <span className="color_hex">{color.colorThree}</span>
                        </div>
                    </div>
                </div>
                <div id="color_four" className="colors" style={{background: color.colorFour}}>
                    <div className="color_info">
                        <button id="unlock" className="btn btn-secondary"
                        style={{ background: lock.lockColorFour}} 
                        onClick={() => {
                            changeLock('lockFour', 'lockColorFour');
                        }}>
                            <span>🔓</span>
                        </button>
                        <div className="color_name">
                            <span className="color_hex">{color.colorFour}</span>
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
                    <input className="form-control" type="text" placeholder="type here" />
                </div>
                <Button href="/gallery">Save to Gallery</Button>
            </form>
            </div>
        </div>
    </main>
  );
}