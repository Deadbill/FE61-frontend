import Header from "./src/components/header/Header";
import App from "./src/components/App";
import Footer from "./src/components/Footer/Footer";
import showToast from 'native-toast';

;(async () => {
    const app = await App();

    const root = document.getElementById('root');
    root.append(app);

})();

const addHeader = Header();
root.before(addHeader);

const addFooter = Footer();
root.after(addFooter);

showToast({
    message: 'If you know or have seen any of these people, call 911',
    position: 'center',
    rounded: true,
    timeout: 6000,
})
