
import instaLogo from '/public/images/instagramlogo.png';
import linkedInLogo from '/public/images/linkedinlogo.png';
import mailLogo from '/public/images/maillogo.png';

const Footer = () => {
  return (
    <div>
        <footer className= "text-center text-white pb-6">
                <div className="pt-9 flex justify-center mb-9">
                    <a href="https://instagram.com/genesis.ise" target="_blank" className="mr-9" rel="noreferrer">
                        <img src={instaLogo} loading="lazy" alt="Logo" className = "h-14 pl-7"/>
                    </a>
                    <a href="https://www.linkedin.com/company/gensis-ise-dsce/" target="_blank"
                    className="mr-9" rel="noreferrer">
                        <img src={linkedInLogo} loading="lazy" alt="Logo" className = "h-14"/>
                    </a>            
                    <a href="mailto:ise.genesis.dsce@gmail.com" target="_blank"
                    className="mr-9" rel="noreferrer">
                        <img src={mailLogo} loading="lazy" alt="Logo" className = "h-14"/>
                    </a>
                </div>
                <div className ="text-center font-semibold py-2 text-[#ffffff]">Medha: <a href="tel:7892366480">7892366480</a> | Piyush: <a href="tel:8105740466">8105740466</a></div>
                    <div></div>
                <div className ="text-center text-lg px-2 py-4 pb-5 text-[#ffffff] ">&#169; 2025 Catalysis3.0 </div>
            </footer>
            <div className="bg-[#23049c] text-center font-semibold text-white p-2">Made by team <a href="https://www.instagram.com/genesis.ise/" rel='noreferrer noopener' target="_blank" className='text-purple-300'>Genesis</a> with ❤️</div>
      
    </div>
  )
}

export default Footer
