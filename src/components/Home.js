import React from "react";
import PFP from '../images/pfp.jpg';
import './Home.scss';
import './Home.css';
import Navbar from './Navbar.js';
import smoothscroll from 'smoothscroll-polyfill';
import $ from 'jquery'; 

smoothscroll.polyfill();
function Home(){
    //disappear
    // $(window).bind('scroll', function() {
    //     if ($(window).scrollTop() > 200) {
    //         $('#social').hide();
    //     }
    //     else {
    //         $('#social').show();
    //     }
    // });

    //fade out
    $(document).ready(function(){
        $(window).scroll(function(){
            $("#socials").css("opacity", 1 - $(window).scrollTop() / (500));
        });
    });

    $(document).ready(function(){
        if(document.location.hash){
            window.location = "";
        }
    });

    //type writer
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        // var delta = 200 - Math.random() * 100;
        var delta = 80;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');

        for(const element of elements){
            var toRotate = element.getAttribute('data-type');
            var period = element.getAttribute('data-period');
            if (toRotate) {
              new TxtType(element, JSON.parse(toRotate), period);
            }
        }

        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    

    return(
        <>
        <Navbar/>
        <div className="min-h-screen bg-gradient-to-b from-EnglishLavender to-PastelPink flex flex-col justify-center items-center content-center" onload = "typewrite()">
            <img alt="ProfilePicture" src={PFP} className = "PFP sm:w-56 w-40 border-2 border-white"/>
            <div className="md:text-4xl text-md text-center my-6">Nam Truong</div>
            <div href="" class="typewrite" data-period="1000" data-type='[ "B.S. in Computer Science", "Hello", "Test Text" ]'>
                <span class="wrap"></span>
            </div>
            <div id="socials" className = "socials">SOCIALS!!</div>
        </div>
        <div id="about" class="about" className="about">
           about
        </div>
        <div className="min-h-screen bg-Apricot">
            
        </div>
        </>
    );
}

export default Home;