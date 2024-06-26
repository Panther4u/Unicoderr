// import { motion } from "framer-motion";
// import React from "react";
// // import { NavLink } from 'react-router-dom'
// import styled from "styled-components";

// const Box = styled(motion.a)`
//   width: auto;
//   text-decoration: none;
//   height: 20rem;
//   padding: 1rem;
//   color: ${(props) => props.theme.text};
//   border: 2px solid ${(props) => props.theme.text};
//   backdrop-filter: blur(2px);
//   box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
//   cursor: pointer;

//   display: flex;
//   flex-direction: column;
//   z-index: 5;

//   &:hover {
//     color: ${(props) => props.theme.body};
//     background-color: ${(props) => props.theme.text};
//     transition: all 0.3s ease;
//   }
// `;

// const Image = styled.div`
//   background-image: ${(props) => `url(${props.img})`};
//   width: 100%;
//   height: 60%;
//   background-size: cover;
//   border: 1px solid transparent;
//   background-position: center center;

//   ${Box}:hover & {
//     border: 1px solid ${(props) => props.theme.body};
//   }
// `;
// const Title = styled.h3`
//   color: inherit;
//   padding: 0.5rem 0;
//   padding-top: 1rem;
//   font-family: "Karla", sans-serif;
//   font-weight: 700;
//   border-bottom: 1px solid ${(props) => props.theme.text};

//   ${Box}:hover & {
//     border-bottom: 1px solid ${(props) => props.theme.body};
//   }
// `;
// // const HashTags = styled.div`
// //   padding: 0.5rem 0;
// // `;
// const Button = styled.span`
//   padding-right: 0.5rem;
  
// `;
// // const Date = styled.span`
// //   padding: 0.5rem 0;
// // `;

// const Container = styled(motion.div)``;

// // Framer motion configuration
// const Item = {
//   hidden: {
//     scale: 0,
//   },
//   show: {
//     scale: 1,
//     transition: {
//       type: "spring",
//       duration: 0.5,
//     },
//   },
// };

// const BlogComponent = (props) => {
//   // const { name, tags, date, imgSrc, link } = props.blog;
//   const { name, tags, imgSrc, link } = props.blog;
//   return (
//     <Container variants={Item}>
//       <Box target="_blank" href={`${link}`}>
//         <Image img={imgSrc} />
//         <Title>{name}</Title>
        
//           {tags.map((t, id) => {
//             return <Button key={id}>{t}....</Button>;
//           })}

//         {/* <Date>{date}</Date> */}
//       </Box>
//     </Container>
//   );
// };

// export default BlogComponent;


// src/components/BlogComponent.js
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import styled from "styled-components";

const Box = styled(motion.div)`  // Changed from motion.a to motion.div
  width: auto;
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const Button = styled.span`
  padding-right: 0.5rem;
`;

const Container = styled(motion.div)``;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const BlogComponent = (props) => {
  const { name, tags, img, to } = props.blog;

  return (
    <Container variants={Item}>
      <Link to={to} style={{ textDecoration: "none" }}>  {/* Changed from Box to Link */}
        <Box>
          <Image img={img} />
          <Title>{name}</Title>
          {tags.map((t, id) => (
            <Button key={id}>{t}....</Button>
          ))}
        </Box>
      </Link>
    </Container>
  );
};

export default BlogComponent;
