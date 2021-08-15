import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import RNFetchBlob from 'rn-fetch-blob';

const Fetch = RNFetchBlob.polyfill.Fetch  
 window.fetch = new Fetch({
  auto : true,  
  binaryContentTypes : [
  'image/',
  'video/',
  'audio/',
  'foo/',
   ],
   trusty : true
  }).build()

AppRegistry.registerComponent(appName, () => App);
