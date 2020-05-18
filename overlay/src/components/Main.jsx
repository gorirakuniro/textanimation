import React, { useEffect } from 'react'
import { Build } from '../image/buildings.jpg'
import gsap from "gsap"
import CircleType from "circletype";


const Main = () => {
    useEffect(() => {
        let tl = gsap.timeline();
        tl.from(".main__tl span", 1.8, {
            y: 100,
            ease: "power4.out",
            delay: 1,
            skewY: 7,
            stagger: {
                amount: 0.3
            }
        })
        tl.from(".main__subtl span", 1.8, {
            y: 30,
            ease: "power3.out",
            delay: 1,
            skewY: 7,
            stagger: {
                amount: 0.3
            }
        })
        tl.from(".section__text", 1.8, {
            y: 150,
            ease: "power3.out",
            delay: 1,
            skewY: 7,
            stagger: {
                amount: 0.3
            }
        })


        new CircleType(document.querySelector('.follow'));
        document.body.style.cursor = "none";
        let cursor = document.querySelector('.cursor');
        let follow = document.querySelector('.follow');
        function move(obj, event) {
            obj.style = "";
            obj.style.top = event.clientY + "px";
            obj.style.left = event.clientX + "px";
        }
        window.addEventListener("mousemove", function (event) {
            move(cursor, event);
            move(follow, event);
        });
    })
    return (
        <>
            <div className="cursor"></div>
            <div className="follow">
                THE HFA FREQUENTLY INVITES
                FILMMAKERS TO DISCUSS THEIR
                </div>
            <div className="main">
                <h2 className="main__tl">
                    <span>
                        Premium
                    </span>
                </h2>
                <p className="main__subtl">
                    <span>
                        Lorem,at is pop up Overlay
                    </span>
                </p>
                <div className="section">
                    <div className="section__image">
                        <img src={Build} alt="" />
                    </div>
                    <p className="section__text">
                        THE HFA FREQUENTLY INVITES
                        FILMMAKERS TO DISCUSS THEIR
                    </p>
                </div>
                <div className="section">
                    <div className="section__image">
                        <img src={Build} alt="" />
                    </div>
                    <p className="section__text">
                        THE HFA FREQUENTLY INVITES
                        FILMMAKERS TO DISCUSS THEIR
                        WORK AND ENGAGE WITH THE VIBRANT
                        COMMUNITY OF STUDENTS, PROFESSORS,
                        ARTISTS AND CINEPHILES WHO
                        REGULARLY ATTEND ARCHIVE
                    </p>
                </div>
                <div className="section">
                    <div className="section__image">
                        <img src={Build} alt="" />
                    </div>
                    <p className="section__text">
                        THE HFA FREQUENTLY INVITES
                        FILMMAKERS TO DISCUSS THEIR
                        WORK AND ENGAGE WITH THE VIBRANT
                        COMMUNITY OF STUDENTS, PROFESSORS,
                        ARTISTS AND CINEPHILES WHO
                        REGULARLY ATTEND ARCHIVE
                    </p>
                </div>
            </div>
        </>
    )
}

export default Main
