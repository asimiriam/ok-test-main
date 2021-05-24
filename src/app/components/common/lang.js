export const trMessages = {
    'Acceder >': { es: 'Acceder >', en: 'Log in >' },
    'Atrás': { es: 'Atrás', en: 'Back' },
    'Cómo funciona': { es: 'Cómo funciona', en: 'How does it work' },
    'Contrasena-no-valida-caracteres': { es: 'Contraseña no válida. La contraseña debe tener entre 8 y 24 caracteres.', en: 'Invalid password. The password must be between 8 and 24 characters.' },
    'Contrasena-no-valida-mayusculas': { es: 'Contraseña no válida. La contraseña debe contener al menos un caracter numérico, una mayúscula y una minúscula.', en: 'Invalid password. The password must contain at least one numeric character, one uppercase and one lowercase.' },
    'Crea tu Contraseña Maestra': { es: 'Crea tu Contraseña Maestra', en: 'Create your Master Password' },
    'Crea tu Password Manager': { es: 'Crea tu Password Manager', en: 'Create your Password Manager' },
    'Ha habido un error': { es: 'Ha habido un error', en: 'An error has occured' },
    'info-checkbox': { es: 'Confirmo ser mayor de edad y acepto que traten mis datos según la politica de protección de datos.', en: 'I confirm that I am of legal age and I accept that my data is processed according to the data protection policy.' },
    'info-text-imag1-step1': { es: 'Guarda aquí todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaciones no protegidas.', en: 'Save here all your passwords, data or any information, forget paper notes and unprotected applications.' },
    'info-text-imag2-step1': { es: 'Crea tu clave maestra: solo tu podrás acceder a tus secretos con ella.', en: 'Create your master key: only you can access your secrets with it.' },
    'info-text1-step1': { es: 'En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdala bien.', en: 'First, you must create a different password for your electronic belongings. You will not be able to recover your password, so remember it well.' },
    'info-text2-step1': { es: 'Por ejemplo, el número de tu tarjeta, el PIN, el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en lugar seguro.', en: 'For example, the number of your card, the PIN, the PUK of your mobile phone, the serial number of one of your devices or any information that you need to have in a safe place.' },
    'info-text1-step2': { es: 'En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas.', en: 'First, you must create a different password for your electronic belongings.' },
    'info-text2-step2': { es: 'No podrás recuperar tu contraseña, así que recuérdala bien.', en: 'You will not be able to recover your password, so remember it well.' },
    'info-text3-step2': { es: 'También puedes crear una pista que te ayude a recordar tu contraseña maestra', en: 'You can also create a hint to help you remember your master password' },
    'info-text4-step2': { es: 'Crea tu pista para recordar tu contraseña (opcional)', en: 'Create your hint to remember your password (optional)' },
    'Introduce tu contraseña': { es: 'Introduce tu contraseña', en: 'Enter your password' },
    'Introduce tu pista': { es: 'Introduce tu pista', en: 'Enter your hint' },
    'Que datos puedes guardar': { es: 'Que datos puedes guardar', en: 'What data can you save' },
    'La contrasena no coincide': { es: 'La contraseña no coincide', en: 'Password does not match' },
    'No hemos podido modificar tu Contraseña Mestra. Inténtalo más tarde.': { es: 'No hemos podido modificar tu Contraseña Mestra. Inténtalo más tarde.', en: 'We have not been able to modify your Mestra Password. Try again later.' },
    'Repite tu Contraseña Maestra': { es: 'Repite tu Contraseña Maestra', en: 'Repeat your Master Password' },
    'Repite tu contraseña': { es: 'Repite tu contraseña', en: 'Repeat your password' },
    'Siguiente >': { es: 'Siguiente >', en: 'Next >' },
    'Ya puedes acceder comenzar a usarla.': { es: 'Ya puedes acceder comenzar a usarla.', en: 'You can now access and start using it.' },
    '¡Tu Password Manager ya está creado!': { es: '¡Tu Password Manager ya está creado!', en: 'Your Password Manager is already created!' },
    'Volver a Password Manager >': { es: 'Volver a Password Manager >', en: 'Back to Password Manager >' },
};

export function tr(msg, trLang) {
    return trMessages[msg][trLang];
}
