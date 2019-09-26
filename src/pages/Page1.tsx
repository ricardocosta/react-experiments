import React from 'react'
import Page from '../components/Page'

interface Page1Props {
    resetName: () => void
}

const Page1 = ({resetName} : Page1Props) => (
    <Page title="Page 1">
        <p>Another element</p>
        <button onClick={resetName} >Reset Name</button>
    </Page>
)

export default Page1
