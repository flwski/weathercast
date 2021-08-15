import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import 'react-native-gesture-handler';

//console.disableYellowBox = true;
LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(['Warning: ...']);

import Routes from './routes';

const src = () => {

    return (
        <>
            <StatusBar barStyle="lignt-content" backgroundColor="transparent" translucent={true}/>
            <Routes />   
        </>
    );
}

export default src;