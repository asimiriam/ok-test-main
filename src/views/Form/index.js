import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { setNextStep, setPassword } from '../../app/components/slice';
import { tr } from '../../app/components/common/lang';

import './form.scss';

export default function Step2() {
    const [passwordValue, setPasswordValue] = useState(useSelector(store => store.nextStep.password));
    const [repasswordValue, setRepasswordValue] = useState(useSelector(store => store.nextStep.repassword));
    const [questionValue, setQuestionValue] = useState(useSelector(store => store.nextStep.question));
    const [passwordShow, setPasswordShow] = useState(false);
    const [repasswordShow, setRepasswordShow] = useState(false);
    const [errorPassword, setErrorPassword] = useState(null);
    const [errorRepassword, setErrorRepassword] = useState(null);
    const { lang } = useSelector(store => store.lang);

    const dispatch = useDispatch();

    useEffect(() => {
        changeNextStep();
    }, [passwordValue, repasswordValue, questionValue]);

    const togglePasswordShow = () => {
        setPasswordShow(!passwordShow);
    };

    const toggleRepasswordShow = () => {
        setRepasswordShow(!repasswordShow);
    };

    const onChangeRepassword = (event) => {
        const { value } = event.currentTarget;
        const error2 = value !== passwordValue ? tr("La contrasena no coincide", lang) : null;
        setRepasswordValue(value);
        setErrorRepassword(error2);
    }

    const onChangePassword = (event) => {
        const { value } = event.currentTarget;
        const regex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
        setPasswordValue(value);
        if (value.length < 8 || value.length > 24) {
            setErrorPassword(tr("Contrasena-no-valida-caracteres", lang));
        } else if (!regex.test(value)) {
            setErrorPassword(tr("Contrasena-no-valida-mayusculas", lang));
        } else {
            if (repasswordValue && (repasswordValue !== value)) {
                setErrorRepassword(tr("La contrasena no coincide", lang));
            } else {
                setErrorRepassword(null);
            }
            setErrorPassword(null);
        }
    };

    const changeNextStep = () => {
        const disabledNext = passwordValue !== null && repasswordValue !== null && errorPassword === null && errorRepassword === null;
        dispatch(setNextStep(disabledNext));
        if (disabledNext) {
            dispatch(setPassword({ password: passwordValue, repassword: repasswordValue, question: questionValue }));
        }
    }

    const onChangeTrack = (event) => {
        const { value } = event.currentTarget;
        setQuestionValue(value);
    };

    return (
        <React.Fragment>
            <div id="card-product-information">
                <div id="title-step2">
                    {tr("Crea tu Password Manager", lang)}
                    <div id="blue-line"></div>
                </div>
                <div className="info-text-step2">
                    <div>
                        {tr("info-text1-step2", lang)}
                        <br />
                        {tr("info-text2-step2", lang)}
                    </div>
                    <div className="info-text-step2-50">
                        <div className="info-text-input">{tr("Crea tu Contraseña Maestra", lang)}</div>
                        <input
                            type={passwordShow ? "text" : "password"}
                            name="password"
                            value={passwordValue}
                            onChange={onChangePassword}
                            placeholder={tr("Introduce tu contraseña", lang)}
                            maxLength="24"
                            required
                        />
                        <i onClick={togglePasswordShow}>
                            <FontAwesomeIcon
                                className={passwordShow ? "eye-icon color-light" : "eye-icon"}
                                icon={faEye}
                            />
                        </i>
                        <div className="div-error-password">{errorPassword}</div>
                    </div>
                    <div className="info-text-step2-50">
                        <div className="info-text-input">{tr("Repite tu Contraseña Maestra", lang)}</div>
                        <input
                            type={repasswordShow ? "text" : "password"}
                            name="repassword"
                            value={repasswordValue}
                            onChange={onChangeRepassword}
                            placeholder={tr("Repite tu contraseña", lang)}
                            maxLength="24"
                            required
                        />
                        <i onClick={toggleRepasswordShow}>
                            <FontAwesomeIcon
                                className={repasswordShow ? "eye-icon color-light" : "eye-icon"}
                                icon={faEye}
                            />
                        </i>
                        <div className="div-error-password">{errorRepassword}</div>
                    </div>
                </div>
                <div className="info-text-step2">
                    <span>{tr("info-text3-step2", lang)}</span>
                    <div className="info-textarea">
                        {tr("info-text4-step2", lang)}
                        <i><FontAwesomeIcon className="info-icon" icon={faInfoCircle} /></i>
                    </div>
                    <textarea
                        id="textarea"
                        value={questionValue}
                        onChange={onChangeTrack}
                        placeholder={tr("Introduce tu pista", lang)}
                        maxLength="255"
                    />
                    <div id="textarea-chars">{questionValue ? questionValue.length : '0'} / 255</div>
                </div>
            </div>
        </React.Fragment>
    );
}
