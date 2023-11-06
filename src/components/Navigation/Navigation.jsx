import {
    NavContainer,
    HeadContainer,
    SubHeadContainer,
    HolderContainer
} from "./Navigation.styled"
import { FaTimes, FaUser, FaComment, FaRegSun } from 'react-icons/fa'
import { useContext } from 'react'
import { QuestionsContext } from "../../Assets/context"

const NavigationComponent = () => {
    const { isOpen, setIsOpen } = useContext(QuestionsContext)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <NavContainer>
            <FaTimes
                onClick={toggle}
                style={{
                    fontSize: "25px",
                    padding: "10px",
                    float: "right"
                }} />
            <HeadContainer>most viewed</HeadContainer>
            <SubHeadContainer>history</SubHeadContainer>

            <HeadContainer>Home</HeadContainer>
            <SubHeadContainer>Mathematics</SubHeadContainer>
            <SubHeadContainer>Current Affairs</SubHeadContainer>
            <SubHeadContainer>English Language</SubHeadContainer>
            <SubHeadContainer>Biology</SubHeadContainer>
            <SubHeadContainer>Others</SubHeadContainer>


            <HeadContainer>Hot Topics</HeadContainer>
            <SubHeadContainer>Mathematics</SubHeadContainer>
            <SubHeadContainer>Current Affairs</SubHeadContainer>
            <SubHeadContainer>English Language</SubHeadContainer>
            <SubHeadContainer>Computer study</SubHeadContainer>

            <HolderContainer>
                <SubHeadContainer> <FaUser style={{
                    paddingRight: "10px"
                }} /> Sign in</SubHeadContainer>
                <SubHeadContainer><FaRegSun style={{
                    paddingRight: "10px"
                }} />Preferences</SubHeadContainer>
                <SubHeadContainer><FaComment style={{
                    paddingRight: "10px"
                }} />Feedback</SubHeadContainer>
            </HolderContainer>
        </NavContainer>
    )
}
export { NavigationComponent }