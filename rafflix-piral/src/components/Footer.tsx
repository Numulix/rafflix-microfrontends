import * as React from "react";

const Footer: React.FC = () => (
    <>
        <footer>
            <p className="text-lightgray">Made with</p>
            <p>
                <a target="_blank" href="https://piral.io" rel="noopener noreferrer">
                    <img
                        id="piral-logo"
                        title="Piral"
                        src="https://piral.io/logo-simple.f8667084.png"
                        height="10"
                    />
                    &nbsp;Piral
                </a>
            </p>
            <p className="text-lightgray">, </p>
            <p>
                <a target="_blank" href="https://reactjs.org" rel="noopener noreferrer">
                    <img
                        id="react-logo"
                        title="React"
                        src="https://i.imgur.com/gNxwwn1.png"
                        height="10"
                    />
                    &nbsp;React
                </a>
            </p>
            <p className="text-lightgray"> and </p>
            <p>
                <a target="_blank" href="https://v2.vuejs.org" rel="noopener noreferrer">
                    <img
                        id="vue-loo"
                        title="Vue"
                        height="10"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                    />
                    &nbsp;Vue
                </a>
            </p>
            <p>&mdash;</p>
            <p className="text-lightgray">Jovan Babic - 2023.</p>
        </footer>
    </>
);

export default Footer;
