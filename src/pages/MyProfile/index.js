import React from 'react';
import { GlobalStyle } from '../../global.styles';
import { MainTheme } from '../../theme/MainTheme';

import ProfilePicture from '../../assets/images/image-victor.jpg'
import BackgroundImage from '../../assets/images/bg-pattern-card.svg'
import BackgroundBallomTop from '../../assets/images/bg-pattern-top.svg'
import BackgroundBallomBottom from '../../assets/images/bg-pattern-bottom.svg'



import styled from 'styled-components'

export const MyProfile = () => <>
    <GlobalStyle />
    <Content>
        <Card>
            <ProfileContent>
                <img src={ProfilePicture} alt="" />
                <NameContainer>
                    <Name>Victor Cresch</Name>
                    <Age>26</Age>
                </NameContainer>
                <Location>
                    London
                </Location>
            </ProfileContent>
            <Separator />
            <NumbersSpace>
                <NumbersDivisor>
                    <Number>
                        80K
                    </Number>
                    <CurrentNumber>
                        Followers
                    </CurrentNumber>
                </NumbersDivisor>
                <NumbersDivisor>
                    <Number>
                        803K
                    </Number>
                    <CurrentNumber>
                        Likes
                    </CurrentNumber>
                </NumbersDivisor>
                <NumbersDivisor>
                    <Number>
                        1.4K
                    </Number>
                    <CurrentNumber>
                        Photos
                    </CurrentNumber>
                </NumbersDivisor>
            </NumbersSpace>

        </Card>
    </Content>

</>

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${MainTheme.colors['cyan-color']};
    background-image: url(${BackgroundBallomTop});
    background-image: url(${BackgroundBallomBottom});

`

const Card = styled.div`
    padding: 1em;
    border-radius: 30px;
    background-color: ${MainTheme.colors['white-color']};
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: contain;
    box-shadow: 0px 4px 30px rgba(0,0,0, 0.3);
`

const ProfileContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > img {
        margin-top: 5.8em;
        border-radius: 50%;
        border: 4px solid ${MainTheme.colors['white-color']};
    }
`

const NameContainer = styled.div`
    margin-top: 1em;
    display: flex;
`

const Name = styled.p`
    font-size: 18px;
    font-weight: 700;
`

const Age = styled.p`
    font-size: 20px;
    margin-left: 1em;
    color: ${MainTheme.colors['dark-gray']}
`

const Location = styled.p`
    font-weight: 400;
    margin-top: 1em;
    color: ${MainTheme.colors['dark-gray']}
`

const Separator = styled.hr`
    width: 100%;
    margin: 2em 0;
    border-color: ${MainTheme.colors['white-color']}
`

const NumbersSpace = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const NumbersDivisor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 2em;
`


const Number = styled.p`
    font-weight: 700;
    font-size: 18px;
`

const CurrentNumber = styled.p`
    font-size: 1em;
    margin: 0.5em 0;
    color: ${MainTheme.colors['dark-gray']}
`