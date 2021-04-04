import 'bootstrap/scss/bootstrap.scss';
import '../styles/index.scss';
import App from 'next/app';

const MyApp = ({Component,pageProps}) =>{
    return <>
             {pageProps.appData}
            <Component {...pageProps}/>
          </>
}

MyApp.getInitialProps = async(context) =>{
 const appProps = App.getInitialProps && await App.getInitialProps(context);
 return {pageProps:{appData:'Some _App data...',...appProps.pageProps}}
}
export default MyApp;