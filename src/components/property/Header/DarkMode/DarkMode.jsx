import React from 'react';

import sunnyImg from '../../../../assets/images/sunny.png';

const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light")
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark")
    }

    const toggleTheme = (e) => {
        if(e.target.checked) {
            setDarkMode()
        } else {
            setLightMode()
        }
    }
    return (
        <div className="dark_mode">
            
            <input
             className="dark_mode_input"
             type="checkbox"
             id="darkmode_toggle" 
             onChange={toggleTheme}
            />
            <label className="dark_mode_label" for="darkmode_toggle">
                <img src={sunnyImg} alt="light_img" />
            </label>

        </div>
    )

}

export default DarkMode;