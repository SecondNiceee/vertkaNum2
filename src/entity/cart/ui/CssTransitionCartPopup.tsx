import { useRef, type FC, type SetStateAction } from 'react';
import { CSSTransition } from 'react-transition-group';
import type { TCardOrders } from '../../../types/common/TCartOrders.type';
import { CartPopup } from './CartPopup';

interface ICssTransitionCartPopup{
    setCartPopupOpened : React.Dispatch<SetStateAction<boolean>>,
    isCartPopupOpened : boolean,
    cartOrders : TCardOrders[],
    addToOrder : (order : TCardOrders) => void,
    deleteFromOrder : (dispalyName : string) => void
}
const CssTransitionCartPopup:FC<ICssTransitionCartPopup> = ({isCartPopupOpened, addToOrder, deleteFromOrder, setCartPopupOpened, cartOrders }) => {
    const popupRef = useRef(null); // для правильной работы CssTransition нам нужна его ссылка
    return (
        <CSSTransition in = {isCartPopupOpened} nodeRef={popupRef} timeout={{enter : 0, exit : 0}} classNames={""} unmountOnExit mountOnEnter >
            <CartPopup setCartPopupOpened = {setCartPopupOpened} addToOrder={addToOrder} deleteFromOrder={deleteFromOrder} ref = {popupRef} cartOrders={cartOrders} />
        </CSSTransition>

    );
};

export default CssTransitionCartPopup;