const avatars = [
    '<div className="profile-icon profile0"/>',
    // '<div className="profile-icon profile1">\n' +
    '        <svg\n' +
    '            width="150"\n' +
    '            height="150"\n' +
    '            viewBox="0 0 200 200"\n' +
    '            xmlns="http://www.w3.org/2000/svg"\n' +
    '            style="background: #0D7E80"\n' +
    '        >\n' +
    '            <g id="Page-1" fill="none" fillRule="evenodd">\n' +
    '                <g id="Account-Holder" fill="#FCFDFF">\n' +
    '                    <g id="profile1">\n' +
    '                        <path\n' +
    '                            d="M61 155l7-8h67c6.67 4 10 6.67 10 8 0 2 0-22-4-24s-67-2-78 1c-1.33 5.33-2 13-2 23z"\n' +
    '                            id="mustache"\n' +
    '                        />\n' +
    '                        <path\n' +
    '                            d="M94 77c-8.67 30-24.67 45-48 45-31 0-34-30-34-46 0-10.67 10-17 30-19h110c24.67 0 38 6 40 18 0 30-11.67 45.67-35 47-38 2-45-44-46-45-.67-.67-6.33-.67-17 0zM81 63c5.33 4.67 8 7.67 8 9h26c0-2 2.67-5 8-9H81z"\n' +
    '                            id="sunglasses"\n' +
    '                        />\n' +
    '                        <path\n' +
    '                            d="M111 35c1 5 4 13 4 14s45-13 70-2c-7-10-26-13-32-13-4 0-16 1-36 3-3.33-2-5.33-2.67-6-2z"\n' +
    '                            id="right-brow"\n' +
    '                        />\n' +
    '                        <path\n' +
    '                            d="M89 38h-7c-12.67-6.67-24.33-10-35-10-10.67 0-20.67 3-30 9 9.33-1.33 16.33-1.67 21-1 9 1 31 7 44 15 3.33-1.33 5.67-5.67 7-13z"\n' +
    '                            id="left-brow"\n' +
    '                        />\n' +
    '                    </g>\n' +
    '                </g>\n' +
    '            </g>\n' +
    '        </svg>\n',
    // '    </div>',
    // '<div className="profile-icon profile2">\n' +
    '        <svg\n' +
    '            width="150"\n' +
    '            height="150"\n' +
    '            viewBox="0 0 200 200"\n' +
    '            xmlns="http://www.w3.org/2000/svg"\n' +
    '            style="background: #D15219"\n' +
    '        >\n' +
    '            <g id="Page-2" fill="none" fillRule="evenodd">\n' +
    '                <g id="Adult-Child">\n' +
    '                    <g id="profile2" transform="translate(13)">\n' +
    '                        <path\n' +
    '                            d="M7 0C3.67 4 2 7.33 2 10c0 4 4 8 8 8s16-5 18-8-4 9-4 14 3 11 11 11c21 0 21.05-35 67-35H7z"\n' +
    '                            id="hair"\n' +
    '                            fill="#FCFDFF"\n' +
    '                        />\n' +
    '                        <path\n' +
    '                            d="M143 121c18.23 0 33-14.77 33-33h-66c0 18.23 14.77 33 33 33z"\n' +
    '                            id="right-eye-bottom"\n' +
    '                            fill="#FCFDFF"\n' +
    '                        />\n' +
    '                        <path\n' +
    '                            d="M33 120c18.23 0 33-14.77 33-33H0c0 18.23 14.77 33 33 33z"\n' +
    '                            id="left-eye-bottom"\n' +
    '                            fill="#FCFDFF"\n' +
    '                        />\n' +
    '                        <path\n' +
    '                            d="M143 56c18.23 0 33 14.77 33 33h-66c0-18.23 14.77-33 33-33z"\n' +
    '                            id="right-eye-top"\n' +
    '                            fill="#FCFDFF"\n' +
    '                        />\n' +
    '                        <path\n' +
    '                            d="M33 55c18.23 0 33 14.77 33 33H0c0-18.23 14.77-33 33-33z"\n' +
    '                            id="left-eye-top"\n' +
    '                            fill="#FCFDFF"\n' +
    '                        />\n' +
    '                        <circle id="left-pupil" fill="#D15219" cx="32" cy="88" r="14"/>\n' +
    '                        <circle id="right-pupil" fill="#D15219" cx="142" cy="88" r="14"/>\n' +
    '                        <path\n' +
    '                            d="M67 113c4.67-8.67 10.67-13 18-13s14 4.33 20 13H67z"\n' +
    '                            id="top-beak"\n' +
    '                            fill="#FCFDFF"\n' +
    '                        />\n' +
    '                        <path\n' +
    '                            d="M99 117H72c2.67 6 7 9 13 9s10.67-3 14-9z"\n' +
    '                            id="bottom-beak"\n' +
    '                            fill="#FCFDFF"\n' +
    '                        />\n' +
    '                        <path\n' +
    '                            d="M82 129c2.67.67 4.67 1 6 1s3.67-1 7-3c4 8 6 14.67 6 20 0 8-6 10-6 10s-6 1-7-6c-1.33 2-3.33 2.67-6 2-3.33-1.33-5-4.33-5-9s1.67-9.67 5-15z"\n' +
    '                            id="gillard"\n' +
    '                            fill="#FCFDFF"\n' +
    '                        />\n' +
    '                    </g>\n' +
    '                </g>\n' +
    '            </g>\n' +
    '        </svg>\n',
    // '    </div>',
    // '<div className="profile-icon profile3">\n' +
    '        <svg\n' +
    '            width="150"\n' +
    '            height="150"\n' +
    '            viewBox="0 0 200 200"\n' +
    '            xmlns="http://www.w3.org/2000/svg"\n' +
    '            style="background: #86A546"\n' +
    '        >\n' +
    '            <g id="Page-3" fill="none" fillRule="evenodd">\n' +
    '                <g id="Never-Users-Own-Profile" fill="#FCFDFF">\n' +
    '                    <g id="profile3" transform="translate(31 50)">\n' +
    '                        <circle id="left-eye" cx="12" cy="12" r="12"/>\n' +
    '                        <circle id="right-eye" cx="123" cy="12" r="12"/>\n' +
    '                        <path\n' +
    '                            d="M89.5 66.67c13.55 0 27.1-5.93 40.66-17.78 1.3-.53 2.58-.2 3.87 1 1.3 1.17 1.3 2.7 0 4.54C119.5 67.48 104.67 74 89.5 74c-15.17 0-30-6.52-44.53-19.56-1.3-1.85-1.3-3.37 0-4.55 1.3-1.2 2.58-1.53 3.87-1C62.4 60.73 75.94 66.66 89.5 66.66z"\n' +
    '                            id="smile"\n' +
    '                        >\n' +
    '                            <animate\n' +
    '                                id="frown"\n' +
    '                                attributeName="d"\n' +
    '                                begin="4.5s;frown.end+9s"\n' +
    '                                dur="1s"\n' +
    '                                from="M89.5 66.67c13.55 0 27.1-5.93 40.66-17.78 1.3-.53 2.58-.2 3.87 1 1.3 1.17 1.3 2.7 0 4.54C119.5 67.48 104.67 74 89.5 74c-15.17 0-30-6.52-44.53-19.56-1.3-1.85-1.3-3.37 0-4.55 1.3-1.2 2.58-1.53 3.87-1C62.4 60.73 75.94 66.66 89.5 66.66z"\n' +
    '                                to="M89.5 56.67c13.55 0 27.1 4.07 40.66 12.22 1.23.73 1.5 1.77.84 3.1-.67 1.33-2 1.67-4 1-9.83-6-22.33-9-37.5-9-15.17 0-28 3.15-38.53 9.44C49 74.84 47.7 74.7 47 73c-.65-1.26-.03-2.63 1.84-4.1 13.55-8.16 27.1-12.23 40.66-12.23z"\n' +
    '                            />\n' +
    '                        </path>\n' +
    '                    </g>\n' +
    '                </g>\n' +
    '            </g>\n' +
    '        </svg>\n'
    // '    </div>'
];

export default avatars;