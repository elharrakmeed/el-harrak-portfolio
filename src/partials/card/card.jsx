import './card.css';

export default function Card(){


    const handleDownload = () => {
        const pdfFilePath = "./assets/Technicien-Spécialisé.pdf";
        const link = document.createElement("a");
        link.href = pdfFilePath;
        link.download = "Technicien-Spécialisé.pdf";
        link.click();
      };


    return(
        <>
        <div className="cardParentNotFlex">

            <div className="parentCard">
                <div className="profileSection">
                    <center>
                    <img src="./assets/harrak-profile.jpg" alt="Profile" />
                    <h4>Mohamed EL HARRAK</h4>
                    <p>Full-stack developer</p>
                    </center>
                    <ul className='listSocialMedia'>
                        <li>
                            <a href="https://github.com/elharrakmeed">
                                <i className='bx bxl-github'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/mohamed-el-harrak-15921b2b9/">
                                <i className='bx bxl-linkedin'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/mohamed.harrak280?mibextid=ZbWKwL">
                                <i className='bx bxl-facebook-circle'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/re__da_9/">
                                <i className='bx bxl-instagram' ></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="sectionInfoContact">
                    <ul className="listContact">
                        <li>
                            <div className="itemContact">
                                <div className="icon">
                                    <i className='bx bx-mobile-alt' ></i>
                                </div>
                                <div className="details">
                                    <p>Phone</p>
                                    <h6>+212-680961469</h6>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="itemContact">
                                <div className="icon">
                                    <i className='bx bx-mail-send' ></i>
                                </div>
                                <div className="details">
                                    <p>Email</p>
                                    <h6>Mohamed.elharrak4@etu.uae.ac.ma</h6>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="itemContact">
                                <div className="icon">
                                    <i className='bx bx-mail-send' ></i>
                                </div>
                                <div className="details">
                                    <p>Location</p>
                                    <h6>Tangier, Morocco</h6>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="itemContact">
                                <div className="icon">
                                    <i className='bx bx-calendar' ></i>
                                </div>
                                <div className="details">
                                    <p>Birthday</p>
                                    <h6>12 july 1996</h6>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="sectionCV">
                    <div className="parentDownloadCV">
                        <button onClick={handleDownload}>
                            <i className='bx bx-download'></i> Download CV
                        </button>
                    </div>
                </div>
                                    </div>
            </div>
        </>
    )
}