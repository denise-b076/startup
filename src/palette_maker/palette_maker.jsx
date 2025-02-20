import React from 'react';
import Button from 'react-bootstrap/Button';
import "./palette_maker.css";

export function Palette() {
    const [lockOne, setLockOne] = React.useState(false);
    const [lockColorOne, setLockColorOne] = React.useState("white");
    const [lockTwo, setLockTwo] = React.useState(false);
    const [lockColorTwo, setLockColorTwo] = React.useState("white");
    const [lockThree, setLockThree] = React.useState(false);
    const [lockColorThree, setLockColorThree] = React.useState("white");
    const [lockFour, setLockFour] = React.useState(false);
    const [lockColorFour, setLockColorFour] = React.useState("white");
    const [colorOne, setColorOne] = React.useState("red");
    const [colorTwo, setColorTwo] = React.useState("red");
    const [colorThree, setColorThree] = React.useState("red");
    const [colorFour, setColorFour] = React.useState("red");

    React.useEffect(() => {
        changeColorOne();
        changeColorTwo();
        changeColorThree();
        changeColorFour();
      }, []);

    const changeLockOne = () => {
        setLockOne(lockOne === false ? true : false);
        setLockColorOne(lockColorOne === "white" ? "grey" : "white");
      };
    const changeLockTwo = () => {
        setLockTwo(lockTwo === false ? true : false);
        setLockColorTwo(lockColorTwo === "white" ? "grey" : "white");
      };
    const changeLockThree = () => {
        setLockThree(lockThree === false ? true : false);
        setLockColorThree(lockColorThree === "white" ? "grey" : "white");
      };
    const changeLockFour = () => {
        setLockFour(lockFour === false ? true : false);
        setLockColorFour(lockColorFour === "white" ? "grey" : "white");
      };

    function changeColorOne() {
        let randomColorOne = Math.floor(Math.random() * 16777215).toString(16);
        setColorOne("#" + randomColorOne);
    }
    function changeColorTwo() {
        let randomColorTwo = Math.floor(Math.random() * 16777215).toString(16);
        setColorTwo("#" + randomColorTwo);
    }
    function changeColorThree() {
        let randomColorThree = Math.floor(Math.random() * 16777215).toString(16);
        setColorThree("#" + randomColorThree);
    }
    function changeColorFour() {
        let randomColorFour = Math.floor(Math.random() * 16777215).toString(16);
        setColorFour("#" + randomColorFour);
    }


  return (
    <main className="palette_main">
        <div className="users">
            Hello
            <span className="user-name"> Place Holder</span>
        </div>
        <div className="content">
            <div className="palette_table">
                <div id="color_one" className="colors" style={{background: colorOne}}>
                    <div className="color_info">
                        <button id="unlock" className="btn btn-secondary"
                        style={{ background: lockColorOne}} 
                        onClick={() => {
                            changeLockOne();
                        }}>
                            <span>🔓</span>
                        </button>
                        <div className="color_name">
                            <span className="color_hex">{colorOne}</span>
                        </div>
                    </div>
                </div>
                <div id="color_two" className="colors" style={{background: colorTwo}}>
                    <div className="color_info">
                        <button id="unlock" className="btn btn-secondary"
                        style={{ background: lockColorTwo}} 
                        onClick={() => {
                            changeLockTwo();
                        }}>
                            <span>🔓</span>
                        </button>
                        <div className="color_name">
                            <span className="color_hex">{colorTwo}</span>
                        </div>
                    </div>
                </div>
                <div id="color_three" className="colors" style={{background: colorThree}}>
                    <div className="color_info">
                        <button id="unlock" className="btn btn-secondary"
                        style={{ background: lockColorThree}} 
                        onClick={() => {
                            changeLockThree();
                        }}>
                            <span>🔓</span>
                        </button>
                        <div className="color_name">
                            <span className="color_hex">{colorThree}</span>
                        </div>
                    </div>
                </div>
                <div id="color_four" className="colors" style={{background: colorFour}}>
                    <div className="color_info">
                        <button id="unlock" className="btn btn-secondary"
                        style={{ background: lockColorFour}} 
                        onClick={() => {
                            changeLockFour();
                        }}>
                            <span>🔓</span>
                        </button>
                        <div className="color_name">
                            <span className="color_hex">{colorFour}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="interactive_buttons">
            <button id="reroll" className="btn btn-secondary" onClick={() => {
                {!lockOne && changeColorOne();}
                {!lockTwo && changeColorTwo();}
                {!lockThree && changeColorThree();}
                {!lockFour && changeColorFour();}
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