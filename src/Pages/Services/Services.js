import React from "react";
import Service from "./Service";
import chat from "./../../assets/Banner/132661-chat-animation.json";
import peer from "./../../assets/Banner/114925-videocall.json";
import social from "./../../assets/Banner/75846-social-media-interaction.json";
import ecom from "./../../assets/Banner/87507-cart-items-added.json";
import geo from "./../../assets/Banner/69149-adress.json";
import chess from "./../../assets/Banner/97384-chess-color.json";

const Services = () => {
   const services = [
        {
        id: 1,
        serviceName: "Chess AI",
        animation: chess,
        about: "A fairly smart chess AI using minimax algorithm and the alpha-beta pruning algorithm"
        },
        {
        id: 2,
        serviceName: "PeerChat",
        animation: peer,
        about: "Video chat app using webRTC"
        },
        {
        id: 3,
        serviceName: "Social Web",
        animation: social,
        about: "A Social media web app where user can share posts, chat etc."
        },
        {
        id: 4,
        serviceName: "E-commerce",
        animation: ecom,
        about: "Online store where user can buy stuff online"
        },
        {
        id: 5,
        serviceName: "Location guesser",
        animation: geo,
        about: "A web-based game that challenges players to guess their location based on a 360-degree panoramic street view image"
        },
        {
        id: 6,
        serviceName: "Anon chat",
        animation: chat,
        about: "A decentalized chat app using GUN (Graph Utility Network)"
        }
    ]
    return(
        <div>
        <h1 className="text-lg lg:text-3xl font-bold text-secondary text-center py-10">
            My Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1 py-10">
            {services.map((service, i) => <Service key={i} service={service}></Service>)

            }
        </div>
        </div>
    );
};

export default Services;