import React, {FC, useState } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerIngredients: FC<{}> = () => {

    const [selectedTab, setSelectedTab] = useState<string>("bum")    

    return <>
        <Tab value="sauce" active={selectedTab === 'bum'} onClick={setSelectedTab}></Tab>
    </>
};

export default BurgerIngredients;