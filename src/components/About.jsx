import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="page-container">
                    <article className='card'>
                        <h1 className="l-heading">
                            About Our Organization
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam repellendus similique cumque possimus et, laudantium doloremque odit veniam distinctio? Laudantium eveniet quia veritatis itaque animi numquam cupiditate maiores vero repellendus natus molestiae, eius laborum harum blanditiis, aspernatur at dolores quis magnam et cum. Sit iusto, totam quod delectus porro eius.
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro est dolorum fugit, adipisci veritatis ad. Assumenda amet aperiam dignissimos, quos cum quod nobis consequatur dolorem ipsum doloribus veritatis corrupti inventore ducimus qui, similique error nesciunt molestiae. Eveniet culpa temporibus, sapiente enim magnam illo totam molestias natus dolor vel debitis at laboriosam. Nam asperiores odio veritatis iusto alias distinctio saepe sequi atque ea. Vero, at, pariatur odit doloribus quisquam consequuntur nemo aspernatur itaque qui deleniti beatae repudiandae laboriosam quos alias perspiciatis neque mollitia, dicta dolor. Molestias dicta vero laboriosam quam harum sunt deleniti magnam velit neque, nemo, exercitationem cumque numquam aliquid pariatur ab vel, iusto laborum iste iure fuga eaque! Eligendi magni ipsum est laboriosam id facere sit cum neque officiis, eum assumenda esse nisi, amet harum optio rem quo laudantium aperiam ut voluptates hic! Eveniet ut sequi illum assumenda nulla ipsam aliquid temporibus reiciendis ipsa? Perferendis sed consectetur exercitationem numquam maiores officiis ad quis, quam ea. Illum tempora quis velit maxime et impedit! Corporis animi nihil officia, recusandae perferendis voluptatem labore possimus ex sequi nemo fuga eos nostrum aperiam, dolore alias iusto dolorem tempore quidem doloribus in facilis architecto dicta consequatur voluptates! Beatae nulla maiores, nisi distinctio soluta molestiae exercitationem!
                        </p>
                    </article>
                    <aside className="card bg-primary">
                        <h2>Join Our Society</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, voluptatum.
                        </p>
                        <NavLink className='btn btn-dark btn-block'>Join Now</NavLink>
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default About;
