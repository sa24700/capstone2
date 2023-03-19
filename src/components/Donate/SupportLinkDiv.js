import SupportLink from "./SupportLink";
import "./SupportLinkDiv.css"


const SupportLinkDiv =({linkList}) =>{

    if(linkList.length === 0){
       return <p>No results. Check back later to support us!</p>
    } else {
        return (
            <div className="SupportLinkDivStyle">
                {
                    linkList.map((link, i) =>{
                        return (
                        <SupportLink 
                            key={linkList[i].id} 
                            id={linkList[i].id} 
                            site_name={linkList[i].site_name} 
                            url={linkList[i].url} 
                            created={linkList[i].created} 
                            />
                        );
                    })
                }
            </div>
        );}
}

export default SupportLinkDiv;