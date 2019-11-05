import React,{ useState, useEffect } from 'react'
// Components
import styled from "styled-components";
import BeeCard from "../components/common/Card"
import { Button } from 'antd'

const BeeContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: center;
    border: solid #ccc 1px;
    padding: 10px;
    margin: 15px;
    border-radius: 9px;
`

const Index = () => {
    let[val, setVal] = useState(0)

    useEffect(() => {
        setVal(1)
    }, [])

    const increseVal = () => {
        let newVal: number = val+=1
        setVal(newVal)
    }

    const decreseVal = () => {
        let newVal: number = val-=1
        setVal(newVal)
    }

    const summonBees = () => {
        let beeArr: JSX.Element[] = [ ]
        for(let i = 1; i <= val; i++) {
            beeArr.push(<BeeCard beeNo={i} />)
        }
        if (beeArr.length < 1) {
            return (<>No bee to fuck.</>)
        }
        return (<>
            {
                beeArr.map(e => e)
            }
        </>)
    }

    return (
        <div>
            <div>
                Current Value is <span>{ val }</span>
            </div>
            <Button type="primary" onClick={increseVal}>Increse</Button>
            <Button type="danger" onClick={decreseVal}>Decrese</Button>
            <BeeContainer>
                { summonBees() }        
            </BeeContainer>
        </div>
    )
}
export default Index