import React from 'react';
import Button from 'react-bootstrap/Button';

export function tableMaker(data, tabName, navigate, setColor){
    const array = [];
    let colorName = tabName + '_color';
    let buttonName = tabName + '_button';
    for (const [i, palette] of data.entries()) {
        array.push(
            <tr key={i}>
                {tabName === 'inspire' && <td>{palette.user}</td>}
                <td><Button id={buttonName} variant='link'
                onClick={() => {
                navigate('/palette_maker')
                setColor(() => ({colorOne: palette.first, colorTwo: palette.second, colorThree: palette.third, colorFour: palette.fourth, fromTable: true}));
                localStorage.setItem('colorOne', palette.first);
                localStorage.setItem('colorTwo', palette.second);
                localStorage.setItem('colorThree', palette.third);
                localStorage.setItem('colorFour', palette.fourth);
            }
        }
            >{palette.name}</Button></td>
                <td className="color_data">
                    <div className="color_palette">
                        <div style={{ backgroundColor: palette.first }} className={colorName}></div>                        
                        <div style={{ backgroundColor: palette.second }} className={colorName}></div>                       
                        <div style={{ backgroundColor: palette.third }} className={colorName}></div>                       
                        <div style={{ backgroundColor: palette.fourth }} className={colorName}></div>
                    </div>                        
                </td>
                <td>{palette.date}</td>
            </tr>
        );
    }
    return array;
}

export function empty(msg){
    const array = [];
    array.push(
        <tr key='0'>
            <td colSpan='4'>{msg}</td>
        </tr>
    );
    return array;
}