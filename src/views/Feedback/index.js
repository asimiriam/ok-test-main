import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { setNextStep, setResultStep } from '../../app/components/slice';
import { tr } from '../../app/components/common/lang';
import Loader from 'react-loader-spinner';

import { submitForm } from '../../services/api';

import './feedback.scss';

export default function Step3() {
    const { password, repassword, question } = useSelector(store => store.nextStep);
    const { lang } = useSelector(store => store.lang);
    const [title, setTitle] = useState();
    const [subtitle, setSubtitle] = useState();
    const [loading, setLoading] = useState(true);
    const [icon, setIcon] = useState();


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNextStep(true));
        submitForm(password, repassword, question)
            .then(() => {
                setTitle(tr("¡Tu Password Manager ya está creado!", lang));
                setSubtitle(tr("Ya puedes acceder comenzar a usarla.", lang));
                setIcon(<i><FontAwesomeIcon className="ok-icon" icon={faCheckCircle} /></i>);
                dispatch(setResultStep(tr("Acceder >", lang)));
                setLoading(false);
            })
            .catch(() => {
                setTitle(tr("Ha habido un error", lang));
                setSubtitle(tr("No hemos podido modificar tu Contraseña Mestra. Inténtalo más tarde.", lang));
                setIcon(<i><FontAwesomeIcon className="ko-icon" icon={faTimesCircle} /></i>);
                dispatch(setResultStep(tr("Volver a Password Manager >", lang)));
                setLoading(false);
            })
    }, []);

    return (
        <React.Fragment>
            <div id="card-product-information">
                <div className="div-spinner">
                    <Loader
                        type="Oval"
                        color="#2E4053"
                        height={80}
                        width={80}
                        visible={loading}
                    />
                </div>
                <div id="title-step3">
                    {icon}{title}
                </div>
                <span>{subtitle}</span>
            </div>
        </React.Fragment>
    );
}
