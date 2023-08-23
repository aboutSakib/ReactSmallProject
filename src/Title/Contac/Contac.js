// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { useForm } from "react-hook-form";
// import "../../App.css";
// import ninja from "../../Images/image/ninja.jpg";
// import "./Contac.css";

// function Contac() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   let onSubmit = (data) => console.log(data);

//   return (
//     <Container>
//       <Row>
//         <Col md={12} sm={12}>
//           <h3 className="text-center mt-5">What We Use</h3>
//         </Col>
//         <Col md={6} sm={12} className="mt-5">
//           <img src={ninja} alt="not found" />
//         </Col>
//         <Col md={6} sm={12} className="  mt-5">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <label for="name">
//               Your Name
//               <span className="err">
//                 {errors.name && "this Filed is Required"}
//               </span>
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Your Name "
//               {...register("name", { required: true })}
//             />
//             <br></br> <br></br>
//             <label for="email">Your Email</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Your Email"
//             /> <br></br> <br></br>
//             <label for="name">Your phone Number</label>
//             <input
//               type="text"
//               id="phone"
//               placeholder="your phone number"
//             />{" "}
//             <br></br> <br></br>
//             <label for="msg">Your Message</label>
//             <textarea id="msg" cols="30" rows="10"></textarea>
//             <Col md={12} sm={12}>
//               <button class="float-end btn" type="submit">
//                 Send Message
//               </button>
//             </Col>
//           </form>
//         </Col>
//         <footer md={12} lg={12} sm={12} className=" mt-5 text-center">
//           all &#169; Copyright Recieve By NINJA
//         </footer>
//       </Row>
//     </Container>
//   );
// }

// export default Contac;
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../../App.css";
import ninja from "../../Images/image/ninja.jpg";
import "./Contac.css";

function Contac() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // This will log the form data when submitted
  };

  return (
    <Container>
      <Row>
        <Col md={12} sm={12}>
          <h3 className="text-center mt-5">What We Use</h3>
        </Col>
        <Col md={6} sm={12} className="mt-5">
          <img src={ninja} alt="not found" />
        </Col>
        <Col md={6} sm={12} className="  mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="err">This field is Required</span>}
            <br />
            <br />
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              id="email"
              placeholder="Your Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="err">This field is Required</span>
            )}
            <br />
            <br />
            <label htmlFor="phone">Your phone Number</label>
            <input
              type="text"
              id="phone"
              placeholder="Your phone number"
              {...register("phone", {
                required: true,
                minLength: 11,
                maxLength: 11,
              })}
            />
            {errors.phone && <span className="err">please Enter 11 Digit</span>}
            <br />
            <br />
            <label htmlFor="msg">
              Your Message{" "}
              {errors.name && (
                <span className="err">This field is Required</span>
              )}
            </label>
            <textarea
              id="msg"
              cols="30"
              rows="10"
              {...register("message", { required: true })}
            />
            <Col md={12} sm={12}>
              <button className="float-end btn" type="submit">
                Send Message
              </button>
            </Col>
          </form>
        </Col>
        <footer md={12} lg={12} sm={12} className=" mt-5 text-center">
          All &#169; Copyright Received By NINJA
        </footer>
      </Row>
    </Container>
  );
}

export default Contac;
