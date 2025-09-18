import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <h1 className="Servh" data-aos="fade-up">Shop Bags By Categories</h1>
      <article className="servicesarticle" data-aos="fade-up">
        <div className="servicediv">
          <section className="servicesections" data-aos="zoom-out">
            <img src="https://miraggiolife.com/cdn/shop/files/denice-20-tote-bag-367476.jpg?v=1750597829&width=700" alt="" />
            <h2>Office Bags</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, at.</p>
          </section>
          <section className="servicesections" data-aos="zoom-out">
            <img src="https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2>Office Bags</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, at.</p>
          </section>
          <section className="servicesections" data-aos="zoom-out">
            <img src="https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVucyUyMGJhZ3N8ZW58MHx8MHx8fDA%3D" alt="" />
            <h2>Office Bags</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, at.</p>
          </section>
          <section className="servicesections" data-aos="zoom-in">
            <img src="https://images.unsplash.com/photo-1654707633360-1e2bbf09a406?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVucyUyMGJhZ3N8ZW58MHx8MHx8fDA%3D" alt="" />
            <h2>Office Bags</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, at.</p>
          </section>
          <section className="servicesections" data-aos="zoom-in">
            <img src="https://images.unsplash.com/photo-1654707635149-2c7af90afecd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVucyUyMGJhZ3N8ZW58MHx8MHx8fDA%3D" alt="" />
            <h2>Office Bags</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, at.</p>
          </section>
          <section className="servicesections" data-aos="zoom-in">
            <img src="https://images.unsplash.com/photo-1710338622717-ef865d14a66e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW5zJTIwYmFnc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <h2>Office Bags</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, at.</p>
          </section>
         
        
        </div>
      </article>
    </>
  );
};

export default Services;
