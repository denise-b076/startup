import React from 'react';
import Button from 'react-bootstrap/Button';
import "./inspire.css";
import { useNavigate } from 'react-router-dom';

export function Inspire({color, setColor}) {
    const [inspireData, setInspireData] = React.useState([]);
    const navigate = useNavigate();
    const inspireRows = [];

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setColor((color) => ({
                ...color,
                colorOne: changeColorInspire(),
                colorTwo: changeColorInspire(),
                colorThree: changeColorInspire(),
                colorFour: changeColorInspire(),
            }));

            const date = new Date().toLocaleDateString();
            const userName = 'bruceWayne';
            createPalette(userName, date);
            console.log('accessed');
        }, 7000);

        const inspireText = localStorage.getItem('inspire');
        if (inspireText) {
            setInspireData(JSON.parse(inspireText));
        }

        return () => clearInterval(intervalId);
    }, [color]);

    function changeColorInspire() {
        let randomColor = 'ff';
        while (randomColor.length < 6) {
            randomColor = Math.floor(Math.random() * 16777215).toString(16);
        }
        randomColor = '#' + randomColor;
        return randomColor;
    }

    async function createPalette(userName, date) {
        const newPalette = { 
            name: 'Palette',
            user: userName,
            first: color.colorOne, 
            second: color.colorTwo,
            third: color.colorThree, 
            fourth: color.colorFour,
            date: date 
        };
        updateInspire(newPalette);
    }

    function updateInspire(newPalette){
        let inspire = JSON.parse(localStorage.getItem('inspire')) || [];
        inspire.unshift(newPalette);
        localStorage.setItem('inspire', JSON.stringify(inspire));
    }

    if (inspireData.length) {
        const recentInspireData = inspireData.slice(0,12);
        for (const [i, palette] of recentInspireData.entries()) {
            inspireRows.push(
                <tr key={i}>
                    <td>{palette.user}</td>
                    <td><Button id="inspire_button" variant='link'
                    onClick={() => {
                    navigate('/palette_maker')
                    setColor(() => ({colorOne: palette.first, colorTwo: palette.second, colorThree: palette.third, colorFour: palette.fourth, fromTable: true}));
                }
            }
                >{palette.name}</Button></td>
                    <td className="color_data">
                        <div className="color_palette">
                            <div style={{ backgroundColor: palette.first }} className="inspire_color"></div>                        
                            <div style={{ backgroundColor: palette.second }} className="inspire_color"></div>                       
                            <div style={{ backgroundColor: palette.third }} className="inspire_color"></div>                       
                            <div style={{ backgroundColor: palette.fourth }} className="inspire_color"></div>
                        </div>                        
                    </td>
                    <td>{palette.date}</td>
                </tr>
            );
        }
        
        if (inspireRows.length > 12) {
            inspireRows = inspireRows.slice[1,12];
        }
    }
    else {
        inspireRows.push(
            <tr key='0'>
                <td colSpan='4'>Where could the artists be?</td>
            </tr>
        );
    }

  return (
    <main className="container-fluid text-center">
        <table id="inspire_table" className="table table-striped-columns">
            <thead className="table-dark">
            <tr>
                <th><b>User</b></th>
                <th><b>Palette Name</b></th>
                <th><b>Colors</b></th>
                <th><b>Date Created</b></th>
            </tr>
            </thead>
            <tbody>
                {inspireRows}
            </tbody>                
        </table>
    </main>
  );
}