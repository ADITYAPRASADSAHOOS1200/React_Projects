
import Tabs from './Components/Tabs/Tabs.jsx'

export default function tabTest(){


    const Tabs = [

        {
            label:'Tab1',
            content:'this is content one'
        },
        {
            label:'Tab2',
            content:'this is content Two'
        },
        {
            label:'Tab3',
            content:'this is content Three'
        },
        {
            label:'Tab4',
            content:<SomeRandom/>
        }
    
    ]

 return <Tabs tabsContent={Tabs}/>


}