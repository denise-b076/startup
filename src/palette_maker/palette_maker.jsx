import React from 'react';
import Button from 'react-bootstrap/Button';
import "./palette_maker.css";

export function Palette() {
  return (
    <main className="palette_main">
        <div className="users">
            Hello
            <span className="user-name"> Place Holder</span>
        </div>
        <div className="content">
            <div className="palette_table">
                <div id="color_one" className="colors">
                    <div className="color_info">
                        <button id="unlock" className="btn btn-secondary">
                            <span>🔓</span>
                        </button>
                        <div className="color_name">
                            <span className="color_hex">#ff0000</span>
                        </div>
                    </div>
                </div>
                <div id="color_two" className="colors">
                    <div className="color_info">
                        <button id="unlock" className="btn btn-secondary">
                            <span>🔓</span>
                        </button>
                        <div className="color_name">
                            <span className="color_hex">#ff0000</span>
                        </div>
                    </div>
                </div>
                <div id="color_three" className="colors">
                    <div className="color_info">
                        <button id="unlock" className="btn btn-secondary">
                            <span>🔓</span>
                        </button>
                        <div className="color_name">
                            <span className="color_hex">#ff0000</span>
                        </div>
                    </div>
                </div>
                <div id="color_four" className="colors">
                    <div className="color_info">
                        <button id="unlock" className="btn btn-secondary">
                            <span>🔓</span>
                        </button>
                        <div className="color_name">
                            <span className="color_hex">#ff0000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="interactive_buttons">
            <button id="reroll" className="btn btn-secondary">
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