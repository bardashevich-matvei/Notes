import React, { useState } from "react";
import './Modal.scss';
import { Button } from "react-bootstrap";
import UserService from "../../services/User.service";
import { toast } from 'react-toastify';

interface ModalInterface {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = (props: ModalInterface) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    

    const createUser = async (user: any) => {
        try {
            const response = await UserService.createUser(user);
            toast.success("Success Notification", {
                position: toast.POSITION.TOP_CENTER
            });
            closeModal();
        } catch (error) {
            console.log(error)
        }
    }

    const closeModal = () => {
        setLogin('');
        setPassword('');
        props.setActive(false);
    }

    return (
        <div className={`modal + ${props.active ? 'modal__active' : ''}`} onClick={() => closeModal()}>
            <form className="modal__content" onClick={(e) => e.stopPropagation()}>         
                <input placeholder="login" value={login} onChange={(e) => setLogin(e.target.value)}/>
                <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={() => createUser({login, password})}>
                    Создать
                </Button>
            </form>
        </div>
    )
};

export default Modal;