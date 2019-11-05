import styled from 'styled-components'

const BeeCard = styled.span`
    width: 160px;
    height: 250px;
    background-color: #fafafa;
    margin: 9px;
    border: solid #eee 1px;
    border-radius: 7px;
`

const FuckBee = styled.div`
    width: 160px;
    height: 200px;
    background-color: #ccc;
    background-image: url('/static/fuck_bee.jpg');
    background-position: center;
    background-size: cover;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
`

const Card = (props: any) => {
    return (
        <BeeCard>
            <FuckBee></FuckBee>
            Fuck Bee No.{ props.beeNo }
        </BeeCard>
    )
}

export default Card