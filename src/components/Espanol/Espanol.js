import React from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import heartline_icon from "../../assets/heartline_icon.png";
import handshearts_icon from "../../assets/handshearts_icon.png";
import tomato_icon from "../../assets/tomato_icon.png";
import calendar_icon from "../../assets/calendar_icon.png";
import heart_icon from "../../assets/heart_icon.png";
import ImageSlider from "../Home/ImageSlider";
import "./Espanol.css";



function Espanol(){
    return (
        <div className="HomeContainer">



                <div className="HomeBannerContainer">
                    <div className="HomeBanner">
                        
                        <div className="WelcomeDiv">
                              
                                <h1>Bienvenido a la</h1>
                                <h1>Fairmont Community </h1>
                                <h1>Partnership Group, Inc. </h1>
                                <p className="mt4 mb1">Nos comprometemos a trabajar con nuestros residentes y vecinos</p>
                                <p className="mt0"> para la mejora continua de la comunidad de Fairmont.</p>
                        </div>

                        <div className="SlideShowDiv">
                            <ImageSlider/>
                        </div>
                    </div>
                    <div className="BlueBG"></div>
                    <div className="BlueDiv">
                    </div>

                </div>
           





            <div>
                <div className="TitleDiv">
                    <div className="fl w-third">
                        <img src={heartline_icon} alt=''/>
                    </div>

                    <div className="fl w-third">
                        <h2 className="fw3 f2 mt3 mb4 gray">¿Sabías que...?</h2>
                    </div>

                    <div className="fl w-third">
                        <img src={heartline_icon} alt=''/>
                    </div>
                </div>
                
                <div className="FactsImgContainer">
                    <div className="fl w-third">
                        <img src={handshearts_icon} alt=''/>
                    </div>
                    <div className="fl w-third">
                        <img src={tomato_icon} alt=''/>
                    </div>
                    <div className="fl w-third">
                        <img src={calendar_icon} alt=''/>
                    </div>
                </div>

                <div className="GrayDivContainer">
                    <div className="GrayDiv">
                        <div className="fl w-third pa2">
                            <h2 className="fw5 f4 mt3 mb4"> Más de X horas de voluntariado.</h2>
                            <p>Content</p>
                        </div>

                        <div className="fl w-third pa2">
                            <h2 className="fw5 f4 mt3 mb4"> Más de X plantas en el jardín comunitario.</h2>
                            <p>Content</p>
                        </div>

                        <div className="fl w-third pa2">
                            <h2 className="fw5 f4 mt3 mb4"> Se han celebrado más de X actos celebrado.</h2>
                            <p>Content</p>
                        </div>
                    </div>
                </div>

            </div>





            <div>

                <div className="TitleDiv">
                    <div className="fl w-third">
                        <img src={heartline_icon} alt=''/>
                    </div>

                    <div className="fl w-third">
                        <h2 className="fw3 f2 mt3 mb4 gray">Eventos</h2>
                    </div>

                    <div className="fl w-third">
                        <img src={heartline_icon} alt=''/>
                    </div>
                </div>
              

                <div className="textDiv">
                    <h2 className="fw4 f3 mt3 mb4 tc"> Celebramos muchos eventos, como ferias de salud y
                    sorteos de libros y comida. Visítenos regularmente para mantenerse informado.
                    </h2>
                </div>


                <div className="GrayDivContainer">
                    <div className="GrayEventDiv">
                        <div className="fl w-50">
                            <h2 className="fw5 f4 mt3 mb3"> Jueves 4 de Mayo</h2>
                            <p className="fw5">Clínica de vacunas COVID-19,</p> 
                            <p className="fw5">9AM to 12PM</p>
                            <p className="fw5">Centro Comunitario Fairmont</p>
                        </div>

                        <div className="fl w-50">
                            <h2 className="fw5 f4 mt3 mb3">Sábado 13 de Mayo</h2>
                            <p className="fw5">Día de Plantación y Limpieza Comunitaria</p>
                            <p className="fw5">Hora por determinar</p>
                            <p className="fw5">Huerto comunitario de Fairmont</p>
                        </div>
                    </div>
                </div>

            </div>
            





            <div>
                <div className="TitleDiv">
                    <div className="fl w-third">
                        <img src={heartline_icon} alt=''/>
                    </div>

                    <div className="fl w-third">
                        <h2 className="fw3 f2 mt3 mb4 gray">Galería</h2>
                    </div>

                    <div className="fl w-third">
                        <img src={heartline_icon} alt=''/>
                    </div>
                </div>



                <div className="GalleryContainer">

                    <div className="GalleryDiv">                 
                        <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/70284720_2375633102702623_2094916920493998080_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=I9wyIkgiKjQAX_7g7q6&_nc_ht=scontent-ord5-2.xx&oh=00_AfCRAg9mXErIkxnp_kgw-KlpdKe1PJ-F-T4yuv0bZzNXvQ&oe=646178FB" alt=''/>
    
                        <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/69709886_2375634036035863_973980445362356224_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=Vh3W5QSr9TgAX8prpOM&_nc_ht=scontent-ord5-2.xx&oh=00_AfA4zypgyDRH4SbWWQOiFbBNVODDEebLcxsS3oy4Q4SO_w&oe=64617A7A" alt=''/>
                                
                        <img className="span-2" src="https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/66453672_2335688866697047_9146244869579079680_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=8J8z3RhB4DkAX-G6grd&_nc_ht=scontent-ord5-2.xx&oh=00_AfA0LA0VNkmiPAxsaPLW2md6_Os_Uz1ngJrOJcb-PzN1mQ&oe=64625FD4" alt=''/>
                    
                        <img className="span-2" src="https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/70620069_2375634822702451_7514572294019088384_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=FjbQfW5WsGMAX-GHgdf&_nc_ht=scontent-ord5-2.xx&oh=00_AfCkdPF8hiKPuwglHF7A1GDRjeXYUstftRgw3jU-BwGG3Q&oe=64616007" alt=''/>                   

                        <img src="https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/66701080_2335689143363686_4863718015071420416_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=SPS2OHRfemkAX_njpfA&_nc_ht=scontent-ord5-1.xx&oh=00_AfBFUQ-ow08-798BxAApXBU9jL1PkY2_UgDZZ_y5uwhBTw&oe=6461601A" alt=''/>          
                
                        <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/66442051_2335688280030439_8363887160381669376_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=vbPvG25Tnh0AX9hu2xC&_nc_ht=scontent-ord5-2.xx&oh=00_AfCuibTacvLQgg_9o_20NdgWgQ2gRax_hULoA8m5E9Yecw&oe=64615E26" alt=''/>
                        
                    </div>

                    <div className="Heart">
                        <Link to="/gallery"><img src={heart_icon} alt=''/></Link>
                    </div>
                    <div className="HeartText">
                        <Link to="/gallery" style={{ color: "white"}}><p>Ver nuestra</p> <p>Galería</p></Link>
                    </div> 
                </div>

            </div>





            <div>
                <div className="TitleDiv">
                    <div className="fl w-third">
                        <img src={heartline_icon} alt=''/>
                    </div>

                    <div className="fl w-third">
                        <h2 className="fw3 f2 mt3 mb4 gray">Lo que Dice la gente <br></br> Quiénes somos</h2>
                    </div>

                    <div className="fl w-third">
                        <img src={heartline_icon} alt=''/>
                    </div>
                </div>

                <div className="GrayDivContainer">
                    <div className="GrayDiv">

                        <div className="ReviewDiv">
                            <div className="ReviewImg">
                                <img src="https://pescadolus.org/wp-content/uploads/2015/05/anon.jpg" alt=''/>
                            </div>

                            <div className="ReviewText">
                                <h2 className="fw4 f3 mt3 mb4">Insert Review Here From Community Members</h2>
                            </div>
                            
                        </div>
                            
                    </div>

                    <div className="LoadMore">
                        <a class="f3 grow no-underline br-pill pl3 pr3 pt1 pb2 mt4 dib white bg-red tc" href="">Más infomación</a>
                    </div>
                </div>

            </div>



        </div>
    );
}

export default Espanol; 