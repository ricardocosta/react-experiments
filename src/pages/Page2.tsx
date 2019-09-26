import React from 'react'
import Page from '../components/Page'

interface Page2Props {
    name: string,
    setName: (newName: string) => void
}

const Page2 = ({name, setName} : Page2Props) => (
    <Page title="Page 2">
        <input defaultValue={name} onChange={event => setName(event.target.value)} />
    </Page>
)

export default Page2
