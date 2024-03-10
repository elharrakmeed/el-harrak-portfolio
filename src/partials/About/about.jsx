import "./about.css";
export default function About() {
  return (
    <>
      <div className="parentAbout" >
        <div className="sectionAbout">
          <h4>About</h4>
          <div className="line"></div>
          <p>
            Hello, I'm Mohamed EL HARRAK, a 27-year-old junior full-stack
            developer currently pursuing my studies at ISTA NTIC Tangier. With a
            passion for coding and problem-solving, I am dedicated to honing my
            skills in web development to create innovative and efficient
            solutions. Explore my portfolio to see my journey and the projects
            I've crafted as I progress in the dynamic world of technology.
          </p>
        </div>
        <div className="sectionSKills">
          <h4>What i Do !</h4>
          <div className="line"></div>
          <div className="lineSkill">
            <div className="col">
              <i className="bx bx-chart"></i>
              <h4>Front-end Development</h4>
              <p>
                Expert in front-end development, I bring designs to life through
                HTML, CSS, and JavaScript. I focus on creating visually
                appealing, interactive, and user-friendly interfaces to enhance
                the overall user experience.
              </p>
              <div className="skills1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#E14E1D" rx="60" />
                    <path
                      fill="#fff"
                      d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38H48Z"
                    />
                    <path
                      fill="#EBEBEB"
                      d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128V38Zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014v-33.227Z"
                    />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#0277BD" rx="60" />
                    <path
                      fill="#EBEBEB"
                      d="m53.753 102.651l2.862 31.942h71.481v-31.942H53.753ZM128.095 38H48l2.904 31.942h77.191V38Zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164l.147-.041Z"
                    />
                    <path
                      fill="#fff"
                      d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942h39.333Z"
                    />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 32 32"
                >
                  <path fill="#f5de19" d="M2 2h28v28H2z" />
                  <path d="M20.809 23.875a2.866 2.866 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 0 1 3.742 2.107L25 18.128A1.789 1.789 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.055 5.055 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect
                      width="256"
                      height="256"
                      fill="url(#skillIconsBootstrap0)"
                      rx="60"
                    />
                    <g filter="url(#skillIconsBootstrap2)">
                      <path
                        fill="url(#skillIconsBootstrap1)"
                        d="M131.97 196.157c29.676 0 47.559-14.531 47.559-38.497c0-18.117-12.759-31.232-31.706-33.309v-.754c13.92-2.265 24.843-15.192 24.843-29.628c0-20.57-16.239-33.969-40.986-33.969H76v136.157h55.97ZM97.653 77.267h28.807c15.66 0 24.553 6.983 24.553 19.627c0 13.493-10.343 21.041-29.096 21.041H97.653V77.267Zm0 101.623v-44.819h28.613c20.494 0 31.127 7.548 31.127 22.268c0 14.719-10.343 22.551-29.87 22.551h-29.87Z"
                      />
                      <path
                        stroke="#fff"
                        stroke-width="2"
                        d="M131.97 196.157c29.676 0 47.559-14.531 47.559-38.497c0-18.117-12.759-31.232-31.706-33.309v-.754c13.92-2.265 24.843-15.192 24.843-29.628c0-20.57-16.239-33.969-40.986-33.969H76v136.157h55.97ZM97.653 77.267h28.807c15.66 0 24.553 6.983 24.553 19.627c0 13.493-10.343 21.041-29.096 21.041H97.653V77.267Zm0 101.623v-44.819h28.613c20.494 0 31.127 7.548 31.127 22.268c0 14.719-10.343 22.551-29.87 22.551h-29.87Z"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="skillIconsBootstrap0"
                        x1="0"
                        x2="256"
                        y1="0"
                        y2="256"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#9013FE" />
                        <stop offset="1" stop-color="#6B11F4" />
                      </linearGradient>
                      <linearGradient
                        id="skillIconsBootstrap1"
                        x1="85.793"
                        x2="148.541"
                        y1="68.962"
                        y2="175.084"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#F1E5FC" />
                      </linearGradient>
                      <filter
                        id="skillIconsBootstrap2"
                        width="137.529"
                        height="170.157"
                        x="59"
                        y="47"
                        color-interpolation-filters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="8" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_158_100"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_158_100"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#242938" rx="60" />
                    <path
                      fill="url(#skillIconsTailwindcssDark0)"
                      fill-rule="evenodd"
                      d="M83 110c6-24 21.001-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5C102.499 93.5 92 98 83 110Zm-45 54c6-23.999 21-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5c-12-3.001-22.5 1.499-31.5 13.5Z"
                      clip-rule="evenodd"
                    />
                    <defs>
                      <linearGradient
                        id="skillIconsTailwindcssDark0"
                        x1="86.5"
                        x2="163.5"
                        y1="74"
                        y2="185.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#32B1C1" />
                        <stop offset="1" stop-color="#14C6B7" />
                      </linearGradient>
                    </defs>
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#242938" rx="60" />
                    <path
                      fill="#00D8FF"
                      d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656c0-10.303-8.352-18.656-18.656-18.656c-10.303 0-18.656 8.353-18.656 18.656c0 10.303 8.353 18.656 18.656 18.656Z"
                    />
                    <path
                      stroke="#00D8FF"
                      stroke-width="8.911"
                      d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812h.004Z"
                      clip-rule="evenodd"
                    />
                    <path
                      stroke="#00D8FF"
                      stroke-width="8.911"
                      d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723h.004Z"
                      clip-rule="evenodd"
                    />
                    <path
                      stroke="#00D8FF"
                      stroke-width="8.911"
                      d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z"
                      clip-rule="evenodd"
                    />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#764ABC" rx="60" />
                    <path
                      fill="#fff"
                      d="M166.579 165.599c7.381-.764 12.98-7.127 12.725-14.762c-.254-7.635-6.617-13.743-14.252-13.743h-.509c-7.89.254-13.998 6.871-13.744 14.761c.255 3.818 1.782 7.126 4.072 9.417c-8.653 17.052-21.887 29.523-41.739 39.958c-13.489 7.126-27.487 9.671-41.485 7.89c-11.453-1.527-20.36-6.618-25.96-15.016c-8.144-12.471-8.907-25.96-2.036-39.449c4.836-9.672 12.471-16.798 17.307-20.361c-1.018-3.308-2.545-8.908-3.309-12.98c-36.903 26.724-33.086 62.864-21.888 79.916c8.4 12.725 25.451 20.615 44.285 20.615c5.09 0 10.18-.509 15.27-1.782c32.578-6.362 57.265-25.705 71.263-54.464Z"
                    />
                    <path
                      fill="#fff"
                      d="M211.372 134.04c-19.342-22.652-47.847-35.122-80.424-35.122h-4.072c-2.291-4.582-7.127-7.636-12.471-7.636h-.509c-7.89.255-13.998 6.872-13.744 14.762c.255 7.635 6.617 13.743 14.253 13.743h.509c5.599-.254 10.435-3.817 12.471-8.653h4.581c19.342 0 37.667 5.599 54.21 16.543c12.725 8.399 21.888 19.343 26.978 32.577c4.327 10.689 4.072 21.124-.509 30.032c-7.126 13.489-19.088 20.87-34.868 20.87c-10.18 0-19.851-3.054-24.942-5.345c-2.799 2.545-7.889 6.617-11.452 9.162c10.943 5.09 22.142 7.89 32.831 7.89c24.433 0 42.503-13.489 49.375-26.978c7.381-14.761 6.872-40.212-12.217-61.845Z"
                    />
                    <path
                      fill="#fff"
                      d="M82.082 169.926c.255 7.635 6.617 13.743 14.253 13.743h.509c7.889-.255 13.998-6.872 13.743-14.762c-.254-7.635-6.617-13.743-14.252-13.743h-.51c-.508 0-1.272 0-1.78.255c-10.436-17.307-14.762-36.141-13.235-56.501c1.018-15.27 6.108-28.505 15.016-39.45c7.38-9.416 21.633-13.997 31.304-14.252c26.978-.509 38.431 33.086 39.194 46.575c3.309.764 8.908 2.546 12.726 3.818C175.996 54.38 150.545 33 126.112 33c-22.906 0-44.03 16.543-52.429 40.976c-11.707 32.577-4.072 63.881 10.18 88.569c-1.272 1.781-2.035 4.581-1.78 7.381Z"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="col">
              <i className="bx bx-code-block"></i>
              <h4>Back-end Development</h4>
              <p>
                Proficient in back-end development, I design and implement
                server-side logic using languages like Node.js or Python. I
                excel in database management and API integration, ensuring
                seamless functionality and data flow for dynamic web
                applications.
              </p>
              <div className="skills">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 256 255"
                >
                  <defs>
                    <linearGradient
                      id="logosPython0"
                      x1="12.959%"
                      x2="79.639%"
                      y1="12.039%"
                      y2="78.201%"
                    >
                      <stop offset="0%" stop-color="#387EB8" />
                      <stop offset="100%" stop-color="#366994" />
                    </linearGradient>
                    <linearGradient
                      id="logosPython1"
                      x1="19.128%"
                      x2="90.742%"
                      y1="20.579%"
                      y2="88.429%"
                    >
                      <stop offset="0%" stop-color="#FFE052" />
                      <stop offset="100%" stop-color="#FFC331" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#logosPython0)"
                    d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072ZM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13Z"
                  />
                  <path
                    fill="url(#logosPython1)"
                    d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897Zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 256 135"
                >
                  <defs>
                    <radialGradient
                      id="logosPhp0"
                      cx=".837"
                      cy="-125.811"
                      r="363.057"
                      gradientTransform="matrix(.463 0 0 .463 76.464 81.918)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#FFF" />
                      <stop offset=".5" stop-color="#4C6B97" />
                      <stop offset="1" stop-color="#231F20" />
                    </radialGradient>
                  </defs>
                  <ellipse
                    cx="128"
                    cy="67.3"
                    fill="url(#logosPhp0)"
                    rx="128"
                    ry="67.3"
                  />
                  <ellipse
                    cx="128"
                    cy="67.3"
                    fill="#6181B6"
                    rx="123"
                    ry="62.3"
                  />
                  <path
                    fill="#FFF"
                    d="m152.9 87.5l6.1-31.4c1.4-7.1.2-12.4-3.4-15.7c-3.5-3.2-9.5-4.8-18.3-4.8h-10.6l3-15.6c.1-.6 0-1.2-.4-1.7s-.9-.7-1.5-.7h-14.6c-1 0-1.8.7-2 1.6l-6.5 33.3c-.6-3.8-2-7-4.4-9.6c-4.3-4.9-11-7.4-20.1-7.4H52.1c-1 0-1.8.7-2 1.6L37 104.7c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h14.7c1 0 1.8-.7 2-1.6l3.2-16.3h10.9c5.7 0 10.6-.6 14.3-1.8c3.9-1.3 7.4-3.4 10.5-6.3c2.5-2.3 4.6-4.9 6.2-7.7l-2.6 13.5c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h14.6c1 0 1.8-.7 2-1.6l7.2-37h10c4.3 0 5.5.8 5.9 1.2c.3.3.9 1.5.2 5.2L134.1 87c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h15c.9-.3 1.7-1 1.9-1.9zm-67.6-26c-.9 4.7-2.6 8.1-5.1 10c-2.5 1.9-6.6 2.9-12 2.9h-6.5l4.7-24.2h8.4c6.2 0 8.7 1.3 9.7 2.4c1.3 1.6 1.6 4.7.8 8.9zm130-18.6c-4.3-4.9-11-7.4-20.1-7.4h-28.3c-1 0-1.8.7-2 1.6l-13.1 67.5c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h14.7c1 0 1.8-.7 2-1.6l3.2-16.3h10.9c5.7 0 10.6-.6 14.3-1.8c3.9-1.3 7.4-3.4 10.5-6.3c2.6-2.4 4.8-5.1 6.4-8c1.6-2.9 2.8-6.1 3.5-9.6c1.7-8.7.4-15.5-3.9-20.5zM200 61.5c-.9 4.7-2.6 8.1-5.1 10c-2.5 1.9-6.6 2.9-12 2.9h-6.5l4.7-24.2h8.4c6.2 0 8.7 1.3 9.7 2.4c1.4 1.6 1.7 4.7.8 8.9z"
                  />
                  <path
                    fill="#000004"
                    d="M74.8 48.2c5.6 0 9.3 1 11.2 3.1c1.9 2.1 2.3 5.6 1.3 10.6c-1 5.2-3 9-5.9 11.2c-2.9 2.2-7.3 3.3-13.2 3.3h-8.9l5.5-28.2h10zM39 105h14.7l3.5-17.9h12.6c5.6 0 10.1-.6 13.7-1.8c3.6-1.2 6.8-3.1 9.8-5.9c2.5-2.3 4.5-4.8 6-7.5s2.6-5.7 3.2-9c1.6-8 .4-14.2-3.5-18.7s-10.1-6.7-18.6-6.7H52.1L39 105zm74.3-85.4h14.6l-3.5 17.9h13c8.2 0 13.8 1.4 16.9 4.3c3.1 2.9 4 7.5 2.8 13.9L151 87.1h-14.8l5.8-29.9c.7-3.4.4-5.7-.7-6.9c-1.1-1.2-3.6-1.9-7.3-1.9h-11.7l-7.5 38.7h-14.6l13.1-67.5zm76.2 28.6c5.6 0 9.3 1 11.2 3.1c1.9 2.1 2.3 5.6 1.3 10.6c-1 5.2-3 9-5.9 11.2c-2.9 2.2-7.3 3.3-13.2 3.3H174l5.5-28.2h10zM153.7 105h14.7l3.5-17.9h12.6c5.6 0 10.1-.6 13.7-1.8c3.6-1.2 6.8-3.1 9.8-5.9c2.5-2.3 4.5-4.8 6-7.5s2.6-5.7 3.2-9c1.6-8 .4-14.2-3.5-18.7s-10.1-6.7-18.6-6.7h-28.3L153.7 105z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 512 349"
                >
                  <path
                    fill="#00758F"
                    d="m152.31 230.297l15.56 50.487c3.496 11.463 4.954 19.465 4.37 24.026c8.51-22.792 14.456-47.63 17.839-74.513h18.71c-8.045 43.766-18.656 75.57-31.827 95.41c-10.262 15.289-21.504 22.933-33.746 22.933c-3.264 0-7.288-.986-12.063-2.944v-10.55c2.333.342 5.07.525 8.218.525c5.711 0 10.314-1.583 13.816-4.742c4.193-3.849 6.292-8.175 6.292-12.97c0-3.274-1.637-9.993-4.896-20.157l-21.68-67.505h19.406ZM33.223 199.266l28.5 86.956h.176l28.675-86.956h23.428c5.13 43.124 8.16 82.581 9.09 118.346H103.34c-.695-33.433-2.62-64.871-5.768-94.32H97.4l-30.078 94.32H52.28l-29.896-94.32h-.176c-2.218 28.282-3.614 59.72-4.196 94.32H0c1.164-42.08 4.077-81.525 8.739-118.346h24.485Z"
                  />
                  <path
                    fill="#F29111"
                    d="M352.498 197.51c30.657 0 45.986 19.586 45.986 58.739c0 21.276-4.61 37.347-13.821 48.204c-1.66 1.984-3.495 3.698-5.427 5.286l21.695 10.727l-.021-.001l-7.703 13.302l-28.253-16.485c-4.683 1.387-9.836 2.08-15.451 2.08c-15.053 0-26.297-4.387-33.731-13.15c-8.16-9.694-12.238-24.955-12.238-45.757c0-21.156 4.602-37.166 13.816-48.037c8.392-9.944 20.11-14.909 35.148-14.909Zm-93.88.172c10.957 0 20.92 2.932 29.894 8.775l-4.558 10.157c-7.679-3.264-15.25-4.903-22.716-4.903c-6.058 0-10.726 1.458-13.98 4.392c-3.272 2.908-5.296 6.65-5.296 11.212c0 7.01 4.994 13.089 14.215 18.225a816.32 816.32 0 0 1 9.031 5.011l.688.387l.345.194l.689.387l.344.194l.688.388c6.98 3.935 13.548 7.691 13.548 7.691c9.22 6.545 13.816 13.523 13.816 25.016c0 10.037-3.678 18.276-11.01 24.723c-7.337 6.418-17.194 9.636-29.538 9.636c-11.545 0-22.734-3.704-33.572-11.05l5.07-10.166c9.327 4.675 17.767 7.01 25.346 7.01c7.108 0 12.672-1.587 16.697-4.721c4.017-3.157 6.424-7.56 6.424-13.143c0-7.027-4.888-13.034-13.855-18.073a897.982 897.982 0 0 1-8.395-4.697l-.687-.389c-1.262-.713-2.533-1.435-3.778-2.142l-.675-.384c-6.055-3.444-11.29-6.453-11.29-6.453c-8.964-6.557-13.459-13.592-13.459-25.184c0-9.587 3.352-17.336 10.046-23.231c6.71-5.908 15.367-8.862 25.968-8.862Zm175.895 1.584v103.788h37.238v14.558h-56.124V199.266h18.886Zm57.93 103.833v2.46h-4.094v12.04h-3.13v-12.04h-4.253v-2.46h11.478Zm7.56 0l3.931 9.884l3.611-9.884h4.437v14.5h-2.95v-11.035l-4.11 11.035h-2.127l-4.117-11.035h-.158v11.035h-2.791v-14.5h4.275ZM350.57 212.064c-18.066 0-27.104 14.91-27.104 44.71c0 17.07 2.395 29.448 7.176 37.163c4.428 7.14 11.363 10.703 20.806 10.703c18.066 0 27.103-15.026 27.103-45.064c0-16.831-2.395-29.103-7.17-36.822c-4.433-7.124-11.365-10.69-20.81-10.69Z"
                  />
                  <path
                    fill="#00758F"
                    d="M303.218 7.333c5.993-14.726 26.948-3.574 35.08 1.57c1.993 1.287 4.279 4.006 6.564 5.011c3.565.14 7.127.419 10.698.568c6.698 1.574 12.972 2.86 18.25 5.866c24.528 14.445 40.495 29.165 55.19 53.479c3.14 5.15 4.709 10.723 7.274 16.296c3.56 8.307 7.56 17.027 11.692 24.882c1.85 3.724 3.281 7.865 5.85 11.01c1.003 1.438 3.852 1.862 5.555 2.721c4.708 2.437 10.412 4.287 14.84 7.147c8.269 5.156 16.264 11.3 23.532 17.59c2.709 2.428 4.555 5.865 7.136 8.433v1.296c-2.291.703-4.574 1.423-6.859 2c-4.991 1.282-9.412.992-14.254 2.275c-2.992.868-6.707 2.013-9.845 2.304l.29.292c1.846 5.275 11.834 9.565 16.402 12.72c5.548 4.004 10.689 8.86 14.827 14.437c1.429 1.423 2.858 2.718 4.28 4.137c.994 1.438 1.274 3.298 2.28 4.58v.434c-1.114-.393-1.915-1.143-2.674-1.927l-.453-.473c-.453-.47-.91-.932-1.431-1.313c-3.148-2.15-6.274-4.722-9.422-6.721c-5.412-3.434-11.689-5.427-17.246-8.874c-3.142-2.001-6.137-4.28-9.132-6.57c-2.715-2.007-5.705-5.861-7.411-8.721c-1.005-1.58-1.143-3.437-2.291-4.58c.205-1.909 1.954-2.476 3.719-2.942l.406-.107c.609-.158 1.205-.316 1.725-.525c7.414-3.148 16.253-4.29 27.667-4.004c-.43-2.866-7.562-6.437-9.839-8.153c-4.57-3.294-9.409-6.731-14.257-9.729c-2.569-1.57-6.996-2.716-9.842-3.999c-3.851-1.574-12.41-3.147-14.544-6.145c-3.625-4.726-6.229-10.363-8.757-16.057l-.688-1.554a803.85 803.85 0 0 0-.69-1.553c-2.988-6.857-6.7-14.006-9.695-21.027c-1.566-3.425-2.285-6.431-4-9.716c-10.407-20.158-25.81-37.035-44.485-48.904c-6.137-3.862-12.98-7.436-20.534-9.865c-4.281-1.293-9.419-.578-13.98-1.57h-3.002c-2.562-.722-4.701-3.438-6.7-4.87c-4.415-2.998-8.837-5.011-14.117-7.15c-1.85-.858-7.133-2.856-8.977-1.283c-1.142.287-1.721.718-2.002 1.864c-1.136 1.71-.137 4.286.57 5.863c2.142 4.57 5.134 7.286 7.85 11.148c2.416 3.425 5.417 7.287 7.13 11.011c3.696 8.005 5.417 16.874 8.842 24.878c1.27 3.01 3.279 6.435 5.128 9.15c1.567 2.155 4.416 3.713 5.278 6.441c1.718 2.86-2.572 12.297-3.565 15.294c-3.715 11.727-2.995 28.028 1.283 38.193l.228.536l.228.543c1.562 3.723 3.234 7.732 7.387 8.773c.286-.284 0-.135.567-.284c1.005-7.868 1.288-15.445 4-21.601c1.567-3.849 4.696-6.57 6.841-9.712c1.43.856 1.43 3.437 2.282 5.145c1.856 4.43 3.849 9.287 6.137 13.73c4.696 9.15 9.98 18.021 15.967 26.025c2.005 2.859 4.85 6.006 7.416 8.581c1.143.997 2.423 1.573 3.282 2.856h.28v.432c-4.278-1.577-6.99-6.003-10.402-8.587c-6.424-4.857-14.117-12.151-18.545-19.15c-1.852-4.018-3.854-7.869-5.85-11.867v-.289c-.853 1.142-.567 2.276-.994 4.004c-1.852 7.145-.426 15.296-6.843 17.866c-7.274 3.01-12.7-4.857-14.977-8.432c-7.276-11.866-9.269-31.884-4.138-48.043c1.14-3.577 1.295-7.867 3.285-10.723c-.43-2.582-2.42-3.288-3.571-4.87c-1.996-2.704-3.705-5.854-5.268-8.857c-3.002-5.866-5.138-12.875-7.417-19.166c-1.002-2.569-1.289-5.148-2.288-7.58c-1.704-3.712-4.845-7.436-7.268-10.72c-3.281-4.72-12.837-13.868-8.985-23.168Zm46.772 28.015c.381.382.841.716 1.317 1.045l.574.394c.765.53 1.506 1.088 1.96 1.848c.72 1.006.854 1.999 1.716 3.007c0 3.437-.996 5.722-3.007 7.146c0 0-.137.15-.278.29c-1.14-2.291-2.139-4.57-3.287-6.859c-1.414-1.998-3.413-3.583-4.565-5.866h-.277v-.287c1.721-.425 3.428-.718 5.847-.718Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4M5 20.25c0 .414.336.75.75.75H7a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H6a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75" />
                    <path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4m-1 3v6h2m-7-6a2 2 0 0 1 2 2v2a2 2 0 1 1-4 0v-2a2 2 0 0 1 2-2zm1 5l1.5 1.5" />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#023430" rx="60" />
                    <path
                      fill="#10AA50"
                      d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99.398 99.398 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"
                    />
                    <path
                      fill="#B8C4C2"
                      d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a223.446 223.446 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397Z"
                    />
                    <path
                      fill="#12924F"
                      d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a499.824 499.824 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92.425 92.425 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684Z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="lineSkill">
            <div className="col">
              <i className="bx bx-fullscreen"></i>
              <h4>Full-stack Development</h4>
              <p>
                As a full-stack developer, I possess a well-rounded skill set
                covering both front-end and back-end technologies. This allows
                me to conceptualize, design, and implement end-to-end solutions,
                providing a holistic approach to web development.
              </p>
            </div>
            <div className="col">
              <i className="bx bxs-devices"></i>
              <h4>Responsive Design</h4>
              <p>
                Specializing in responsive design, I create websites and
                applications that adapt gracefully to various screen sizes and
                devices. By employing fluid grids and flexible layouts, I ensure
                a consistent and optimal user experience across desktops,
                tablets, and smartphones.
              </p>
            </div>
          </div>
        </div>
        <div className="sectionFormations">
            <h4>Formation</h4>
            <div className="line"></div>
            <br />
            <div className="itemFormation">
                <div className="circle">
                    <i className='bx bx-bullseye'></i>
                    <div className="lineVert"></div>
                </div>
                <div className="textItem">
                    <h5>ISTA NTIC TANGIER</h5>
                    <h6>Full-Stack Developer</h6>
                    <p>2022-2024</p>
                </div>
            </div>
            <div className="itemFormation">
                <div className="circle">
                    <i className='bx bx-bullseye'></i>
                    <div className="lineVert"></div>
                </div>
                <div className="textItem">
                    <h5>FS TETOUAN</h5>
                    <h6>Fundamental license (Electronic Physics)</h6>
                    <p>2017-2020</p>
                </div>
            </div>
            <div className="itemFormation">
                <div className="circle">
                    <i className='bx bx-bullseye'></i>
                    <div className="lineVert"></div>
                </div>
                <div className="textItem">
                    <h5>Abdelkrim Khattabi High School</h5>
                    <h6>Baccalaureate(Physical Science)</h6>
                    <p>2016</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
