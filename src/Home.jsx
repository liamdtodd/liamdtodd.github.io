import { css } from "@emotion/react"

export default function Home() {
    const divStyles = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1, p {
            color: white;
        }
    `

    return (
        <div css={divStyles}>
            <h1>In Development!</h1>
            <p>Come Back Soon!</p>
        </div>
    )
}