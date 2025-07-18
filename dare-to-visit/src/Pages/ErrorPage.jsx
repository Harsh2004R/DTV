import React, { useEffect } from "react";

const ErrorPage = () => {
  useEffect(() => {
    const colorSwitcher = document.querySelector("[data-theme-color-switch]");
    let currentTheme = "dark"; // Default: dark

    const root = document.documentElement;
    // Set initial dark theme
    root.style.setProperty("--bg-color", "#050505");
    root.style.setProperty("--text-color", "#fff");
    colorSwitcher.textContent = "\u{2600}"; // Sun icon for light switch

    const handleThemeSwitch = () => {
      if (currentTheme === "dark") {
        root.style.setProperty("--bg-color", "#fff");
        root.style.setProperty("--text-color", "#000");
        colorSwitcher.textContent = "\u{1F319}"; // Moon
        currentTheme = "light";
      } else {
        root.style.setProperty("--bg-color", "#050505");
        root.style.setProperty("--text-color", "#fff");
        colorSwitcher.textContent = "\u{2600}"; // Sun
        currentTheme = "dark";
      }

      colorSwitcher.setAttribute("data-theme", currentTheme);
    };

    colorSwitcher.addEventListener("click", handleThemeSwitch);
    return () => {
      colorSwitcher.removeEventListener("click", handleThemeSwitch);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;500&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary-color: #faca2e;
          --eye-pupil-color: #050505;
          --bg-color: #050505; /* dark by default */
          --text-color: #fff;
          --fs-heading: 36px;
          --fs-text: 26px;
          --fs-button: 18px;
          --fs-icon: 30px;
          --pupil-size: 30px;
          --eye-size: 80px;
          --button-padding: 15px 30px;
        }

        @media only screen and (max-width: 767px) {
          :root {
            --fs-heading: 26px;
            --fs-text: 18px;
            --fs-button: 16px;
            --fs-icon: 24px;
            --button-padding: 12px 20px;
            --eye-size: 60px;
            --pupil-size: 20px;
          }
        }

        html, body {
          height: 100%;
          width: 100%;
          background-color: var(--bg-color);
          color: var(--text-color);
          font-family: "Fira Sans", sans-serif;
        }

        .error-page {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          row-gap: 30px;
          text-align: center;
          max-width: 500px;
          width: 100%;
        }

        .error-page__heading-title {
          text-transform: capitalize;
          font-size: var(--fs-heading);
          font-weight: 500;
          color: var(--primary-color);
        }

        .error-page__heading-desciption {
          margin-top: 10px;
          font-size: var(--fs-text);
          font-weight: 200;
        }

        .error-page__button {
          color: inherit;
          text-decoration: none;
          border: 1px solid var(--primary-color);
          font-size: var(--fs-button);
          font-weight: 200;
          padding: var(--button-padding);
          border-radius: 15px;
          box-shadow: 0px 7px 0px -2px var(--primary-color);
          transition: all 0.3s ease-in-out;
          text-transform: capitalize;
        }

        .error-page__button:hover {
          box-shadow: none;
          background-color: var(--primary-color);
          color: #000;
        }

        .eyes {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .eye {
          width: var(--eye-size);
          height: var(--eye-size);
          background-color: var(--primary-color);
          border-radius: 50%;
          display: grid;
          place-items: center;
        }

        .eye__pupil {
          width: var(--pupil-size);
          height: var(--pupil-size);
          background-color: var(--eye-pupil-color);
          border-radius: 50%;
          animation: movePupil 2s infinite ease-in-out;
          transform-origin: center center;
        }

        @keyframes movePupil {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-10px, -10px);
          }
          50% {
            transform: translate(10px, 10px);
          }
          75% {
            transform: translate(-10px, 10px);
          }
        }

        .color-switcher {
          position: fixed;
          top: 20px;
          right: 20px;
          background-color: transparent;
          font-size: var(--fs-icon);
          cursor: pointer;
          color: var(--primary-color);
          border: none;
        }
      `}</style>

      <main className="error-page">
        <div className="container">
          <div className="eyes">
            <div className="eye">
              <div className="eye__pupil eye__pupil--left"></div>
            </div>
            <div className="eye">
              <div className="eye__pupil eye__pupil--right"></div>
            </div>
          </div>

          <div className="error-page__heading">
            <h1 className="error-page__heading-title">Looks like you're lost</h1>
            <p className="error-page__heading-desciption">404 error</p>
          </div>

          <a
            className="error-page__button"
            href="/"
            aria-label="back to home"
            title="back to home"
          >
            back to home
          </a>
        </div>

        <button className="color-switcher" data-theme-color-switch>
          ☀️
        </button>
      </main>
    </>
  );
};

export default ErrorPage;
