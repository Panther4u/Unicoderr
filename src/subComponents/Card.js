import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';



const Box = styled(motion.li)`
width: 25rem;
height: 50vh;
background-color: ${props => props.theme.text};
color:${props => props.theme.body};
padding: 1.5rem 1.5rem;
margin-right: 4rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;

&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text};
border: 1px solid ${props => props.theme.text};

}
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);
font-weight: 600;
`

const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
`
const Tags = styled.div`
border-top: 2px solid ${props =>props.theme.body};
padding-top: 0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
border-top: 2px solid ${props =>props.theme.text};
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

const Link = styled.a`
background-color: ${props =>props.theme.body};
color: ${props =>props.theme.text};
text-decoration: none;
text-align: center;
padding: 0.5rem 10rem;
font-size:calc(1em + 0.5vw);
border-radius: 5px;

${Box}:hover &{
    background-color: ${props =>props.theme.text};
    color: ${props =>props.theme.body};

}
`


const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
  border-radius: 10px;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

// const Git = styled.a`
// color: inherit;
// text-decoration: none;
// ${Box}:hover &{
//     &>*{
//         fill:${props =>props.theme.text};
//     }
// }

// `

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const {id, name, description, tags, demo, github, imgSrc} = props.data;

    return (
        <Box key={id} variants={Item}>
            <Title>{name}</Title>
            {/* <Description>
                {description}
            </Description> */}
            <Image img={imgSrc} />
            <Tags>
            {
                    tags.map((t,id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </Tags>
            <Footer>
                <Link href={demo} target="_blank">
                    Visit
                </Link>
                {/* <Git  href={github}  target="_blank">
                    <Github width={30} height={30} />
                </Git> */}
            </Footer>
        </Box>
    )
}

export default Card
