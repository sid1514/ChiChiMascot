import { Icon } from "semantic-ui-react";
import './Custom.css'
const FooterCont=()=>{
    return(<>
    <section className="flex bg-purple-600 mb-10 pt-4 pl-4 mt-4">
        <div>
            <img src="chichi.ico" alt="icon" className="h-5/2 w-5/2 "/>
           
        </div>
        <div className="text-white pt-6 w-1/3 pl-4">
           
            <p className="textSize"> <Icon name="map marker alternate" color="white"/>6th Floor, Garuda Mall, Magrath Rd,
                Ashok Nagar, Bengaluru, 
                Karnataka 560025</p>
            <p className="textSize">
                <Icon name="envelope" />Email: enquiry@skyjumper.com
            </p>
            <p className="textSize"> <Icon name="phone" className="rotate-90"/>+91-888 2288 001</p>
        </div>
        <div className="pl-20 pr-5">
            <h3 className="text-white textSize">Connect us</h3>
            
                <Icon name="facebook"  color="white" size="large"/>
                <Icon name="instagram" color="white" size="large"/>
                <Icon name="youtube" color="white" size="large"/>
            
        </div>
    </section>
    </>)
}

export default FooterCont;