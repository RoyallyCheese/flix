import React from 'react'; 
import { Container, Inner , Pane , Image , SubTitle , Item , Title } from './styles/jumbotron';


export default function Jumbotron ({ children,direction= 'row', ...restProps}) {
    return (
        <Item {...restProps}>
        <Inner direction={direction} { ...restProps}>
           {children}
        </Inner>
        </Item>

    )
}

Jumbotron.Container =  function JumbotronContainer({ children , ...restProps}) {
    
    return <Container {...restProps}> {children} </Container>;
}

Jumbotron.Pane = function JumbotronPane({ children , ...restProps}) {

    return <Pane {...restProps}> {children} </Pane>;
    }

Jumbotron.Title = function JumbotronTitle({ children , ...restProps}) {

    return <Title {...restProps}> {children} </Title>;
        }

Jumbotron.SubTitle = function JumbotronSubTitle({ children , ...restProps}) {

    return <SubTitle {...restProps}> {children} </SubTitle>;

            }

Jumbotron.Image = function JumbotronImage({ children , ...restProps}) {
    
    return <Image {...restProps}></Image>;
            
                    }
Jumbotron.Item = function JumbotronItem({ children , ...restProps}) {

    return <Item {...restProps}> {children} </Item>;
                            }